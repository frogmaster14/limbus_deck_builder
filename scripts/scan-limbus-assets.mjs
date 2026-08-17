import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  CARD_SETS,
  EGO_UNIQUE_CARD_SETS,
  EXTRA_EGO_CARD_SETS,
  UNIQUE_CARD_TYPES,
  UPGRADE_CARD_SETS
} from "../data/limbus-data.js";
import {
  getBaseCardCode,
  getBaseCardId,
  getBaseUniqueCardCode,
  getBaseUniqueCardId,
  getEgoCardCode,
  getEgoCardId,
  getEgoUniqueCardCode,
  getEgoUniqueCardId,
  getIdentityCardCode,
  getIdentityCardId,
  getIdentityCode,
  getIdentityId,
  getIdentityNumber,
  getIdentityUniqueCardCode,
  getIdentityUniqueCardId,
  getIdentityUpgradeCardCode,
  getIdentityUpgradeCardId,
  SINNER_NUMBERS
} from "../data/limbus-data-utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const defaultProjectRoot = path.resolve(__dirname, "..");
const imageExtensionPattern = /\.png$/i;
const numberedImagePattern = /^(\d+)\.png$/i;
const ignoredSinnerEntries = new Set(["icon.png", "base", "ego"]);

function parseArgs(argv) {
  const result = {
    projectRoot: defaultProjectRoot,
    json: false,
    limit: 80
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--json") {
      result.json = true;
      continue;
    }

    if (arg === "--limit") {
      const next = argv[index + 1];
      const limit = Number(next);
      if (Number.isInteger(limit) && limit >= 0) {
        result.limit = limit;
        index += 1;
      }
      continue;
    }

    if (arg === "--root") {
      const next = argv[index + 1];
      if (next) {
        result.projectRoot = path.resolve(next);
        index += 1;
      }
      continue;
    }

    if (!arg.startsWith("--")) {
      result.projectRoot = path.resolve(arg);
    }
  }

  return result;
}

function exists(filePath) {
  return fs.existsSync(filePath);
}

function readDirNames(dirPath, options = {}) {
  if (!exists(dirPath)) return [];
  return fs.readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => (options.files ? entry.isFile() : entry.isDirectory()))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
}

function readPngFiles(dirPath) {
  return readDirNames(dirPath, { files: true }).filter((name) => imageExtensionPattern.test(name));
}

function getNumberedPngNumbers(dirPath) {
  return readPngFiles(dirPath)
    .map((name) => numberedImagePattern.exec(name)?.[1])
    .filter(Boolean)
    .map((value) => Number(value))
    .filter((value) => Number.isInteger(value))
    .sort((a, b) => a - b);
}

function getNumberedCount(dirPath) {
  const numbers = getNumberedPngNumbers(dirPath);
  return numbers.length ? Math.max(...numbers) : 0;
}

function makeIssue(code, message, detail = {}) {
  return { code, message, ...detail };
}

function getEgoKeyFromImageNumber(imageNumber) {
  return imageNumber === "00" ? "base" : `e${imageNumber}`;
}

function compareCount(issues, {
  kind,
  id,
  code,
  expected,
  actual,
  path: assetPath,
  extraMessage = "데이터보다 이미지가 많음.",
  missingMessage = "데이터보다 이미지가 적음."
}) {
  if (actual > expected) {
    issues.push(makeIssue("asset-extra", `${kind} ${id}: ${extraMessage}`, {
      kind,
      id,
      stableCode: code,
      expected,
      actual,
      path: assetPath,
      delta: actual - expected
    }));
  }

  if (actual < expected) {
    issues.push(makeIssue("asset-missing", `${kind} ${id}: ${missingMessage}`, {
      kind,
      id,
      stableCode: code,
      expected,
      actual,
      path: assetPath,
      delta: expected - actual
    }));
  }
}

