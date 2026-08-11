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
      tides: [3, 1]
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
  "참격": ["yi_sang_base_9","yi_sang_lcb_cards_1","yi_sang_lcb_cards_3","yi_sang_heishou_wu_cards_1","yi_sang_heishou_wu_cards_2","yi_sang_heishou_wu_cards_3","yi_sang_heishou_wu_upgrade_1","faust_base_1","faust_base_4","faust_base_7","faust_base_9","faust_seven_south_cards_1","faust_seven_south_cards_2","faust_seven_south_cards_3","faust_index_cards_1","faust_index_cards_2","faust_index_cards_3","faust_lobotomy_remnant_cards_1","faust_lobotomy_remnant_cards_3","don_quixote_base_6","don_quixote_blade_cards_2","don_quixote_blade_cards_3","don_quixote_wcorp_cards_1","don_quixote_wcorp_cards_3","ryoshu_base_2","ryoshu_base_4","ryoshu_lcb_cards_1","ryoshu_lcb_cards_2","ryoshu_lcb_cards_3","ryoshu_wcorp_cards_1","ryoshu_wcorp_cards_2","ryoshu_wcorp_cards_3","ryoshu_edgar_butler_cards_1","ryoshu_edgar_butler_cards_2","ryoshu_edgar_butler_cards_3","ryoshu_chef_cards_1","ryoshu_chef_cards_3","meursault_base_9","meursault_thumb_east_cards_1","meursault_thumb_east_cards_2","meursault_blade_mentor_cards_1","meursault_blade_mentor_cards_2","meursault_blade_mentor_cards_3","hong_lu_base_3","hong_lu_base_4","hong_lu_lcb_cards_2","hong_lu_kk_boss_cards_1","hong_lu_kk_boss_cards_3","hong_lu_full_stop_office_cards_4","hong_lu_kcorp_excision_cards_1","hong_lu_kcorp_excision_cards_3","heathcliff_kurokumo_cards_1","heathcliff_kurokumo_cards_2","heathcliff_kurokumo_cards_3","heathcliff_shi_south_cards_1","heathcliff_shi_south_cards_3","ishmael_base_8","ishmael_kurokumo_cards_1","ishmael_kurokumo_cards_2","ishmael_kurokumo_cards_3","ishmael_edgar_butler_cards_2","ishmael_edgar_butler_cards_3","ishmael_office_cards_1","ishmael_office_cards_2","ishmael_office_cards_3","ishmael_office_cards_4","rodion_base_1","rodion_base_4","rodion_lcb_cards_1","rodion_lcb_cards_2","rodion_lcb_cards_3","rodion_lobotomy_cards_4","rodion_devyat_north_cards_1","rodion_devyat_north_cards_2","rodion_devyat_north_cards_3","sinclair_base_1","sinclair_base_3","sinclair_base_4","sinclair_lcb_cards_1","sinclair_lcb_cards_2","sinclair_lcb_cards_3","outis_base_5","outis_lcb_cards_2","outis_blade_cards_1","outis_blade_cards_2","outis_molars_cards_1","gregor_base_5","gregor_lcb_cards_1","gregor_zwei_south_cards_1","gregor_zwei_south_cards_2","gregor_zwei_south_cards_3","gregor_tides_cards_2","gregor_tides_cards_3","ryoshu_red_eyes_ego","ryoshu_base_ego","rodion_base_ego","sinclair_base_ego"],
  "관통": ["yi_sang_base_3","yi_sang_base_4","yi_sang_base_7","yi_sang_lcb_cards_2","yi_sang_mourning_cards_1","yi_sang_mourning_cards_2","yi_sang_mourning_cards_3","yi_sang_bullet_cards_2","yi_sang_bullet_cards_3","yi_sang_ring_cards_1","yi_sang_ring_cards_2","yi_sang_ring_cards_3","faust_lcb_cards_3","faust_gripper_cards_1","faust_gripper_cards_2","faust_lobotomy_remnant_cards_2","don_quixote_base_1","don_quixote_base_2","don_quixote_base_4","don_quixote_lcb_cards_1","don_quixote_lcb_cards_2","don_quixote_lcb_cards_3","don_quixote_blade_cards_1","don_quixote_cinq_east_cards_1","don_quixote_cinq_east_cards_2","don_quixote_cinq_east_cards_3","don_quixote_wcorp_cards_2","ryoshu_chef_cards_2","meursault_cinq_west_cards_1","meursault_cinq_west_cards_2","meursault_cinq_west_cards_3","meursault_dead_rabbits_cards_1","meursault_blade_mentor_cards_4","hong_lu_base_8","hong_lu_kk_boss_cards_2","hong_lu_full_stop_office_cards_1","hong_lu_full_stop_office_cards_2","hong_lu_full_stop_office_cards_3","heathcliff_base_8","heathcliff_fox_rain_cards_3","heathcliff_shi_south_cards_2","heathcliff_full_stop_office_cards_1","heathcliff_full_stop_office_cards_2","heathcliff_full_stop_office_cards_3","heathcliff_full_stop_office_upgrade_1","ishmael_base_3","rodion_base_6","rodion_lamancha_cards_1","rodion_lamancha_cards_2","rodion_lamancha_cards_3","rodion_lamancha_upgrade_1","rodion_lobotomy_cards_1","rodion_lobotomy_cards_2","rodion_lobotomy_cards_3","rodion_lobotomy_cards_5","rodion_lobotomy_cards_6","rodion_liu_cards_2","rodion_liu_cards_3","sinclair_base_8","sinclair_southern_shank_cards_1","sinclair_southern_shank_cards_2","sinclair_southern_shank_cards_3","outis_base_3","outis_base_4","outis_lcb_cards_1","outis_lcb_cards_3","outis_blade_cards_3","gregor_base_1","gregor_base_3","gregor_lcb_cards_2","gregor_lcb_cards_3","yi_sang_base_ego","don_quixote_base_ego","ishmael_base_ego","outis_base_ego","yi_sang_fell_bullet_ego"],
  "타격": ["yi_sang_base_2","yi_sang_bullet_cards_1","faust_base_3","faust_lcb_cards_1","faust_lcb_cards_2","faust_gripper_cards_3","don_quixote_base_9","don_quixote_love_and_hate_cards_1","don_quixote_love_and_hate_cards_2","don_quixote_love_and_hate_cards_3","don_quixote_love_and_hate_cards_4","don_quixote_love_and_hate_cards_5","don_quixote_love_and_hate_cards_6","ryoshu_base_1","ryoshu_red_eyes_penance_cards_1","ryoshu_red_eyes_penance_cards_2","ryoshu_red_eyes_penance_cards_3","ryoshu_red_eyes_penance_upgrade_1","meursault_base_1","meursault_base_2","meursault_base_5","meursault_base_8","meursault_lcb_cards_1","meursault_lcb_cards_2","meursault_lcb_cards_3","meursault_thumb_east_cards_3","meursault_thumb_east_upgrade_1","meursault_dead_rabbits_cards_2","meursault_dead_rabbits_cards_3","hong_lu_base_5","hong_lu_lcb_cards_1","hong_lu_lcb_cards_3","hong_lu_rcorp_reindeer_cards_1","hong_lu_rcorp_reindeer_cards_2","hong_lu_rcorp_reindeer_cards_3","hong_lu_kcorp_excision_cards_2","heathcliff_base_2","heathcliff_base_4","heathcliff_base_5","heathcliff_lcb_cards_1","heathcliff_lcb_cards_2","heathcliff_lcb_cards_3","heathcliff_fox_rain_cards_1","heathcliff_fox_rain_cards_2","ishmael_base_2","ishmael_base_4","ishmael_lcb_cards_1","ishmael_lcb_cards_2","ishmael_lcb_cards_3","ishmael_edgar_butler_cards_1","ishmael_zwei_west_cards_1","ishmael_zwei_west_cards_2","ishmael_zwei_west_cards_3","rodion_base_2","rodion_liu_cards_1","sinclair_base_5","sinclair_grip_cards_1","sinclair_grip_cards_2","sinclair_grip_cards_3","sinclair_mariachi_cards_1","sinclair_mariachi_cards_2","sinclair_mariachi_cards_3","sinclair_middle_cards_1","sinclair_middle_cards_2","sinclair_middle_cards_3","outis_wuthering_butler_cards_1","outis_wuthering_butler_cards_2","outis_wuthering_butler_cards_3","outis_molars_cards_2","outis_molars_cards_3","gregor_base_8","gregor_survivor_cards_1","gregor_survivor_cards_2","gregor_survivor_cards_3","gregor_tides_cards_1","faust_ardor_blossom_ego","don_quixote_fluid_sac_ego","meursault_pursuance_ego","hong_lu_snare_ego","hong_lu_base_ego","heathcliff_base_ego","gregor_base_ego"],
  "스킬": ["yi_sang_base_1","yi_sang_base_5","yi_sang_base_6","yi_sang_base_8","faust_base_2","faust_base_5","faust_base_6","faust_base_8","don_quixote_base_3","don_quixote_base_5","don_quixote_base_7","don_quixote_base_8","ryoshu_base_3","ryoshu_base_5","ryoshu_base_6","ryoshu_base_7","ryoshu_base_8","ryoshu_base_9","meursault_base_3","meursault_base_4","meursault_base_6","meursault_base_7","hong_lu_base_1","hong_lu_base_2","hong_lu_base_6","hong_lu_base_7","hong_lu_base_9","heathcliff_base_1","heathcliff_base_3","heathcliff_base_6","heathcliff_base_7","ishmael_base_1","ishmael_base_5","ishmael_base_6","ishmael_base_7","rodion_base_3","rodion_base_5","rodion_base_7","rodion_base_8","sinclair_base_2","sinclair_base_6","sinclair_base_7","outis_base_1","outis_base_2","outis_base_6","outis_base_7","outis_base_8","gregor_base_2","gregor_base_4","gregor_base_6","gregor_base_7","faust_base_ego","meursault_base_ego"]
};
    const CARD_SINS = {
  "분노": ["yi_sang_bullet_cards_1","don_quixote_base_8","don_quixote_cinq_east_cards_2","don_quixote_love_and_hate_cards_1","don_quixote_love_and_hate_cards_4","ryoshu_edgar_butler_cards_3","ryoshu_chef_cards_1","meursault_thumb_east_cards_3","meursault_thumb_east_upgrade_1","meursault_dead_rabbits_cards_1","meursault_blade_mentor_cards_3","hong_lu_rcorp_reindeer_cards_3","heathcliff_base_1","heathcliff_base_4","heathcliff_base_7","heathcliff_base_8","heathcliff_lcb_cards_2","heathcliff_kurokumo_cards_1","heathcliff_shi_south_cards_2","ishmael_base_1","ishmael_base_4","ishmael_lcb_cards_1","ishmael_office_cards_1","rodion_base_2","rodion_base_8","rodion_lcb_cards_3","rodion_liu_cards_2","rodion_devyat_north_cards_2","sinclair_base_3","sinclair_base_6","sinclair_grip_cards_2","sinclair_lcb_cards_2","outis_blade_cards_1","outis_molars_cards_1","gregor_survivor_cards_2","gregor_survivor_cards_3","faust_ardor_blossom_ego"],
  "색욕": ["yi_sang_base_8","yi_sang_bullet_cards_2","yi_sang_ring_cards_2","faust_base_6","faust_gripper_cards_2","faust_lobotomy_remnant_cards_1","don_quixote_base_3","don_quixote_base_4","don_quixote_lcb_cards_1","ryoshu_base_4","ryoshu_base_5","ryoshu_base_6","ryoshu_base_7","ryoshu_base_8","ryoshu_base_9","ryoshu_lcb_cards_2","ryoshu_wcorp_cards_1","ryoshu_edgar_butler_cards_1","ryoshu_chef_cards_3","ryoshu_red_eyes_penance_cards_3","ryoshu_red_eyes_penance_upgrade_1","meursault_thumb_east_cards_1","meursault_dead_rabbits_cards_2","hong_lu_base_3","hong_lu_lcb_cards_3","hong_lu_kk_boss_cards_2","heathcliff_base_5","heathcliff_base_6","heathcliff_lcb_cards_3","heathcliff_kurokumo_cards_3","heathcliff_shi_south_cards_1","ishmael_base_6","ishmael_kurokumo_cards_3","rodion_base_6","rodion_lamancha_cards_2","rodion_lamancha_upgrade_1","rodion_liu_cards_3","rodion_devyat_north_cards_1","sinclair_grip_cards_3","sinclair_southern_shank_cards_1","outis_wuthering_butler_cards_3","outis_blade_cards_3","outis_molars_cards_2","gregor_base_8","gregor_survivor_cards_1","gregor_tides_cards_1","don_quixote_base_ego","ryoshu_base_ego","ryoshu_red_eyes_ego"],
  "나태": ["yi_sang_base_3","yi_sang_lcb_cards_3","yi_sang_mourning_cards_3","yi_sang_ring_cards_3","yi_sang_heishou_wu_cards_1","faust_base_1","faust_base_2","faust_lcb_cards_2","faust_index_cards_1","don_quixote_base_6","don_quixote_blade_cards_3","don_quixote_wcorp_cards_1","meursault_base_4","meursault_base_5","meursault_base_7","meursault_lcb_cards_2","meursault_thumb_east_cards_2","hong_lu_base_1","hong_lu_base_5","hong_lu_lcb_cards_2","hong_lu_full_stop_office_cards_1","hong_lu_kcorp_excision_cards_3","heathcliff_fox_rain_cards_3","ishmael_base_7","ishmael_edgar_butler_cards_1","ishmael_office_cards_2","sinclair_mariachi_cards_2","outis_base_2","outis_base_5","outis_base_8","outis_lcb_cards_1","outis_molars_cards_3","gregor_base_3","gregor_base_6","gregor_lcb_cards_3","gregor_zwei_south_cards_1","yi_sang_base_ego","meursault_pursuance_ego","gregor_base_ego"],
  "탐식": ["yi_sang_base_9","yi_sang_heishou_wu_cards_3","yi_sang_heishou_wu_upgrade_1","faust_base_3","faust_base_7","faust_lcb_cards_3","faust_seven_south_cards_3","don_quixote_base_1","don_quixote_lcb_cards_3","don_quixote_cinq_east_cards_1","ryoshu_base_1","ryoshu_base_3","ryoshu_lcb_cards_1","meursault_base_8","meursault_cinq_west_cards_3","meursault_dead_rabbits_cards_3","hong_lu_base_6","hong_lu_base_9","hong_lu_kk_boss_cards_3","hong_lu_rcorp_reindeer_cards_1","hong_lu_kcorp_excision_cards_2","ishmael_base_2","ishmael_base_5","ishmael_lcb_cards_2","ishmael_edgar_butler_cards_2","ishmael_zwei_west_cards_3","rodion_base_1","rodion_base_3","rodion_lcb_cards_1","rodion_devyat_north_cards_3","sinclair_base_8","sinclair_middle_cards_1","sinclair_southern_shank_cards_2","gregor_base_4","gregor_base_5","gregor_lcb_cards_2","gregor_zwei_south_cards_2","gregor_tides_cards_2","hong_lu_snare_ego","sinclair_base_ego"],
  "우울": ["yi_sang_base_1","yi_sang_base_4","yi_sang_base_6","yi_sang_lcb_cards_1","yi_sang_mourning_cards_2","yi_sang_ring_cards_1","faust_base_8","faust_seven_south_cards_2","faust_index_cards_3","faust_lobotomy_remnant_cards_2","don_quixote_base_7","don_quixote_wcorp_cards_2","ryoshu_red_eyes_penance_cards_2","meursault_base_1","meursault_base_6","meursault_lcb_cards_1","meursault_cinq_west_cards_1","hong_lu_full_stop_office_cards_2","heathcliff_fox_rain_cards_2","heathcliff_full_stop_office_cards_1","ishmael_base_3","ishmael_lcb_cards_3","ishmael_edgar_butler_cards_3","ishmael_office_cards_3","rodion_base_7","rodion_lobotomy_cards_1","rodion_lobotomy_cards_4","sinclair_base_7","sinclair_grip_cards_1","sinclair_mariachi_cards_3","outis_base_3","outis_base_6","outis_lcb_cards_3","outis_wuthering_butler_cards_2","gregor_base_1","gregor_base_2","gregor_base_7","gregor_lcb_cards_1","gregor_zwei_south_cards_3","don_quixote_fluid_sac_ego","hong_lu_base_ego","ishmael_base_ego"],
  "오만": ["yi_sang_base_7","yi_sang_mourning_cards_1","yi_sang_bullet_cards_3","faust_base_4","faust_base_5","faust_lcb_cards_1","faust_gripper_cards_3","faust_index_cards_2","don_quixote_blade_cards_1","don_quixote_cinq_east_cards_3","ryoshu_base_2","ryoshu_lcb_cards_3","ryoshu_wcorp_cards_2","ryoshu_edgar_butler_cards_2","meursault_base_2","meursault_base_3","meursault_lcb_cards_3","meursault_cinq_west_cards_2","meursault_blade_mentor_cards_1","meursault_blade_mentor_cards_2","meursault_blade_mentor_cards_4","hong_lu_base_2","hong_lu_base_4","hong_lu_base_8","hong_lu_lcb_cards_1","hong_lu_full_stop_office_cards_3","hong_lu_full_stop_office_cards_4","hong_lu_kcorp_excision_cards_1","heathcliff_kurokumo_cards_2","heathcliff_full_stop_office_cards_3","heathcliff_full_stop_office_upgrade_1","ishmael_base_8","ishmael_kurokumo_cards_2","ishmael_zwei_west_cards_1","rodion_base_4","rodion_base_5","rodion_lcb_cards_2","rodion_lamancha_cards_1","rodion_lobotomy_cards_3","rodion_lobotomy_cards_6","rodion_liu_cards_1","sinclair_base_2","sinclair_base_4","sinclair_base_5","sinclair_lcb_cards_1","sinclair_southern_shank_cards_3","outis_base_1","outis_base_4","outis_base_7","outis_lcb_cards_2","outis_wuthering_butler_cards_1","outis_blade_cards_2","yi_sang_fell_bullet_ego","faust_base_ego","meursault_base_ego","rodion_base_ego","outis_base_ego"],
  "질투": ["yi_sang_base_2","yi_sang_base_5","yi_sang_lcb_cards_2","yi_sang_heishou_wu_cards_2","faust_base_9","faust_gripper_cards_1","faust_seven_south_cards_1","faust_lobotomy_remnant_cards_3","don_quixote_base_2","don_quixote_base_5","don_quixote_base_9","don_quixote_lcb_cards_2","don_quixote_blade_cards_2","don_quixote_wcorp_cards_3","don_quixote_love_and_hate_cards_2","don_quixote_love_and_hate_cards_3","don_quixote_love_and_hate_cards_5","don_quixote_love_and_hate_cards_6","ryoshu_wcorp_cards_3","ryoshu_chef_cards_2","ryoshu_red_eyes_penance_cards_1","meursault_base_9","hong_lu_base_7","hong_lu_kk_boss_cards_1","hong_lu_rcorp_reindeer_cards_2","heathcliff_base_2","heathcliff_base_3","heathcliff_lcb_cards_1","heathcliff_fox_rain_cards_1","heathcliff_shi_south_cards_3","heathcliff_full_stop_office_cards_2","ishmael_kurokumo_cards_1","ishmael_office_cards_4","ishmael_zwei_west_cards_2","rodion_lamancha_cards_3","rodion_lobotomy_cards_2","rodion_lobotomy_cards_5","sinclair_base_1","sinclair_lcb_cards_3","sinclair_mariachi_cards_1","sinclair_middle_cards_2","sinclair_middle_cards_3","gregor_tides_cards_3","heathcliff_base_ego"]
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
    ryoshu_edgar_butler_unique_2: "stack",
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
    gregor_survivor_unique_2: "stack",
    gregor_tides_unique_1: "stack"
  };


  const TAG_ASSET_IDS = {
    화상: "01",
    출혈: "02",
    진동: "03",
    파열: "04",
    침잠: "05",
    호흡: "06",
    충전: "07"
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
  const SINNER_NUMBERS = Object.fromEntries(
    Object.keys(CARD_SETS).map((sinnerId, index) => [sinnerId, index + 1])
  );
  const NORMAL_KEYWORD_CODES = {
    화상: "K-1",
    출혈: "K-2",
    진동: "K-3",
    파열: "K-4",
    침잠: "K-5",
    호흡: "K-6",
    충전: "K-7",
    패닉: "K-8"
  };
  const stableCodeById = {};
  const idByStableCode = {};
  const stableCodeDuplicates = [];

  const getIdentityNumber = (sinnerId, identityKey) => {
    const identityKeys = Object.keys(CARD_SETS[sinnerId]?.[2] || {});
    const index = identityKeys.indexOf(identityKey);
    return index >= 0 ? index + 1 : null;
  };

  const getEgoNumber = (sinnerId, egoKey = "base") => {
    if (egoKey === "base") return 1;
    const index = (EXTRA_EGO_CARD_SETS[sinnerId] || []).indexOf(egoKey);
    return index >= 0 ? index + 2 : null;
  };

  const registerStableCode = (id, code) => {
    if (!id || !code) return code;
    if (idByStableCode[code] && idByStableCode[code] !== id) {
      stableCodeDuplicates.push({ code, ids: [idByStableCode[code], id] });
      return code;
    }
    stableCodeById[id] = code;
    idByStableCode[code] = id;
    return code;
  };

  const getIdentityCode = (sinnerId, identityKey) => `${SINNER_NUMBERS[sinnerId]}-I-${getIdentityNumber(sinnerId, identityKey)}`;
  const getBaseCardCode = (sinnerId, number) => `${SINNER_NUMBERS[sinnerId]}-B-${number}`;
  const getBaseUniqueCardCode = (sinnerId, number) => `${SINNER_NUMBERS[sinnerId]}-BX-${number}`;
  const getIdentityCardCode = (sinnerId, identityKey, number) => `${SINNER_NUMBERS[sinnerId]}-C-${getIdentityNumber(sinnerId, identityKey)}-${number}`;
  const getIdentityUniqueCardCode = (sinnerId, identityKey, number) => `${SINNER_NUMBERS[sinnerId]}-X-${getIdentityNumber(sinnerId, identityKey)}-${number}`;
  const getIdentityUpgradeCardCode = (sinnerId, identityKey, number) => `${SINNER_NUMBERS[sinnerId]}-U-${getIdentityNumber(sinnerId, identityKey)}-${number}`;
  const getEgoCardCode = (sinnerId, egoKey = "base") => `${SINNER_NUMBERS[sinnerId]}-E-${getEgoNumber(sinnerId, egoKey)}`;
  const getEgoUniqueCardCode = (sinnerId, egoKey, number) => `${SINNER_NUMBERS[sinnerId]}-EX-${getEgoNumber(sinnerId, egoKey)}-${number}`;

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

  Object.entries(CARD_SETS).forEach(([sinnerId, [baseCount, baseUniqueCount, identitySet]]) => {
    const sinner = {
      id: sinnerId,
      icon: `assets/sinners/${sinnerId}/icon.png`
    };

    sinners.push(sinner);
    sinnerById[sinnerId] = sinner;
    identitiesBySinnerId[sinnerId] = [];

    for (let number = 1; number <= baseCount; number += 1) {
      registerStableCode(`${sinnerId}_base_${number}`, getBaseCardCode(sinnerId, number));
    }

    for (let number = 1; number <= baseUniqueCount; number += 1) {
      registerStableCode(`${sinnerId}_base_unique_${number}`, getBaseUniqueCardCode(sinnerId, number));
    }

    ["base", ...(EXTRA_EGO_CARD_SETS[sinnerId] || [])].forEach((egoKey) => {
      const egoId = `${sinnerId}_${egoKey}_ego`;
      registerStableCode(egoId, getEgoCardCode(sinnerId, egoKey));

      const uniqueCount = EGO_UNIQUE_CARD_SETS[sinnerId]?.[egoKey] || 0;
      for (let number = 1; number <= uniqueCount; number += 1) {
        registerStableCode(`${egoId}_unique_${number}`, getEgoUniqueCardCode(sinnerId, egoKey, number));
      }
    });

    Object.entries(identitySet).forEach(([identityKey, [cardCount, uniqueCount]]) => {
      const identityId = `${sinnerId}_${identityKey}`;
      const tags = tagsByIdentityId[identityId] || [];
      const identity = {
        id: identityId,
        code: registerStableCode(identityId, getIdentityCode(sinnerId, identityKey)),
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
            code: registerStableCode(`${identityId}_unique_${number}`, getIdentityUniqueCardCode(sinnerId, identityKey, number)),
            image: `assets/sinners/${sinnerId}/${identityKey}/unique/${padNumber(number)}.png`
          };
        }),
        upgradeCards: Array.from({ length: UPGRADE_CARD_SETS[identityId] || 0 }, (_, index) => {
          const number = index + 1;
          return {
            id: `${identityId}_upgrade_${number}`,
            code: registerStableCode(`${identityId}_upgrade_${number}`, getIdentityUpgradeCardCode(sinnerId, identityKey, number)),
            image: `assets/sinners/${sinnerId}/${identityKey}/unique/upgrade/${padNumber(number)}.png`
          };
        })
      };

      for (let number = 1; number <= cardCount; number += 1) {
        registerStableCode(`${identityId}_cards_${number}`, getIdentityCardCode(sinnerId, identityKey, number));
      }

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
      code: NORMAL_KEYWORD_CODES[tag] || null,
      image: getKeywordIconPath(tag),
      cardImage: getKeywordCardImagePath(tag)
    })),
    cardTagFilters: Object.keys(TAG_ASSET_IDS).map((tag) => ({
      tag,
      code: NORMAL_KEYWORD_CODES[tag] || null,
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
    stableCodeById,
    idByStableCode,
    stableCodeDuplicates,
    keywordStableCodes: NORMAL_KEYWORD_CODES,
    sinnerNumbers: SINNER_NUMBERS,
    egoUniqueCardSets: EGO_UNIQUE_CARD_SETS,
    tagsByIdentityId,
    tagsByCardId,
    attackTypeByCardId,
    sinByCardId
  };
})();
