import {
  CARD_ATTACK_TYPES,  CARD_SETS,
  CARD_REFERENCES,
  CARD_SINS,
  CARD_TAGS,
  EGO_UNIQUE_CARD_SETS,
  EXTRA_EGO_CARD_SETS,
  IDENTITY_TAGS,
  TAG_ASSET_IDS,
  TAG_GROUPS,  UNIQUE_CARD_TYPES,
  UPGRADE_CARD_SETS
} from "./limbus-data.js";
import { LIMBUS_ASSET_MANIFEST } from "./limbus-asset-manifest.mjs";

export const DECK_RULES = {
  deckSize: 20,
  maxCopiesDefault: 2,
  identitySlots: ["front", "back"],
  egoSlots: 1,
  disallowSameSinner: true,
  uniqueCardsCountInDeck: false,
  egoCardsCountInDeck: false
};

export const CARD_TYPES = {
  base: "base",
  identity: "identity",
  identityUnique: "identityUnique",
  identityUpgrade: "identityUpgrade",
  baseUnique: "baseUnique",
  ego: "ego",
  egoUnique: "egoUnique"
};

const BASE_UNIQUE_IMAGE_NAMES = {
  faust_base_unique_1: "지식",
  outis_base_unique_1: "흑심"
};

export function getIdentityId(sinnerId, identityKey) {
  return `${sinnerId}_${identityKey}`;
}

export const SINNER_NUMBERS = Object.fromEntries(
  Object.keys(CARD_SETS).map((sinnerId, index) => [sinnerId, index + 1])
);

export const NORMAL_KEYWORD_CODES = {
  화상: "K-1",
  출혈: "K-2",
  진동: "K-3",
  파열: "K-4",
  침잠: "K-5",
  호흡: "K-6",
  충전: "K-7",
  패닉: "K-8"
};

export function getIdentityNumber(sinnerId, identityKey) {
  const identityKeys = getIdentityKeys(sinnerId);
  const index = identityKeys.indexOf(identityKey);
  return index >= 0 ? index + 1 : null;
}

export function getIdentityCode(sinnerId, identityKey) {
  return `${SINNER_NUMBERS[sinnerId]}-I-${getIdentityNumber(sinnerId, identityKey)}`;
}

export function getBaseCardCode(sinnerId, number) {
  return `${SINNER_NUMBERS[sinnerId]}-B-${number}`;
}

export function getBaseUniqueCardCode(sinnerId, number) {
  return `${SINNER_NUMBERS[sinnerId]}-BX-${number}`;
}

export function getIdentityCardCode(sinnerId, identityKey, number) {
  return `${SINNER_NUMBERS[sinnerId]}-C-${getIdentityNumber(sinnerId, identityKey)}-${number}`;
}

export function getIdentityUniqueCardCode(sinnerId, identityKey, number) {
  return `${SINNER_NUMBERS[sinnerId]}-X-${getIdentityNumber(sinnerId, identityKey)}-${number}`;
}

export function getIdentityUpgradeCardCode(sinnerId, identityKey, number) {
  return `${SINNER_NUMBERS[sinnerId]}-U-${getIdentityNumber(sinnerId, identityKey)}-${number}`;
}

export function getEgoNumber(sinnerId, egoKey = "base") {
  if (egoKey === "base") return 1;
  const extraEgoKeys = getExtraEgoKeys(sinnerId);
  const index = extraEgoKeys.indexOf(egoKey);
  return index >= 0 ? index + 2 : null;
}

export function getEgoCardCode(sinnerId, egoKey = "base") {
  return `${SINNER_NUMBERS[sinnerId]}-E-${getEgoNumber(sinnerId, egoKey)}`;
}

export function getEgoUniqueCardCode(sinnerId, egoKey, number) {
  return `${SINNER_NUMBERS[sinnerId]}-EX-${getEgoNumber(sinnerId, egoKey)}-${number}`;
}

export function getKeywordCode(tag) {
  return NORMAL_KEYWORD_CODES[tag] || null;
}

