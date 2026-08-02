window.LIMBUS_DATA = (() => {
  const CARD_SETS = {
    yi_sang: [9, 0, {
      lcb: [3, 0],
      mourning: [3, 2],
      bullet: [3, 1],
      ring: [3, 0],
      heishou_wu: [3, 2]
    }],

    faust: [9, 0, {
      lcb: [3, 1],
      gripper: [3, 0],
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
      edgar_butler: [3, 0],
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
      shi_south: [3, 0]
    }],

    ishmael: [8, 0, {
      lcb: [3, 0],
      kurokumo: [3, 1],
      edgar_butler: [3, 0],
      office: [4, 1]
    }],

    rodion: [8, 0, {
      lcb: [3, 0],
      lamancha: [3, 2],
      lobotomy: [6, 2],
      liu: [3, 0]
    }],

    sinclair: [8, 0, {
      grip: [3, 1],
      lcb: [3, 0],
      mariachi: [3, 1],
      middle: [3, 2],
      southern_shank: [3, 1]
    }],

    outis: [8, 0, {
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
    진동: ["meursault_thumb_east", "outis_molars", "yi_sang_ring"],
    출혈: ["rodion_lamancha", "yi_sang_ring"],
    침잠: ["heathcliff_fox_rain", "yi_sang_ring"],
    호흡: ["don_quixote_cinq_east", "hong_lu_full_stop_office", "yi_sang_ring"],
    화상: ["gregor_survivor", "rodion_liu"],
    파열: ["faust_seven_south", "meursault_dead_rabbits"],
    충전: ["don_quixote_wcorp", "ryoshu_wcorp", "yi_sang_ring"],
    못: ["faust_gripper", "sinclair_grip"],
    마비: ["gregor_tides"],
    "투.식.": ["ishmael_edgar_butler", "ryoshu_edgar_butler"],
    "조리 중": ["gregor_tides", "ryoshu_chef"],
    진동폭발: ["meursault_thumb_east", "outis_molars"],
    "축제의 열기": ["rodion_lamancha"],
    "산나비+죽은나비": ["yi_sang_mourning"],
    "찢어진 추억": ["yi_sang_bullet"]
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
    진동: [
      "yi_sang_ring_cards_1",
      "yi_sang_ring_cards_2",
      "meursault_thumb_east_cards_1",
      "meursault_thumb_east_cards_2",
      "meursault_thumb_east_cards_3",
      "meursault_thumb_east_upgrade_1",
      "outis_molars_cards_1",
      "outis_molars_cards_3"
    ],
    출혈: [
      "yi_sang_ring_cards_1",
      "yi_sang_ring_cards_2",
      "ryoshu_base_6",
      "rodion_base_2",
      "rodion_lamancha_cards_1",
      "rodion_lamancha_cards_3"
    ],
    침잠: [
      "yi_sang_ring_cards_1",
      "yi_sang_ring_cards_2",
      "heathcliff_fox_rain_cards_2"
    ],
    호흡: [
      "yi_sang_ring_cards_1",
      "yi_sang_ring_cards_2",
      "don_quixote_cinq_east_cards_1",
      "hong_lu_base_6",
      "hong_lu_full_stop_office_cards_1",
      "hong_lu_full_stop_office_cards_2",
      "hong_lu_full_stop_office_cards_4"
    ],
    화상: [
      "faust_ardor_blossom_ego",
      "yi_sang_base_4",
      "rodion_base_6",
      "rodion_liu_cards_1",
      "rodion_liu_cards_2",
      "gregor_survivor_cards_1",
      "gregor_survivor_cards_2",
      "gregor_survivor_cards_3"
    ],
    파열: [
      "hong_lu_base_9",
      "hong_lu_kcorp_excision_cards_1",
      "hong_lu_kcorp_excision_unique_1",
      "hong_lu_kcorp_excision_unique_2",
      "yi_sang_base_4",
      "faust_seven_south_cards_1",
      "faust_seven_south_cards_2",
      "meursault_base_5",
      "meursault_dead_rabbits_cards_1",
      "meursault_dead_rabbits_cards_2",
      "meursault_dead_rabbits_cards_3"
    ],
    충전: [
      "yi_sang_ring_cards_1",
      "yi_sang_ring_cards_2",
      "don_quixote_base_3",
      "don_quixote_wcorp_cards_1",
      "don_quixote_wcorp_cards_2",
      "don_quixote_wcorp_cards_3",
      "don_quixote_wcorp_unique_1",
      "ryoshu_wcorp_cards_1",
      "ryoshu_wcorp_cards_2"
    ],
    못: [
      "faust_gripper_cards_2",
      "sinclair_grip_unique_1",
      "sinclair_grip_cards_1",
      "sinclair_grip_cards_2",
      "sinclair_grip_cards_3"
    ],
    마비: [
      "hong_lu_snare_ego_unique_1",
      "gregor_tides_cards_2",
      "gregor_tides_cards_3"
    ],
    "투.식.": [
      "ryoshu_edgar_butler_cards_1",
      "ryoshu_edgar_butler_cards_2",
      "ishmael_edgar_butler_cards_1"
    ],
    "조리 중": [
      "ryoshu_chef_cards_2",
      "gregor_tides_cards_1",
      "gregor_tides_cards_2",
      "gregor_tides_cards_3"
    ],
    진동폭발: [
      "meursault_thumb_east_cards_3",
      "meursault_thumb_east_upgrade_1",
      "outis_molars_cards_2"
    ],
    "축제의 열기": [
      "rodion_lamancha_cards_2",
      "rodion_lamancha_cards_3",
      "rodion_lamancha_unique_1",
      "rodion_lamancha_upgrade_1"
    ],
    "산나비+죽은나비": [
      "yi_sang_mourning_cards_1",
      "yi_sang_mourning_cards_2",
      "yi_sang_mourning_unique_1",
      "yi_sang_mourning_unique_2"
    ],
    "찢어진 추억": [
      "yi_sang_bullet_cards_1",
      "yi_sang_bullet_cards_3",
      "yi_sang_bullet_unique_1"
    ]
  };
  const CARD_EFFECTS = {
    가드회복: [
      "don_quixote_base_9",
      "ryoshu_base_9",
      "yi_sang_heishou_wu_unique_1",
      "yi_sang_base_8",
      "yi_sang_mourning_unique_2",
      "faust_base_ego",
      "don_quixote_base_3",
      "ryoshu_base_8",
      "meursault_base_1",
      "meursault_base_4",
      "meursault_base_7",
      "meursault_base_ego",
      "heathcliff_fox_rain_cards_3",
      "ishmael_base_7",
      "rodion_base_ego",
      "rodion_lobotomy_unique_1",
      "rodion_lobotomy_cards_6",
      "outis_molars_cards_3",
      "gregor_base_8",
      "gregor_zwei_south_cards_3"
    ],
    체력회복: [
      "ryoshu_base_9",
      "hong_lu_base_9",
      "hong_lu_kcorp_excision_cards_3",
      "hong_lu_kcorp_excision_unique_2",
      "meursault_pursuance_ego",
      "faust_ardor_blossom_ego",
      "ryoshu_base_ego",
      "yi_sang_mourning_unique_2",
      "ryoshu_lcb_unique_1",
      "hong_lu_base_1",
      "hong_lu_base_3",
      "rodion_lamancha_unique_1",
      "rodion_base_6",
      "rodion_base_8",
      "sinclair_base_6",
      "gregor_base_7"
    ],
    드로우: [
      "don_quixote_base_9",
      "ryoshu_base_9",
      "meursault_base_9",
      "hong_lu_kcorp_excision_unique_1",
      "meursault_blade_mentor_cards_4",
      "don_quixote_love_and_hate_unique_2",
      "faust_lobotomy_remnant_cards_1",
      "faust_lobotomy_remnant_cards_3",
      "yi_sang_base_1",
      "yi_sang_base_3",
      "yi_sang_base_ego",
      "faust_lcb_unique_1",
      "faust_base_1",
      "faust_base_3",
      "faust_base_4",
      "faust_base_5",
      "faust_base_7",
      "faust_base_ego",
      "faust_index_cards_2",
      "don_quixote_base_4",
      "don_quixote_base_8",
      "ryoshu_base_5",
      "meursault_base_3",
      "meursault_base_5",
      "meursault_base_8",
      "meursault_dead_rabbits_cards_1",
      "meursault_dead_rabbits_cards_3",
      "hong_lu_base_4",
      "hong_lu_base_7",
      "heathcliff_base_1",
      "heathcliff_base_7",
      "heathcliff_base_8",
      "heathcliff_kurokumo_cards_3",
      "ishmael_kurokumo_unique_1",
      "ishmael_base_1",
      "ishmael_base_2",
      "ishmael_base_6",
      "ishmael_base_8",
      "rodion_base_1",
      "rodion_base_5",
      "rodion_lobotomy_cards_5",
      "rodion_liu_cards_1",
      "sinclair_base_1",
      "sinclair_base_8",
      "sinclair_southern_shank_cards_1",
      "outis_base_3",
      "outis_base_5",
      "outis_base_6",
      "outis_base_7",
      "gregor_base_1",
      "gregor_base_2"
    ],
    버리기: [
      "faust_base_9",
      "meursault_blade_mentor_cards_3",
      "don_quixote_love_and_hate_unique_2",
      "yi_sang_base_5",
      "don_quixote_base_3",
      "don_quixote_base_6",
      "don_quixote_blade_cards_1",
      "ryoshu_base_1",
      "ryoshu_base_2",
      "ryoshu_base_6",
      "ryoshu_edgar_butler_cards_2",
      "meursault_base_4",
      "heathcliff_base_3",
      "ishmael_base_1",
      "ishmael_base_6",
      "ishmael_base_7",
      "ishmael_kurokumo_cards_1",
      "ishmael_kurokumo_cards_3",
      "ishmael_edgar_butler_cards_3",
      "ishmael_office_cards_2",
      "ishmael_office_cards_3",
      "ishmael_office_cards_4",
      "rodion_base_1",
      "rodion_base_5",
      "rodion_lobotomy_unique_1",
      "rodion_lobotomy_unique_2",
      "rodion_liu_cards_3",
      "outis_base_4",
      "outis_base_7",
      "outis_wuthering_butler_cards_1",
      "outis_wuthering_butler_cards_3",
      "outis_blade_cards_3"
    ],
    "체인 관련": [
      "don_quixote_love_and_hate_unique_1",
      "yi_sang_base_6",
      "yi_sang_lcb",
      "meursault_cinq_west_cards_3",
      "rodion_lobotomy_unique_1",
      "rodion_lobotomy_unique_2",
      "sinclair_southern_shank_unique_1"
    ],
    "덱 이동": [
      "meursault_blade_mentor_cards_2",
      "meursault_blade_mentor_cards_3"
    ],
    필중: [
      "ryoshu_red_eyes_penance_unique_1",
      "ryoshu_red_eyes_penance_unique_2",
      "yi_sang_fell_bullet_ego",
      "yi_sang_base_7",
      "faust_seven_south_cards_3",
      "ryoshu_base_4",
      "heathcliff_shi_south_cards_1",
      "sinclair_middle_cards_2",
      "rodion_base_ego",
      "outis_base_ego"
    ],
    코인토스: [
      "hong_lu_base_3",
      "hong_lu_kk_boss_cards_1",
      "hong_lu_kk_boss_cards_3"
    ],
    재사용: [
      "meursault_blade_mentor_cards_3",
      "yi_sang_lcb_cards_2",
      "don_quixote_cinq_east_cards_2",
      "meursault_lcb_cards_1",
      "hong_lu_full_stop_office_cards_3"
    ],
    "죄악 변경": [
      "faust_base_2",
      "faust_index_cards_3",
      "hong_lu_base_ego",
      "ishmael_base_5"
    ],
    "상태 변경": [
      "hong_lu_kcorp_excision",
      "hong_lu_snare_ego",
      "meursault_blade_mentor",
      "don_quixote_love_and_hate",
      "don_quixote_love_and_hate_cards_2",
      "don_quixote_love_and_hate_cards_5",
      "faust_base_6",
      "meursault_lcb_cards_3",
      "meursault_thumb_east_unique_2",
      "meursault_thumb_east_unique_3",
      "hong_lu_rcorp_reindeer_unique_1",
      "ishmael_base_3",
      "outis_base_2"
    ],
    "특수 키워드 획득": [
      "ryoshu_red_eyes_penance",
      "ryoshu_red_eyes_penance_cards_1",
      "ryoshu_red_eyes_penance_cards_2"
    ],
    "상대 방해": [
      "ryoshu_red_eyes_ego"
    ],
    "효과 변경": [
      "meursault_blade_mentor_unique_1"
    ],
    "수감자 교체": [
      "yi_sang_base_9",
      "yi_sang_heishou_wu_unique_1",
      "meursault_base_7",
      "gregor_zwei_south_unique_2"
    ],
    "다른 카드로 취급": [
      "yi_sang_base_2"
    ],
    자해기믹: [
      "yi_sang_fell_bullet_ego",
      "faust_base_6",
      "ryoshu_lcb_cards_1",
      "ryoshu_lcb_cards_3",
      "hong_lu_base_3",
      "heathcliff_base_4",
      "heathcliff_base_7",
      "sinclair_grip_unique_1"
    ],
    위력증가: [
      "faust_lobotomy_remnant_cards_2",
      "yi_sang_lcb_cards_1",
      "faust_base_8",
      "faust_lcb_cards_3",
      "don_quixote_base_1",
      "don_quixote_base_5",
      "don_quixote_base_7",
      "don_quixote_cinq_east_unique_1",
      "meursault_lcb_cards_1",
      "meursault_thumb_east_unique_1",
      "meursault_cinq_west_cards_1",
      "hong_lu_base_2",
      "hong_lu_base_5",
      "hong_lu_lcb_cards_3",
      "hong_lu_kk_boss_cards_1",
      "heathcliff_base_5",
      "heathcliff_lcb_cards_1",
      "heathcliff_shi_south_cards_3",
      "ishmael_base_4",
      "sinclair_base_5",
      "sinclair_middle_unique_2",
      "sinclair_lcb_cards_2",
      "sinclair_mariachi_cards_1",
      "sinclair_southern_shank_cards_3",
      "outis_wuthering_butler_cards_2",
      "outis_wuthering_butler_cards_3",
      "outis_blade_cards_2",
      "gregor_base_4"
    ],
    위력감소: [
      "don_quixote_lcb_cards_1",
      "don_quixote_cinq_east_cards_3",
      "don_quixote_cinq_east_unique_1",
      "heathcliff_base_6",
      "gregor_base_6"
    ],
    "최대 합 위력 변경": [
      "yi_sang_base_ego"
    ],
    "전체 데미지 증가": [
      "faust_base_9",
      "hong_lu_kcorp_excision_cards_2",
      "hong_lu_kcorp_excision_unique_1",
      "meursault_blade_mentor_cards_2",
      "meursault_blade_mentor_cards_4",
      "don_quixote_love_and_hate_cards_3",
      "don_quixote_love_and_hate_unique_4",
      "don_quixote_love_and_hate_unique_5",
      "faust_lobotomy_remnant_cards_2",
      "yi_sang_fell_bullet_ego",
      "yi_sang_heishou_wu_cards_1",
      "yi_sang_heishou_wu_cards_3",
      "yi_sang_heishou_wu_unique_2",
      "yi_sang_mourning_unique_1",
      "yi_sang_mourning_cards_3",
      "don_quixote_base_ego",
      "don_quixote_lcb_cards_2",
      "don_quixote_blade_cards_3",
      "ryoshu_lcb_cards_1",
      "ryoshu_lcb_cards_3",
      "ryoshu_wcorp_cards_3",
      "ryoshu_chef_cards_1",
      "meursault_cinq_west_unique_1",
      "meursault_thumb_east_unique_1",
      "hong_lu_base_ego",
      "hong_lu_base_8",
      "hong_lu_lcb_cards_2",
      "hong_lu_kk_boss_cards_1",
      "hong_lu_rcorp_reindeer_cards_1",
      "hong_lu_rcorp_reindeer_cards_2",
      "hong_lu_rcorp_reindeer_cards_3",
      "heathcliff_base_ego",
      "heathcliff_fox_rain_unique_2",
      "heathcliff_lcb_cards_3",
      "heathcliff_shi_south_cards_3",
      "ishmael_lcb_cards_3",
      "ishmael_office_unique_1",
      "ishmael_edgar_butler_cards_1",
      "ishmael_office_cards_1",
      "rodion_base_3",
      "rodion_lcb_cards_3",
      "rodion_lamancha_upgrade_1",
      "sinclair_base_3",
      "sinclair_base_4",
      "sinclair_grip_cards_1",
      "sinclair_grip_cards_2",
      "sinclair_grip_cards_3",
      "sinclair_lcb_cards_3",
      "sinclair_middle_cards_2",
      "sinclair_middle_unique_2",
      "sinclair_base_ego",
      "sinclair_southern_shank_cards_1",
      "sinclair_southern_shank_cards_2",
      "outis_base_1",
      "outis_wuthering_butler_unique_1",
      "outis_lcb_cards_2",
      "outis_molars_cards_2",
      "gregor_lcb_cards_3",
      "gregor_zwei_south_unique_2"
    ],
    "가드뎀 증가": [
      "ryoshu_red_eyes_penance_cards_3",
      "ryoshu_red_eyes_penance_unique_3",
      "yi_sang_heishou_wu",
      "yi_sang_heishou_wu_cards_2",
      "yi_sang_heishou_wu_upgrade_1",
      "faust_lcb_cards_2",
      "faust_gripper_cards_3",
      "heathcliff_kurokumo_cards_2",
      "ishmael_office_cards_4",
      "rodion_lobotomy_cards_2",
      "rodion_lobotomy_unique_2",
      "rodion_liu_cards_2",
      "gregor_base_5",
      "gregor_zwei_south_cards_2"
    ],
    "체력뎀 증가": [
      "ryoshu_red_eyes_penance_cards_3",
      "ryoshu_red_eyes_penance_unique_4",
      "heathcliff_kurokumo_cards_1",
      "heathcliff_shi_south_cards_2",
      "ishmael_office_cards_4",
      "rodion_liu_cards_3",
      "sinclair_middle_cards_3",
      "gregor_lcb_cards_2"
    ],
    "효과 데미지": [
      "don_quixote_love_and_hate_cards_6",
      "don_quixote_fluid_sac_ego",
      "yi_sang_fell_bullet_ego",
      "yi_sang_ring_cards_3",
      "ryoshu_base_ego",
      "ryoshu_base_2",
      "ryoshu_base_3",
      "ryoshu_edgar_butler_cards_3",
      "ryoshu_chef_cards_3",
      "ryoshu_chef_unique_1",
      "hong_lu_full_stop_office_cards_1",
      "heathcliff_base_2",
      "heathcliff_base_4",
      "ishmael_lcb_cards_2",
      "ishmael_kurokumo_cards_3",
      "rodion_base_6",
      "rodion_lamancha_cards_2",
      "rodion_lobotomy_cards_4",
      "outis_lcb_cards_1"
    ],
    "상대 데미지 감소": [
      "meursault_base_2",
      "sinclair_base_2"
    ],
    "받는 데미지 감소": [
      "hong_lu_snare_ego_unique_1",
      "faust_lobotomy_remnant",
      "ryoshu_base_7",
      "meursault_base_6",
      "meursault_lcb_unique_1",
      "heathcliff_base_6",
      "heathcliff_fox_rain_unique_2",
      "heathcliff_kurokumo_unique_1",
      "ishmael_base_ego",
      "ishmael_edgar_butler_cards_2",
      "rodion_base_4",
      "rodion_base_7",
      "rodion_lcb_cards_2",
      "sinclair_base_7",
      "gregor_zwei_south_unique_2"
    ]
  };
  const CARD_ATTACK_TYPES = {
    참격: [
      "faust_base_9",
      "faust_lobotomy_remnant_cards_1",
      "faust_lobotomy_remnant_cards_2",
      "ryoshu_red_eyes_ego",
      "meursault_base_9",
      "meursault_blade_mentor_cards_1",
      "meursault_blade_mentor_cards_2",
      "meursault_blade_mentor_cards_3",
      "meursault_blade_mentor_cards_4",
      "hong_lu_kcorp_excision_cards_2",
      "hong_lu_kcorp_excision_cards_3",
      "yi_sang_base_9",
      "yi_sang_heishou_wu_cards_1",
      "yi_sang_heishou_wu_cards_2",
      "yi_sang_heishou_wu_cards_3",
      "yi_sang_heishou_wu_upgrade_1",
      "yi_sang_lcb_cards_2",
      "yi_sang_lcb_cards_3",
      "faust_base_1",
      "faust_base_2",
      "faust_base_8",
      "faust_seven_south_cards_1",
      "faust_seven_south_cards_2",
      "faust_seven_south_cards_3",
      "faust_index_cards_1",
      "faust_index_cards_2",
      "faust_index_cards_3",
      "don_quixote_base_6",
      "don_quixote_blade_cards_1",
      "don_quixote_blade_cards_3",
      "don_quixote_wcorp_cards_1",
      "don_quixote_wcorp_cards_3",
      "ryoshu_base_3",
      "ryoshu_base_5",
      "ryoshu_base_ego",
      "ryoshu_lcb_cards_1",
      "ryoshu_lcb_cards_2",
      "ryoshu_lcb_cards_3",
      "ryoshu_wcorp_cards_1",
      "ryoshu_wcorp_cards_2",
      "ryoshu_wcorp_cards_3",
      "ryoshu_edgar_butler_cards_1",
      "ryoshu_edgar_butler_cards_2",
      "ryoshu_edgar_butler_cards_3",
      "ryoshu_chef_cards_1",
      "ryoshu_chef_cards_2",
      "meursault_thumb_east_cards_1",
      "meursault_thumb_east_cards_2",
      "hong_lu_base_5",
      "hong_lu_base_7",
      "hong_lu_lcb_cards_3",
      "hong_lu_kk_boss_cards_1",
      "hong_lu_kk_boss_cards_2",
      "hong_lu_full_stop_office_cards_1",
      "heathcliff_kurokumo_cards_1",
      "heathcliff_kurokumo_cards_2",
      "heathcliff_kurokumo_cards_3",
      "heathcliff_shi_south_cards_1",
      "heathcliff_shi_south_cards_3",
      "ishmael_base_6",
      "ishmael_kurokumo_cards_1",
      "ishmael_kurokumo_cards_2",
      "ishmael_kurokumo_cards_3",
      "ishmael_edgar_butler_cards_1",
      "ishmael_edgar_butler_cards_3",
      "ishmael_office_cards_1",
      "ishmael_office_cards_2",
      "ishmael_office_cards_3",
      "ishmael_office_cards_4",
      "rodion_base_3",
      "rodion_base_5",
      "rodion_base_ego",
      "rodion_lcb_cards_1",
      "rodion_lcb_cards_2",
      "rodion_lcb_cards_3",
      "sinclair_base_6",
      "sinclair_base_7",
      "sinclair_base_8",
      "sinclair_base_ego",
      "sinclair_lcb_cards_1",
      "sinclair_lcb_cards_2",
      "sinclair_lcb_cards_3",
      "outis_base_5",
      "outis_lcb_cards_2",
      "outis_blade_cards_1",
      "outis_blade_cards_2",
      "outis_molars_cards_3",
      "gregor_base_6",
      "gregor_lcb_cards_1",
      "gregor_zwei_south_cards_1",
      "gregor_zwei_south_cards_2",
      "gregor_zwei_south_cards_3",
      "gregor_tides_cards_2",
      "gregor_tides_cards_3"
    ],
    관통: [
      "faust_lobotomy_remnant_cards_3",
      "yi_sang_base_5",
      "yi_sang_base_6",
      "yi_sang_base_7",
      "yi_sang_base_ego",
      "yi_sang_lcb_cards_1",
      "yi_sang_mourning_cards_1",
      "yi_sang_mourning_cards_2",
      "yi_sang_mourning_cards_3",
      "yi_sang_bullet_cards_1",
      "yi_sang_bullet_cards_2",
      "yi_sang_ring_cards_1",
      "yi_sang_ring_cards_2",
      "yi_sang_ring_cards_3",
      "faust_lcb_cards_3",
      "faust_gripper_cards_1",
      "faust_gripper_cards_2",
      "don_quixote_base_1",
      "don_quixote_base_2",
      "don_quixote_base_4",
      "don_quixote_base_ego",
      "don_quixote_lcb_cards_1",
      "don_quixote_lcb_cards_2",
      "don_quixote_lcb_cards_3",
      "don_quixote_blade_cards_2",
      "don_quixote_cinq_east_cards_1",
      "don_quixote_cinq_east_cards_2",
      "don_quixote_cinq_east_cards_3",
      "don_quixote_wcorp_cards_2",
      "ryoshu_chef_cards_3",
      "meursault_cinq_west_cards_1",
      "meursault_cinq_west_cards_2",
      "meursault_cinq_west_cards_3",
      "meursault_dead_rabbits_cards_1",
      "hong_lu_base_6",
      "hong_lu_kk_boss_cards_3",
      "hong_lu_full_stop_office_cards_2",
      "hong_lu_full_stop_office_cards_3",
      "hong_lu_full_stop_office_cards_4",
      "heathcliff_base_2",
      "heathcliff_fox_rain_cards_3",
      "heathcliff_shi_south_cards_2",
      "ishmael_base_4",
      "ishmael_base_ego",
      "rodion_base_2",
      "rodion_lamancha_cards_1",
      "rodion_lamancha_cards_2",
      "rodion_lamancha_cards_3",
      "rodion_lamancha_upgrade_1",
      "rodion_lobotomy_cards_1",
      "rodion_lobotomy_cards_2",
      "rodion_lobotomy_cards_3",
      "rodion_lobotomy_cards_4",
      "rodion_lobotomy_cards_5",
      "rodion_lobotomy_cards_6",
      "rodion_liu_cards_2",
      "rodion_liu_cards_3",
      "sinclair_base_2",
      "sinclair_southern_shank_cards_1",
      "sinclair_southern_shank_cards_2",
      "sinclair_southern_shank_cards_3",
      "outis_base_3",
      "outis_base_8",
      "outis_base_ego",
      "outis_lcb_cards_1",
      "outis_lcb_cards_3",
      "outis_blade_cards_3",
      "gregor_base_2",
      "gregor_base_4",
      "gregor_lcb_cards_2",
      "gregor_lcb_cards_3"
    ],
    타격: [
      "faust_ardor_blossom_ego",
      "don_quixote_base_9",
      "don_quixote_love_and_hate_cards_1",
      "don_quixote_love_and_hate_cards_2",
      "don_quixote_love_and_hate_cards_3",
      "don_quixote_love_and_hate_cards_4",
      "don_quixote_love_and_hate_cards_5",
      "don_quixote_love_and_hate_cards_6",
      "don_quixote_fluid_sac_ego",
      "ryoshu_red_eyes_penance_cards_1",
      "ryoshu_red_eyes_penance_cards_2",
      "ryoshu_red_eyes_penance_cards_3",
      "ryoshu_red_eyes_penance_upgrade_1",
      "meursault_pursuance_ego",
      "hong_lu_kcorp_excision_cards_1",
      "hong_lu_snare_ego",
      "yi_sang_base_3",
      "yi_sang_bullet_cards_3",
      "faust_base_5",
      "faust_lcb_cards_1",
      "faust_lcb_cards_2",
      "faust_gripper_cards_3",
      "ryoshu_base_1",
      "meursault_base_1",
      "meursault_base_2",
      "meursault_base_5",
      "meursault_base_8",
      "meursault_lcb_cards_1",
      "meursault_lcb_cards_2",
      "meursault_lcb_cards_3",
      "meursault_thumb_east_cards_3",
      "meursault_thumb_east_upgrade_1",
      "meursault_dead_rabbits_cards_2",
      "meursault_dead_rabbits_cards_3",
      "hong_lu_base_8",
      "hong_lu_base_ego",
      "hong_lu_lcb_cards_1",
      "hong_lu_lcb_cards_2",
      "hong_lu_rcorp_reindeer_cards_1",
      "hong_lu_rcorp_reindeer_cards_2",
      "hong_lu_rcorp_reindeer_cards_3",
      "heathcliff_base_5",
      "heathcliff_base_6",
      "heathcliff_base_8",
      "heathcliff_base_ego",
      "heathcliff_lcb_cards_1",
      "heathcliff_lcb_cards_2",
      "heathcliff_lcb_cards_3",
      "heathcliff_fox_rain_cards_1",
      "heathcliff_fox_rain_cards_2",
      "ishmael_base_3",
      "ishmael_base_5",
      "ishmael_lcb_cards_1",
      "ishmael_lcb_cards_2",
      "ishmael_lcb_cards_3",
      "ishmael_edgar_butler_cards_2",
      "rodion_base_4",
      "rodion_liu_cards_1",
      "sinclair_base_1",
      "sinclair_grip_cards_1",
      "sinclair_grip_cards_2",
      "sinclair_grip_cards_3",
      "sinclair_mariachi_cards_1",
      "sinclair_mariachi_cards_2",
      "sinclair_mariachi_cards_3",
      "sinclair_middle_cards_1",
      "sinclair_middle_cards_2",
      "sinclair_middle_cards_3",
      "outis_wuthering_butler_cards_1",
      "outis_wuthering_butler_cards_2",
      "outis_wuthering_butler_cards_3",
      "outis_molars_cards_1",
      "outis_molars_cards_2",
      "gregor_base_7",
      "gregor_base_ego",
      "gregor_survivor_cards_1",
      "gregor_survivor_cards_2",
      "gregor_survivor_cards_3",
      "gregor_tides_cards_1"
    ],
    스킬: [
      "ryoshu_base_9",
      "hong_lu_base_9",
      "yi_sang_base_1",
      "yi_sang_base_2",
      "yi_sang_base_4",
      "yi_sang_base_8",
      "faust_base_3",
      "faust_base_4",
      "faust_base_6",
      "faust_base_7",
      "faust_base_ego",
      "don_quixote_base_3",
      "don_quixote_base_5",
      "don_quixote_base_7",
      "don_quixote_base_8",
      "ryoshu_base_2",
      "ryoshu_base_4",
      "ryoshu_base_6",
      "ryoshu_base_7",
      "ryoshu_base_8",
      "meursault_base_3",
      "meursault_base_4",
      "meursault_base_6",
      "meursault_base_7",
      "meursault_base_ego",
      "hong_lu_base_1",
      "hong_lu_base_2",
      "hong_lu_base_3",
      "hong_lu_base_4",
      "heathcliff_base_1",
      "heathcliff_base_3",
      "heathcliff_base_4",
      "heathcliff_base_7",
      "ishmael_base_1",
      "ishmael_base_2",
      "ishmael_base_7",
      "ishmael_base_8",
      "rodion_base_1",
      "rodion_base_6",
      "rodion_base_7",
      "rodion_base_8",
      "sinclair_base_3",
      "sinclair_base_4",
      "sinclair_base_5",
      "outis_base_1",
      "outis_base_2",
      "outis_base_4",
      "outis_base_6",
      "outis_base_7",
      "gregor_base_1",
      "gregor_base_3",
      "gregor_base_5",
      "gregor_base_8"
    ]
  };
  const CARD_SINS = {
    분노: [
      "faust_ardor_blossom_ego",
      "don_quixote_love_and_hate_cards_1",
      "don_quixote_love_and_hate_cards_4",
      "meursault_blade_mentor_cards_3",
      "yi_sang_bullet_cards_3",
      "don_quixote_base_5",
      "don_quixote_cinq_east_cards_2",
      "ryoshu_edgar_butler_cards_2",
      "ryoshu_chef_cards_2",
      "meursault_thumb_east_cards_3",
      "meursault_thumb_east_upgrade_1",
      "meursault_dead_rabbits_cards_1",
      "hong_lu_rcorp_reindeer_cards_3",
      "heathcliff_base_2",
      "heathcliff_base_4",
      "heathcliff_base_7",
      "heathcliff_base_8",
      "heathcliff_lcb_cards_1",
      "heathcliff_kurokumo_cards_1",
      "heathcliff_shi_south_cards_2",
      "ishmael_base_1",
      "ishmael_base_5",
      "ishmael_lcb_cards_1",
      "ishmael_office_cards_3",
      "rodion_base_4",
      "rodion_base_6",
      "rodion_lcb_cards_3",
      "rodion_liu_cards_2",
      "sinclair_base_4",
      "sinclair_base_7",
      "sinclair_grip_cards_2",
      "sinclair_lcb_cards_2",
      "outis_blade_cards_1",
      "outis_molars_cards_3",
      "gregor_survivor_cards_1",
      "gregor_survivor_cards_2"
    ],
    색욕: [
      "faust_lobotomy_remnant_cards_1",
      "ryoshu_base_9",
      "ryoshu_red_eyes_penance_cards_3",
      "ryoshu_red_eyes_penance_upgrade_1",
      "ryoshu_red_eyes_ego",
      "yi_sang_base_4",
      "yi_sang_bullet_cards_1",
      "yi_sang_ring_cards_3",
      "faust_base_4",
      "faust_gripper_cards_2",
      "don_quixote_base_4",
      "don_quixote_base_7",
      "don_quixote_base_ego",
      "don_quixote_lcb_cards_3",
      "ryoshu_base_4",
      "ryoshu_base_5",
      "ryoshu_base_6",
      "ryoshu_base_7",
      "ryoshu_base_8",
      "ryoshu_base_ego",
      "ryoshu_lcb_cards_3",
      "ryoshu_wcorp_cards_2",
      "ryoshu_edgar_butler_cards_1",
      "ryoshu_chef_cards_1",
      "meursault_thumb_east_cards_1",
      "meursault_dead_rabbits_cards_2",
      "hong_lu_base_5",
      "hong_lu_lcb_cards_2",
      "hong_lu_kk_boss_cards_3",
      "heathcliff_base_3",
      "heathcliff_base_6",
      "heathcliff_lcb_cards_3",
      "heathcliff_kurokumo_cards_2",
      "heathcliff_shi_south_cards_1",
      "ishmael_base_2",
      "ishmael_kurokumo_cards_3",
      "rodion_base_2",
      "rodion_lamancha_cards_2",
      "rodion_lamancha_upgrade_1",
      "rodion_liu_cards_3",
      "sinclair_grip_cards_3",
      "sinclair_southern_shank_cards_1",
      "outis_wuthering_butler_cards_2",
      "outis_blade_cards_3",
      "outis_molars_cards_1",
      "gregor_base_7",
      "gregor_survivor_cards_3",
      "gregor_tides_cards_1"
    ],
    나태: [
      "meursault_pursuance_ego",
      "hong_lu_kcorp_excision_cards_2",
      "yi_sang_heishou_wu_cards_1",
      "yi_sang_base_5",
      "yi_sang_base_ego",
      "yi_sang_lcb_cards_2",
      "yi_sang_mourning_cards_3",
      "yi_sang_ring_cards_2",
      "faust_base_2",
      "faust_base_3",
      "faust_lcb_cards_2",
      "faust_index_cards_2",
      "don_quixote_base_6",
      "don_quixote_blade_cards_3",
      "don_quixote_wcorp_cards_3",
      "meursault_base_3",
      "meursault_base_4",
      "meursault_base_8",
      "meursault_lcb_cards_2",
      "meursault_thumb_east_cards_2",
      "hong_lu_base_1",
      "hong_lu_base_8",
      "hong_lu_lcb_cards_3",
      "hong_lu_full_stop_office_cards_2",
      "heathcliff_fox_rain_cards_3",
      "ishmael_base_7",
      "ishmael_edgar_butler_cards_2",
      "ishmael_office_cards_2",
      "sinclair_mariachi_cards_2",
      "outis_base_2",
      "outis_base_5",
      "outis_base_6",
      "outis_lcb_cards_3",
      "outis_molars_cards_2",
      "gregor_base_4",
      "gregor_base_8",
      "gregor_base_ego",
      "gregor_lcb_cards_2",
      "gregor_zwei_south_cards_1"
    ],
    탐식: [
      "hong_lu_base_9",
      "hong_lu_kcorp_excision_cards_1",
      "hong_lu_snare_ego",
      "yi_sang_base_9",
      "yi_sang_heishou_wu_cards_3",
      "yi_sang_heishou_wu_upgrade_1",
      "faust_base_1",
      "faust_base_5",
      "faust_lcb_cards_3",
      "faust_seven_south_cards_3",
      "don_quixote_base_1",
      "don_quixote_lcb_cards_2",
      "don_quixote_cinq_east_cards_1",
      "ryoshu_base_1",
      "ryoshu_base_2",
      "ryoshu_lcb_cards_2",
      "meursault_base_5",
      "meursault_cinq_west_cards_3",
      "meursault_dead_rabbits_cards_3",
      "hong_lu_base_3",
      "hong_lu_kk_boss_cards_1",
      "hong_lu_rcorp_reindeer_cards_1",
      "ishmael_base_3",
      "ishmael_base_8",
      "ishmael_lcb_cards_3",
      "ishmael_edgar_butler_cards_3",
      "rodion_base_3",
      "rodion_base_7",
      "rodion_lcb_cards_1",
      "sinclair_base_2",
      "sinclair_base_ego",
      "sinclair_middle_cards_1",
      "sinclair_southern_shank_cards_2",
      "gregor_base_5",
      "gregor_base_6",
      "gregor_lcb_cards_3",
      "gregor_zwei_south_cards_3",
      "gregor_tides_cards_2"
    ],
    우울: [
      "faust_lobotomy_remnant_cards_3",
      "don_quixote_fluid_sac_ego",
      "ryoshu_red_eyes_penance_cards_2",
      "yi_sang_base_1",
      "yi_sang_base_2",
      "yi_sang_base_6",
      "yi_sang_lcb_cards_3",
      "yi_sang_mourning_cards_1",
      "yi_sang_ring_cards_1",
      "faust_base_7",
      "faust_seven_south_cards_1",
      "faust_index_cards_1",
      "don_quixote_base_3",
      "don_quixote_wcorp_cards_2",
      "meursault_base_1",
      "meursault_base_6",
      "meursault_lcb_cards_1",
      "meursault_cinq_west_cards_1",
      "hong_lu_base_ego",
      "hong_lu_full_stop_office_cards_4",
      "heathcliff_fox_rain_cards_2",
      "ishmael_base_4",
      "ishmael_base_ego",
      "ishmael_lcb_cards_2",
      "ishmael_edgar_butler_cards_1",
      "ishmael_office_cards_1",
      "rodion_base_1",
      "rodion_lobotomy_cards_1",
      "rodion_lobotomy_cards_3",
      "sinclair_base_5",
      "sinclair_grip_cards_1",
      "sinclair_mariachi_cards_3",
      "outis_base_3",
      "outis_base_4",
      "outis_lcb_cards_1",
      "outis_wuthering_butler_cards_3",
      "gregor_base_1",
      "gregor_base_2",
      "gregor_base_3",
      "gregor_lcb_cards_1",
      "gregor_zwei_south_cards_2"
    ],
    오만: [
      "meursault_blade_mentor_cards_1",
      "meursault_blade_mentor_cards_2",
      "meursault_blade_mentor_cards_4",
      "hong_lu_kcorp_excision_cards_3",
      "yi_sang_fell_bullet_ego",
      "yi_sang_base_7",
      "yi_sang_mourning_cards_2",
      "yi_sang_bullet_cards_2",
      "faust_base_6",
      "faust_base_8",
      "faust_base_ego",
      "faust_lcb_cards_1",
      "faust_gripper_cards_3",
      "faust_index_cards_3",
      "don_quixote_blade_cards_2",
      "don_quixote_cinq_east_cards_3",
      "ryoshu_base_3",
      "ryoshu_lcb_cards_1",
      "ryoshu_wcorp_cards_1",
      "ryoshu_edgar_butler_cards_3",
      "meursault_base_2",
      "meursault_base_7",
      "meursault_base_ego",
      "meursault_lcb_cards_3",
      "meursault_cinq_west_cards_2",
      "hong_lu_base_2",
      "hong_lu_base_6",
      "hong_lu_base_7",
      "hong_lu_lcb_cards_1",
      "hong_lu_full_stop_office_cards_1",
      "hong_lu_full_stop_office_cards_3",
      "heathcliff_kurokumo_cards_3",
      "ishmael_base_6",
      "ishmael_kurokumo_cards_1",
      "rodion_base_5",
      "rodion_base_8",
      "rodion_base_ego",
      "rodion_lcb_cards_2",
      "rodion_lamancha_cards_1",
      "rodion_lobotomy_cards_4",
      "rodion_lobotomy_cards_5",
      "rodion_liu_cards_1",
      "sinclair_base_1",
      "sinclair_base_8",
      "sinclair_lcb_cards_1",
      "sinclair_southern_shank_cards_3",
      "outis_base_1",
      "outis_base_7",
      "outis_base_8",
      "outis_base_ego",
      "outis_lcb_cards_2",
      "outis_wuthering_butler_cards_1",
      "outis_blade_cards_2"
    ],
    질투: [
      "faust_base_9",
      "faust_lobotomy_remnant_cards_2",
      "don_quixote_base_9",
      "don_quixote_love_and_hate_cards_2",
      "don_quixote_love_and_hate_cards_3",
      "don_quixote_love_and_hate_cards_5",
      "don_quixote_love_and_hate_cards_6",
      "ryoshu_red_eyes_penance_cards_1",
      "meursault_base_9",
      "yi_sang_heishou_wu_cards_2",
      "yi_sang_base_3",
      "yi_sang_base_8",
      "yi_sang_lcb_cards_1",
      "faust_gripper_cards_1",
      "faust_seven_south_cards_2",
      "don_quixote_base_2",
      "don_quixote_base_8",
      "don_quixote_lcb_cards_1",
      "don_quixote_blade_cards_1",
      "don_quixote_wcorp_cards_1",
      "ryoshu_wcorp_cards_3",
      "ryoshu_chef_cards_3",
      "hong_lu_base_4",
      "hong_lu_kk_boss_cards_2",
      "hong_lu_rcorp_reindeer_cards_2",
      "heathcliff_base_1",
      "heathcliff_base_5",
      "heathcliff_base_ego",
      "heathcliff_lcb_cards_2",
      "heathcliff_fox_rain_cards_1",
      "heathcliff_shi_south_cards_3",
      "ishmael_kurokumo_cards_2",
      "ishmael_office_cards_4",
      "rodion_lamancha_cards_3",
      "rodion_lobotomy_cards_2",
      "rodion_lobotomy_cards_6",
      "sinclair_base_3",
      "sinclair_base_6",
      "sinclair_lcb_cards_3",
      "sinclair_mariachi_cards_1",
      "sinclair_middle_cards_2",
      "sinclair_middle_cards_3",
      "gregor_tides_cards_3"
    ]
  };

  const UPGRADE_CARD_SETS = {
    yi_sang_heishou_wu: 1,
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
    ishmael_kurokumo_unique_1: "status",
    ishmael_office_unique_1: "stack",
    rodion_lamancha_unique_1: "stack",
    rodion_lamancha_unique_2: "stack",
    rodion_lobotomy_unique_1: "status",
    rodion_lobotomy_unique_2: "status",
    sinclair_grip_unique_1: "status",
    sinclair_mariachi_unique_1: "stack",
    sinclair_middle_unique_1: "stack",
    sinclair_middle_unique_2: "status",
    sinclair_southern_shank_unique_1: "status",
    outis_wuthering_butler_unique_1: "status",
    gregor_zwei_south_unique_1: "stack",
    gregor_zwei_south_unique_2: "status",
    gregor_survivor_unique_1: "stack",
    gregor_survivor_unique_2: "stack"
  };

  const SHARED_SPECIAL_CARDS = [
    {
      id: "shared_nail_stack",
      title: "못",
      category: "stack",
      sinnerId: "sinclair",
      identityId: "sinclair_grip",
      image: "assets/keywords/keyword_+/못.png",
      tags: ["못"]
    },
    {
      id: "shared_tusik_stack",
      title: "투.식. (스택)",
      category: "stack",
      sinnerId: "ryoshu",
      identityId: "ryoshu_edgar_butler",
      image: "assets/keywords/keyword_+/투.식. ( 스택 ).png",
      tags: ["투.식."]
    },
    {
      id: "shared_tusik_card",
      title: "투.식.",
      category: "card",
      sinnerId: "ryoshu",
      identityId: "ryoshu_edgar_butler",
      image: "assets/keywords/keyword_+/투.식..png",
      tags: ["투.식."]
    },
    {
      id: "shared_cooking_stack",
      title: "조리 중",
      category: "stack",
      sinnerId: "ryoshu",
      identityId: "ryoshu_chef",
      image: "assets/keywords/keyword_+/조리 중.png",
      tags: ["조리 중"]
    },
    {
      id: "shared_tremor_keyword_card",
      title: "진동",
      category: "card",
      sinnerId: null,
      identityId: null,
      image: "assets/keywords/cards/tremor.png",
      tags: ["진동폭발"]
    },
    {
      id: "shared_paralysis_card",
      title: "마비",
      category: "card",
      sinnerId: "gregor",
      identityId: "gregor_tides",
      image: "assets/keywords/cards/마비.png",
      tags: ["마비"]
    },
    {
      id: "shared_panic_card",
      title: "패닉",
      category: "card",
      sinnerId: null,
      identityId: null,
      image: "assets/keywords/cards/패닉.png",
      tags: ["침잠"]
    }
  ];

  const TAG_ASSET_IDS = {
    진동: "tremor",
    출혈: "bleed",
    침잠: "sinking",
    호흡: "poise",
    화상: "burn",
    파열: "rupture",
    충전: "charge",
    못: {
      icon: "못",
      card: "../keyword_+/못"
    },
    마비: {
      icon: "마비",
      card: "마비"
    },
    "투.식.": {
      icon: "투.식.",
      card: "../keyword_+/투.식."
    },
    "조리 중": {
      icon: "조리 중",
      card: "../keyword_+/조리 중"
    },
    "산나비+죽은나비": {
      icon: "산나비+죽은나비",
      card: "../../sinners/yi_sang/mourning/unique/01"
    },
    "찢어진 추억": {
      icon: "찢어진 추억",
      card: "../../sinners/yi_sang/bullet/unique/01"
    },
    진동폭발: {
      icon: "진동폭발",
      card: "tremor"
    },
    "축제의 열기": {
      icon: "축제의 열기",
      card: "../../sinners/rodion/lamancha/unique/01"
    }
  };

  const getTagAssetId = (tag, kind) => {
    const assetId = TAG_ASSET_IDS[tag] || tag;
    if (typeof assetId === "string") return assetId;
    return assetId[kind] || assetId.icon || assetId.card || tag;
  };

  const getKeywordIconPath = (tag) => `assets/keywords/icons/${getTagAssetId(tag, "icon")}.png`;
  const getKeywordCardImagePath = (tag) => `assets/keywords/cards/${getTagAssetId(tag, "card")}.png`;

  const EFFECT_ASSET_IDS = {
    가드회복: "guard_restore",
    체력회복: "hp_restore",
    드로우: "draw",
    버리기: "discard",
    "덱 이동": "deck_shuffle",
    위력증가: "power_up",
    위력감소: "opponent_power_down",
    "최대 합 위력 변경": "max_clash_power_change",
    "전체 데미지 증가": "hp_damage_up",
    "가드뎀 증가": "guard_damage_up",
    "체력뎀 증가": "damage_up",
    필중: "sure_hit",
    코인토스: "chain_continue",
    "효과 데미지": "effect_damage",
    "상대 데미지 감소": "opponent_damage_down",
    "받는 데미지 감소": "damage_reduce",
    재사용: "reuse",
    "죄악 변경": "sin_change",
    "상태 변경": "status_change",
    "효과 변경": "status_change",
    "특수 키워드 획득": "unique_stack",
    "상대 방해": "opponent_power_down",
    "수감자 교체": "sinner_switch",
    "다른 카드로 취급": "treated_as_other_card",
    자해기믹: "self_damage",
    "체인 관련": "chain_related"
  };

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
  const effectsByCardId = {};
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

  Object.entries(CARD_EFFECTS).forEach(([effect, cardIds]) => {
    cardIds.forEach((cardId) => {
      if (!effectsByCardId[cardId]) effectsByCardId[cardId] = [];
      effectsByCardId[cardId].push(effect);
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
      cardEffects: CARD_EFFECTS,
      cardAttackTypes: CARD_ATTACK_TYPES,
      cardSins: CARD_SINS,
      upgradeCardSets: UPGRADE_CARD_SETS,
      uniqueCardTypes: UNIQUE_CARD_TYPES,
      sharedSpecialCards: SHARED_SPECIAL_CARDS
    },
    sinners,
    identities,
    sinnerById,
    identityById,
    identitiesBySinnerId,
    identityTagFilters: Object.keys(IDENTITY_TAGS).map((tag) => ({
      tag,
      image: getKeywordIconPath(tag),
      cardImage: getKeywordCardImagePath(tag)
    })),
    cardTagFilters: Object.keys(CARD_TAGS).map((tag) => ({
      tag,
      image: getKeywordIconPath(tag),
      cardImage: getKeywordCardImagePath(tag)
    })),
    cardEffectFilters: Object.keys(CARD_EFFECTS).map((effect) => ({
      effect,
      image: `assets/effects/icons/${EFFECT_ASSET_IDS[effect] || effect}.png`
    })),
    cardAttackTypeFilters: Object.keys(CARD_ATTACK_TYPES).map((attackType) => ({
      attackType,
      image: `assets/attack-types/icons/${ATTACK_TYPE_ASSET_IDS[attackType] || attackType}.png`
    })),
    identityIdsByTag: IDENTITY_TAGS,
    cardIdsByTag: CARD_TAGS,
    cardIdsByEffect: CARD_EFFECTS,
    cardIdsByAttackType: CARD_ATTACK_TYPES,
    cardIdsBySin: CARD_SINS,
    uniqueCardTypes: UNIQUE_CARD_TYPES,
    egoUniqueCardSets: EGO_UNIQUE_CARD_SETS,
    sharedSpecialCards: SHARED_SPECIAL_CARDS,
    tagsByIdentityId,
    tagsByCardId,
    effectsByCardId,
    attackTypeByCardId,
    sinByCardId
  };
})();