function scanBaseCards({ projectRoot, sinnerId, baseCount, baseUniqueCount, issues }) {
  const baseDir = path.join(projectRoot, "assets", "sinners", sinnerId, "base");
  const actualBaseCount = getNumberedCount(baseDir);
  compareCount(issues, {
    kind: "base-card",
    id: sinnerId,
    code: getBaseCardCode(sinnerId, Math.max(baseCount + 1, 1)),
    expected: baseCount,
    actual: actualBaseCount,
    path: path.relative(projectRoot, baseDir)
  });

  for (let number = baseCount + 1; number <= actualBaseCount; number += 1) {
    issues.push(makeIssue("candidate-card", `신규 기본 카드 후보: ${getBaseCardId(sinnerId, number)}`, {
      kind: "base-card",
      id: getBaseCardId(sinnerId, number),
      stableCode: getBaseCardCode(sinnerId, number),
      suggestedData: `${sinnerId}: 기본카드수 ${baseCount} -> ${actualBaseCount}`
    }));
  }

  const uniqueDir = path.join(baseDir, "unique");
  const actualBaseUniqueCount = readPngFiles(uniqueDir).length;
  compareCount(issues, {
    kind: "base-unique",
    id: sinnerId,
    code: getBaseUniqueCardCode(sinnerId, Math.max(baseUniqueCount + 1, 1)),
    expected: baseUniqueCount,
    actual: actualBaseUniqueCount,
    path: path.relative(projectRoot, uniqueDir)
  });

  for (let number = baseUniqueCount + 1; number <= actualBaseUniqueCount; number += 1) {
    const id = getBaseUniqueCardId(sinnerId, number);
    issues.push(makeIssue("candidate-card", `신규 기본 고유 카드 후보: ${id}`, {
      kind: "base-unique",
      id,
      stableCode: getBaseUniqueCardCode(sinnerId, number),
      suggestedData: `${sinnerId}: 기본고유추가카드수 ${baseUniqueCount} -> ${actualBaseUniqueCount}`
    }));
  }
}

function scanEgoCards({ projectRoot, sinnerId, issues }) {
  const egoDir = path.join(projectRoot, "assets", "sinners", sinnerId, "ego");
  const egoNumbers = getNumberedPngNumbers(egoDir);
  const extraEgos = EXTRA_EGO_CARD_SETS[sinnerId] || [];
  const expectedEgoCount = 1 + extraEgos.length;
  const actualEgoCount = egoNumbers.filter((number) => number >= 0).length;

  compareCount(issues, {
    kind: "ego",
    id: sinnerId,
    code: getEgoCardCode(sinnerId, "base"),
    expected: expectedEgoCount,
    actual: actualEgoCount,
    path: path.relative(projectRoot, egoDir),
    extraMessage: "EXTRA_EGO_CARD_SETS보다 EGO 이미지가 많음.",
    missingMessage: "EXTRA_EGO_CARD_SETS보다 EGO 이미지가 적음."
  });

  for (let index = expectedEgoCount; index < actualEgoCount; index += 1) {
    const imageNumber = String(index).padStart(2, "0");
    const egoKey = getEgoKeyFromImageNumber(imageNumber);
    issues.push(makeIssue("candidate-ego", `신규 EGO 후보: ${sinnerId}/ego/${imageNumber}.png`, {
      kind: "ego",
      id: getEgoCardId(sinnerId, egoKey),
      stableCode: `${SINNER_NUMBERS[sinnerId]}-E-${index + 1}`,
      path: path.relative(projectRoot, path.join(egoDir, `${imageNumber}.png`)),
      suggestedData: `EXTRA_EGO_CARD_SETS.${sinnerId}: "${egoKey}" 추가`
    }));
  }

  const egoUniqueFiles = readPngFiles(egoDir)
    .map((name) => /^([a-z0-9_]+)_unique_(\d+)\.png$/i.exec(name))
    .filter(Boolean);
  const actualByEgoKey = new Map();
  egoUniqueFiles.forEach((match) => {
    const egoKey = match[1];
    const number = Number(match[2]);
    actualByEgoKey.set(egoKey, Math.max(actualByEgoKey.get(egoKey) || 0, number));
  });

  const knownEgoKeys = new Set(["base", ...extraEgos]);
  actualByEgoKey.forEach((actualCount, egoKey) => {
    if (!knownEgoKeys.has(egoKey)) {
      issues.push(makeIssue("unknown-ego-unique-key", `알 수 없는 EGO 고유 카드 키: ${sinnerId}/${egoKey}`, {
        kind: "ego-unique",
        id: `${sinnerId}_${egoKey}_ego_unique`,
        actual: actualCount,
        path: path.relative(projectRoot, egoDir)
      }));
      return;
    }

    const expectedCount = EGO_UNIQUE_CARD_SETS[sinnerId]?.[egoKey] || 0;
    compareCount(issues, {
      kind: "ego-unique",
      id: getEgoCardId(sinnerId, egoKey),
      code: getEgoUniqueCardCode(sinnerId, egoKey, Math.max(expectedCount + 1, 1)),
      expected: expectedCount,
      actual: actualCount,
      path: path.relative(projectRoot, egoDir)
    });

    for (let number = expectedCount + 1; number <= actualCount; number += 1) {
      const id = getEgoUniqueCardId(sinnerId, egoKey, number);
      issues.push(makeIssue("candidate-card", `신규 EGO 고유 카드 후보: ${id}`, {
        kind: "ego-unique",
        id,
        stableCode: getEgoUniqueCardCode(sinnerId, egoKey, number),
        suggestedData: `EGO_UNIQUE_CARD_SETS.${sinnerId}.${egoKey}: ${expectedCount} -> ${actualCount}`
      }));
    }
  });
}