export function getDirectiveCardCode(folderNumber, number) {
  return `D-${folderNumber}-${number}`;
}

export function getBaseCardId(sinnerId, number) {
  return `${sinnerId}_base_${number}`;
}

export function getBaseUniqueCardId(sinnerId, number) {
  return `${sinnerId}_base_unique_${number}`;
}

export function getIdentityCardId(sinnerId, identityKey, number) {
  return `${getIdentityId(sinnerId, identityKey)}_cards_${number}`;
}

export function getIdentityUniqueCardId(sinnerId, identityKey, number) {
  return `${getIdentityId(sinnerId, identityKey)}_unique_${number}`;
}

export function getIdentityUpgradeCardId(sinnerId, identityKey, number) {
  return `${getIdentityId(sinnerId, identityKey)}_upgrade_${number}`;
}

export function getEgoCardId(sinnerId, egoKey = "base") {
  return `${sinnerId}_${egoKey}_ego`;
}

export function getEgoUniqueCardId(sinnerId, egoKey, number) {
  return `${getEgoCardId(sinnerId, egoKey)}_unique_${number}`;
}

export function formatImageNumber(number) {
  return String(number).padStart(2, "0");
}

export function getEgoImageNumber(sinnerId, egoKey = "base") {
  if (egoKey === "base") return "00";
  const extraEgoKeys = getExtraEgoKeys(sinnerId);
  const egoIndex = extraEgoKeys.indexOf(egoKey);
  return formatImageNumber(egoIndex + 1);
}

export function getSinnerIconPath(sinnerId) {
  return `assets/sinners/${sinnerId}/icon.png`;
}

export function getIdentityImagePath(sinnerId, identityKey) {
  return `assets/sinners/${sinnerId}/${identityKey}/identity.png`;
}

export function getCardImagePath({ type, sinnerId, identityKey = null, number }) {
  const imageNumber = formatImageNumber(number);

  if (type === CARD_TYPES.base) {
    return `assets/sinners/${sinnerId}/base/${imageNumber}.png`;
  }

  if (type === CARD_TYPES.baseUnique) {
    const cardId = getBaseUniqueCardId(sinnerId, number);
    const imageName = BASE_UNIQUE_IMAGE_NAMES[cardId] || imageNumber;
    return `assets/sinners/${sinnerId}/base/unique/${imageName}.png`;
  }

  if (type === CARD_TYPES.identity) {
    return `assets/sinners/${sinnerId}/${identityKey}/${imageNumber}.png`;
  }

  if (type === CARD_TYPES.identityUnique) {
    return `assets/sinners/${sinnerId}/${identityKey}/unique/${imageNumber}.png`;
  }

  if (type === CARD_TYPES.identityUpgrade) {
    return `assets/sinners/${sinnerId}/${identityKey}/unique/upgrade/${imageNumber}.png`;
  }

  if (type === CARD_TYPES.ego) {
    return `assets/sinners/${sinnerId}/ego/${getEgoImageNumber(sinnerId, identityKey || "base")}.png`;
  }

  if (type === CARD_TYPES.egoUnique) {
    return `assets/sinners/${sinnerId}/ego/${identityKey}_unique_${imageNumber}.png`;
  }

  return `assets/cards/${sinnerId}_${identityKey || "unknown"}_${number}.png`;
}

export function getTagAssetId(tag, kind = "icon") {
  const assetId = TAG_ASSET_IDS[tag] || tag;
  if (typeof assetId === "string") return assetId;
  return assetId[kind] || assetId.icon || assetId.card || tag;
}

export function getKeywordCardImagePath(tag) {
  const assetId = TAG_ASSET_IDS[tag];
  if (assetId && typeof assetId === "object" && assetId.card === null) return null;
  if (!assetId) return null;

  return `assets/keywords/cards/${getTagAssetId(tag, "card")}.png`;
}

