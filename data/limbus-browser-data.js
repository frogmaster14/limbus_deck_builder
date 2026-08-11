window.LIMBUS_DATA = (() => {
  const CARD_SETS = {
    yi_sang: [9, 0, {
      lcb: [3, 0],
      mourning: [3, 2],
      bullet: [3, 1],
      ring: [3, 0],
      heishou_wu: [3, 2]
    }],

    faust: [9, 1, {
      lcb: [3, 1],
      gripper: [3, 1],
      seven_south: [3, 0],
      index: [3, 2],
      lobotomy_remnant: [3, 0]
    }],

    don_quixote: [9, 0, {
      lcb: [3, 0],
      blade: [3, 0],
      cinq_east: [3, 1],
      wcorp: [3, 1],
      love_and_hate: [6, 5]
    }],

    ryoshu: [9, 0, {
      lcb: [3, 1],
      wcorp: [3, 0],
      edgar_butler: [3, 2],
      chef: [3, 1],
      red_eyes_penance: [3, 4]
    }],

    meursault: [9, 0, {
      lcb: [3, 1],
      cinq_west: [3, 1],
      thumb_east: [3, 3],
      dead_rabbits: [3, 0],
      blade_mentor: [4, 2]
    }],

    hong_lu: [9, 0, {
      lcb: [3, 0],
      kk_boss: [3, 0],
      rcorp_reindeer: [3, 1],
      full_stop_office: [4, 2],
      kcorp_excision: [3, 2]
    }],

    heathcliff: [8, 0, {
      lcb: [3, 0],
      fox_rain: [3, 2],
      kurokumo: [3, 1],
      shi_south: [3, 0],
      full_stop_office: [3, 2]
    }],

    ishmael: [8, 0, {
      lcb: [3, 0],
      kurokumo: [3, 1],
      edgar_butler: [3, 0],
      office: [4, 1],
      zwei_west: [3, 1]
    }],

    rodion: [8, 0, {
      lcb: [3, 0],
      lamancha: [3, 2],
      lobotomy: [6, 2],
      liu: [3, 0],
      devyat_north: [3, 3]
    }],

    sinclair: [8, 0, {
      grip: [3, 1],
      lcb: [3, 0],
      mariachi: [3, 1],
      middle: [3, 2],
      southern_shank: [3, 1]
    }],

    outis: [8, 1, {
      lcb: [3, 0],
      wuthering_butler: [3, 1],
      blade: [3, 0],
      molars: [3, 0]
    }],

    gregor: [8, 0, {
      lcb: [3, 0],
      zwei_south: [3, 2],
      survivor: [3, 2],
      tides: [3, 0]
    }]
  };

    const IDENTITY_TAGS = {

  };

  const EXTRA_EGO_CARD_SETS = {
    yi_sang: ["fell_bullet"],
    faust: ["ardor_blossom"],
    don_quixote: ["fluid_sac"],
    ryoshu: ["red_eyes"],
    meursault: ["pursuance"],
    hong_lu: ["snare"]
  };

  const EGO_UNIQUE_CARD_SETS = {
    hong_lu: {
      snare: 1
    }
  };
    const CARD_TAGS = {

  };    const CARD_ATTACK_TYPES = {
    "참격": ["ryoshu_red_eyes_ego","yi_sang_heishou_wu_upgrade_1","ryoshu_base_ego","rodion_base_ego","sinclair_base_ego"],
    "관통": ["yi_sang_base_ego","don_quixote_base_ego","ishmael_base_ego","rodion_lamancha_upgrade_1","outis_base_ego"],
    "타격": ["faust_ardor_blossom_ego","don_quixote_fluid_sac_ego","ryoshu_red_eyes_penance_upgrade_1","meursault_pursuance_ego","hong_lu_snare_ego","meursault_thumb_east_upgrade_1","hong_lu_base_ego","heathcliff_base_ego","gregor_base_ego"],
    "스킬": ["faust_base_ego","meursault_base_ego"]
  };
    const CARD_SINS = {
    "분노": ["faust_ardor_blossom_ego","meursault_thumb_east_upgrade_1"],
    "색욕": ["ryoshu_red_eyes_penance_upgrade_1","ryoshu_red_eyes_ego","don_quixote_base_ego","ryoshu_base_ego","rodion_lamancha_upgrade_1"],
    "나태": ["meursault_pursuance_ego","yi_sang_base_ego","gregor_base_ego"],
    "탐식": ["hong_lu_snare_ego","yi_sang_heishou_wu_upgrade_1","sinclair_base_ego"],
    "우울": ["don_quixote_fluid_sac_ego","hong_lu_base_ego","ishmael_base_ego"],
    "오만": ["yi_sang_fell_bullet_ego","faust_base_ego","meursault_base_ego","rodion_base_ego","outis_base_ego"],
    "질투": ["heathcliff_base_ego"]
  };

  const UPGRADE_CARD_SETS = {
    yi_sang_heishou_wu: 1,
    heathcliff_full_stop_office: 1,
    ryoshu_red_eyes_penance: 1,
    meursault_thumb_east: 1,
    rodion_lamancha: 1
  };

  const UNIQUE_CARD_TYPES = {
    yi_sang_heishou_wu_unique_1: "status",
    yi_sang_heishou_wu_unique_2: "stack",
    yi_sang_mourning_unique_1: "stack",
    yi_sang_mourning_unique_2: "stack",
    yi_sang_bullet_unique_1: "stack",
    faust_base_unique_1: "status",
    faust_gripper_unique_1: "stack",
    faust_lcb_unique_1: "status",
    faust_index_unique_1: "stack",
    faust_index_unique_2: "stack",
    don_quixote_love_and_hate_unique_1: "status",
    don_quixote_love_and_hate_unique_2: "status",
    don_quixote_love_and_hate_unique_3: "status",
    don_quixote_love_and_hate_unique_4: "stack",
    don_quixote_love_and_hate_unique_5: "stack",
    don_quixote_cinq_east_unique_1: "status",
    don_quixote_wcorp_unique_1: "status",
    ryoshu_lcb_unique_1: "status",
    ryoshu_edgar_butler_unique_1: "stack",
    ryoshu_edgar_butler_unique_2: "card",
    ryoshu_chef_unique_1: "stack",
    ryoshu_red_eyes_penance_unique_1: "status",
    ryoshu_red_eyes_penance_unique_2: "status",
    ryoshu_red_eyes_penance_unique_3: "stack",
    ryoshu_red_eyes_penance_unique_4: "stack",
    meursault_lcb_unique_1: "status",
    meursault_cinq_west_unique_1: "status",
    meursault_thumb_east_unique_1: "status",
    meursault_thumb_east_unique_2: "stack",
    meursault_thumb_east_unique_3: "stack",
    meursault_blade_mentor_unique_1: "status",
    meursault_blade_mentor_unique_2: "stack",
    hong_lu_rcorp_reindeer_unique_1: "stack",
    hong_lu_full_stop_office_unique_1: "stack",
    hong_lu_full_stop_office_unique_2: "stack",
    hong_lu_kcorp_excision_unique_1: "status",
    hong_lu_kcorp_excision_unique_2: "status",
    hong_lu_snare_ego_unique_1: "status",
    heathcliff_fox_rain_unique_1: "stack",
    heathcliff_fox_rain_unique_2: "status",
    heathcliff_kurokumo_unique_1: "status",
    heathcliff_full_stop_office_unique_1: "stack",
    heathcliff_full_stop_office_unique_2: "stack",
    ishmael_kurokumo_unique_1: "status",
    ishmael_office_unique_1: "stack",
    ishmael_zwei_west_unique_1: "stack",
    rodion_lamancha_unique_1: "stack",
    rodion_lamancha_unique_2: "stack",
    rodion_lobotomy_unique_1: "status",
    rodion_lobotomy_unique_2: "status",
    rodion_devyat_north_unique_1: "stack",
    rodion_devyat_north_unique_2: "stack",
    rodion_devyat_north_unique_3: "stack",
    sinclair_grip_unique_1: "status",
    sinclair_mariachi_unique_1: "stack",
    sinclair_middle_unique_1: "stack",
    sinclair_middle_unique_2: "status",
    sinclair_southern_shank_unique_1: "status",
    outis_base_unique_1: "status",
    outis_wuthering_butler_unique_1: "status",
    gregor_zwei_south_unique_1: "stack",
    gregor_zwei_south_unique_2: "status",
    gregor_survivor_unique_1: "stack",
    gregor_survivor_unique_2: "stack"
  };


  const TAG_ASSET_IDS = {
  진동: "tremor",
  출혈: "bleed",
  침잠: "sinking",
  호흡: "poise",
  화상: "burn",
  파열: "rupture",
  충전: "charge"
};

  const getTagAssetId = (tag, kind) => {
    const assetId = TAG_ASSET_IDS[tag] || tag;
    if (typeof assetId === "string") return assetId;
    return assetId[kind] || assetId.icon || assetId.card || tag;
  };

  const getKeywordIconPath = (tag) => `assets/keywords/icons/${getTagAssetId(tag, "icon")}.png`;
  const getKeywordCardImagePath = (tag) => `assets/keywords/cards/${getTagAssetId(tag, "card")}.png`;


  const ATTACK_TYPE_ASSET_IDS = {
    참격: "slash",
    관통: "pierce",
    타격: "blunt",
    스킬: "skill"
  };

  const sinners = [];
  const identities = [];
  const sinnerById = {};
  const identityById = {};
  const identitiesBySinnerId = {};
  const tagsByIdentityId = {};
  const tagsByCardId = {};
  const attackTypeByCardId = {};
  const sinByCardId = {};
  const padNumber = (value) => String(value).padStart(2, "0");

  Object.entries(IDENTITY_TAGS).forEach(([tag, identityIds]) => {
    identityIds.forEach((identityId) => {
      if (!tagsByIdentityId[identityId]) tagsByIdentityId[identityId] = [];
      tagsByIdentityId[identityId].push(tag);
    });
  });

  Object.entries(CARD_TAGS).forEach(([tag, cardIds]) => {
    cardIds.forEach((cardId) => {
      if (!tagsByCardId[cardId]) tagsByCardId[cardId] = [];
      tagsByCardId[cardId].push(tag);
    });
  });

  Object.entries(CARD_ATTACK_TYPES).forEach(([attackType, cardIds]) => {
    cardIds.forEach((cardId) => {
      attackTypeByCardId[cardId] = attackType;
    });
  });

  Object.entries(CARD_SINS).forEach(([sin, cardIds]) => {
    cardIds.forEach((cardId) => {
      sinByCardId[cardId] = sin;
    });
  });

  Object.entries(CARD_SETS).forEach(([sinnerId, [, , identitySet]]) => {
    const sinner = {
      id: sinnerId,
      icon: `assets/sinners/${sinnerId}/icon.png`
    };

    sinners.push(sinner);
    sinnerById[sinnerId] = sinner;
    identitiesBySinnerId[sinnerId] = [];

    Object.entries(identitySet).forEach(([identityKey, [cardCount, uniqueCount]]) => {
      const identityId = `${sinnerId}_${identityKey}`;
      const tags = tagsByIdentityId[identityId] || [];
      const identity = {
        id: identityId,
        sinnerId,
        identityKey,
        cardCount,
        uniqueCount,
        image: `assets/sinners/${sinnerId}/${identityKey}/identity.png`,
        tags,
        tagIcons: tags.map((tag) => ({
          tag,
          image: getKeywordIconPath(tag),
          cardImage: getKeywordCardImagePath(tag)
        })),
        uniqueCards: Array.from({ length: uniqueCount }, (_, index) => {
          const number = index + 1;
          return {
            id: `${identityId}_unique_${number}`,
            image: `assets/sinners/${sinnerId}/${identityKey}/unique/${padNumber(number)}.png`
          };
        }),
        upgradeCards: Array.from({ length: UPGRADE_CARD_SETS[identityId] || 0 }, (_, index) => {
          const number = index + 1;
          return {
            id: `${identityId}_upgrade_${number}`,
            image: `assets/sinners/${sinnerId}/${identityKey}/unique/upgrade/${padNumber(number)}.png`
          };
        })
      };

      identities.push(identity);
      identityById[identity.id] = identity;
      identitiesBySinnerId[sinnerId].push(identity);
    });
  });

  return {
    raw: {
      cardSets: CARD_SETS,
      extraEgoCardSets: EXTRA_EGO_CARD_SETS,
      egoUniqueCardSets: EGO_UNIQUE_CARD_SETS,
      identityTags: IDENTITY_TAGS,
      cardTags: CARD_TAGS,
      cardAttackTypes: CARD_ATTACK_TYPES,
      cardSins: CARD_SINS,
      upgradeCardSets: UPGRADE_CARD_SETS,
      uniqueCardTypes: UNIQUE_CARD_TYPES
    },
    sinners,
    identities,
    sinnerById,
    identityById,
    identitiesBySinnerId,
    identityTagFilters: Object.keys(TAG_ASSET_IDS).map((tag) => ({
      tag,
      image: getKeywordIconPath(tag),
      cardImage: getKeywordCardImagePath(tag)
    })),
    cardTagFilters: Object.keys(TAG_ASSET_IDS).map((tag) => ({
      tag,
      image: getKeywordIconPath(tag),
      cardImage: getKeywordCardImagePath(tag)
    })),
    cardAttackTypeFilters: Object.keys(CARD_ATTACK_TYPES).map((attackType) => ({
      attackType,
      image: `assets/attack-types/icons/${ATTACK_TYPE_ASSET_IDS[attackType] || attackType}.png`
    })),
    identityIdsByTag: IDENTITY_TAGS,
    cardIdsByTag: CARD_TAGS,
    cardIdsByAttackType: CARD_ATTACK_TYPES,
    cardIdsBySin: CARD_SINS,
    uniqueCardTypes: UNIQUE_CARD_TYPES,
    egoUniqueCardSets: EGO_UNIQUE_CARD_SETS,
    tagsByIdentityId,
    tagsByCardId,
    attackTypeByCardId,
    sinByCardId
  };
})();