function scanIdentityFolder({ projectRoot, sinnerId, identityKey, cardCount, uniqueCount, issues }) {
  const identityId = getIdentityId(sinnerId, identityKey);
  const identityDir = path.join(projectRoot, "assets", "sinners", sinnerId, identityKey);

  if (!exists(path.join(identityDir, "identity.png"))) {
    issues.push(makeIssue("missing-identity-image", `인격 이미지 없음: ${identityId}`, {
      kind: "identity",
      id: identityId,
      stableCode: getIdentityCode(sinnerId, identityKey),
      path: path.relative(projectRoot, path.join(identityDir, "identity.png"))
    }));
  }

  const actualCardCount = getNumberedCount(identityDir);
  compareCount(issues, {
    kind: "identity-card",
    id: identityId,
    code: getIdentityCardCode(sinnerId, identityKey, Math.max(cardCount + 1, 1)),
    expected: cardCount,
    actual: actualCardCount,
    path: path.relative(projectRoot, identityDir)
  });

  for (let number = cardCount + 1; number <= actualCardCount; number += 1) {
    const id = getIdentityCardId(sinnerId, identityKey, number);
    issues.push(makeIssue("candidate-card", `신규 인격 카드 후보: ${id}`, {
      kind: "identity-card",
      id,
      stableCode: getIdentityCardCode(sinnerId, identityKey, number),
      suggestedData: `${identityId}: 인격카드수 ${cardCount} -> ${actualCardCount}`
    }));
  }

  const uniqueDir = path.join(identityDir, "unique");
  const actualUniqueCount = getNumberedCount(uniqueDir);
  compareCount(issues, {
    kind: "identity-unique",
    id: identityId,
    code: getIdentityUniqueCardCode(sinnerId, identityKey, Math.max(uniqueCount + 1, 1)),
    expected: uniqueCount,
    actual: actualUniqueCount,
    path: path.relative(projectRoot, uniqueDir)
  });

  for (let number = uniqueCount + 1; number <= actualUniqueCount; number += 1) {
    const id = getIdentityUniqueCardId(sinnerId, identityKey, number);
    issues.push(makeIssue("candidate-card", `신규 인격 고유 카드 후보: ${id}`, {
      kind: "identity-unique",
      id,
      stableCode: getIdentityUniqueCardCode(sinnerId, identityKey, number),
      suggestedData: `${identityId}: 인격고유추가카드수 ${uniqueCount} -> ${actualUniqueCount}`
    }));
  }

  const upgradeDir = path.join(uniqueDir, "upgrade");
  const actualUpgradeCount = getNumberedCount(upgradeDir);
  const expectedUpgradeCount = UPGRADE_CARD_SETS[identityId] || 0;
  compareCount(issues, {
    kind: "identity-upgrade",
    id: identityId,
    code: getIdentityUpgradeCardCode(sinnerId, identityKey, Math.max(expectedUpgradeCount + 1, 1)),
    expected: expectedUpgradeCount,
    actual: actualUpgradeCount,
    path: path.relative(projectRoot, upgradeDir)
  });

  for (let number = expectedUpgradeCount + 1; number <= actualUpgradeCount; number += 1) {
    const id = getIdentityUpgradeCardId(sinnerId, identityKey, number);
    issues.push(makeIssue("candidate-upgrade", `신규 강화 카드 후보: ${id}`, {
      kind: "identity-upgrade",
      id,
      stableCode: getIdentityUpgradeCardCode(sinnerId, identityKey, number),
      suggestedData: `UPGRADE_CARD_SETS.${identityId}: ${expectedUpgradeCount} -> ${actualUpgradeCount}`
    }));
  }
}