export function getKeywordIconPath(tag) {
  if (!TAG_ASSET_IDS[tag]) return null;

  return `assets/keywords/icons/${getTagAssetId(tag, "icon")}.png`;
}

function addToMapArray(map, key, value) {
  if (!map[key]) map[key] = [];
  map[key].push(value);
}

function makeCard({
  id,
  code,
  type,
  sinnerId,
  identityId = null,
  identityKey = null,
  number,
  deckable,
  countsTowardDeck = deckable,
  includedWithSelection = false,
  selectable = deckable,
  maxCopies = deckable ? DECK_RULES.maxCopiesDefault : 0
}) {
  return {
    id,
    code,
    type,
    sinnerId,
    identityId,
    identityKey,
    number,
    deckable,
    countsTowardDeck,
    includedWithSelection,
    selectable,
    maxCopies,
    image: getCardImagePath({ type, sinnerId, identityKey, number })
  };
}

function invertTagMap(tagMap) {
  const result = {};

  Object.entries(tagMap).forEach(([tag, ids]) => {
    ids.forEach((id) => {
      addToMapArray(result, id, tag);
    });
  });

  return result;
}

function getManifestSinner(sinnerId) {
  return LIMBUS_ASSET_MANIFEST.sinners?.[sinnerId] || {};
}

function getMaxManifestCount(sinnerId, key, fallback = 0) {
  const value = getManifestSinner(sinnerId)[key];
  return Math.max(fallback, Number.isInteger(value) ? value : 0);
}

function mergeOrderedKeys(...keyLists) {
  return [...new Set(keyLists.flat().filter(Boolean))];
}

function getExtraEgoKeys(sinnerId) {
  const dataKeys = EXTRA_EGO_CARD_SETS[sinnerId] || [];
  const manifestKeys = (getManifestSinner(sinnerId).extraEgoKeys || [])
    .filter((key) => {
      const number = Number(/^e(\d+)$/i.exec(key)?.[1]);
      return !Number.isInteger(number) || number > dataKeys.length;
    });

  return mergeOrderedKeys(
    dataKeys,
    manifestKeys
  );
}

function getIdentityKeys(sinnerId) {
  return mergeOrderedKeys(
    Object.keys(CARD_SETS[sinnerId]?.[2] || {}),
    Object.keys(getManifestSinner(sinnerId).identities || {})
  );
}

function getIdentityCounts(sinnerId, identityKey) {
  const dataCounts = CARD_SETS[sinnerId]?.[2]?.[identityKey] || [0, 0];
  const manifestCounts = getManifestSinner(sinnerId).identities?.[identityKey] || {};
  return [
    Math.max(dataCounts[0] || 0, manifestCounts.cardCount || 0),
    Math.max(dataCounts[1] || 0, manifestCounts.uniqueCount || 0)
  ];
}

function getUpgradeCount(sinnerId, identityKey) {
  const identityId = getIdentityId(sinnerId, identityKey);
  const manifestCount = getManifestSinner(sinnerId).identities?.[identityKey]?.upgradeCount || 0;
  return Math.max(UPGRADE_CARD_SETS[identityId] || 0, manifestCount);
}

function getEgoUniqueCount(sinnerId, egoKey) {
  const manifestCount = getManifestSinner(sinnerId).egoUniqueCounts?.[egoKey] || 0;
  return Math.max(EGO_UNIQUE_CARD_SETS[sinnerId]?.[egoKey] || 0, manifestCount);
}

