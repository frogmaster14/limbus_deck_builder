import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const sinnersRoot = path.join(projectRoot, "assets", "sinners");
const browserOutputPath = path.join(projectRoot, "data", "limbus-asset-manifest.js");
const moduleOutputPath = path.join(projectRoot, "data", "limbus-asset-manifest.mjs");
const numberedPngPattern = /^(\d+)\.png$/i;
const egoUniquePattern = /^([a-z0-9_]+)_unique_(\d+)\.png$/i;
const ignoredSinnerEntries = new Set(["base", "ego", "icon.png"]);

function exists(filePath) {
  return fs.existsSync(filePath);
}

function readEntries(dirPath, kind) {
  if (!exists(dirPath)) return [];
  return fs.readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => kind === "file" ? entry.isFile() : entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
}

function getNumberedPngNumbers(dirPath) {
  return readEntries(dirPath, "file")
    .map((name) => numberedPngPattern.exec(name)?.[1])
    .filter(Boolean)
    .map(Number)
    .filter(Number.isInteger)
    .sort((a, b) => a - b);
}

function getMaxNumber(dirPath) {
  const numbers = getNumberedPngNumbers(dirPath);
  return numbers.length ? Math.max(...numbers) : 0;
}

function getCountFromZeroBasedFiles(dirPath) {
  const numbers = getNumberedPngNumbers(dirPath).filter((number) => number >= 0);
  return numbers.length;
}

function getExtraEgoKeysFromFiles(dirPath) {
  return getNumberedPngNumbers(dirPath)
    .filter((number) => number > 0)
    .map((number) => `e${String(number).padStart(2, "0")}`);
}

function getEgoUniqueCounts(dirPath) {
  const result = {};
  readEntries(dirPath, "file").forEach((name) => {
    const match = egoUniquePattern.exec(name);
    if (!match) return;
    const [, egoKey, numberText] = match;
    const number = Number(numberText);
    result[egoKey] = Math.max(result[egoKey] || 0, number);
  });
  return result;
}

function buildManifest() {
  const sinners = {};

  readEntries(sinnersRoot, "directory").forEach((sinnerId) => {
    const sinnerDir = path.join(sinnersRoot, sinnerId);
    const baseDir = path.join(sinnerDir, "base");
    const egoDir = path.join(sinnerDir, "ego");
    const identities = {};

    readEntries(sinnerDir, "directory")
      .filter((name) => !ignoredSinnerEntries.has(name))
      .forEach((identityKey) => {
        const identityDir = path.join(sinnerDir, identityKey);
        identities[identityKey] = {
          cardCount: getMaxNumber(identityDir),
          uniqueCount: getMaxNumber(path.join(identityDir, "unique")),
          upgradeCount: getMaxNumber(path.join(identityDir, "unique", "upgrade")),
          hasIdentityImage: exists(path.join(identityDir, "identity.png"))
        };
      });

    sinners[sinnerId] = {
      baseCount: getMaxNumber(baseDir),
      baseUniqueCount: readEntries(path.join(baseDir, "unique"), "file")
        .filter((name) => /\.png$/i.test(name)).length,
      egoCount: getCountFromZeroBasedFiles(egoDir),
      extraEgoKeys: getExtraEgoKeysFromFiles(egoDir),
      egoUniqueCounts: getEgoUniqueCounts(egoDir),
      identities
    };
  });

  return {
    generatedAt: new Date().toISOString(),
    sinners
  };
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, `${content}\n`, "utf8");
}

const manifest = buildManifest();
const json = JSON.stringify(manifest, null, 2);

writeFile(browserOutputPath, `window.LIMBUS_ASSET_MANIFEST = ${json};`);
writeFile(moduleOutputPath, `export const LIMBUS_ASSET_MANIFEST = ${json};`);

console.log(`Wrote ${path.relative(projectRoot, browserOutputPath)}`);
console.log(`Wrote ${path.relative(projectRoot, moduleOutputPath)}`);