function scanUnknownIdentityFolders({ projectRoot, sinnerId, knownIdentityKeys, issues }) {
  const sinnerDir = path.join(projectRoot, "assets", "sinners", sinnerId);
  const folders = readDirNames(sinnerDir)
    .filter((name) => !ignoredSinnerEntries.has(name))
    .filter((name) => !knownIdentityKeys.includes(name));

  folders.forEach((identityKey, index) => {
    const identityDir = path.join(sinnerDir, identityKey);
    const hasIdentityImage = exists(path.join(identityDir, "identity.png"));
    const cardCount = getNumberedCount(identityDir);
    const uniqueCount = getNumberedCount(path.join(identityDir, "unique"));
    const upgradeCount = getNumberedCount(path.join(identityDir, "unique", "upgrade"));
    const nextIdentityNumber = knownIdentityKeys.length + index + 1;

    issues.push(makeIssue("candidate-identity", `데이터에 없는 인격 폴더: ${sinnerId}/${identityKey}`, {
      kind: "identity",
      id: getIdentityId(sinnerId, identityKey),
      stableCode: `${SINNER_NUMBERS[sinnerId]}-I-${nextIdentityNumber}`,
      path: path.relative(projectRoot, identityDir),
      cardCount,
      uniqueCount,
      upgradeCount,
      hasIdentityImage,
      suggestedData: `${identityKey}: [${cardCount}, ${uniqueCount}]`
    }));
  });
}

function scanUniqueCardTypes({ issues }) {
  Object.entries(CARD_SETS).forEach(([sinnerId, [, baseUniqueCount, identitySet]]) => {
    for (let number = 1; number <= baseUniqueCount; number += 1) {
      const id = getBaseUniqueCardId(sinnerId, number);
      if (!UNIQUE_CARD_TYPES[id]) {
        issues.push(makeIssue("missing-unique-type", `고유 카드 타입 미지정: ${id}`, {
          kind: "base-unique",
          id,
          stableCode: getBaseUniqueCardCode(sinnerId, number),
          suggestedData: `UNIQUE_CARD_TYPES.${id}: "status" 또는 "stack"`
        }));
      }
    }

    Object.entries(identitySet).forEach(([identityKey, [, uniqueCount]]) => {
      for (let number = 1; number <= uniqueCount; number += 1) {
        const id = getIdentityUniqueCardId(sinnerId, identityKey, number);
        if (!UNIQUE_CARD_TYPES[id]) {
          issues.push(makeIssue("missing-unique-type", `고유 카드 타입 미지정: ${id}`, {
            kind: "identity-unique",
            id,
            stableCode: getIdentityUniqueCardCode(sinnerId, identityKey, number),
            suggestedData: `UNIQUE_CARD_TYPES.${id}: "status" 또는 "stack"`
          }));
        }
      }
    });

    Object.entries(EGO_UNIQUE_CARD_SETS[sinnerId] || {}).forEach(([egoKey, count]) => {
      for (let number = 1; number <= count; number += 1) {
        const id = getEgoUniqueCardId(sinnerId, egoKey, number);
        if (!UNIQUE_CARD_TYPES[id]) {
          issues.push(makeIssue("missing-unique-type", `EGO 고유 카드 타입 미지정: ${id}`, {
            kind: "ego-unique",
            id,
            stableCode: getEgoUniqueCardCode(sinnerId, egoKey, number),
            suggestedData: `UNIQUE_CARD_TYPES.${id}: "status" 또는 "stack"`
          }));
        }
      }
    });
  });
}