export function buildLimbusData() {
  const sinners = [];
  const identities = [];
  const cards = [];

  const sinnerById = {};
  const identityById = {};
  const cardById = {};
  const egoById = {};
  const egoBySinnerId = {};
  const egosBySinnerId = {};
  const egoUniqueCardsByEgoId = {};
  const stableCodeById = {};
  const idByStableCode = {};
  const stableCodeDuplicates = [];

  const identitiesBySinnerId = {};
  const baseCardsBySinnerId = {};
  const baseUniqueCardsBySinnerId = {};
  const cardsByIdentityId = {};
  const uniqueCardsByIdentityId = {};
  const upgradeCardsByIdentityId = {};
  const deckableCardsByIdentityId = {};

  const tagsByIdentityId = invertTagMap(IDENTITY_TAGS);
  const tagsByCardId = invertTagMap(CARD_TAGS);
  const attackTypesByCardId = invertTagMap(CARD_ATTACK_TYPES);
  const sinByCardId = {};

  Object.entries(CARD_SINS).forEach(([sin, cardIds]) => {
    cardIds.forEach((cardId) => {
      sinByCardId[cardId] = sin;
    });
  });

  function registerStableCode(id, code) {
    if (!id || !code) return;
    if (idByStableCode[code] && idByStableCode[code] !== id) {
      stableCodeDuplicates.push({ code, ids: [idByStableCode[code], id] });
      return;
    }
    stableCodeById[id] = code;
    idByStableCode[code] = id;
  }

  function addCard(card) {
    const withTags = {
      ...card,
      tags: tagsByCardId[card.id] || [],
      attackType: attackTypesByCardId[card.id]?.[0] || null,
      sin: sinByCardId[card.id] || null
    };

    cards.push(withTags);
    cardById[withTags.id] = withTags;
    registerStableCode(withTags.id, withTags.code);
    return withTags;
  }

  Object.entries(CARD_SETS).forEach(([sinnerId, [dataBaseCount, dataBaseUniqueCount]]) => {
    const baseCount = getMaxManifestCount(sinnerId, "baseCount", dataBaseCount);
    const baseUniqueCount = getMaxManifestCount(sinnerId, "baseUniqueCount", dataBaseUniqueCount);
    const sinner = {
      id: sinnerId,
      icon: getSinnerIconPath(sinnerId)
    };

    sinners.push(sinner);
    sinnerById[sinnerId] = sinner;
    identitiesBySinnerId[sinnerId] = [];
    baseCardsBySinnerId[sinnerId] = [];
    baseUniqueCardsBySinnerId[sinnerId] = [];

    for (let number = 1; number <= baseCount; number += 1) {
      const card = addCard(makeCard({
        id: getBaseCardId(sinnerId, number),
        code: getBaseCardCode(sinnerId, number),
        type: CARD_TYPES.base,
        sinnerId,
        number,
        deckable: true
      }));

      baseCardsBySinnerId[sinnerId].push(card);
    }

    for (let number = 1; number <= baseUniqueCount; number += 1) {
      const card = addCard(makeCard({
        id: getBaseUniqueCardId(sinnerId, number),
        code: getBaseUniqueCardCode(sinnerId, number),
        type: CARD_TYPES.baseUnique,
        sinnerId,
        number,
        deckable: false,
        includedWithSelection: true
      }));

      baseUniqueCardsBySinnerId[sinnerId].push(card);
    }

    const egoKeys = ["base", ...getExtraEgoKeys(sinnerId)];
    const sinnerEgos = egoKeys.map((egoKey) => {
      const ego = addCard(makeCard({
        id: getEgoCardId(sinnerId, egoKey),
        code: getEgoCardCode(sinnerId, egoKey),
        type: CARD_TYPES.ego,
        sinnerId,
        identityKey: egoKey,
        number: 1,
        deckable: false,
        countsTowardDeck: false,
        includedWithSelection: false,
        selectable: true,
        maxCopies: 1
      }));

      egoById[ego.id] = ego;

      const egoUniqueCount = getEgoUniqueCount(sinnerId, egoKey);
      egoUniqueCardsByEgoId[ego.id] = [];
      for (let number = 1; number <= egoUniqueCount; number += 1) {
        const uniqueCard = addCard(makeCard({
          id: getEgoUniqueCardId(sinnerId, egoKey, number),
          code: getEgoUniqueCardCode(sinnerId, egoKey, number),
          type: CARD_TYPES.egoUnique,
          sinnerId,
          identityId: ego.id,
          identityKey: egoKey,
          number,
          deckable: false,
          includedWithSelection: true
        }));
        egoUniqueCardsByEgoId[ego.id].push(uniqueCard);
      }

      return ego;
    });

    egosBySinnerId[sinnerId] = sinnerEgos;
    egoBySinnerId[sinnerId] = sinnerEgos[0];

    getIdentityKeys(sinnerId).forEach((identityKey) => {
      const [cardCount, uniqueCount] = getIdentityCounts(sinnerId, identityKey);
      const manifestIdentity = getManifestSinner(sinnerId).identities?.[identityKey] || {};
      const identityId = getIdentityId(sinnerId, identityKey);
      const identity = {
        id: identityId,
        code: getIdentityCode(sinnerId, identityKey),
        sinnerId,
        identityKey,
        image: getIdentityImagePath(sinnerId, identityKey),
        backImage: manifestIdentity.hasIdentityBackImage
          ? `assets/sinners/${sinnerId}/${identityKey}/identity_back.png`
          : null,
        tags: tagsByIdentityId[identityId] || []
      };

      identities.push(identity);
      identityById[identityId] = identity;
      registerStableCode(identityId, identity.code);
      identitiesBySinnerId[sinnerId].push(identity);
      cardsByIdentityId[identityId] = [];
      uniqueCardsByIdentityId[identityId] = [];
      upgradeCardsByIdentityId[identityId] = [];
      deckableCardsByIdentityId[identityId] = [];

      for (let number = 1; number <= cardCount; number += 1) {
        const card = addCard(makeCard({
          id: getIdentityCardId(sinnerId, identityKey, number),
          code: getIdentityCardCode(sinnerId, identityKey, number),
          type: CARD_TYPES.identity,
          sinnerId,
          identityId,
          identityKey,
          number,
          deckable: true
        }));

        cardsByIdentityId[identityId].push(card);
        deckableCardsByIdentityId[identityId].push(card);
      }

      for (let number = 1; number <= uniqueCount; number += 1) {
        const card = addCard(makeCard({
          id: getIdentityUniqueCardId(sinnerId, identityKey, number),
          code: getIdentityUniqueCardCode(sinnerId, identityKey, number),
          type: CARD_TYPES.identityUnique,
          sinnerId,
          identityId,
          identityKey,
          number,
          deckable: false,
          includedWithSelection: true
        }));

        uniqueCardsByIdentityId[identityId].push(card);
      }

      const upgradeCount = getUpgradeCount(sinnerId, identityKey);
      for (let number = 1; number <= upgradeCount; number += 1) {
        const card = addCard(makeCard({
          id: getIdentityUpgradeCardId(sinnerId, identityKey, number),
          code: getIdentityUpgradeCardCode(sinnerId, identityKey, number),
          type: CARD_TYPES.identityUpgrade,
          sinnerId,
          identityId,
          identityKey,
          number,
          deckable: false,
          includedWithSelection: true
        }));

        upgradeCardsByIdentityId[identityId].push(card);
      }
    });
  });

  const deckableCards = cards.filter((card) => card.deckable);
  const uniqueCards = cards.filter((card) => (
    card.type === CARD_TYPES.baseUnique ||
    card.type === CARD_TYPES.identityUnique ||
    card.type === CARD_TYPES.egoUnique
  ));
  const upgradeCards = cards.filter((card) => card.type === CARD_TYPES.identityUpgrade);
  const egos = cards.filter((card) => card.type === CARD_TYPES.ego);

  const cardsByTag = Object.fromEntries(
    Object.entries(CARD_TAGS).map(([tag, cardIds]) => [
      tag,
      cardIds.map((cardId) => cardById[cardId]).filter(Boolean)
    ])
  );

  const cardsBySin = Object.fromEntries(
    Object.entries(CARD_SINS).map(([sin, cardIds]) => [
      sin,
      cardIds.map((cardId) => cardById[cardId]).filter(Boolean)
    ])
  );

  const cardsByAttackType = Object.fromEntries(
    Object.entries(CARD_ATTACK_TYPES).map(([attackType, cardIds]) => [
      attackType,
      cardIds.map((cardId) => cardById[cardId]).filter(Boolean)
    ])
  );

  const identitiesByTag = Object.fromEntries(
    Object.entries(IDENTITY_TAGS).map(([tag, identityIds]) => [
      tag,
      identityIds.map((identityId) => identityById[identityId]).filter(Boolean)
    ])
  );

  const allTags = [...new Set([
    ...Object.keys(TAG_ASSET_IDS),
    ...Object.keys(CARD_TAGS),
    ...Object.keys(IDENTITY_TAGS)
  ])];
  const keywordAssets = allTags.map((tag) => ({
    tag,
    code: getKeywordCode(tag),
    assetId: getTagAssetId(tag, "card"),
    cardImage: getKeywordCardImagePath(tag),
    icon: getKeywordIconPath(tag)
  }));

  return {
    rules: DECK_RULES,
    raw: {
      cardSets: CARD_SETS,
      extraEgoCardSets: EXTRA_EGO_CARD_SETS,
      egoUniqueCardSets: EGO_UNIQUE_CARD_SETS,
      identityTags: IDENTITY_TAGS,
      cardTags: CARD_TAGS,
      cardReferences: CARD_REFERENCES,
      cardAttackTypes: CARD_ATTACK_TYPES,
      cardSins: CARD_SINS,
      tagAssetIds: TAG_ASSET_IDS,
      tagGroups: TAG_GROUPS,
      uniqueCardTypes: UNIQUE_CARD_TYPES,
      upgradeCardSets: UPGRADE_CARD_SETS
    },
    sinners,
    identities,
    cards,
    deckableCards,
    uniqueCards,
    upgradeCards,
    egos,
    sinnerById,
    identityById,
    cardById,
    egoById,
    egoBySinnerId,
    egosBySinnerId,
    egoUniqueCardsByEgoId,
    identitiesBySinnerId,
    baseCardsBySinnerId,
    baseUniqueCardsBySinnerId,
    cardsByIdentityId,
    stableCodeById,
    idByStableCode,
    stableCodeDuplicates,
    uniqueCardsByIdentityId,
    upgradeCardsByIdentityId,
    deckableCardsByIdentityId,
    identitiesByTag,
    cardsByTag,
    cardsBySin,
    cardsByAttackType,
    identityIdsByTag: IDENTITY_TAGS,
    cardIdsByTag: CARD_TAGS,
    cardReferenceIdsById: CARD_REFERENCES,
    cardIdsByAttackType: CARD_ATTACK_TYPES,
    cardIdsBySin: CARD_SINS,
    uniqueCardTypes: UNIQUE_CARD_TYPES,
    identityTagFilters: keywordAssets,
    cardTagFilters: keywordAssets,
    keywordAssets,
    keywordStableCodes: NORMAL_KEYWORD_CODES,
    sinnerNumbers: SINNER_NUMBERS,
    tagAssetIds: TAG_ASSET_IDS,
    tagsByIdentityId,
    tagsByCardId,
    attackTypeByCardId: Object.fromEntries(
      Object.entries(attackTypesByCardId).map(([cardId, attackTypes]) => [cardId, attackTypes[0]])
    ),
    sinByCardId,
    tagGroups: TAG_GROUPS
  };
}

export const LIMBUS_DATA = buildLimbusData();

export function getEligibleEgosForIdentityIds(identityIds, data = LIMBUS_DATA) {
  const sinnerIds = new Set();

  identityIds.forEach((identityId) => {
    const identity = data.identityById[identityId];
    if (!identity) return;
    sinnerIds.add(identity.sinnerId);
  });

  return [...sinnerIds]
    .flatMap((sinnerId) => data.egosBySinnerId?.[sinnerId] || [data.egoBySinnerId[sinnerId]])
    .filter(Boolean);
}
