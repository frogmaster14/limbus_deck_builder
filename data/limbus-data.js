// 림딱 빌더 2.0 데이터 초안
// 숫자는 모두 1부터 시작하고, 카드 ID에는 0을 채우지 않는다.
//
// CARD_SETS
// 수감자: [기본카드수, 기본고유추가카드수, { 인격키: [인격카드수, 인격고유추가카드수] }]
// 고유추가카드수는 옛 autoCount를 믿지 말고, 실제 고유 추가 카드가 확인된 것만 직접 올린다.
// 카드 ID 규칙:
// - 기본 카드: `${sinnerId}_base_${n}`
// - 인격 카드: `${sinnerId}_${identityKey}_cards_${n}`
// - 인격 고유 추가 카드: `${sinnerId}_${identityKey}_unique_${n}`
// - 인격 강화 카드: `${sinnerId}_${identityKey}_upgrade_${n}`
// - 수감자 기본 고유 추가 카드: `${sinnerId}_base_unique_${n}`
//
// 이미지 경로 규칙:
// - 수감자 아이콘: `assets/sinners/${sinnerId}/icon.png`
// - 기본 카드: `assets/sinners/${sinnerId}/base/${nn}.png`
// - 기본 고유 추가 카드: `assets/sinners/${sinnerId}/base/unique/${nn}.png`
// - 인격: `assets/sinners/${sinnerId}/${identityKey}/identity.png`
// - 인격 카드: `assets/sinners/${sinnerId}/${identityKey}/${nn}.png`
// - 인격 고유 추가 카드: `assets/sinners/${sinnerId}/${identityKey}/unique/${nn}.png`
// - 인격 강화 카드: `assets/sinners/${sinnerId}/${identityKey}/unique/upgrade/${nn}.png`
// - EGO 카드: `assets/sinners/${sinnerId}/ego/${nn}.png`
//   기본 EGO는 00, 추가 EGO는 EXTRA_EGO_CARD_SETS 순서대로 01, 02, 03...을 쓴다.
// - 키워드 카드: `assets/keywords/cards/${tagAssetId}.png`
// - 키워드 아이콘: `assets/keywords/icons/${tagAssetId}.png`
// 여기서 `${nn}`은 01, 02, 03처럼 2자리 숫자다.
//
// 태그 데이터는 입력 편의를 위해 "태그 -> 대상 ID 목록" 형태로 관리한다.
// 인격 태그와 카드 태그는 의도적으로 분리한다.
// 한글 태그의 이미지 파일명은 TAG_ASSET_IDS에서 관리한다.

export const CARD_SETS = {
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

// 기본 EGO 외에 추가로 선택할 수 있는 EGO 키.
export const EXTRA_EGO_CARD_SETS = {
  yi_sang: ["fell_bullet"],
  faust: ["ardor_blossom"],
  don_quixote: ["fluid_sac"],
  ryoshu: ["red_eyes"],
  meursault: ["pursuance"],
  hong_lu: ["snare"]
};

// EGO 사용으로 함께 확인해야 하는 상태/스택 카드 수.
export const EGO_UNIQUE_CARD_SETS = {
  hong_lu: {
    snare: 1
  }
};

export const UPGRADE_CARD_SETS = {
  yi_sang_heishou_wu: 1,
  heathcliff_full_stop_office: 1,
  ryoshu_red_eyes_penance: 1,
  meursault_thumb_east: 1,
  rodion_lamancha: 1
};

export const UNIQUE_CARD_TYPES = {
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
  gregor_survivor_unique_2: "stack",
  gregor_tides_unique_1: "stack"
};

// 인격 필터용 태그.
// "이 인격을 고르면 어떤 덱 축/키워드를 기대할 수 있는가?"에 가깝다.
// 현재는 최신 main 데이터의 확실한 키워드 매핑에서 인격 카드만 추려 넣었다.
export const IDENTITY_TAGS = {

};

// 카드 필터용 태그.
// "카드에 이 키워드/정보가 명시되어 있는가?" 기준이다.
// 역할성 태그(드로우, 회복, 방어 등)는 추후 확정 후 추가한다.
export const CARD_TAGS = {

};

// 카드 공격유형 필터용 태그.
// 리뉴얼 카드 기준 재분류.
// 상태/스택 고유카드는 공격유형이 없으므로 제외한다.
export const CARD_ATTACK_TYPES = {
  "참격": ["ryoshu_red_eyes_ego","yi_sang_heishou_wu_upgrade_1","ryoshu_base_ego","rodion_base_ego","sinclair_base_ego"],
  "관통": ["yi_sang_base_ego","don_quixote_base_ego","ishmael_base_ego","rodion_lamancha_upgrade_1","outis_base_ego"],
  "타격": ["faust_ardor_blossom_ego","don_quixote_fluid_sac_ego","ryoshu_red_eyes_penance_upgrade_1","meursault_pursuance_ego","hong_lu_snare_ego","meursault_thumb_east_upgrade_1","hong_lu_base_ego","heathcliff_base_ego","gregor_base_ego"],
  "스킬": ["faust_base_ego","meursault_base_ego"]
};

// 카드 이미지 색상 기반 1차 자동 분류.
// 추후 피드백으로 틀린 항목만 직접 교정한다.
export const CARD_SINS = {
  "분노": ["faust_ardor_blossom_ego","meursault_thumb_east_upgrade_1"],
  "색욕": ["ryoshu_red_eyes_penance_upgrade_1","ryoshu_red_eyes_ego","don_quixote_base_ego","ryoshu_base_ego","rodion_lamancha_upgrade_1"],
  "나태": ["meursault_pursuance_ego","yi_sang_base_ego","gregor_base_ego"],
  "탐식": ["hong_lu_snare_ego","yi_sang_heishou_wu_upgrade_1","sinclair_base_ego"],
  "우울": ["don_quixote_fluid_sac_ego","hong_lu_base_ego","ishmael_base_ego"],
  "오만": ["yi_sang_fell_bullet_ego","faust_base_ego","meursault_base_ego","rodion_base_ego","outis_base_ego"],
  "질투": ["heathcliff_base_ego"]
};

// 필터 UI에서 태그를 묶어 보여주고 싶을 때 쓴다.
// 여기에 없는 태그도 CARD_TAGS/IDENTITY_TAGS에 있으면 데이터로는 유효하다.
export const TAG_GROUPS = {
  상태이상: ["화상", "출혈", "진동", "파열", "침잠"],
  자원: ["호흡", "충전"],
  역할: []
};

export const TAG_ASSET_IDS = {
  화상: "01",
  출혈: "02",
  진동: "03",
  파열: "04",
  침잠: "05",
  호흡: "06",
  충전: "07"
};