function scanAssets(options) {
  const issues = [];
  const projectRoot = options.projectRoot;
  const sinnersDir = path.join(projectRoot, "assets", "sinners");
  const knownSinnerIds = Object.keys(CARD_SETS);
  const actualSinnerIds = readDirNames(sinnersDir);

  actualSinnerIds
    .filter((sinnerId) => !knownSinnerIds.includes(sinnerId))
    .forEach((sinnerId) => {
      issues.push(makeIssue("unknown-sinner", `데이터에 없는 수감자 폴더: ${sinnerId}`, {
        kind: "sinner",
        id: sinnerId,
        path: path.relative(projectRoot, path.join(sinnersDir, sinnerId))
      }));
    });

  knownSinnerIds.forEach((sinnerId) => {
    const sinnerDir = path.join(sinnersDir, sinnerId);
    if (!exists(sinnerDir)) {
      issues.push(makeIssue("missing-sinner-folder", `수감자 폴더 없음: ${sinnerId}`, {
        kind: "sinner",
        id: sinnerId,
        path: path.relative(projectRoot, sinnerDir)
      }));
      return;
    }

    const [baseCount, baseUniqueCount, identitySet] = CARD_SETS[sinnerId];
    scanBaseCards({ projectRoot, sinnerId, baseCount, baseUniqueCount, issues });
    scanEgoCards({ projectRoot, sinnerId, issues });

    const knownIdentityKeys = Object.keys(identitySet);
    knownIdentityKeys.forEach((identityKey) => {
      const [cardCount, uniqueCount] = identitySet[identityKey];
      scanIdentityFolder({ projectRoot, sinnerId, identityKey, cardCount, uniqueCount, issues });
    });
    scanUnknownIdentityFolders({ projectRoot, sinnerId, knownIdentityKeys, issues });
  });

  scanUniqueCardTypes({ issues });

  const byCode = issues.reduce((summary, issue) => {
    summary[issue.code] = (summary[issue.code] || 0) + 1;
    return summary;
  }, {});

  return {
    ok: issues.length === 0,
    summary: {
      issues: issues.length,
      byCode
    },
    issues
  };
}

function formatIssue(issue) {
  const code = issue.stableCode ? ` ${issue.stableCode}` : "";
  const counts = Number.isInteger(issue.expected) || Number.isInteger(issue.actual)
    ? ` (${issue.expected ?? "-"} -> ${issue.actual ?? "-"})`
    : "";
  const suggested = issue.suggestedData ? ` / ${issue.suggestedData}` : "";

  return `[${issue.code}]${code} ${issue.message}${counts}${suggested}`;
}

function printHumanReport(report, options) {
  console.log(report.ok ? "Limbus asset scan: OK" : "Limbus asset scan: NEEDS REVIEW");
  console.log("");
  console.log(`Project root: ${options.projectRoot}`);
  console.log(`Issues: ${report.summary.issues}`);
  Object.entries(report.summary.byCode).forEach(([code, count]) => {
    console.log(`- ${code}: ${count}`);
  });

  if (!report.issues.length || options.limit === 0) return;

  const visibleIssues = report.issues.slice(0, options.limit);
  console.log("");
  console.log(`Issues, first ${visibleIssues.length}:`);
  visibleIssues.forEach((issue) => {
    console.log(`- ${formatIssue(issue)}`);
  });

  const hiddenCount = report.issues.length - visibleIssues.length;
  if (hiddenCount > 0) {
    console.log(`- ...and ${hiddenCount} more`);
  }
}

const options = parseArgs(process.argv.slice(2));
const report = scanAssets(options);

if (options.json) {
  console.log(JSON.stringify(report, null, 2));
} else {
  printHumanReport(report, options);
}

process.exitCode = report.ok ? 0 : 1;
