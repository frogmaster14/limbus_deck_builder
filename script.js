const LIMBUS_DATA = window.LIMBUS_DATA;
const DECK_LIMIT = 20;
const APP_VERSION = "2.1.7.0 beta";
const DIRECTIVE_IMAGE_VERSION = "directive-fit-2";
const ENABLED_BETA_VIEWS = new Set(["deck", "codex", "saves"]);
const FEEDBACK_DRAFT_KEY = "limttak_feedback_draft";
const SAVED_DECKS_KEY = "limttak_saved_decks";

const menuCopy = {
  deck: {
    title: "덱 만들기",
    copy: "한 작업대에서 전방/후방 인격과 20장 덱, EGO, 강화카드를 구성합니다."
  },
  codex: {
    title: "도감",
    copy: "이번 베타에서 사용 가능한 핵심 기능입니다. 카드, EGO, 스택/상태, 필터를 확인합니다."
  },
  saves: {
    title: "저장 목록",
    copy: "저장된 덱을 확인하고, 공유 코드로 받은 덱을 저장목록에 추가합니다."
  },
  feedback: {
    title: "피드백",
    copy: "누락 이미지, 필터 오류, 카드 누락, UI 불편을 정해진 양식으로 복사해 제보합니다."
  }
};

const buttons = document.querySelectorAll(".menu-button");
const archiveList = document.querySelector("#archive-list");
const selectedTitle = document.querySelector("#selected-title");
const selectedCopy = document.querySelector("#selected-copy");
const archiveCopyElement = document.querySelector("#archive-copy");
const developerNote = document.querySelector("#developer-note");
const noticeTitle = document.querySelector("#notice-title");
const noticeState = document.querySelector("#notice-state");
const currentVersion = document.querySelector("#current-version");
const currentSummary = document.querySelector("#current-summary");
const homeView = document.querySelector("#home-view");
const builderView = document.querySelector("#builder-view");
const deckView = document.querySelector("#deck-view");
const codexView = document.querySelector("#codex-view");
const savesView = document.querySelector("#saves-view");
const savedDeckView = document.querySelector("#saved-deck-view");
const feedbackView = document.querySelector("#feedback-view");
const identityGrid = document.querySelector("#identity-grid");
const identityCount = document.querySelector("#identity-count");
const sinnerFilterButtons = document.querySelector("#sinner-filter-buttons");
const keywordFilterButtons = document.querySelector("#keyword-filter-buttons");
const keywordSpecialFilterButtons = document.querySelector("#keyword-special-filter-buttons");
const identitySlots = document.querySelectorAll(".identity-slot");
const slotExtras = document.querySelectorAll(".slot-extra");
const identityPreview = document.querySelector("#identity-preview");
const builderBackButton = document.querySelector("[data-action='back-home']");
const builderTitle = document.querySelector("#builder-title");
const builderResetIdentities = document.querySelector("#builder-reset-identities");
const swapSlotButton = document.querySelector("[data-action='swap-slots']");
const nextStepButton = document.querySelector("[data-action='next-step']");
const mobileIdentityLayoutButtons = document.querySelectorAll("[data-mobile-identity-layout]");
const deckSwapIdentitiesButton = document.querySelector("[data-action='swap-deck-identities']");
const deckSideSummary = document.querySelector("#deck-side-summary");
const mobileDeckSummary = document.querySelector("#mobile-deck-summary");
const mobileDeckNav = document.querySelector(".mobile-deck-nav");
const mobileDeckNavCount = document.querySelector("#mobile-deck-nav-count");
const mobileActiveFilterCount = document.querySelector("#mobile-active-filter-count");
const deckCardTabs = document.querySelector("#deck-card-tabs");
const deckCardPool = document.querySelector("#deck-card-pool");
const deckIncludedGrid = document.querySelector("#deck-included-grid");
const deckExtraGrid = document.querySelector("#deck-extra-grid");
const deckReviewSection = document.querySelector("#deck-review-section");
const deckReviewIdentities = document.querySelector("#deck-review-identities");
const deckReviewMain = document.querySelector("#deck-review-main");
const deckReviewExtra = document.querySelector("#deck-review-extra");
const deckReviewKeywords = document.querySelector("#deck-review-keywords");
const identityPreviewFilters = document.querySelector("#identity-preview-filters");
const deckPreviewFilters = document.querySelector("#deck-preview-filters");
const deckSaveName = document.querySelector("#deck-save-name");
const deckSaveKeywords = document.querySelector("#deck-save-keywords");
const deckSaveIntro = document.querySelector("#deck-save-intro");
const deckSaveNotes = document.querySelector("#deck-save-notes");
const deckNotePreview = document.querySelector("#deck-note-preview");
const deckSaveStatus = document.querySelector("#deck-save-status");
const cardSearchPopover = document.querySelector("#card-search-popover");
const cardSearchTabs = document.querySelector("#card-search-tabs");
const cardSearchHeading = document.querySelector("#card-search-heading");
const cardSearchGrid = document.querySelector("#card-search-grid");
const cardSearchCount = document.querySelector("#card-search-count");
const cardSearchPreview = document.querySelector("#card-search-preview");
const cardSearchPreviewFilters = document.querySelector("#card-search-preview-filters");
const cardSearchInsertButton = document.querySelector("#card-search-insert-button");
const cardInsertSinnerFilters = document.querySelector("#card-insert-sinner-filters");
const cardInsertKeywordFilters = document.querySelector("#card-insert-keyword-filters");
const cardInsertSpecialKeywordFilters = document.querySelector("#card-insert-special-keyword-filters");
const cardInsertSinFilters = document.querySelector("#card-insert-sin-filters");
const cardInsertAttackTypeFilters = document.querySelector("#card-insert-attack-type-filters");
const cardInsertEffectFilters = document.querySelector("#card-insert-effect-filters");
const deckCount = document.querySelector("#deck-view .deck-count");
const deckPreview = document.querySelector("#deck-preview");
const deckKeywordFilters = document.querySelector("#deck-keyword-filters");
const deckSpecialKeywordFilters = document.querySelector("#deck-special-keyword-filters");
const deckSinFilters = document.querySelector("#deck-sin-filters");
const deckAttackTypeFilters = document.querySelector("#deck-attack-type-filters");
const deckEffectFilters = document.querySelector("#deck-effect-filters");
const deckNextButton = document.querySelector("[data-action='next-deck-step']");
const codexTabs = document.querySelector("#codex-tabs");
const codexGrid = document.querySelector("#codex-grid");
const codexCount = document.querySelector("#codex-count");
const codexHeading = document.querySelector("#codex-heading");
const codexPreview = document.querySelector("#codex-preview");
const codexSinnerFilters = document.querySelector("#codex-sinner-filters");
const codexKeywordFilters = document.querySelector("#codex-keyword-filters");
const codexSpecialKeywordFilters = document.querySelector("#codex-special-keyword-filters");
const codexSinFilters = document.querySelector("#codex-sin-filters");
const codexAttackTypeFilters = document.querySelector("#codex-attack-type-filters");
const codexEffectFilters = document.querySelector("#codex-effect-filters");
const codexPreviewFilters = document.querySelector("#codex-preview-filters");
const mobileCodexNav = document.querySelector(".mobile-codex-nav");
const mobileCodexCardCount = document.querySelector("#mobile-codex-card-count");
const mobileCodexFilterCount = document.querySelector("#mobile-codex-filter-count");
const saveImportCode = document.querySelector("#save-import-code");
const saveImportFile = document.querySelector("#save-import-file");
const saveImportStatus = document.querySelector("#save-import-status");
const savedDeckCount = document.querySelector("#saved-deck-count");
const savedDeckList = document.querySelector("#saved-deck-list");
const savedDeckPreview = document.querySelector("#saved-deck-preview");
const savedDeckActions = document.querySelector("#saved-deck-actions");
const mobileSavesNav = document.querySelector(".mobile-saves-nav");
const mobileSavedDeckCount = document.querySelector("#mobile-saved-deck-count");
const savedViewBackButton = document.querySelector("[data-action='back-saves-from-view']");
const savedViewTitle = document.querySelector("#saved-view-title");
const savedViewSummary = document.querySelector("#saved-view-summary");
const savedViewDetail = document.querySelector("#saved-view-detail");
const savedViewPreview = document.querySelector("#saved-view-preview");
const savedViewPreviewFilters = document.querySelector("#saved-view-preview-filters");
const savedViewActions = document.querySelector("#saved-view-actions");
const mobileSavedViewNav = document.querySelector(".mobile-saved-view-nav");
const savedViewStatus = document.querySelector("#saved-view-status");
const feedbackForm = document.querySelector("#feedback-form");
const feedbackTarget = document.querySelector("#feedback-target");
const feedbackDetail = document.querySelector("#feedback-detail");
const feedbackDeviceOptions = document.querySelectorAll("[name='device']");
const feedbackOutput = document.querySelector("#feedback-output");
const feedbackStatus = document.querySelector("#feedback-status");

const deckCardTabsData = [
  ["all", "전체"],
  ["sinner", "고유"],
  ["identity", "인격"],
  ["ego", "EGO"],
  ["upgrade", "강화"]
];
const sinFilters = [
  { label: "분노", image: "assets/sins/icons/wrath.png" },
  { label: "색욕", image: "assets/sins/icons/lust.png" },
  { label: "나태", image: "assets/sins/icons/sloth.png" },
  { label: "탐식", image: "assets/sins/icons/gluttony.png" },
  { label: "우울", image: "assets/sins/icons/gloom.png" },
  { label: "오만", image: "assets/sins/icons/pride.png" },
  { label: "질투", image: "assets/sins/icons/envy.png" }
];
const effectFilterGroups = [
  {
    title: "회복",
    filters: [
      { label: "가드회복", image: "assets/effects/icons/guard_restore.png" },
      { label: "체력회복", image: "assets/effects/icons/hp_restore.png" }
    ]
  },
  {
    title: "카드 이동",
    filters: [
      { label: "드로우", image: "assets/effects/icons/draw.png" },
      { label: "버리기", image: "assets/effects/icons/discard.png" },
      { label: "덱 이동", image: "assets/effects/icons/deck_shuffle.png" },
      { label: "체인 관련", image: "assets/effects/icons/chain_related.png" }
    ]
  },
  {
    title: "특수",
    filters: [
      { label: "필중", image: "assets/effects/icons/sure_hit.png" },
      { label: "코인토스", image: "assets/effects/icons/chain_continue.png" },
      { label: "재사용", image: "assets/effects/icons/reuse.png" },
      { label: "죄악 변경", image: "assets/effects/icons/sin_change.png" },
      { label: "상태 변경", image: "assets/effects/icons/status_change.png" },
      { label: "효과 변경", image: "assets/effects/icons/status_change.png" },
      { label: "특수 키워드 획득", image: "assets/effects/icons/unique_stack.png" },
      { label: "상대 방해", image: "assets/effects/icons/opponent_power_down.png" },
      { label: "수감자 교체", image: "assets/effects/icons/sinner_switch.png" },
      { label: "다른 카드로 취급", image: "assets/effects/icons/treated_as_other_card.png" },
      { label: "자해기믹", image: "assets/effects/icons/self_damage.png" }
    ]
  },
  {
    title: "데미지 & 위력",
    filters: [
      { label: "위력증가", image: "assets/effects/icons/power_up.png" },
      { label: "위력감소", image: "assets/effects/icons/opponent_power_down.png" },
      { label: "최대 합 위력 변경", image: "assets/effects/icons/max_clash_power_change.png" },
      { label: "전체 데미지 증가", image: "assets/effects/icons/hp_damage_up.png" },
      { label: "가드뎀 증가", image: "assets/effects/icons/guard_damage_up.png" },
      { label: "체력뎀 증가", image: "assets/effects/icons/damage_up.png" },
      { label: "효과 데미지", image: "assets/effects/icons/effect_damage.png" },
      { label: "상대 데미지 감소", image: "assets/effects/icons/opponent_damage_down.png" },
      { label: "받는 데미지 감소", image: "assets/effects/icons/damage_reduce.png" }
    ]
  }
];
const effectFilters = effectFilterGroups.flatMap((group) => group.filters);
const attackTypeFilters = [
  { label: "참격", image: "assets/attack-types/icons/slash.png" },
  { label: "관통", image: "assets/attack-types/icons/pierce.png" },
  { label: "타격", image: "assets/attack-types/icons/blunt.png" },
  { label: "스킬", image: "assets/attack-types/icons/skill.png" }
];
const specialKeywordTags = new Set([
  "못",
  "마비",
  "투.식.",
  "조리 중",
  "산나비+죽은나비",
  "찢어진 추억",
  "진동폭발",
  "축제의 열기"
]);
const derivedDeckKeywordCards = [
  {
    triggerTag: "침잠",
    label: "패닉",
    image: "assets/keywords/icons/패닉.png",
    previewImage: "assets/keywords/cards/패닉.png"
  }
];
const faustIndexDirectiveFolder = {
  id: "faust_index_directives",
  title: "지령",
  category: "stack",
  sinnerId: "faust",
  identityId: "faust_index",
  image: "assets/sinners/faust/index/꽃잎 지령/꽃잎 지령 뒷면.png",
  folders: [
    {
      id: "faust_index_directive_note_1",
      title: "쪽지 1",
      image: "assets/sinners/faust/index/쪽지 1/쪽지 1 뒷면.png",
      cards: Array.from({ length: 4 }, (_, index) => `assets/sinners/faust/index/쪽지 1/${index + 1}.png`)
    },
    {
      id: "faust_index_directive_note_2",
      title: "쪽지 2",
      image: "assets/sinners/faust/index/쪽지 2/쪽지 2 뒷면.png",
      cards: Array.from({ length: 4 }, (_, index) => `assets/sinners/faust/index/쪽지 2/${index + 1}.png`)
    },
    {
      id: "faust_index_directive_note_3",
      title: "쪽지 3",
      image: "assets/sinners/faust/index/쪾자 3/쪽지 3 뒷면.png",
      cards: Array.from({ length: 4 }, (_, index) => `assets/sinners/faust/index/쪾자 3/${index + 1}.png`)
    },
    {
      id: "faust_index_directive_petal",
      title: "꽃잎 지령",
      image: "assets/sinners/faust/index/꽃잎 지령/꽃잎 지령 뒷면.png",
      cards: Array.from({ length: 5 }, (_, index) => `assets/sinners/faust/index/꽃잎 지령/${index + 1}.png`)
    }
  ]
};
const codexTabsData = [
  ["all", "전체"],
  ["identity", "인격"],
  ["card", "카드"],
  ["ego", "EGO"],
  ["stack", "스택", "assets/card-types/icons/stack.png"],
  ["status", "상태", "assets/card-types/icons/status.png"],
  ["upgrade", "강화"],
  ["keyword", "키워드"]
];
const cardInsertTabsData = [
  ["all", "전체"],
  ["deck", "덱"],
  ...codexTabsData.slice(1)
];
const cardCategoryFilters = {
  stack: { label: "스택", image: "assets/card-types/icons/stack.png" },
  status: { label: "상태", image: "assets/card-types/icons/status.png" }
};

const versionHistory = window.VERSION_HISTORY || [];
const builderState = {
  activeSlot: "front",
  selected: {
    front: null,
    back: null
  },
  identityPickerReturnView: null,
  hovered: null,
  activeSinners: [],
  activeTags: [],
  activeDeckTab: "all",
  activeDeckTags: [],
  activeDeckSins: [],
  activeDeckAttackTypes: [],
  activeDeckEffects: [],
  deckCards: [],
  selectedEgo: null,
  upgradeCards: [],
  isDeckReviewing: false,
  mobileDeckPane: "cards",
  mobileIdentityLayout: "detail",
  deckSave: {
    featuredFilters: {
      sins: [],
      attackTypes: [],
      tags: [],
      effects: []
    },
    editingId: null
  }
};
const codexState = {
  activeTab: "all",
  activeSinners: [],
  activeTags: [],
  activeSins: [],
  activeAttackTypes: [],
  activeEffects: [],
  expandedFolders: [],
  previewItemId: "",
  mobilePane: "cards"
};
const cardInsertState = {
  activeTab: "all",
  activeSinners: [],
  activeTags: [],
  activeSins: [],
  activeAttackTypes: [],
  activeEffects: [],
  expandedFolders: [],
  selectedItemId: ""
};
const savedViewState = {
  mode: "saved",
  activeDeckId: null,
  mobilePane: "summary"
};
const savedListState = {
  selectedDeckId: null,
  mobilePane: "list"
};

function removeNativeTooltips(root = document) {
  const titledElements = [];

  if (root.nodeType === Node.ELEMENT_NODE && root.hasAttribute("title")) {
    titledElements.push(root);
  }

  root.querySelectorAll?.("[title]").forEach((element) => {
    titledElements.push(element);
  });

  titledElements.forEach((element) => {
    element.removeAttribute("title");
  });
}

function setupImageInteractionGuards() {
  const imageSelector = [
    "img",
    ".preview-frame",
    ".identity-card",
    ".codex-item",
    ".deck-pool-card",
    ".deck-included-card",
    ".deck-extra-card",
    ".deck-side-image",
    ".slot-token",
    ".deck-token"
  ].join(",");

  removeNativeTooltips();

  document.addEventListener("pointerover", (event) => {
    const titledElement = event.target.closest?.("[title]");
    if (titledElement) titledElement.removeAttribute("title");
  }, true);

  document.addEventListener("focusin", (event) => {
    const titledElement = event.target.closest?.("[title]");
    if (titledElement) titledElement.removeAttribute("title");
  }, true);

  document.addEventListener("contextmenu", (event) => {
    if (event.target.closest?.(imageSelector)) event.preventDefault();
  }, true);

  document.addEventListener("dragstart", (event) => {
    if (event.target.closest?.("img")) event.preventDefault();
  }, true);

  const tooltipObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes") {
        removeNativeTooltips(mutation.target);
        return;
      }

      mutation.addedNodes.forEach((node) => {
        removeNativeTooltips(node);
      });
    });
  });

  tooltipObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ["title"],
    childList: true,
    subtree: true
  });
}

setupImageInteractionGuards();

buttons.forEach((button) => {
  button.classList.toggle("is-locked", !ENABLED_BETA_VIEWS.has(button.dataset.view));
  button.classList.remove("primary");
});

const defaultMenuButton = document.querySelector("[data-view='deck']");
if (defaultMenuButton) {
  defaultMenuButton.classList.add("primary", "is-selected");
  selectedTitle.textContent = menuCopy.deck.title;
  selectedCopy.textContent = menuCopy.deck.copy;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.view;
    const detail = menuCopy[view];
    if (!detail) return;

    buttons.forEach((item) => {
      item.classList.remove("is-selected");
      item.classList.remove("primary");
    });

    button.classList.add("is-selected");
    selectedTitle.textContent = detail.title;
    selectedCopy.textContent = detail.copy;

    if (window.matchMedia("(max-width: 640px), (pointer: coarse)").matches) {
      openMenuView(button);
    }
  });

  button.addEventListener("dblclick", () => {
    openMenuView(button);
  });
});

function openMenuView(button) {
  if (!ENABLED_BETA_VIEWS.has(button.dataset.view)) return;

  if (button.dataset.action === "open-builder") openBuilder();
  if (button.dataset.view === "codex") openCodex();
  if (button.dataset.view === "saves") openSaves();
  if (button.dataset.view === "feedback") openFeedback();
}

function renderVersion(version) {
  if (!version) return;

  archiveCopyElement.textContent = version.copy;
  noticeTitle.textContent = "개발자 노트";
  const developerNoteVersion = getDeveloperNoteVersionFor(version);

  if (!developerNoteVersion) {
    noticeState.textContent = "대기중";
    developerNote.classList.add("is-empty");
    developerNote.textContent = "새 기능 업데이트 때만 개발자 노트 표시.";
    return;
  }

  noticeState.textContent = developerNoteVersion.label;
  developerNote.classList.remove("is-empty");
  developerNote.innerHTML = `
    <h3>${developerNoteVersion.developerNote.title}</h3>
    ${developerNoteVersion.developerNote.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
  `;
}

function getDeveloperNoteVersionFor(version) {
  if (version.developerNote) return version;

  const versionIndex = versionHistory.findIndex((item) => item.version === version.version);
  const olderVersions = versionIndex >= 0 ? versionHistory.slice(versionIndex + 1) : versionHistory;
  return olderVersions.find((item) => item.developerNote) || null;
}

function renderArchive() {
  if (!versionHistory.length) return;

  const latest = versionHistory[0];
  currentVersion.textContent = latest.label;
  currentSummary.textContent = latest.summary;

  archiveList.innerHTML = versionHistory.map((version, index) => `
    <button class="archive-item ${index === 0 ? "is-selected" : ""}" type="button" data-version="${version.version}">
      <span>${version.label}</span>
      <small>${version.summary}</small>
    </button>
  `).join("");

  renderVersion(latest);
}

renderArchive();

archiveList.addEventListener("click", (event) => {
  const button = event.target.closest(".archive-item");
  if (!button) return;

  const version = versionHistory.find((item) => item.version === button.dataset.version);
  if (!version) return;

  archiveList.querySelectorAll(".archive-item").forEach((item) => item.classList.remove("is-selected"));
  button.classList.add("is-selected");
  renderVersion(version);
});

builderBackButton.addEventListener("click", () => {
  if (builderState.identityPickerReturnView === "deck") {
    closeDeckIdentityPicker();
    return;
  }

  showView("home");
});

document.querySelector("[data-action='reset-identities']").addEventListener("click", () => {
  builderState.selected.front = null;
  builderState.selected.back = null;
  builderState.activeSlot = "front";
  builderState.identityPickerReturnView = null;
  builderState.hovered = null;
  resetDeckState({ clearSaveDraft: true });
  renderBuilder();
});

document.querySelector("[data-action='back-builder']").addEventListener("click", () => {
  showView("home");
});

document.querySelector("[data-action='back-home-codex']").addEventListener("click", () => {
  showView("home");
});

document.querySelector("[data-action='back-home-saves']").addEventListener("click", () => {
  showView("home");
});

document.querySelector("[data-action='back-saves-from-view']").addEventListener("click", () => {
  closeSavedDeckView();
});

document.querySelector("[data-action='back-home-feedback']").addEventListener("click", () => {
  showView("home");
});

document.querySelector("[data-action='reset-codex']").addEventListener("click", () => {
  resetCodexState();
  renderCodex();
});

document.querySelector("[data-action='reset-feedback']").addEventListener("click", () => {
  resetFeedbackForm();
});

document.querySelector("[data-action='copy-feedback']").addEventListener("click", async () => {
  await copyFeedbackText();
});

document.querySelector("[data-action='save-feedback-draft']").addEventListener("click", () => {
  saveFeedbackDraft();
});

feedbackForm?.addEventListener("input", renderFeedbackOutput);

document.querySelector("[data-action='reset-deck']").addEventListener("click", () => {
  resetDeckState({ clearSaveDraft: true });
  renderDeckBuilder();
});

document.querySelector("[data-action='open-mobile-deck-filter']")?.addEventListener("click", () => {
  deckView.classList.add("is-mobile-filter-open");
});

document.querySelector("[data-action='close-mobile-deck-filter']")?.addEventListener("click", () => {
  deckView.classList.remove("is-mobile-filter-open");
});

document.querySelector("[data-action='open-mobile-identity-filter']")?.addEventListener("click", () => {
  builderView.classList.add("is-mobile-filter-open");
});

document.querySelector("[data-action='close-mobile-identity-filter']")?.addEventListener("click", () => {
  builderView.classList.remove("is-mobile-filter-open");
});

mobileIdentityLayoutButtons.forEach((button) => {
  button.addEventListener("click", () => {
    builderState.mobileIdentityLayout = button.dataset.mobileIdentityLayout;
    syncMobileIdentityLayout();
  });
});

document.querySelector("[data-action='next-deck-step']").addEventListener("click", () => {
  handleDeckNextStep();
});

document.querySelector("[data-action='edit-deck']").addEventListener("click", () => {
  builderState.isDeckReviewing = false;
  builderState.mobileDeckPane = "cards";
  syncDeckMode();
  renderDeckPreview(null);
});

document.querySelectorAll("[data-action='open-card-search']").forEach((button) => {
  button.addEventListener("click", () => {
    openCardSearch();
  });
});

document.querySelector("[data-action='close-card-search']").addEventListener("click", () => {
  closeCardSearch();
});

document.querySelector("[data-action='reset-card-insert']").addEventListener("click", () => {
  resetCardInsertState();
  renderCardInsert();
});

document.querySelector("[data-action='insert-selected-card']").addEventListener("click", () => {
  insertSelectedCardSearchItem();
});

document.querySelectorAll("[data-action='save-deck-local']").forEach((button) => {
  button.addEventListener("click", () => {
    saveCurrentDeck();
  });
});

document.querySelectorAll("[data-action='copy-deck-code']").forEach((button) => {
  button.addEventListener("click", async () => {
    await copyCurrentDeckCode();
  });
});

document.querySelectorAll("[data-action='export-deck-file']").forEach((button) => {
  button.addEventListener("click", async () => {
    await exportCurrentDeckFile();
  });
});

document.querySelector("[data-action='open-saves-from-deck']").addEventListener("click", () => {
  openSavesFromDeckReview();
});

document.querySelectorAll("[data-action='view-current-deck']").forEach((button) => {
  button.addEventListener("click", () => {
    openCurrentDeckView();
  });
});

document.querySelector("[data-action='reset-save-import']").addEventListener("click", () => {
  resetSaveImport();
});

document.querySelector("[data-action='import-deck-code']").addEventListener("click", async () => {
  await importDeckCodeToSaves();
});

document.querySelector("[data-action='select-deck-file']").addEventListener("click", () => {
  saveImportFile?.click();
});

saveImportFile?.addEventListener("change", async () => {
  const [file] = saveImportFile.files || [];
  if (file) await importDeckFileToSaves(file);
  saveImportFile.value = "";
});

savesView?.addEventListener("click", handleSavedDeckAction);
savedDeckView?.addEventListener("click", handleSavedDeckAction);

deckSaveNotes?.addEventListener("input", renderDeckNotePreview);

swapSlotButton.addEventListener("click", () => {
  if (!builderState.selected.front && !builderState.selected.back) return;

  [builderState.selected.front, builderState.selected.back] = [builderState.selected.back, builderState.selected.front];
  builderState.hovered = builderState.selected[builderState.activeSlot]
    || builderState.selected.front
    || builderState.selected.back
    || null;
  renderBuilder();
});

deckSwapIdentitiesButton?.addEventListener("click", swapDeckIdentities);

mobileDeckSummary?.addEventListener("click", (event) => {
  const slotButton = event.target.closest("[data-mobile-deck-identity-slot]");
  if (slotButton) {
    openDeckIdentityPicker(slotButton.dataset.mobileDeckIdentitySlot);
    return;
  }

  if (event.target.closest("[data-action='mobile-swap-deck-identities']")) {
    swapDeckIdentities();
  }
});

mobileDeckNav?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mobile-deck-pane]");
  if (!button) return;

  setMobileDeckPane(button.dataset.mobileDeckPane);
});

mobileCodexNav?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mobile-codex-pane]");
  if (!button || button.disabled) return;

  setMobileCodexPane(button.dataset.mobileCodexPane);
});

nextStepButton.addEventListener("click", () => {
  if (!builderState.selected.front || !builderState.selected.back) return;

  builderState.identityPickerReturnView = null;
  builderState.isDeckReviewing = false;
  showView("deck");
  renderDeckBuilder();
});

deckSideSummary.addEventListener("click", (event) => {
  const selector = event.target.closest("[data-deck-identity-slot]");
  if (!selector) return;

  openDeckIdentityPicker(selector.dataset.deckIdentitySlot);
});

identitySlots.forEach((slot) => {
  slot.addEventListener("click", () => {
    builderState.activeSlot = slot.dataset.slot;
    const identity = getIdentity(builderState.selected[slot.dataset.slot]);
    if (identity) builderState.hovered = identity.id;

    renderBuilderChrome();
    renderSlots();
    renderIdentities();
    renderPreview(builderState.hovered);
  });

  const showSlotPreview = () => {
    const identity = getIdentity(builderState.selected[slot.dataset.slot]);
    if (!identity) return;

    builderState.hovered = identity.id;
    renderPreview(identity.id);
  };

  slot.addEventListener("mouseenter", showSlotPreview);
  slot.addEventListener("mouseover", showSlotPreview);
  slot.addEventListener("pointerenter", showSlotPreview);
  slot.addEventListener("focus", showSlotPreview);
});

function showView(viewName) {
  const isHome = viewName === "home";
  const isBuilder = viewName === "builder";
  const isDeckPicker = isBuilder && builderState.identityPickerReturnView === "deck";
  const isDeck = viewName === "deck" || isDeckPicker;
  const isCodex = viewName === "codex";
  const isSaves = viewName === "saves";
  const isSavedDeck = viewName === "savedDeck";
  const isFeedback = viewName === "feedback";

  homeView.hidden = !isHome;
  builderView.hidden = !isBuilder;
  deckView.hidden = !isDeck;
  codexView.hidden = !isCodex;
  savesView.hidden = !isSaves;
  savedDeckView.hidden = !isSavedDeck;
  feedbackView.hidden = !isFeedback;
  homeView.classList.toggle("is-active", isHome);
  builderView.classList.toggle("is-active", isBuilder);
  builderView.classList.toggle("is-deck-picker", isDeckPicker);
  deckView.classList.toggle("is-active", isDeck);
  codexView.classList.toggle("is-active", isCodex);
  savesView.classList.toggle("is-active", isSaves);
  savedDeckView.classList.toggle("is-active", isSavedDeck);
  feedbackView.classList.toggle("is-active", isFeedback);
}

function openBuilder() {
  builderState.identityPickerReturnView = null;
  builderState.isDeckReviewing = false;
  builderState.mobileDeckPane = "cards";
  showView("deck");
  renderDeckBuilder();
}

function openDeckIdentityPicker(slotName) {
  if (!Object.hasOwn(builderState.selected, slotName)) return;

  builderView.classList.remove("is-mobile-filter-open");
  deckView.classList.remove("is-mobile-filter-open");
  builderState.activeSlot = slotName;
  builderState.identityPickerReturnView = "deck";
  builderState.hovered = builderState.selected[slotName] || null;
  showView("builder");
  renderBuilder();
}

function closeDeckIdentityPicker() {
  builderView.classList.remove("is-mobile-filter-open");
  builderState.identityPickerReturnView = null;
  builderState.hovered = null;
  showView("deck");
  renderDeckBuilder();
}

function openCodex() {
  codexState.previewItemId = "";
  codexState.mobilePane = "cards";
  showView("codex");
  renderCodex();
}

function openSaves() {
  savedListState.mobilePane = "list";
  showView("saves");
  renderSavedDecks();
}

function openFeedback() {
  showView("feedback");
  loadFeedbackDraft();
  prefillFeedbackTargetFromCodex();
  renderFeedbackOutput();
}

function getActiveCodexFilterSummary() {
  const sections = [
    ["수감자", codexState.activeSinners],
    ["키워드", codexState.activeTags],
    ["죄악", codexState.activeSins],
    ["유형", codexState.activeAttackTypes],
    ["기타", codexState.activeEffects]
  ];

  const activeSections = sections
    .filter(([, values]) => values.length)
    .map(([label, values]) => `${label}: ${values.join(", ")}`);

  return activeSections.length ? activeSections.join(" / ") : "없음";
}

function getFeedbackData() {
  return {
    target: feedbackTarget?.value.trim() || "",
    detail: feedbackDetail?.value.trim() || "",
    device: getSelectedFeedbackDevice()
  };
}

function getSelectedFeedbackDevice() {
  return Array.from(feedbackDeviceOptions).find((option) => option.checked)?.value || "PC";
}

function buildFeedbackText() {
  const data = getFeedbackData();
  return [
    "[림.딱 빌더 베타 피드백]",
    `버전: ${APP_VERSION}`,
    `환경: ${data.device}`,
    `대상: ${data.target || "미입력"}`,
    `도감 필터: ${getActiveCodexFilterSummary()}`,
    "내용:",
    data.detail || "미입력"
  ].join("\n");
}

function renderFeedbackOutput() {
  if (!feedbackOutput) return;
  feedbackOutput.textContent = buildFeedbackText();
}

function setFeedbackStatus(message, isError = false) {
  if (!feedbackStatus) return;

  feedbackStatus.textContent = message;
  feedbackStatus.classList.toggle("is-error", isError);
}

function prefillFeedbackTargetFromCodex() {
  if (!feedbackTarget || feedbackTarget.value.trim() || !codexState.previewItemId) return;

  feedbackTarget.value = codexState.previewItemId;
}

function resetFeedbackForm() {
  feedbackForm?.reset();
  localStorage.removeItem(FEEDBACK_DRAFT_KEY);
  setFeedbackStatus("입력 내용 비움.");
  prefillFeedbackTargetFromCodex();
  renderFeedbackOutput();
}

function saveFeedbackDraft() {
  localStorage.setItem(FEEDBACK_DRAFT_KEY, JSON.stringify(getFeedbackData()));
  setFeedbackStatus("임시 저장됨.");
  renderFeedbackOutput();
}

function loadFeedbackDraft() {
  const rawDraft = localStorage.getItem(FEEDBACK_DRAFT_KEY);
  if (!rawDraft) return;

  try {
    const draft = JSON.parse(rawDraft);
    if (feedbackTarget) feedbackTarget.value = draft.target || "";
    if (feedbackDetail) feedbackDetail.value = draft.detail || "";
    feedbackDeviceOptions.forEach((option) => {
      option.checked = option.value === (draft.device || "PC");
    });
    setFeedbackStatus("임시 저장된 내용 불러옴.");
  } catch {
    localStorage.removeItem(FEEDBACK_DRAFT_KEY);
  }
}

async function copyFeedbackText() {
  const text = buildFeedbackText();
  renderFeedbackOutput();

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(feedbackOutput);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();
    }

    setFeedbackStatus("피드백 내용 복사됨.");
  } catch {
    setFeedbackStatus("자동 복사 실패. 오른쪽 내용을 직접 복사해주세요.", true);
  }
}

function setMobileCodexPane(paneName) {
  if (!["cards", "filters", "preview"].includes(paneName)) return;
  if (paneName === "preview" && !codexState.previewItemId) return;

  codexState.mobilePane = paneName;
  syncMobileCodexPane();
}

function syncMobileCodexPane() {
  const paneName = codexState.mobilePane || "cards";

  ["cards", "filters", "preview"].forEach((name) => {
    codexView.classList.toggle(`is-mobile-pane-${name}`, paneName === name);
  });

  mobileCodexNav?.querySelectorAll("[data-mobile-codex-pane]").forEach((button) => {
    const isActive = button.dataset.mobileCodexPane === paneName;
    const needsPreview = button.dataset.mobileCodexPane === "preview";
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    button.disabled = needsPreview && !codexState.previewItemId;
  });

  const activeFilterCount = codexState.activeSinners.length
    + codexState.activeTags.length
    + codexState.activeSins.length
    + codexState.activeAttackTypes.length
    + codexState.activeEffects.length;
  if (mobileCodexCardCount) mobileCodexCardCount.textContent = codexCount.textContent || "0";
  if (mobileCodexFilterCount) mobileCodexFilterCount.textContent = String(activeFilterCount);
}

function renderCodex() {
  renderCodexFilters();
  renderCodexTabs();
  renderCodexGrid();
  renderCodexPreview(null);
  syncMobileCodexPane();
}

function renderCodexFilters() {
  codexEffectFilters.classList.add("effect-filter-groups");

  codexSinnerFilters.innerHTML = renderSinnerFilterButtons(codexState.activeSinners, "data-codex-sinner", {
    buttonClass: "deck-filter-token codex-preview-source",
    preview: true,
    title: true
  });
  renderKeywordFilterSections({
    normalContainer: codexKeywordFilters,
    specialContainer: codexSpecialKeywordFilters,
    activeTags: codexState.activeTags,
    buttonClass: "deck-filter-token codex-preview-source",
    dataAttribute: "data-codex-tag",
    preview: true
  });

  codexSinFilters.innerHTML = renderIconFilterButtons(sinFilters, codexState.activeSins, "data-codex-sin", {
    title: true
  });

  codexAttackTypeFilters.innerHTML = renderIconFilterButtons(attackTypeFilters, codexState.activeAttackTypes, "data-codex-attack-type", {
    title: true
  });

  codexEffectFilters.innerHTML = renderEffectFilterGroups(codexState.activeEffects, "codex");

  bindFilterButtons(codexSinnerFilters, "data-codex-sinner", (value) => toggleCodexFilter("activeSinners", value));
  bindFilterButtons(codexKeywordFilters, "data-codex-tag", (value) => toggleCodexFilter("activeTags", value));
  bindFilterButtons(codexSpecialKeywordFilters, "data-codex-tag", (value) => toggleCodexFilter("activeTags", value));
  bindFilterButtons(codexSinFilters, "data-codex-sin", (value) => toggleCodexFilter("activeSins", value));
  bindFilterButtons(codexAttackTypeFilters, "data-codex-attack-type", (value) => toggleCodexFilter("activeAttackTypes", value));
  bindFilterButtons(codexEffectFilters, "data-codex-effect", (value) => toggleCodexFilter("activeEffects", value));

  attachCodexPreviewListeners(codexSinnerFilters);
  attachCodexPreviewListeners(codexKeywordFilters);
  attachCodexPreviewListeners(codexSpecialKeywordFilters);
}

function toggleCodexFilter(key, value) {
  codexState[key] = toggleArrayValue(codexState[key], value);

  renderCodexFilters();
  renderCodexGrid();
}

function renderCodexTabs() {
  codexTabs.innerHTML = codexTabsData.map(([tabId, label, image]) => `
    <button
      class="deck-bookmark ${codexState.activeTab === tabId ? "is-active" : ""}"
      type="button"
      data-codex-tab="${tabId}"
    >
      ${renderBookmarkContent(label, image)}
    </button>
  `).join("");

  codexTabs.querySelectorAll("[data-codex-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      codexState.activeTab = button.dataset.codexTab;
      renderCodexTabs();
      renderCodexGrid();
    });
  });
}

function renderCodexGrid() {
  const items = getFilteredCodexItems();
  const activeTab = codexTabsData.find(([tabId]) => tabId === codexState.activeTab);
  codexHeading.textContent = activeTab?.[1] || "전체";
  codexCount.textContent = String(items.length);

  if (!items.length) {
    codexGrid.innerHTML = `<div class="deck-empty-note">해당 항목 없음.</div>`;
    syncMobileCodexPane();
    return;
  }

  codexGrid.innerHTML = items.map((item) => `
    <button
      class="codex-item codex-preview-source ${item.id === codexState.previewItemId ? "is-selected" : ""} ${item.shape === "icon" ? "is-icon" : ""} ${item.shape === "folder" ? "is-folder" : ""} ${item.shape === "folder" && isCodexFolderExpanded(item.id) ? "is-open" : ""} ${item.folderDepth ? `folder-depth-${item.folderDepth}` : ""}"
      type="button"
      title="${item.title}"
      data-codex-item-id="${item.id}"
      ${item.shape === "folder" ? `data-codex-folder-id="${item.id}"` : ""}
      data-preview-image="${item.previewImage || item.image}"
      data-preview-alt="${item.title}"
    >
      <img src="${item.image}" alt="" onerror="this.closest('button').hidden=true;" />
      ${item.shape === "folder" ? `<span class="codex-folder-label">${item.title}</span>` : ""}
    </button>
  `).join("");

  attachCodexPreviewListeners(codexGrid);
  codexGrid.querySelectorAll("[data-codex-folder-id]").forEach((button) => {
    button.addEventListener("click", () => toggleCodexFolder(button.dataset.codexFolderId));
  });
  syncMobileCodexPane();
}

function getFilteredCodexItems() {
  return getCodexItems().filter((item) => itemMatchesCodexFilterState(item, codexState));
}

function itemMatchesCodexFilterState(item, state) {
  const tabMatched = state.activeTab === "all" || item.category === state.activeTab;
  const sinnerMatched = !state.activeSinners.length
    || (item.sinnerId && state.activeSinners.includes(item.sinnerId));
  const hasCoreFilters = state.activeSinners.length
    || state.activeSins.length
    || state.activeAttackTypes.length;
  const hasOptionalFilters = state.activeTags.length
    || state.activeEffects.length;
  const tagMatched = state.activeTags.length
    && item.tags.some((tag) => state.activeTags.includes(tag));
  const sinMatched = state.activeSins.length
    && state.activeSins.includes(item.sin);
  const attackTypeMatched = state.activeAttackTypes.length
    && state.activeAttackTypes.includes(item.attackType);
  const effectMatched = state.activeEffects.length
    && item.effects.some((effect) => state.activeEffects.includes(effect));

  const coreMatched = sinnerMatched
    && (!state.activeSins.length || sinMatched)
    && (!state.activeAttackTypes.length || attackTypeMatched);
  const optionalMatched = !hasOptionalFilters || tagMatched || effectMatched;
  const hasAnyFilter = hasCoreFilters || hasOptionalFilters;
  const showItem = !hasAnyFilter || (item.category !== "keyword" && coreMatched && optionalMatched);

  return tabMatched && showItem;
}

function getCodexItems(isFolderExpanded = isCodexFolderExpanded) {
  const items = [];

  LIMBUS_DATA.sinners.forEach((sinner) => {
    const [baseCount, baseUniqueCount, identitySet] = LIMBUS_DATA.raw.cardSets[sinner.id];

    for (let index = 1; index <= baseCount; index += 1) {
      const id = `${sinner.id}_base_${index}`;
      items.push(makeCodexItem({
        id,
        category: "card",
        sinnerId: sinner.id,
        image: `assets/sinners/${sinner.id}/base/${padNumber(index)}.png`
      }));
    }

    for (let index = 1; index <= baseUniqueCount; index += 1) {
      const id = `${sinner.id}_base_unique_${index}`;
      items.push(makeCodexItem({
        id,
        category: getUniqueCardCategory(id),
        sinnerId: sinner.id,
        image: `assets/sinners/${sinner.id}/base/unique/${padNumber(index)}.png`
      }));
    }

    getEgoKeysForSinner(sinner.id).forEach((egoKey) => {
      items.push(makeCodexItem({
        id: `${sinner.id}_${egoKey}_ego`,
        category: "ego",
        sinnerId: sinner.id,
        image: `assets/sinners/${sinner.id}/ego/${egoKey}.png`
      }));

      const uniqueCount = LIMBUS_DATA.raw.egoUniqueCardSets?.[sinner.id]?.[egoKey] || 0;
      for (let index = 1; index <= uniqueCount; index += 1) {
        const id = `${sinner.id}_${egoKey}_ego_unique_${index}`;
        items.push(makeCodexItem({
          id,
          category: getUniqueCardCategory(id),
          sinnerId: sinner.id,
          image: `assets/sinners/${sinner.id}/ego/${egoKey}_unique_${padNumber(index)}.png`
        }));
      }
    });

    Object.entries(identitySet).forEach(([identityKey, [cardCount]]) => {
      const identityId = `${sinner.id}_${identityKey}`;
      const identity = getIdentity(identityId);
      if (!identity) return;

      items.push({
        id: identity.id,
        title: identity.id,
        category: "identity",
        sinnerId: identity.sinnerId,
        image: identity.image,
        tags: identity.tags,
        effects: getCardEffects(identity.id),
        sin: null,
        attackType: null,
        shape: "card"
      });

      for (let index = 1; index <= cardCount; index += 1) {
        const id = `${identity.id}_cards_${index}`;
        items.push(makeCodexItem({
          id,
          category: "card",
          sinnerId: identity.sinnerId,
          image: `assets/sinners/${identity.sinnerId}/${identity.identityKey}/${padNumber(index)}.png`
        }));
      }

      identity.uniqueCards.forEach((card) => {
        items.push(makeCodexItem({
          id: card.id,
          category: getUniqueCardCategory(card.id),
          sinnerId: identity.sinnerId,
          image: card.image
        }));
      });

      if (identity.id === faustIndexDirectiveFolder.identityId) {
        addFaustIndexDirectiveItems(items, isFolderExpanded);
      }

      identity.upgradeCards.forEach((card) => {
        items.push(makeCodexItem({
          id: card.id,
          category: "upgrade",
          sinnerId: identity.sinnerId,
          image: card.image
        }));
      });
    });
  });

  (LIMBUS_DATA.sharedSpecialCards || LIMBUS_DATA.raw?.sharedSpecialCards || []).forEach((card) => {
    items.push({
      id: card.id,
      title: card.title,
      category: card.category,
      sinnerId: card.sinnerId,
      image: card.image,
      previewImage: card.previewImage || card.image,
      tags: card.tags || [],
      effects: card.effects || [],
      sin: null,
      attackType: null,
      shape: "card"
    });
  });

  const keywordFilters = LIMBUS_DATA.cardTagFilters || LIMBUS_DATA.identityTagFilters;
  keywordFilters.forEach((filter) => {
    items.push({
      id: `keyword_${filter.tag}`,
      title: filter.tag,
      category: "keyword",
      image: filter.cardImage,
      previewImage: filter.cardImage,
      sinnerId: null,
      tags: [filter.tag],
      effects: [],
      sin: null,
      attackType: null,
      shape: "card"
    });
  });

  return items;
}

function addFaustIndexDirectiveItems(items, isFolderExpanded = isCodexFolderExpanded) {
  const group = faustIndexDirectiveFolder;

  items.push(makeCodexFolderItem({
    id: group.id,
    title: group.title,
    image: group.image,
    folderDepth: 0
  }));

  if (!isFolderExpanded(group.id)) return;

  group.folders.forEach((folder) => {
    items.push(makeCodexFolderItem({
      id: folder.id,
      title: folder.title,
      image: folder.image,
      folderDepth: 1
    }));

    if (!isFolderExpanded(folder.id)) return;

    folder.cards.forEach((image, index) => {
      const versionedImage = versionDirectiveImage(image);
      items.push({
        id: `${folder.id}_${index + 1}`,
        title: `${folder.title}_${index + 1}`,
        category: group.category,
        sinnerId: group.sinnerId,
        image: versionedImage,
        previewImage: versionedImage,
        tags: [],
        effects: [],
        sin: null,
        attackType: null,
        shape: "card",
        isDirective: true
      });
    });
  });
}

function makeCodexFolderItem({ id, title, image, folderDepth }) {
  return {
    id,
    title,
    category: faustIndexDirectiveFolder.category,
    sinnerId: faustIndexDirectiveFolder.sinnerId,
    image: versionDirectiveImage(image),
    previewImage: versionDirectiveImage(image),
    tags: [],
    effects: [],
    sin: null,
    attackType: null,
    shape: "folder",
    folderDepth,
    isDirective: true
  };
}

function renderEffectFilterGroups(activeEffects, target) {
  const dataAttribute = {
    codex: "data-codex-effect",
    deck: "data-deck-effect",
    "card-insert": "data-card-insert-effect"
  }[target] || "data-deck-effect";

  return effectFilterGroups.map((group) => `
    <div class="filter-subgroup">
      <p class="filter-subgroup-title">${group.title}</p>
      <div class="deck-filter-buttons">
        ${group.filters.map((filter) => renderEffectFilterButton(filter, activeEffects, dataAttribute)).join("")}
      </div>
    </div>
  `).join("");
}

function renderEffectFilterButton(filter, activeEffects, dataAttribute) {
  const content = filter.image
    ? `<img src="${filter.image}" alt="" onerror="this.hidden=true;" />`
    : `<span class="filter-token-empty" aria-hidden="true"></span>`;

  return `
    <button
      class="deck-filter-token ${activeEffects.includes(filter.label) ? "is-active" : ""}"
      type="button"
      title="${filter.label}"
      aria-label="${filter.label}"
      ${dataAttribute}="${filter.label}"
    >
      ${content}
    </button>
  `;
}

function renderSinnerFilterButtons(activeSinners, dataAttribute, {
  buttonClass = "deck-filter-token",
  preview = false,
  title = false
} = {}) {
  return LIMBUS_DATA.sinners.map((sinner) => {
    const titleAttribute = title ? `title="${sinner.id}"` : "";
    const previewAttributes = preview
      ? `data-preview-image="${sinner.icon}" data-preview-alt="${sinner.id}"`
      : "";

    return `
      <button
        class="${buttonClass} ${activeSinners.includes(sinner.id) ? "is-active" : ""}"
        type="button"
        aria-label="${sinner.id}"
        ${titleAttribute}
        ${dataAttribute}="${sinner.id}"
        ${previewAttributes}
      >
        <img src="${sinner.icon}" alt="" />
      </button>
    `;
  }).join("");
}

function renderIconFilterButtons(filters, activeValues, dataAttribute, {
  buttonClass = "deck-filter-token",
  imageAlt = "",
  title = false
} = {}) {
  return filters.map((filter) => {
    const titleAttribute = title ? `title="${filter.label}"` : "";
    const altText = imageAlt === "label" ? filter.label : "";

    return `
      <button
        class="${buttonClass} ${activeValues.includes(filter.label) ? "is-active" : ""}"
        type="button"
        aria-label="${filter.label}"
        ${titleAttribute}
        ${dataAttribute}="${filter.label}"
      >
        <img src="${filter.image}" alt="${altText}" onerror="this.hidden=true;" />
      </button>
    `;
  }).join("");
}

function renderKeywordFilterSections({
  normalContainer,
  specialContainer,
  activeTags,
  buttonClass,
  dataAttribute,
  preview = false
}) {
  const keywordFilters = getKeywordFilterSets(LIMBUS_DATA.cardTagFilters || LIMBUS_DATA.identityTagFilters);
  normalContainer.innerHTML = renderKeywordFilterButtons(keywordFilters.normal, activeTags, {
    buttonClass,
    dataAttribute,
    preview
  });
  specialContainer.innerHTML = renderKeywordFilterButtons(keywordFilters.special, activeTags, {
    buttonClass,
    dataAttribute,
    preview
  });
  syncSpecialKeywordPanel(specialContainer, keywordFilters.special, activeTags);
}

function bindFilterButtons(container, dataAttribute, onClick) {
  container?.querySelectorAll(`[${dataAttribute}]`).forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute(dataAttribute);
      if (value) onClick(value);
    });
  });
}

function toggleArrayValue(values, value) {
  return values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value];
}

function getKeywordFilterSets(keywordFilters) {
  return {
    normal: keywordFilters.filter((filter) => !specialKeywordTags.has(filter.tag)),
    special: keywordFilters.filter((filter) => specialKeywordTags.has(filter.tag))
  };
}

function renderKeywordFilterButtons(filters, activeTags, {
  buttonClass,
  dataAttribute,
  preview = false
}) {
  return filters.map((filter) => {
    const previewAttributes = preview
      ? `data-preview-image="${filter.cardImage}" data-preview-alt="${filter.tag}"`
      : "";

    return `
      <button
        class="${buttonClass} ${activeTags.includes(filter.tag) ? "is-active" : ""}"
        type="button"
        title="${filter.tag}"
        ${dataAttribute}="${filter.tag}"
        ${previewAttributes}
      >
        <img src="${filter.image}" alt="${filter.tag}" />
      </button>
    `;
  }).join("");
}

function syncSpecialKeywordPanel(container, filters, activeTags) {
  const panel = container?.closest(".special-keyword-panel");
  if (!panel) return;

  panel.hidden = !filters.length;
  if (!filters.length) {
    panel.open = false;
    return;
  }

  if (activeTags.some((tag) => specialKeywordTags.has(tag))) {
    panel.open = true;
  }
}

function makeCodexItem({ id, category, sinnerId, image }) {
  return {
    id,
    title: id,
    category,
    sinnerId,
    image,
    tags: getCardTags(id),
    effects: getCardEffects(id),
    sin: getCardSin(id),
    attackType: getCardAttackType(id),
    shape: "card"
  };
}

function getUniqueCardCategory(cardId) {
  return LIMBUS_DATA.uniqueCardTypes?.[cardId]
    || LIMBUS_DATA.raw?.uniqueCardTypes?.[cardId]
    || "status";
}

function resetCodexState() {
  codexState.activeTab = "all";
  codexState.activeSinners = [];
  codexState.activeTags = [];
  codexState.activeSins = [];
  codexState.activeAttackTypes = [];
  codexState.activeEffects = [];
  codexState.expandedFolders = [];
  codexState.previewItemId = "";
  codexState.mobilePane = "cards";
}

function toggleCodexFolder(folderId) {
  const previousScrollTop = codexGrid.scrollTop;
  codexState.expandedFolders = isCodexFolderExpanded(folderId)
    ? codexState.expandedFolders.filter((id) => id !== folderId)
    : [...codexState.expandedFolders, folderId];

  renderCodexGrid();
  codexGrid.scrollTop = previousScrollTop;
}

function isCodexFolderExpanded(folderId) {
  return codexState.expandedFolders.includes(folderId);
}

function attachCodexPreviewListeners(root) {
  root.querySelectorAll(".codex-preview-source").forEach((button) => {
    const showPreview = (event) => {
      const isMobileFolder = button.dataset.codexFolderId
        && window.matchMedia("(max-width: 640px)").matches;
      if (isMobileFolder) return;

      const codexItem = button.dataset.codexItemId
        ? getCodexItems().find((item) => item.id === button.dataset.codexItemId)
        : null;

      if (codexItem) {
        codexState.previewItemId = codexItem.id;
        codexGrid.querySelectorAll("[data-codex-item-id]").forEach((itemButton) => {
          itemButton.classList.toggle("is-selected", itemButton.dataset.codexItemId === codexItem.id);
        });
      }

      renderCodexPreview({
        image: button.dataset.previewImage,
        alt: button.dataset.previewAlt,
        filters: codexItem ? getCodexPreviewFilters(codexItem) : []
      });

      if (codexItem && event.type === "click" && window.matchMedia("(max-width: 640px)").matches) {
        setMobileCodexPane("preview");
      } else {
        syncMobileCodexPane();
      }
    };

    button.addEventListener("mouseenter", showPreview);
    button.addEventListener("mouseover", showPreview);
    button.addEventListener("pointerenter", showPreview);
    button.addEventListener("focus", showPreview);
    button.addEventListener("click", showPreview);
  });
}

function renderCodexPreview(item) {
  if (!item) {
    codexPreview.innerHTML = "<span>항목 위에 마우스를 올리면 크게 표시.</span>";
    renderCodexPreviewFilters([]);
    return;
  }

  codexPreview.innerHTML = `<img src="${item.image}" alt="${item.alt}" />`;
  renderCodexPreviewFilters(item.filters);
}

function renderCodexPreviewFilters(filters = []) {
  renderPreviewFilters(codexPreviewFilters, filters);
}

function versionDirectiveImage(image) {
  if (!image || image.includes("?")) return image;
  return `${image}?v=${DIRECTIVE_IMAGE_VERSION}`;
}

function renderIdentityPreviewFilters(filters = []) {
  renderPreviewFilters(identityPreviewFilters, filters);
}

function renderDeckPreviewFilters(filters = []) {
  renderPreviewFilters(deckPreviewFilters, filters);
}

function renderPreviewFilters(container, filters = []) {
  if (!container) return;

  container.innerHTML = uniquePreviewFilters(filters).map((filter) => `
    <span
      class="preview-filter-chip preview-filter-chip-${filter.type}"
      aria-label="${filter.label}"
    >
      <img src="${filter.image}" alt="" onerror="this.hidden=true;" />
    </span>
  `).join("");
}

function uniquePreviewFilters(filters = []) {
  const seen = new Set();
  return filters.filter((filter) => {
    const key = `${filter.type}:${filter.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return Boolean(filter.image);
  });
}

function getCodexPreviewFilters(item) {
  const filters = [];
  const sinner = item.sinnerId ? LIMBUS_DATA.sinnerById[item.sinnerId] : null;

  if (sinner) {
    filters.push({
      type: "sinner",
      label: item.sinnerId,
      image: sinner.icon
    });
  }

  const categoryFilter = cardCategoryFilters[item.category];
  if (categoryFilter) {
    filters.push({
      type: "card-category",
      label: categoryFilter.label,
      image: categoryFilter.image
    });
  }

  if (item.sin) {
    const sinFilter = sinFilters.find((filter) => filter.label === item.sin);
    if (sinFilter) {
      filters.push({
        type: "sin",
        label: item.sin,
        image: sinFilter.image
      });
    }
  }

  if (item.attackType) {
    const attackTypeFilter = attackTypeFilters.find((filter) => filter.label === item.attackType);
    if (attackTypeFilter) {
      filters.push({
        type: "attack",
        label: item.attackType,
        image: attackTypeFilter.image
      });
    }
  }

  (item.tags || []).forEach((tag) => {
    const keywordFilter = getKeywordFilter(tag);
    if (!keywordFilter) return;

    filters.push({
      type: "keyword",
      label: tag,
      image: keywordFilter.image
    });
  });

  (item.effects || []).forEach((effect) => {
    const effectFilter = effectFilters.find((filter) => filter.label === effect);
    if (!effectFilter?.image) return;

    filters.push({
      type: "effect",
      label: effect,
      image: effectFilter.image
    });
  });

  return filters;
}

function getPreviewFiltersForId(itemId) {
  if (!itemId) return [];

  const identity = getIdentity(itemId);
  if (identity) {
    return getCodexPreviewFilters({
      id: identity.id,
      title: identity.id,
      category: "identity",
      sinnerId: identity.sinnerId,
      tags: identity.tags || [],
      effects: getCardEffects(identity.id),
      sin: null,
      attackType: null
    });
  }

  const codexItem = getCodexItems().find((item) => item.id === itemId || item.title === itemId);
  if (codexItem) return getCodexPreviewFilters(codexItem);

  const keywordFilter = getKeywordFilter(itemId);
  if (keywordFilter) {
    return getCodexPreviewFilters({
      id: `keyword_${itemId}`,
      title: itemId,
      category: "keyword",
      sinnerId: null,
      tags: [itemId],
      effects: [],
      sin: null,
      attackType: null
    });
  }

  return [];
}

function getKeywordFilter(tag) {
  const keywordFilters = [
    ...(LIMBUS_DATA.cardTagFilters || []),
    ...(LIMBUS_DATA.identityTagFilters || [])
  ];

  return keywordFilters.find((filter) => filter.tag === tag);
}

function getIdentity(identityId) {
  return identityId ? LIMBUS_DATA.identityById[identityId] : null;
}

function getSelectedSlotForSinner(sinnerId) {
  return Object.entries(builderState.selected).find(([, identityId]) => {
    const identity = getIdentity(identityId);
    return identity?.sinnerId === sinnerId;
  })?.[0] || null;
}

function chooseIdentity(identityId) {
  const identity = getIdentity(identityId);
  if (!identity) return;
  const returnsToDeck = builderState.identityPickerReturnView === "deck";

  const activeIdentity = getIdentity(builderState.selected[builderState.activeSlot]);
  if (activeIdentity?.id === identity.id) {
    builderState.selected[builderState.activeSlot] = null;
    builderState.hovered = null;
    if (!returnsToDeck) resetDeckState();
    renderBuilder();
    return;
  }

  const sameSinnerSlot = getSelectedSlotForSinner(identity.sinnerId);
  if (sameSinnerSlot && sameSinnerSlot !== builderState.activeSlot) {
    builderState.selected[sameSinnerSlot] = null;
  }

  builderState.selected[builderState.activeSlot] = identity.id;
  builderState.hovered = identity.id;
  if (!returnsToDeck) resetDeckState();
  renderBuilder();
}

function getEgoKeysForSinner(sinnerId) {
  return ["base", ...(LIMBUS_DATA.raw?.extraEgoCardSets?.[sinnerId] || [])];
}

function renderBuilder() {
  renderBuilderChrome();
  renderFilters();
  renderSlots();
  renderIdentities();
  renderPreview(builderState.hovered);
  updateNextStepButton();
}

function renderBuilderChrome() {
  const isDeckPicker = builderState.identityPickerReturnView === "deck";
  const slotLabel = builderState.activeSlot === "front" ? "전방" : "후방";

  if (builderBackButton) builderBackButton.textContent = "뒤로";
  if (builderTitle) builderTitle.textContent = isDeckPicker ? `${slotLabel} 인격 선택` : "전방 / 후방 인격 선택";
  if (builderResetIdentities) builderResetIdentities.hidden = isDeckPicker;
  if (swapSlotButton) swapSlotButton.hidden = isDeckPicker;
  if (nextStepButton) nextStepButton.hidden = isDeckPicker;
  syncMobileIdentityLayout();
}

function syncMobileIdentityLayout() {
  const layouts = ["detail", "pool", "balanced"];
  const activeLayout = layouts.includes(builderState.mobileIdentityLayout)
    ? builderState.mobileIdentityLayout
    : "detail";

  builderState.mobileIdentityLayout = activeLayout;
  layouts.forEach((layout) => {
    builderView.classList.toggle(`is-mobile-identity-${layout}`, activeLayout === layout);
  });

  mobileIdentityLayoutButtons.forEach((button) => {
    const isActive = button.dataset.mobileIdentityLayout === activeLayout;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateNextStepButton() {
  if (!nextStepButton) return;

  const canProceed = Boolean(builderState.selected.front && builderState.selected.back);
  const canSwap = Boolean(builderState.selected.front || builderState.selected.back);
  if (swapSlotButton) swapSlotButton.disabled = !canSwap;
  nextStepButton.disabled = !canProceed;
  nextStepButton.textContent = canProceed ? "다음" : "전방/후방 선택 필요";
}

function renderFilters() {
  sinnerFilterButtons.innerHTML = LIMBUS_DATA.sinners.map((sinner) => {
    const isActive = builderState.activeSinners.includes(sinner.id);

    return `
      <button
        class="filter-button ${isActive ? "is-active" : ""}"
        type="button"
        title="${sinner.id}"
        data-filter-sinner="${sinner.id}"
      >
        <img src="${sinner.icon}" alt="${sinner.id}" />
      </button>
    `;
  }).join("");

  const keywordFilters = getKeywordFilterSets(LIMBUS_DATA.identityTagFilters);
  keywordFilterButtons.innerHTML = renderKeywordFilterButtons(keywordFilters.normal, builderState.activeTags, {
    buttonClass: "filter-button",
    dataAttribute: "data-filter-tag"
  });
  keywordSpecialFilterButtons.innerHTML = renderKeywordFilterButtons(keywordFilters.special, builderState.activeTags, {
    buttonClass: "filter-button",
    dataAttribute: "data-filter-tag"
  });
  syncSpecialKeywordPanel(keywordSpecialFilterButtons, keywordFilters.special, builderState.activeTags);

  sinnerFilterButtons.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      toggleSinnerFilter(button.dataset.filterSinner);
    });
  });

  keywordFilterButtons.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      toggleTagFilter(button.dataset.filterTag);
    });
  });

  keywordSpecialFilterButtons.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      toggleTagFilter(button.dataset.filterTag);
    });
  });
}

function toggleSinnerFilter(sinnerId) {
  builderState.activeSinners = builderState.activeSinners.includes(sinnerId)
    ? builderState.activeSinners.filter((activeSinner) => activeSinner !== sinnerId)
    : [...builderState.activeSinners, sinnerId];

  renderFilters();
  renderIdentities();
}

function toggleTagFilter(tag) {
  builderState.activeTags = builderState.activeTags.includes(tag)
    ? builderState.activeTags.filter((activeTag) => activeTag !== tag)
    : [...builderState.activeTags, tag];

  renderFilters();
  renderIdentities();
}

function renderSlots() {
  identitySlots.forEach((slot) => {
    const slotName = slot.dataset.slot;
    const identity = getIdentity(builderState.selected[slotName]);
    const slotBox = slot.closest(".slot-box");
    const slotExtra = [...slotExtras].find((extra) => extra.dataset.slotExtra === slotName);

    slotBox.classList.toggle("is-active", builderState.activeSlot === slotName);
    slot.classList.toggle("is-active", builderState.activeSlot === slotName);
    slot.classList.toggle("has-identity", Boolean(identity));

    if (!identity) {
      slot.innerHTML = `
        <span class="slot-empty">인격 선택</span>
      `;
      slotExtra.innerHTML = "";
      return;
    }

    slot.innerHTML = `
      <img class="slot-image" src="${identity.image}" alt="${identity.id}" />
    `;
    slotExtra.innerHTML = renderSlotExtra(identity);
  });

  attachSlotExtraPreviewListeners();
}

function renderSlotExtra(identity) {
  const keywordButtons = identity.tagIcons.map((tagIcon) => `
    <button
      class="slot-token slot-keyword"
      type="button"
      title="${tagIcon.tag}"
      data-preview-type="image"
      data-preview-image="${tagIcon.cardImage}"
      data-preview-alt="${tagIcon.tag}"
    >
      <img src="${tagIcon.image}" alt="${tagIcon.tag}" />
    </button>
  `).join("");

  const uniqueButtons = identity.uniqueCards.map((card) => `
    <button
      class="slot-token slot-unique-card"
      type="button"
      title="${card.id}"
      data-preview-type="image"
      data-preview-image="${card.image}"
      data-preview-alt="${card.id}"
    >
      <img src="${card.image}" alt="${card.id}" />
    </button>
  `).join("");

  if (!keywordButtons && !uniqueButtons) return "";

  return `
    ${uniqueButtons ? `
      <div class="slot-extra-group">
        <span class="slot-extra-label">스택/상태</span>
        <div class="slot-extra-row" aria-label="스택/상태 카드">${uniqueButtons}</div>
      </div>
    ` : ""}
    ${keywordButtons ? `
      <div class="slot-extra-group">
        <span class="slot-extra-label">키워드</span>
        <div class="slot-extra-row" aria-label="키워드">${keywordButtons}</div>
      </div>
    ` : ""}
  `;
}

function attachSlotExtraPreviewListeners() {
  document.querySelectorAll(".slot-token").forEach((button) => {
    const showPreview = () => {
      builderState.hovered = {
        image: button.dataset.previewImage,
        alt: button.dataset.previewAlt
      };
      renderPreview(builderState.hovered);
    };

    button.addEventListener("mouseenter", showPreview);
    button.addEventListener("mouseover", showPreview);
    button.addEventListener("pointerenter", showPreview);
    button.addEventListener("focus", showPreview);
    button.addEventListener("click", showPreview);
  });
}

function renderIdentities() {
  const visibleIdentities = getVisibleIdentities();
  if (identityCount) identityCount.textContent = visibleIdentities.length;
  identityGrid.innerHTML = visibleIdentities.map((identity) => {
    const selectedSlot = Object.entries(builderState.selected)
      .find(([, identityId]) => identityId === identity.id)?.[0];
    const sameSinnerSlot = getSelectedSlotForSinner(identity.sinnerId);
    const isRelated = Boolean(sameSinnerSlot && sameSinnerSlot !== selectedSlot);

    return `
      <button
        class="identity-card ${selectedSlot ? "is-selected" : ""} ${isRelated ? "is-related" : ""}"
        type="button"
        data-identity-id="${identity.id}"
        aria-label="${identity.id}"
      >
        <img src="${identity.image}" alt="" />
      </button>
    `;
  }).join("");

  identityGrid.querySelectorAll(".identity-card").forEach((card) => {
    card.addEventListener("click", () => chooseIdentity(card.dataset.identityId));
    card.addEventListener("mouseenter", () => {
      builderState.hovered = card.dataset.identityId;
      renderPreview(builderState.hovered);
    });
    card.addEventListener("focus", () => {
      builderState.hovered = card.dataset.identityId;
      renderPreview(builderState.hovered);
    });
  });
}

function getVisibleIdentities() {
  const sinnerFiltered = builderState.activeSinners.length
    ? LIMBUS_DATA.identities.filter((identity) => builderState.activeSinners.includes(identity.sinnerId))
    : LIMBUS_DATA.identities;

  if (!builderState.activeTags.length) return sinnerFiltered;

  return sinnerFiltered.filter((identity) => {
    return builderState.activeTags.some((tag) => identity.tags.includes(tag));
  });
}

function renderDeckBuilder() {
  syncDeckCardsWithAvailableCards();
  renderDeckSideSummary();
  renderMobileDeckSummary();
  renderDeckFilters();
  renderDeckTabs();
  renderDeckCardPool();
  renderDeckIncludedGrid();
  renderDeckExtraGrid();
  renderDeckReview();
  renderDeckStatus();
  renderDeckPreview(null);
  syncDeckMode();
  syncMobileDeckPane();
}

function syncDeckMode() {
  const isReviewing = builderState.isDeckReviewing;
  const deckCardSection = deckView.querySelector(".deck-card-section");
  const deckIncludedSection = deckView.querySelector(".deck-included-section");

  deckView.classList.toggle("is-reviewing", isReviewing);
  deckCardTabs.hidden = isReviewing;
  if (deckCardSection) deckCardSection.hidden = isReviewing;
  if (deckIncludedSection) deckIncludedSection.hidden = isReviewing;
  if (deckReviewSection) deckReviewSection.hidden = !isReviewing;
}

function setMobileDeckPane(paneName) {
  if (!["cards", "deck", "save"].includes(paneName)) return;

  builderState.mobileDeckPane = paneName;
  builderState.isDeckReviewing = paneName === "save";
  deckView.classList.remove("is-mobile-filter-open");
  if (builderState.isDeckReviewing) renderDeckReview();
  syncDeckMode();
  syncMobileDeckPane();
  renderDeckPreview(null);
}

function syncMobileDeckPane() {
  const paneName = builderState.mobileDeckPane || "cards";

  ["cards", "deck", "save"].forEach((name) => {
    deckView.classList.toggle(`is-mobile-pane-${name}`, paneName === name);
  });

  mobileDeckNav?.querySelectorAll("[data-mobile-deck-pane]").forEach((button) => {
    const isActive = button.dataset.mobileDeckPane === paneName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });

  const activeFilterCount = builderState.activeDeckTags.length
    + builderState.activeDeckSins.length
    + builderState.activeDeckAttackTypes.length
    + builderState.activeDeckEffects.length;
  if (mobileActiveFilterCount) mobileActiveFilterCount.textContent = String(activeFilterCount);
  if (mobileDeckNavCount) mobileDeckNavCount.textContent = `${builderState.deckCards.length}/${DECK_LIMIT}`;
}

function swapDeckIdentities() {
  if (!builderState.selected.front && !builderState.selected.back) return;

  [builderState.selected.front, builderState.selected.back] = [builderState.selected.back, builderState.selected.front];
  syncDeckCardsWithAvailableCards();
  renderDeckBuilder();
}

function renderMobileDeckSummary() {
  if (!mobileDeckSummary) return;

  mobileDeckSummary.innerHTML = `
    ${renderMobileDeckIdentitySlot("front", "전방")}
    <button
      class="mobile-deck-swap"
      type="button"
      data-action="mobile-swap-deck-identities"
      aria-label="전방 후방 교체"
      ${!builderState.selected.front && !builderState.selected.back ? "disabled" : ""}
    >교체</button>
    ${renderMobileDeckIdentitySlot("back", "후방")}
    <div class="mobile-deck-progress" aria-label="덱 장수">
      <strong>${builderState.deckCards.length}</strong>
      <span>/ ${DECK_LIMIT}</span>
    </div>
  `;
}

function renderMobileDeckIdentitySlot(slotName, label) {
  const identity = getIdentity(builderState.selected[slotName]);

  return `
    <button
      class="mobile-deck-identity ${identity ? "has-identity" : "is-empty"}"
      type="button"
      data-mobile-deck-identity-slot="${slotName}"
      aria-label="${label} 인격 ${identity ? "변경" : "선택"}"
    >
      <span class="mobile-deck-identity-label">${label}</span>
      <span class="mobile-deck-identity-image">
        ${identity ? `<img src="${identity.image}" alt="" />` : "+"}
      </span>
    </button>
  `;
}

function renderDeckSideSummary() {
  deckSideSummary.innerHTML = ["front", "back"].map((slotName) => {
    const identity = getIdentity(builderState.selected[slotName]);
    const label = slotName === "front" ? "전방" : "후방";

    if (!identity) {
      return `
        <article class="deck-side-card">
          <button
            class="deck-side-card-select"
            type="button"
            data-deck-identity-slot="${slotName}"
            aria-label="${label} 인격 선택"
          ></button>
          <div class="deck-side-empty">${label}</div>
          <div class="deck-side-body">
            <span class="deck-side-label">${label}</span>
            <span class="slot-empty">인격 선택</span>
          </div>
        </article>
      `;
    }

    return `
      <article class="deck-side-card">
        <button
          class="deck-side-card-select deck-preview-source"
          type="button"
          data-deck-identity-slot="${slotName}"
          data-preview-image="${identity.image}"
          data-preview-alt="${identity.id}"
          aria-label="${label} 인격 변경"
        ></button>
        <div class="deck-side-image">
          <img src="${identity.image}" alt="${identity.id}" />
        </div>
        <div class="deck-side-body">
          <span class="deck-side-label">${label}</span>
          <div class="deck-side-assets">
            ${renderDeckAssetRow(identity.uniqueCards.map((card) => ({
              title: card.id,
              image: card.image,
              previewImage: card.image,
              className: "deck-unique-token"
            })))}
            ${renderDeckAssetRow(identity.tagIcons.map((tagIcon) => ({
              title: tagIcon.tag,
              image: tagIcon.image,
              previewImage: tagIcon.cardImage,
              className: "deck-keyword-token"
            })))}
          </div>
        </div>
      </article>
    `;
  }).join("");

  attachDeckPreviewListeners(deckSideSummary);
  if (deckSwapIdentitiesButton) {
    deckSwapIdentitiesButton.disabled = !builderState.selected.front && !builderState.selected.back;
  }
}

function renderDeckAssetRow(items) {
  if (!items.length) return "";

  return `
    <div class="deck-side-asset-row">
      ${items.map((item) => `
        <button
          class="deck-token ${item.className} deck-preview-source"
          type="button"
          title="${item.title}"
          data-preview-image="${item.previewImage}"
          data-preview-alt="${item.title}"
        >
          <img src="${item.image}" alt="${item.title}" />
        </button>
      `).join("")}
    </div>
  `;
}

function renderDeckFilters() {
  deckEffectFilters.classList.add("effect-filter-groups");

  renderKeywordFilterSections({
    normalContainer: deckKeywordFilters,
    specialContainer: deckSpecialKeywordFilters,
    activeTags: builderState.activeDeckTags,
    buttonClass: "deck-filter-token deck-preview-source",
    dataAttribute: "data-deck-keyword",
    preview: true
  });

  deckSinFilters.innerHTML = renderIconFilterButtons(sinFilters, builderState.activeDeckSins, "data-deck-sin", {
    imageAlt: "label",
    title: true
  });

  deckAttackTypeFilters.innerHTML = renderIconFilterButtons(attackTypeFilters, builderState.activeDeckAttackTypes, "data-deck-attack-type", {
    title: true
  });

  deckEffectFilters.innerHTML = renderEffectFilterGroups(builderState.activeDeckEffects, "deck");

  bindFilterButtons(deckKeywordFilters, "data-deck-keyword", toggleDeckKeywordFilter);
  bindFilterButtons(deckSpecialKeywordFilters, "data-deck-keyword", toggleDeckKeywordFilter);
  bindFilterButtons(deckSinFilters, "data-deck-sin", toggleDeckSinFilter);
  bindFilterButtons(deckAttackTypeFilters, "data-deck-attack-type", toggleDeckAttackTypeFilter);
  bindFilterButtons(deckEffectFilters, "data-deck-effect", toggleDeckEffectFilter);

  attachDeckPreviewListeners(deckKeywordFilters);
  attachDeckPreviewListeners(deckSpecialKeywordFilters);
  syncMobileDeckPane();
}

function toggleDeckKeywordFilter(tag) {
  builderState.activeDeckTags = toggleArrayValue(builderState.activeDeckTags, tag);

  renderDeckFilters();
  renderDeckCardPool();
}

function toggleDeckAttackTypeFilter(attackType) {
  builderState.activeDeckAttackTypes = toggleArrayValue(builderState.activeDeckAttackTypes, attackType);

  renderDeckFilters();
  renderDeckCardPool();
}

function toggleDeckEffectFilter(effect) {
  builderState.activeDeckEffects = toggleArrayValue(builderState.activeDeckEffects, effect);

  renderDeckFilters();
  renderDeckCardPool();
}

function toggleDeckSinFilter(sin) {
  builderState.activeDeckSins = toggleArrayValue(builderState.activeDeckSins, sin);

  renderDeckFilters();
  renderDeckCardPool();
}

function renderDeckTabs() {
  deckCardTabs.innerHTML = deckCardTabsData.map(([tabId, label, image]) => `
    <button
      class="deck-bookmark ${builderState.activeDeckTab === tabId ? "is-active" : ""}"
      type="button"
      data-deck-tab="${tabId}"
    >
      ${renderBookmarkContent(label, image)}
    </button>
  `).join("");

  deckCardTabs.querySelectorAll(".deck-bookmark").forEach((button) => {
    button.addEventListener("click", () => {
      builderState.activeDeckTab = button.dataset.deckTab;
      renderDeckTabs();
      renderDeckCardPool();
    });
  });
}

function renderBookmarkContent(label, image) {
  return `
    ${image ? `<img src="${image}" alt="" onerror="this.hidden=true;" />` : ""}
    <span>${label}</span>
  `;
}

function renderDeckCardPool() {
  const scrollTop = deckCardPool.scrollTop;
  const scrollLeft = deckCardPool.scrollLeft;
  const cards = getFilteredDeckCards();

  if (!cards.length) {
    deckCardPool.innerHTML = `<div class="deck-empty-note">해당 카드 없음.</div>`;
    restoreDeckCardPoolScroll(scrollTop, scrollLeft);
    return;
  }

  deckCardPool.innerHTML = cards.map((card) => {
    const selectedCount = getSelectedDeckCardCount(card.id);
    const isAdded = isDeckCardSelected(card);
    const isMaxed = card.countsTowardDeck && selectedCount >= getDeckCardCopyLimit(card);
    const isFullBlocked = card.countsTowardDeck && builderState.deckCards.length >= DECK_LIMIT && !isAdded;
    const isDisabled = !card.selectable || isFullBlocked;

    return `
    <button
      class="deck-pool-card deck-preview-source ${isAdded ? "is-added" : ""} ${isMaxed ? "is-maxed" : ""} ${isDisabled ? "is-disabled" : ""}"
      type="button"
      title="${card.id}"
      data-deck-card-id="${card.id}"
      data-preview-image="${card.image}"
      data-preview-alt="${card.id}"
    >
      ${selectedCount ? `<span class="deck-pool-copy-count">${selectedCount}</span>` : ""}
      <img src="${card.image}" alt="${card.id}" />
    </button>
  `;
  }).join("");

  attachDeckPreviewListeners(deckCardPool);
  deckCardPool.querySelectorAll("[data-deck-card-id]").forEach((button) => {
    button.addEventListener("click", () => toggleDeckCard(button.dataset.deckCardId));
  });
  restoreDeckCardPoolScroll(scrollTop, scrollLeft);
}

function restoreDeckCardPoolScroll(scrollTop, scrollLeft = 0) {
  if (!deckCardPool) return;

  const restore = () => {
    deckCardPool.scrollTop = scrollTop;
    deckCardPool.scrollLeft = scrollLeft;
  };

  restore();
  if (typeof requestAnimationFrame === "function") {
    requestAnimationFrame(restore);
  }
}

function getDeckCards() {
  return getDeckCardsForIdentityIds([builderState.selected.front, builderState.selected.back]);
}

function getDeckCardsForIdentityIds(identityIds = []) {
  const selectedIdentities = identityIds
    .map((identityId) => getIdentity(identityId))
    .filter(Boolean);
  const cards = [];
  const addedEgoIds = new Set();

  selectedIdentities.forEach((identity) => {
    const baseCount = LIMBUS_DATA.raw.cardSets[identity.sinnerId]?.[0] || 0;

    for (let index = 1; index <= baseCount; index += 1) {
      const id = `${identity.sinnerId}_base_${index}`;
      cards.push({
        id,
        category: "sinner",
        image: `assets/sinners/${identity.sinnerId}/base/${padNumber(index)}.png`,
        selectable: true,
        countsTowardDeck: true,
        sin: getCardSin(id),
        attackType: getCardAttackType(id),
        effects: getCardEffects(id),
        tags: getCardTags(id)
      });
    }

    for (let index = 1; index <= identity.cardCount; index += 1) {
      const id = `${identity.id}_cards_${index}`;
      cards.push({
        id,
        category: "identity",
        image: `assets/sinners/${identity.sinnerId}/${identity.identityKey}/${padNumber(index)}.png`,
        selectable: true,
        countsTowardDeck: true,
        sin: getCardSin(id),
        attackType: getCardAttackType(id),
        effects: getCardEffects(id),
        tags: getCardTags(id)
      });
    }

    identity.upgradeCards.forEach((card) => {
      cards.push({
        id: card.id,
        category: "upgrade",
        image: card.image,
        selectable: true,
        countsTowardDeck: false,
        sin: getCardSin(card.id),
        attackType: getCardAttackType(card.id),
        effects: getCardEffects(card.id),
        tags: getCardTags(card.id)
      });
    });

    getEgoKeysForSinner(identity.sinnerId).forEach((egoKey) => {
      const egoId = `${identity.sinnerId}_${egoKey}_ego`;
      if (addedEgoIds.has(egoId)) return;
      addedEgoIds.add(egoId);

      cards.push({
        id: egoId,
        category: "ego",
        image: `assets/sinners/${identity.sinnerId}/ego/${egoKey}.png`,
        selectable: true,
        countsTowardDeck: false,
        sin: getCardSin(egoId),
        attackType: getCardAttackType(egoId),
        effects: getCardEffects(egoId),
        tags: getCardTags(egoId)
      });
    });
  });

  return cards;
}

function renderDeckIncludedGrid() {
  const availableCards = getDeckCardMap();
  const selectedCards = builderState.deckCards.map((cardId) => availableCards.get(cardId)).filter(Boolean);
  if (deckCount) deckCount.textContent = `${selectedCards.length} / ${DECK_LIMIT}`;

  deckIncludedGrid.innerHTML = Array.from({ length: 20 }, (_, index) => `
    ${selectedCards[index] ? renderDeckIncludedSlot(selectedCards[index], index) : renderDeckEmptySlot(index)}
  `).join("");

  attachDeckPreviewListeners(deckIncludedGrid);
  deckIncludedGrid.querySelectorAll("[data-remove-deck-card]").forEach((button) => {
    button.addEventListener("click", () => removeDeckCard(button.dataset.removeDeckCard));
  });
}

function renderDeckExtraGrid() {
  if (!deckExtraGrid) return;

  const availableCards = getDeckCardMap();
  const selectedEgo = builderState.selectedEgo ? availableCards.get(builderState.selectedEgo) : null;
  const selectedUpgrades = builderState.upgradeCards
    .map((cardId) => availableCards.get(cardId))
    .filter(Boolean);
  const availableUpgrades = Array.from(availableCards.values()).filter((card) => card.category === "upgrade");
  const selectedKeywordItems = getSelectedDeckKeywordItems(availableCards);

  deckExtraGrid.innerHTML = `
    <section class="deck-extra-group">
      <div class="deck-extra-heading">
        <span>EGO</span>
        <small>1장 선택</small>
      </div>
      <div class="deck-extra-card-row">
        ${selectedEgo ? renderDeckExtraCard(selectedEgo) : `<div class="deck-extra-slot">선택 없음</div>`}
      </div>
    </section>
    <section class="deck-extra-group">
      <div class="deck-extra-heading">
        <span>강화</span>
        <small>${selectedUpgrades.length} / ${availableUpgrades.length}</small>
      </div>
      <div class="deck-extra-card-row">
        ${selectedUpgrades.length
          ? selectedUpgrades.map((card) => renderDeckExtraCard(card)).join("")
          : `<div class="deck-extra-slot">${availableUpgrades.length ? "선택 없음" : "해당 없음"}</div>`}
      </div>
    </section>
    <section class="deck-extra-group">
      <div class="deck-extra-heading">
        <span>추가 키워드</span>
        <small>${selectedKeywordItems.length}</small>
      </div>
      <div class="deck-extra-card-row deck-extra-keyword-row">
        ${selectedKeywordItems.length
          ? selectedKeywordItems.map((item) => renderDeckExtraKeywordToken(item)).join("")
          : `<div class="deck-extra-slot deck-extra-keyword-empty">없음</div>`}
      </div>
    </section>
  `;

  attachDeckPreviewListeners(deckExtraGrid);
  deckExtraGrid.querySelectorAll("[data-remove-extra-card]").forEach((button) => {
    button.addEventListener("click", () => removeDeckExtraCard(button.dataset.removeExtraCard));
  });
}

function renderDeckExtraCard(card) {
  return `
    <button
      class="deck-extra-card deck-preview-source"
      type="button"
      title="${card.id}"
      data-remove-extra-card="${card.id}"
      data-preview-image="${card.image}"
      data-preview-alt="${card.id}"
    >
      <img src="${card.image}" alt="${card.id}" />
    </button>
  `;
}

function renderDeckReview() {
  if (!deckReviewSection) return;

  const snapshot = getDeckSelectionSnapshot();
  deckReviewIdentities.innerHTML = [
    renderDeckReviewIdentity(snapshot.front, "전방"),
    renderDeckReviewIdentity(snapshot.back, "후방")
  ].join("");

  deckReviewMain.innerHTML = snapshot.mainCards.map((card, index) => renderDeckReviewCard(card, index)).join("");

  const extraCards = [
    ...(snapshot.selectedEgo ? [snapshot.selectedEgo] : []),
    ...snapshot.selectedUpgrades
  ];
  deckReviewExtra.innerHTML = extraCards.length
    ? extraCards.map((card) => renderDeckReviewExtraCard(card)).join("")
    : `<div class="deck-extra-slot deck-review-empty">선택 없음</div>`;

  deckReviewKeywords.innerHTML = snapshot.selectedKeywordItems.length
    ? snapshot.selectedKeywordItems.map((item) => renderDeckExtraKeywordToken(item)).join("")
    : `<div class="deck-extra-slot deck-review-empty">없음</div>`;

  renderDeckSavePanel(snapshot);
  attachDeckPreviewListeners(deckReviewSection);
}

function renderDeckSavePanel(snapshot = getDeckSelectionSnapshot()) {
  renderDeckSaveFilters();
  renderDeckNotePreview();
}

function renderDeckSaveFilters() {
  if (!deckSaveKeywords) return;

  deckSaveKeywords.innerHTML = getDeckSaveFilterGroups().map((group) => `
    <section class="deck-save-filter-group">
      <span>${group.title}</span>
      <div class="deck-save-filter-tokens">
        ${group.filters.map((filter) => renderDeckSaveFilterButton(group.key, filter)).join("")}
      </div>
    </section>
  `).join("");

  deckSaveKeywords.querySelectorAll("[data-save-filter-key]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleDeckSaveFilter(button.dataset.saveFilterKey, button.dataset.saveFilterValue);
    });
  });
  attachDeckPreviewListeners(deckSaveKeywords);
}

function getDeckSaveFilterGroups() {
  const keywordFilters = [
    ...(LIMBUS_DATA.cardTagFilters || []),
    ...(LIMBUS_DATA.identityTagFilters || [])
  ];
  const uniqueKeywordFilters = keywordFilters.filter((filter, index, filters) => {
    return filters.findIndex((candidate) => candidate.tag === filter.tag) === index;
  });

  return [
    {
      key: "sins",
      title: "죄악",
      filters: sinFilters.map((filter) => ({
        value: filter.label,
        image: filter.image
      }))
    },
    {
      key: "attackTypes",
      title: "유형",
      filters: attackTypeFilters.map((filter) => ({
        value: filter.label,
        image: filter.image
      }))
    },
    {
      key: "tags",
      title: "키워드",
      filters: uniqueKeywordFilters.map((filter) => ({
        value: filter.tag,
        image: filter.image,
        previewImage: filter.cardImage
      }))
    },
    {
      key: "effects",
      title: "기타",
      filters: effectFilters.map((filter) => ({
        value: filter.label,
        image: filter.image
      }))
    }
  ];
}

function renderDeckSaveFilterButton(key, filter) {
  const activeValues = builderState.deckSave.featuredFilters[key] || [];
  const hasCardPreview = Boolean(filter.previewImage);
  const previewAttributes = hasCardPreview
    ? `data-preview-image="${filter.previewImage}" data-preview-alt="${filter.value}"`
    : "";

  return `
    <button
      class="deck-save-keyword ${activeValues.includes(filter.value) ? "is-active" : ""} ${hasCardPreview ? "deck-preview-source" : ""}"
      type="button"
      data-save-filter-key="${key}"
      data-save-filter-value="${filter.value}"
      aria-label="${filter.value}"
      ${previewAttributes}
    >
      ${filter.image ? `<img src="${filter.image}" alt="" onerror="this.hidden=true;" />` : `<span>${filter.value.slice(0, 1)}</span>`}
    </button>
  `;
}

function toggleDeckSaveFilter(key, value) {
  const activeValues = builderState.deckSave.featuredFilters[key] || [];
  builderState.deckSave.featuredFilters[key] = activeValues.includes(value)
    ? activeValues.filter((activeValue) => activeValue !== value)
    : [...activeValues, value];

  renderDeckSaveFilters();
}

function openCardSearch() {
  if (!cardSearchPopover) return;

  cardSearchPopover.hidden = false;
  renderCardSearchPreview(null);
  renderCardInsert();
}

function closeCardSearch() {
  if (!cardSearchPopover) return;

  cardSearchPopover.hidden = true;
  deckSaveNotes?.focus({ preventScroll: true });
}

function renderCardInsert() {
  renderCardInsertFilters();
  renderCardInsertTabs();
  renderCardSearchResults();
  renderCardSearchInsertButton();
}

function renderCardInsertFilters() {
  if (!cardInsertSinnerFilters) return;

  cardInsertEffectFilters.classList.add("effect-filter-groups");

  cardInsertSinnerFilters.innerHTML = renderSinnerFilterButtons(cardInsertState.activeSinners, "data-card-insert-sinner");
  renderKeywordFilterSections({
    normalContainer: cardInsertKeywordFilters,
    specialContainer: cardInsertSpecialKeywordFilters,
    activeTags: cardInsertState.activeTags,
    buttonClass: "deck-filter-token",
    dataAttribute: "data-card-insert-tag"
  });

  cardInsertSinFilters.innerHTML = renderIconFilterButtons(sinFilters, cardInsertState.activeSins, "data-card-insert-sin");

  cardInsertAttackTypeFilters.innerHTML = renderIconFilterButtons(
    attackTypeFilters,
    cardInsertState.activeAttackTypes,
    "data-card-insert-attack-type"
  );

  cardInsertEffectFilters.innerHTML = renderEffectFilterGroups(cardInsertState.activeEffects, "card-insert");

  bindFilterButtons(cardInsertSinnerFilters, "data-card-insert-sinner", (value) => toggleCardInsertFilter("activeSinners", value));
  bindFilterButtons(cardInsertKeywordFilters, "data-card-insert-tag", (value) => toggleCardInsertFilter("activeTags", value));
  bindFilterButtons(cardInsertSpecialKeywordFilters, "data-card-insert-tag", (value) => toggleCardInsertFilter("activeTags", value));
  bindFilterButtons(cardInsertSinFilters, "data-card-insert-sin", (value) => toggleCardInsertFilter("activeSins", value));
  bindFilterButtons(cardInsertAttackTypeFilters, "data-card-insert-attack-type", (value) => toggleCardInsertFilter("activeAttackTypes", value));
  bindFilterButtons(cardInsertEffectFilters, "data-card-insert-effect", (value) => toggleCardInsertFilter("activeEffects", value));
}

function renderCardInsertTabs() {
  if (!cardSearchTabs) return;

  cardSearchTabs.innerHTML = cardInsertTabsData.map(([tabId, label, image]) => `
    <button
      class="deck-bookmark ${cardInsertState.activeTab === tabId ? "is-active" : ""}"
      type="button"
      data-card-insert-tab="${tabId}"
    >
      ${renderBookmarkContent(label, image)}
    </button>
  `).join("");

  cardSearchTabs.querySelectorAll("[data-card-insert-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      cardInsertState.activeTab = button.dataset.cardInsertTab;
      clearCardInsertSelection();
      renderCardInsertTabs();
      renderCardSearchResults();
    });
  });
}

function toggleCardInsertFilter(key, value) {
  cardInsertState[key] = toggleArrayValue(cardInsertState[key], value);

  clearCardInsertSelection();
  renderCardInsertFilters();
  renderCardSearchResults();
}

function renderCardSearchResults() {
  if (!cardSearchGrid) return;

  const scrollTop = cardSearchGrid.scrollTop;
  const scrollLeft = cardSearchGrid.scrollLeft;
  const items = getFilteredCardInsertItems();
  const activeTab = cardInsertTabsData.find(([tabId]) => tabId === cardInsertState.activeTab);

  if (cardSearchHeading) cardSearchHeading.textContent = activeTab?.[1] || "전체";
  if (cardSearchCount) cardSearchCount.textContent = items.length;

  if (!items.length) {
    cardSearchGrid.innerHTML = `<div class="deck-empty-note">해당 항목 없음.</div>`;
    clearCardInsertSelection();
    restoreCardSearchGridScroll(scrollTop, scrollLeft);
    return;
  }

  cardSearchGrid.innerHTML = items.map((item) => `
      <button
        class="card-search-result ${item.shape === "icon" ? "is-icon" : ""} ${item.shape === "folder" ? "is-folder" : ""} ${item.shape === "folder" && isCardInsertFolderExpanded(item.id) ? "is-open" : ""} ${item.folderDepth ? `folder-depth-${item.folderDepth}` : ""} ${cardInsertState.selectedItemId === item.id ? "is-selected" : ""}"
        type="button"
        aria-label="${item.title}"
        data-card-insert-item-id="${item.id}"
        ${item.shape === "folder" ? `data-card-insert-folder-id="${item.id}"` : ""}
        data-preview-image="${item.previewImage || item.image}"
        data-preview-alt="${item.title}"
      >
        <img src="${item.image}" alt="" onerror="this.closest('button').hidden=true;" />
        ${item.shape === "folder" ? `<span class="codex-folder-label">${item.title}</span>` : ""}
      </button>
    `).join("");

  cardSearchGrid.querySelectorAll("[data-card-insert-folder-id]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleCardInsertFolder(button.dataset.cardInsertFolderId);
    });
  });

  cardSearchGrid.querySelectorAll("[data-card-insert-item-id]").forEach((button) => {
    if (button.dataset.cardInsertFolderId) return;
    button.addEventListener("click", () => selectCardInsertItem(button.dataset.cardInsertItemId));
  });
  restoreCardSearchGridScroll(scrollTop, scrollLeft);
}

function restoreCardSearchGridScroll(scrollTop, scrollLeft = 0) {
  if (!cardSearchGrid) return;

  const restore = () => {
    cardSearchGrid.scrollTop = scrollTop;
    cardSearchGrid.scrollLeft = scrollLeft;
  };

  restore();
  if (typeof requestAnimationFrame === "function") {
    requestAnimationFrame(restore);
  }
}

function getFilteredCardInsertItems() {
  if (cardInsertState.activeTab === "deck") {
    return getDeckReferenceCards()
      .map((card) => getCodexItemById(card.id) || makeCardInsertDeckItem(card))
      .filter((item) => itemMatchesCodexFilterState(item, {
        ...cardInsertState,
        activeTab: "all"
      }));
  }

  return getCodexItems(isCardInsertFolderExpanded)
    .filter((item) => item.shape === "card" || item.shape === "folder")
    .filter((item) => itemMatchesCodexFilterState(item, cardInsertState));
}

function selectCardInsertItem(itemId) {
  const item = getCardInsertItemById(itemId);
  if (!item || item.shape === "folder") return;

  cardInsertState.selectedItemId = item.id;
  renderCardSearchPreview({
    image: item.previewImage || item.image,
    alt: item.title,
    filters: getCodexPreviewFilters(item)
  });
  renderCardSearchResults();
  renderCardSearchInsertButton();
}

function makeCardInsertDeckItem(card) {
  return {
    id: card.id,
    title: card.id,
    category: card.category === "sinner" ? "card" : card.category,
    sinnerId: card.sinnerId || null,
    image: card.image,
    previewImage: card.previewImage || card.image,
    tags: card.tags || [],
    effects: card.effects || [],
    sin: card.sin || null,
    attackType: card.attackType || null,
    shape: "card"
  };
}

function getCardInsertItemById(itemId) {
  return getFilteredCardInsertItems().find((item) => item.id === itemId)
    || getCodexItems(() => true).find((item) => item.id === itemId || item.title === itemId)
    || null;
}

function clearCardInsertSelection() {
  cardInsertState.selectedItemId = "";
  renderCardSearchPreview(null);
  renderCardSearchInsertButton();
}

function renderCardSearchPreview(item) {
  if (!cardSearchPreview) return;

  if (!item) {
    cardSearchPreview.innerHTML = "<span>카드를 클릭하면 크게 표시.</span>";
    renderPreviewFilters(cardSearchPreviewFilters, []);
    return;
  }

  cardSearchPreview.innerHTML = `<img src="${item.image}" alt="${item.alt}" />`;
  renderPreviewFilters(cardSearchPreviewFilters, item.filters || getPreviewFiltersForId(item.alt));
}

function renderCardSearchInsertButton() {
  if (!cardSearchInsertButton) return;

  cardSearchInsertButton.disabled = !cardInsertState.selectedItemId;
}

function insertSelectedCardSearchItem() {
  if (!cardInsertState.selectedItemId) return;

  insertDeckCardToken(cardInsertState.selectedItemId);
  closeCardSearch();
}

function resetCardInsertState() {
  cardInsertState.activeTab = "all";
  cardInsertState.activeSinners = [];
  cardInsertState.activeTags = [];
  cardInsertState.activeSins = [];
  cardInsertState.activeAttackTypes = [];
  cardInsertState.activeEffects = [];
  cardInsertState.expandedFolders = [];
  clearCardInsertSelection();
}

function toggleCardInsertFolder(folderId) {
  cardInsertState.expandedFolders = isCardInsertFolderExpanded(folderId)
    ? cardInsertState.expandedFolders.filter((id) => id !== folderId)
    : [...cardInsertState.expandedFolders, folderId];

  clearCardInsertSelection();
  renderCardSearchResults();
}

function isCardInsertFolderExpanded(folderId) {
  return cardInsertState.expandedFolders.includes(folderId);
}

function getAllSearchableCards() {
  return getCodexItems(() => true)
    .filter((item) => item.shape === "card")
    .map((item) => ({
      id: item.id,
      image: item.previewImage || item.image
    }));
}

function getDeckReferenceCards() {
  const snapshot = getDeckSelectionSnapshot();
  const seen = new Set();
  return [
    ...snapshot.mainCards,
    ...(snapshot.selectedEgo ? [snapshot.selectedEgo] : []),
    ...snapshot.selectedUpgrades
  ].filter((card) => {
    if (!card || seen.has(card.id)) return false;
    seen.add(card.id);
    return true;
  });
}

function insertDeckCardToken(cardId) {
  if (!deckSaveNotes) return;

  const token = `[[card:${cardId}]]`;
  const start = deckSaveNotes.selectionStart ?? deckSaveNotes.value.length;
  const end = deckSaveNotes.selectionEnd ?? deckSaveNotes.value.length;
  const before = deckSaveNotes.value.slice(0, start);
  const after = deckSaveNotes.value.slice(end);
  const prefix = before && !before.endsWith(" ") && !before.endsWith("\n") ? " " : "";
  const suffix = after && !after.startsWith(" ") && !after.startsWith("\n") ? " " : "";

  deckSaveNotes.value = `${before}${prefix}${token}${suffix}${after}`;
  const nextCursor = before.length + prefix.length + token.length;
  deckSaveNotes.setSelectionRange(nextCursor, nextCursor);
  renderDeckNotePreview();
}

function renderDeckNotePreview() {
  if (!deckNotePreview) return;

  const value = deckSaveNotes?.value || "";
  deckNotePreview.innerHTML = renderDeckNoteContent(value);
  attachDeckPreviewListeners(deckNotePreview);
}

function renderDeckNoteContent(value) {
  if (!value.trim()) return `<span class="deck-save-empty">설명 미리보기</span>`;

  const cardMap = getSearchableCardMap();
  const blocks = [];
  const paragraphLines = [];
  let listItems = [];
  let listStart = 1;

  const renderInline = (line) => escapeHtml(line)
    .replace(/\[\[card:([^\]]+)\]\]/g, (_, cardId) => {
      const card = cardMap.get(cardId);
      if (!card) return `<code>[[card:${cardId}]]</code>`;

      return `
        <button
          class="deck-note-card deck-preview-source"
          type="button"
          data-preview-image="${card.image}"
          data-preview-alt="${card.id}"
        >
          <img src="${card.image}" alt="" />
        </button>
      `;
    });

  const flushParagraph = () => {
    if (!paragraphLines.length) return;
    blocks.push(`<p>${paragraphLines.map(renderInline).join("<br />")}</p>`);
    paragraphLines.length = 0;
  };

  const flushList = () => {
    if (!listItems.length) return;
    const startAttribute = listStart === 1 ? "" : ` start="${listStart}"`;
    blocks.push(`<ol${startAttribute}>${listItems.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ol>`);
    listItems = [];
    listStart = 1;
  };

  String(value).replace(/\r\n?/g, "\n").split("\n").forEach((line) => {
    const heading = line.match(/^\s*(#{1,3})\s+(.+)$/);
    const orderedItem = line.match(/^\s*(\d+)\.\s+(.+)$/);

    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      blocks.push(`<h${level}>${renderInline(heading[2])}</h${level}>`);
      return;
    }

    if (orderedItem) {
      flushParagraph();
      if (!listItems.length) listStart = Number(orderedItem[1]);
      listItems.push(orderedItem[2]);
      return;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      return;
    }

    flushList();
    paragraphLines.push(line);
  });

  flushParagraph();
  flushList();
  return blocks.join("");
}

function getSearchableCardMap() {
  const map = new Map();
  [...getAllSearchableCards(), ...getDeckReferenceCards()].forEach((card) => {
    if (!map.has(card.id)) map.set(card.id, card);
  });
  return map;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[character]));
}

function buildCurrentDeckPayload({ includeNotes = true } = {}) {
  const snapshot = getDeckSelectionSnapshot();
  const payload = {
    version: APP_VERSION,
    savedAt: new Date().toISOString(),
    name: deckSaveName?.value.trim() || "이름 없는 덱",
    intro: deckSaveIntro?.value.trim() || "",
    identities: {
      front: snapshot.front?.id || null,
      back: snapshot.back?.id || null
    },
    cards: snapshot.mainCards.map((card) => card.id),
    ego: snapshot.selectedEgo?.id || null,
    upgrades: snapshot.selectedUpgrades.map((card) => card.id),
    featuredFilters: {
      sins: [...builderState.deckSave.featuredFilters.sins],
      attackTypes: [...builderState.deckSave.featuredFilters.attackTypes],
      tags: [...builderState.deckSave.featuredFilters.tags],
      effects: [...builderState.deckSave.featuredFilters.effects]
    }
  };

  if (includeNotes) payload.notes = deckSaveNotes?.value || "";
  return payload;
}

function getSavedDecks() {
  try {
    const parsedDecks = JSON.parse(localStorage.getItem(SAVED_DECKS_KEY) || "[]");
    if (!Array.isArray(parsedDecks)) return [];

    return parsedDecks
      .map((deck) => {
        try {
          return normalizeSavedDeckRecord(deck);
        } catch {
          return null;
        }
      })
      .filter(Boolean);
  } catch {
    localStorage.removeItem(SAVED_DECKS_KEY);
    return [];
  }
}

function setSavedDecks(savedDecks) {
  localStorage.setItem(SAVED_DECKS_KEY, JSON.stringify(savedDecks));
}

function setDeckSaveStatus(message, isError = false) {
  if (!deckSaveStatus) return;

  deckSaveStatus.textContent = message;
  deckSaveStatus.classList.toggle("is-error", isError);
}

function setSaveImportStatus(message, isError = false) {
  if (!saveImportStatus) return;

  saveImportStatus.textContent = message;
  saveImportStatus.classList.toggle("is-error", isError);
}

function setSavedDeckActionStatus(message, isError = false) {
  setSaveImportStatus(message, isError);
  if (!savedViewStatus) return;

  savedViewStatus.textContent = message;
  savedViewStatus.classList.toggle("is-error", isError);
}

function resetSaveImport() {
  if (saveImportCode) saveImportCode.value = "";
  if (saveImportFile) saveImportFile.value = "";
  setSaveImportStatus("입력 내용 비움.");
}

function saveCurrentDeck() {
  const snapshot = getDeckSelectionSnapshot();
  if (!isDeckSelectionComplete(snapshot)) {
    setDeckSaveStatus("전방/후방 인격과 20장 구성 후 저장 가능.", true);
    return null;
  }

  const payload = buildCurrentDeckPayload();
  const savedDecks = getSavedDecks();
  const editingId = builderState.deckSave.editingId;

  if (editingId && savedDecks.some((deck) => deck.id === editingId)) {
    const updatedDeck = { id: editingId, ...payload };
    setSavedDecks(savedDecks.map((deck) => (deck.id === editingId ? updatedDeck : deck)));
    setDeckSaveStatus("수정 저장됨.");
    return updatedDeck;
  }

  const savedDeck = {
    id: createSavedDeckId(),
    ...payload
  };
  builderState.deckSave.editingId = savedDeck.id;
  setSavedDecks([savedDeck, ...savedDecks]);
  setDeckSaveStatus("저장됨.");
  return savedDeck;
}


function isCurrentDeckSaved() {
  const editingId = builderState.deckSave.editingId;
  if (!editingId) return false;

  const savedDeck = getSavedDeckById(editingId);
  if (!savedDeck) return false;

  return JSON.stringify(getComparableDeckPayload(savedDeck)) === JSON.stringify(getComparableDeckPayload(buildCurrentDeckPayload()));
}

function getComparableDeckPayload(payload) {
  const normalizedPayload = normalizeDeckPayload(payload);
  return {
    name: normalizedPayload.name,
    intro: normalizedPayload.intro,
    identities: normalizedPayload.identities,
    cards: normalizedPayload.cards,
    ego: normalizedPayload.ego,
    upgrades: normalizedPayload.upgrades,
    featuredFilters: normalizedPayload.featuredFilters,
    notes: normalizedPayload.notes
  };
}

async function copyCurrentDeckCode() {
  const snapshot = getDeckSelectionSnapshot();
  if (!isDeckSelectionComplete(snapshot)) {
    setDeckSaveStatus("전방/후방 인격과 20장 구성 후 코드 복사 가능.", true);
    return;
  }

  try {
    const code = await encodeDeckPayload(buildCurrentDeckPayload());
    await copyTextToClipboard(code);
    setDeckSaveStatus("코드 복사됨.");
  } catch {
    setDeckSaveStatus("코드 복사 실패.", true);
  }
}

async function exportCurrentDeckFile() {
  const snapshot = getDeckSelectionSnapshot();
  if (!isDeckSelectionComplete(snapshot)) {
    setDeckSaveStatus("전방/후방 인격과 20장 구성 후 파일 저장 가능.", true);
    return;
  }

  try {
    await downloadDeckFile(buildCurrentDeckPayload());
    setDeckSaveStatus("덱 파일 저장됨.");
  } catch {
    setDeckSaveStatus("파일 저장 실패.", true);
  }
}

async function downloadDeckFile(payload) {
  const normalizedPayload = normalizeDeckPayload(payload);
  const code = encodePortableDeckPayload(normalizedPayload);
  const fileName = `${sanitizeDeckFileName(normalizedPayload.name)}.ltdeck`;
  const fileUrl = URL.createObjectURL(new Blob([code], { type: "text/plain;charset=utf-8" }));
  const link = document.createElement("a");

  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(fileUrl), 0);
}

function sanitizeDeckFileName(name) {
  const safeName = String(name || "림딱 덱")
    .normalize("NFC")
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
  return safeName || "림딱 덱";
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}

async function encodeDeckPayload(payload) {
  const compactJson = JSON.stringify(buildCompactDeckPayload(payload));
  const compactCode = `LTDB3:${encodeUtf8Base64(compactJson)}`;

  if (typeof CompressionStream === "undefined" || typeof DecompressionStream === "undefined") {
    return compactCode;
  }

  try {
    const compressedBytes = await compressUtf8(compactJson);
    const compressedCode = `LTDB4:${encodeBytesBase64(compressedBytes)}`;
    return compressedCode.length < compactCode.length ? compressedCode : compactCode;
  } catch {
    return compactCode;
  }
}

function encodePortableDeckPayload(payload) {
  const compactJson = JSON.stringify(buildCompactDeckPayload(payload));
  return `LTDB3:${encodeUtf8Base64(compactJson)}`;
}

function encodeLegacyDeckPayload(payload) {
  const json = JSON.stringify(payload);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return `LTDB2:${btoa(binary)}`;
}

async function decodeDeckPayload(code) {
  const rawCode = code.trim();
  if (!rawCode) throw new Error("empty deck code");

  if (rawCode.startsWith("LTDB4:")) {
    if (typeof DecompressionStream === "undefined") throw new Error("deck compression unsupported");
    const compressedCode = rawCode.slice(6).replace(/\s+/g, "");
    const json = await decompressUtf8(decodeBase64Bytes(compressedCode));
    return normalizeDeckPayload(expandCompactDeckPayload(JSON.parse(json)));
  }

  if (rawCode.startsWith("LTDB3:")) {
    const encodedCode = rawCode.slice(6).replace(/\s+/g, "");
    const json = new TextDecoder().decode(Uint8Array.from(atob(encodedCode), (character) => character.charCodeAt(0)));
    return normalizeDeckPayload(expandCompactDeckPayload(JSON.parse(json)));
  }

  const encodedCode = rawCode.startsWith("LTDB2:")
    ? rawCode.slice(6).replace(/\s+/g, "")
    : "";

  const json = rawCode.startsWith("LTDB2:")
    ? new TextDecoder().decode(Uint8Array.from(atob(encodedCode), (character) => character.charCodeAt(0)))
    : rawCode;

  return normalizeDeckPayload(JSON.parse(json));
}

function buildCompactDeckPayload(payload) {
  const normalizedPayload = normalizeDeckPayload(payload);
  const indexes = getDeckShareIndexes();
  const compactPayload = {
    v: 3,
    i: [
      getCompactIndex(indexes.identities, normalizedPayload.identities.front, "front identity"),
      getCompactIndex(indexes.identities, normalizedPayload.identities.back, "back identity")
    ],
    c: compactCardCounts(normalizedPayload.cards, indexes.mainCards)
  };

  if (normalizedPayload.ego) {
    compactPayload.e = getCompactIndex(indexes.egoCards, normalizedPayload.ego, "ego");
  }

  if (normalizedPayload.upgrades.length) {
    compactPayload.u = normalizedPayload.upgrades.map((cardId) => getCompactIndex(indexes.upgradeCards, cardId, "upgrade"));
  }

  if (normalizedPayload.name && normalizedPayload.name !== "이름 없는 덱") {
    compactPayload.n = normalizedPayload.name;
  }

  if (normalizedPayload.intro.trim()) {
    compactPayload.s = normalizedPayload.intro;
  }

  const compactFilters = compactFeaturedFilters(normalizedPayload.featuredFilters, indexes.featuredFilters);
  if (compactFilters.some((values) => values.length)) {
    compactPayload.h = compactFilters;
  }

  if (normalizedPayload.notes.trim()) {
    compactPayload.d = compactDeckNoteTokens(normalizedPayload.notes, indexes.noteCards);
  }

  return compactPayload;
}

function encodeUtf8Base64(value) {
  return encodeBytesBase64(new TextEncoder().encode(value));
}

function encodeBytesBase64(bytes) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function decodeBase64Bytes(value) {
  return Uint8Array.from(atob(value), (character) => character.charCodeAt(0));
}

async function compressUtf8(value) {
  const compressedStream = new Blob([value])
    .stream()
    .pipeThrough(new CompressionStream("gzip"));
  return new Uint8Array(await new Response(compressedStream).arrayBuffer());
}

async function decompressUtf8(bytes) {
  const decompressedStream = new Blob([bytes])
    .stream()
    .pipeThrough(new DecompressionStream("gzip"));
  const buffer = await new Response(decompressedStream).arrayBuffer();
  return new TextDecoder().decode(buffer);
}

function expandCompactDeckPayload(compactPayload) {
  if (!compactPayload || typeof compactPayload !== "object" || compactPayload.v !== 3) {
    throw new Error("invalid compact deck payload");
  }

  const indexes = getDeckShareIndexes();
  const identities = Array.isArray(compactPayload.i) ? compactPayload.i : [];

  return {
    version: APP_VERSION,
    savedAt: new Date().toISOString(),
    name: typeof compactPayload.n === "string" && compactPayload.n.trim() ? compactPayload.n.trim() : "이름 없는 덱",
    intro: typeof compactPayload.s === "string" ? compactPayload.s : "",
    identities: {
      front: getIdByCompactIndex(indexes.identities, identities[0]),
      back: getIdByCompactIndex(indexes.identities, identities[1])
    },
    cards: expandCompactCardCounts(compactPayload.c, indexes.mainCards),
    ego: getIdByCompactIndex(indexes.egoCards, compactPayload.e),
    upgrades: Array.isArray(compactPayload.u)
      ? compactPayload.u.map((index) => getIdByCompactIndex(indexes.upgradeCards, index)).filter(Boolean)
      : [],
    featuredFilters: expandCompactFeaturedFilters(compactPayload.h, indexes.featuredFilters),
    notes: typeof compactPayload.d === "string"
      ? expandCompactDeckNoteTokens(compactPayload.d, indexes.noteCards)
      : ""
  };
}

function getDeckShareIndexes() {
  const keywordFilters = getDeckSaveFilterGroups().find((group) => group.key === "tags")?.filters || [];
  const newIdentityIds = [
    "yi_sang_heishou_wu",
    "faust_lobotomy_remnant",
    "don_quixote_love_and_hate",
    "ryoshu_red_eyes_penance",
    "meursault_blade_mentor",
    "hong_lu_kcorp_excision"
  ];
  const newMainCardIds = [
    "yi_sang_base_9",
    "yi_sang_heishou_wu_cards_1",
    "yi_sang_heishou_wu_cards_2",
    "yi_sang_heishou_wu_cards_3",
    "faust_base_9",
    "faust_lobotomy_remnant_cards_1",
    "faust_lobotomy_remnant_cards_2",
    "faust_lobotomy_remnant_cards_3",
    "don_quixote_base_9",
    "don_quixote_love_and_hate_cards_1",
    "don_quixote_love_and_hate_cards_2",
    "don_quixote_love_and_hate_cards_3",
    "don_quixote_love_and_hate_cards_4",
    "don_quixote_love_and_hate_cards_5",
    "don_quixote_love_and_hate_cards_6",
    "ryoshu_base_9",
    "ryoshu_red_eyes_penance_cards_1",
    "ryoshu_red_eyes_penance_cards_2",
    "ryoshu_red_eyes_penance_cards_3",
    "meursault_base_9",
    "meursault_blade_mentor_cards_1",
    "meursault_blade_mentor_cards_2",
    "meursault_blade_mentor_cards_3",
    "meursault_blade_mentor_cards_4",
    "hong_lu_base_9",
    "hong_lu_kcorp_excision_cards_1",
    "hong_lu_kcorp_excision_cards_2",
    "hong_lu_kcorp_excision_cards_3"
  ];
  const newEgoIds = [
    "yi_sang_fell_bullet_ego",
    "faust_ardor_blossom_ego",
    "don_quixote_fluid_sac_ego",
    "ryoshu_red_eyes_ego",
    "meursault_pursuance_ego",
    "hong_lu_snare_ego"
  ];
  const newUniqueIds = [
    "yi_sang_heishou_wu_unique_1",
    "yi_sang_heishou_wu_unique_2",
    "don_quixote_love_and_hate_unique_1",
    "don_quixote_love_and_hate_unique_2",
    "don_quixote_love_and_hate_unique_3",
    "don_quixote_love_and_hate_unique_4",
    "don_quixote_love_and_hate_unique_5",
    "ryoshu_red_eyes_penance_unique_1",
    "ryoshu_red_eyes_penance_unique_2",
    "ryoshu_red_eyes_penance_unique_3",
    "ryoshu_red_eyes_penance_unique_4",
    "meursault_blade_mentor_unique_1",
    "meursault_blade_mentor_unique_2",
    "hong_lu_kcorp_excision_unique_1",
    "hong_lu_kcorp_excision_unique_2",
    "hong_lu_snare_ego_unique_1"
  ];
  const newUpgradeIds = [
    "yi_sang_heishou_wu_upgrade_1",
    "ryoshu_red_eyes_penance_upgrade_1"
  ];
  const newNoteCardIds = [
    ...newMainCardIds,
    ...newEgoIds,
    ...newIdentityIds,
    ...newUniqueIds,
    ...newUpgradeIds
  ];

  const egoCardIds = [
    ...LIMBUS_DATA.sinners.map((sinner) => `${sinner.id}_base_ego`),
    ...LIMBUS_DATA.sinners.flatMap((sinner) => (
      getEgoKeysForSinner(sinner.id)
        .filter((egoKey) => egoKey !== "base")
        .map((egoKey) => `${sinner.id}_${egoKey}_ego`)
    ))
  ];

  return {
    identities: moveShareIdsToEnd(LIMBUS_DATA.identities.map((identity) => identity.id), newIdentityIds),
    mainCards: moveShareIdsToEnd(getDeckShareMainCardIds(), newMainCardIds),
    egoCards: moveShareIdsToEnd(egoCardIds, newEgoIds),
    upgradeCards: moveShareIdsToEnd(
      LIMBUS_DATA.identities.flatMap((identity) => identity.upgradeCards.map((card) => card.id)),
      newUpgradeIds
    ),
    noteCards: moveShareIdsToEnd(getShareNoteCardIds(), newNoteCardIds),
    featuredFilters: {
      sins: sinFilters.map((filter) => filter.label),
      attackTypes: attackTypeFilters.map((filter) => filter.label),
      tags: keywordFilters.map((filter) => filter.value),
      effects: effectFilters.map((filter) => filter.label)
    }
  };
}

function moveShareIdsToEnd(source, appendedIds) {
  const appended = new Set(appendedIds);
  return [
    ...source.filter((id) => !appended.has(id)),
    ...appendedIds.filter((id) => source.includes(id))
  ];
}

function getDeckShareMainCardIds() {
  const cardIds = [];

  LIMBUS_DATA.sinners.forEach((sinner) => {
    const [baseCount,, identitySet] = LIMBUS_DATA.raw.cardSets[sinner.id];

    for (let index = 1; index <= baseCount; index += 1) {
      cardIds.push(`${sinner.id}_base_${index}`);
    }

    Object.entries(identitySet).forEach(([identityKey, [cardCount]]) => {
      for (let index = 1; index <= cardCount; index += 1) {
        cardIds.push(`${sinner.id}_${identityKey}_cards_${index}`);
      }
    });
  });

  return cardIds;
}

function getShareNoteCardIds() {
  const seen = new Set();
  const cardIds = [];

  getCodexItems(() => true)
    .filter((item) => item.shape === "card")
    .forEach((item) => {
      if (seen.has(item.id)) return;
      seen.add(item.id);
      cardIds.push(item.id);
    });

  return cardIds;
}

function getCompactIndex(source, value, label) {
  const index = source.indexOf(value);
  if (index < 0) throw new Error(`unknown ${label}`);
  return index;
}

function getIdByCompactIndex(source, index) {
  return Number.isInteger(index) && index >= 0 && index < source.length
    ? source[index]
    : null;
}

function compactCardCounts(cardIds, source) {
  const countsByIndex = new Map();

  cardIds.forEach((cardId) => {
    const index = getCompactIndex(source, cardId, "deck card");
    countsByIndex.set(index, (countsByIndex.get(index) || 0) + 1);
  });

  return [...countsByIndex.entries()];
}

function expandCompactCardCounts(compactCards, source) {
  if (!Array.isArray(compactCards)) return [];

  return compactCards.flatMap((entry) => {
    if (Number.isInteger(entry)) {
      const cardId = getIdByCompactIndex(source, entry);
      return cardId ? [cardId] : [];
    }

    if (!Array.isArray(entry)) return [];
    const [index, count] = entry;
    const cardId = getIdByCompactIndex(source, index);
    const cardCount = Number.isInteger(count) ? Math.max(0, Math.min(count, DECK_LIMIT)) : 0;
    return cardId ? Array.from({ length: cardCount }, () => cardId) : [];
  });
}

function compactFeaturedFilters(featuredFilters, filterIndexes) {
  const normalizedFilters = normalizeFeaturedFilters(featuredFilters);

  return [
    compactFilterValues(normalizedFilters.sins, filterIndexes.sins),
    compactFilterValues(normalizedFilters.attackTypes, filterIndexes.attackTypes),
    compactFilterValues(normalizedFilters.tags, filterIndexes.tags),
    compactFilterValues(normalizedFilters.effects, filterIndexes.effects)
  ];
}

function compactFilterValues(values, source) {
  return values.map((value) => {
    const index = source.indexOf(value);
    return index >= 0 ? index : value;
  });
}

function expandCompactFeaturedFilters(compactFilters, filterIndexes) {
  if (!Array.isArray(compactFilters)) return normalizeFeaturedFilters();

  return normalizeFeaturedFilters({
    sins: expandCompactFilterValues(compactFilters[0], filterIndexes.sins),
    attackTypes: expandCompactFilterValues(compactFilters[1], filterIndexes.attackTypes),
    tags: expandCompactFilterValues(compactFilters[2], filterIndexes.tags),
    effects: expandCompactFilterValues(compactFilters[3], filterIndexes.effects)
  });
}

function expandCompactFilterValues(values, source) {
  if (!Array.isArray(values)) return [];

  return values
    .map((value) => (Number.isInteger(value) ? source[value] : value))
    .filter((value) => typeof value === "string" && value);
}

function compactDeckNoteTokens(note, source) {
  return note.replace(/\[\[card:([^\]]+)\]\]/g, (match, cardId) => {
    const index = source.indexOf(cardId);
    return index >= 0 ? `[[c:${index}]]` : match;
  });
}

function expandCompactDeckNoteTokens(note, source) {
  return note.replace(/\[\[c:(\d+)\]\]/g, (match, rawIndex) => {
    const cardId = getIdByCompactIndex(source, Number(rawIndex));
    return cardId ? `[[card:${cardId}]]` : match;
  });
}

function normalizeSavedDeckRecord(deck) {
  return {
    id: typeof deck?.id === "string" && deck.id ? deck.id : createSavedDeckId(),
    ...normalizeDeckPayload(deck)
  };
}

function normalizeDeckPayload(payload) {
  if (!payload || typeof payload !== "object") throw new Error("invalid deck payload");

  const identities = payload.identities || {};
  return {
    version: typeof payload.version === "string" ? payload.version : APP_VERSION,
    savedAt: typeof payload.savedAt === "string" ? payload.savedAt : new Date().toISOString(),
    name: typeof payload.name === "string" && payload.name.trim() ? payload.name.trim() : "이름 없는 덱",
    intro: typeof payload.intro === "string" ? payload.intro : "",
    identities: {
      front: typeof identities.front === "string" && identities.front ? identities.front : null,
      back: typeof identities.back === "string" && identities.back ? identities.back : null
    },
    cards: toStringArray(payload.cards),
    ego: typeof payload.ego === "string" && payload.ego ? payload.ego : null,
    upgrades: toStringArray(payload.upgrades),
    featuredFilters: normalizeFeaturedFilters(payload.featuredFilters),
    notes: typeof payload.notes === "string" ? payload.notes : ""
  };
}

function normalizeFeaturedFilters(featuredFilters = {}) {
  const source = featuredFilters && typeof featuredFilters === "object" ? featuredFilters : {};

  return {
    sins: uniqueStrings(source.sins),
    attackTypes: uniqueStrings(source.attackTypes),
    tags: uniqueStrings(source.tags),
    effects: uniqueStrings(source.effects)
  };
}

function uniqueStrings(values) {
  return [...new Set(toStringArray(values))];
}

function toStringArray(values) {
  return Array.isArray(values)
    ? values.filter((value) => typeof value === "string" && value)
    : [];
}

function createSavedDeckId() {
  return `deck_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

async function importDeckCodeToSaves() {
  try {
    const payload = await decodeDeckPayload(saveImportCode?.value || "");
    addImportedDeckToSaves(payload);
    savedListState.mobilePane = "preview";
    if (saveImportCode) saveImportCode.value = "";
    setSaveImportStatus("저장목록에 추가됨.");
    renderSavedDecks();
  } catch {
    setSaveImportStatus("덱 코드 확인 필요.", true);
  }
}

async function importDeckFileToSaves(file) {
  try {
    if (file.size > 2 * 1024 * 1024) throw new Error("deck file too large");
    const payload = await decodeDeckPayload(await file.text());
    addImportedDeckToSaves(payload);
    savedListState.mobilePane = "preview";
    setSaveImportStatus("덱 파일 추가됨.");
    renderSavedDecks();
  } catch {
    setSaveImportStatus("덱 파일 확인 필요.", true);
  }
}

function addImportedDeckToSaves(payload) {
  if (!payload.identities.front || !payload.identities.back || payload.cards.length !== DECK_LIMIT) {
    throw new Error("incomplete deck payload");
  }

  const savedDeck = {
    id: createSavedDeckId(),
    ...payload,
    savedAt: new Date().toISOString()
  };
  setSavedDecks([savedDeck, ...getSavedDecks()]);
  savedListState.selectedDeckId = savedDeck.id;
  return savedDeck;
}







function renderSavedDeckViewContent(deck, snapshot) {
  return `
    <section class="saved-view-box">
      <div class="saved-view-meta">
        <span>${escapeHtml(deck.version)}</span>
        <span>${formatSavedAt(deck.savedAt)}</span>
      </div>
      <p class="saved-view-intro">${deck.intro?.trim() ? escapeHtml(deck.intro) : "소개글 없음"}</p>
    </section>

    <section class="saved-view-box saved-view-note-box">
      <div class="saved-section-heading">
        <h3>설명 / 사용 방식</h3>
      </div>
      <div class="saved-note-content saved-view-note-content">
        ${deck.notes?.trim() ? renderDeckNoteContent(deck.notes) : `<span class="deck-save-empty">설명 없음</span>`}
      </div>
    </section>
  `;
}


function renderSavedViewIdentitySection(identity, heading) {
  return `
    <section class="saved-view-box saved-view-identity-box">
      <h3>${heading}</h3>
      <div class="saved-view-identity-row">
        ${renderSavedIdentityThumb(identity, heading.slice(0, 2))}
        <div class="saved-view-identity-assets">
          ${identity ? renderSavedViewIdentityAssets(identity) : `<span class="deck-save-empty">선택 없음</span>`}
        </div>
      </div>
    </section>
  `;
}

function renderSavedViewIdentityAssets(identity) {
  const cards = identity.uniqueCards || [];

  if (!cards.length) return "";
  return renderSavedCardGrid(cards, true);
}

function renderSavedFilterChips(featuredFilters = {}) {
  const chips = getFeaturedFilterItems(featuredFilters);
  if (!chips.length) return `<span class="saved-filter-empty">중심 키워드 없음</span>`;

  return chips.map((chip) => `
    <span class="saved-filter-chip" aria-label="${escapeHtml(chip.value)}">
      ${chip.image ? `<img src="${chip.image}" alt="" onerror="this.hidden=true;" />` : `<span>${escapeHtml(chip.value.slice(0, 1))}</span>`}
    </span>
  `).join("");
}

function getFeaturedFilterItems(featuredFilters = {}) {
  const normalizedFilters = normalizeFeaturedFilters(featuredFilters);
  const filterGroups = getDeckSaveFilterGroups();

  return Object.entries(normalizedFilters).flatMap(([key, values]) => {
    const group = filterGroups.find((filterGroup) => filterGroup.key === key);
    return values.map((value) => {
      const filter = group?.filters.find((candidate) => candidate.value === value);
      return {
        value,
        image: filter?.image || null
      };
    });
  });
}

function renderSavedIdentityThumb(identity, label) {
  if (!identity) {
    return `
      <span class="saved-identity-thumb is-empty">
        <b>${label}</b>
      </span>
    `;
  }

  return `
    <button
      class="saved-identity-thumb deck-preview-source"
      type="button"
      data-preview-image="${identity.image}"
      data-preview-alt="${identity.id}"
    >
      <b>${label}</b>
      <img src="${identity.image}" alt="" />
    </button>
  `;
}

function renderSavedCardGrid(cards, isExtra = false) {
  return cards.length
    ? cards.map((card, index) => renderSavedCardThumb(card, index, isExtra)).join("")
    : `<span class="deck-save-empty">카드 없음</span>`;
}

function renderSavedCardThumb(card, index, isExtra = false) {
  return `
    <button
      class="saved-card-thumb ${isExtra ? "is-extra" : ""} deck-preview-source"
      type="button"
      data-preview-image="${card.image}"
      data-preview-alt="${card.id}"
    >
      ${isExtra ? "" : `<b>${String(index + 1).padStart(2, "0")}</b>`}
      <img src="${card.image}" alt="" />
    </button>
  `;
}

function renderSavedKeywordItems(items) {
  return items.map((item) => `
    <button
      class="saved-filter-chip saved-keyword-chip deck-preview-source"
      type="button"
      aria-label="${escapeHtml(item.label)}"
      data-preview-image="${item.previewImage || item.image}"
      data-preview-alt="${escapeHtml(item.label)}"
    >
      <img src="${item.image}" alt="" onerror="this.hidden=true;" />
    </button>
  `).join("");
}

function getSavedDeckSnapshot(deck) {
  const payload = normalizeDeckPayload(deck);
  const availableCards = getDeckCardMapForPayload(payload);
  const mainCards = payload.cards
    .map((cardId) => availableCards.get(cardId) || getCodexItemById(cardId))
    .filter(Boolean);
  const selectedEgo = payload.ego
    ? availableCards.get(payload.ego) || getCodexItemById(payload.ego)
    : null;
  const selectedUpgrades = payload.upgrades
    .map((cardId) => availableCards.get(cardId) || getCodexItemById(cardId))
    .filter(Boolean);

  return {
    front: getIdentity(payload.identities.front),
    back: getIdentity(payload.identities.back),
    mainCards,
    selectedEgo,
    selectedUpgrades,
    selectedKeywordItems: getPayloadKeywordItems(payload, availableCards)
  };
}

function getDeckCardMapForPayload(payload) {
  return new Map(
    getDeckCardsForIdentityIds([payload.identities?.front, payload.identities?.back])
      .map((card) => [card.id, card])
  );
}

function getPayloadKeywordItems(payload, availableCards = getDeckCardMapForPayload(payload)) {
  const tagSet = new Set();
  [
    ...payload.cards,
    ...(payload.ego ? [payload.ego] : []),
    ...payload.upgrades
  ].forEach((cardId) => {
    const card = availableCards.get(cardId) || getCodexItemById(cardId);
    (card?.tags || []).forEach((tag) => tagSet.add(tag));
  });

  return getKeywordItemsFromTags(orderKeywordTags(tagSet));
}

function getCodexItemById(itemId) {
  return getCodexItems(() => true).find((item) => item.id === itemId || item.title === itemId) || null;
}

function getSavedDeckById(deckId) {
  return getSavedDecks().find((deck) => deck.id === deckId) || null;
}

function loadSavedDeckForEdit(deckId) {
  const deck = getSavedDeckById(deckId);
  if (!deck) {
    setSavedDeckActionStatus("저장 덱을 찾을 수 없음.", true);
    return;
  }

  loadPayloadIntoBuilder(deck, deck.id);
  builderState.mobileDeckPane = "save";
  showView("deck");
  renderDeckBuilder();
  setDeckSaveStatus("수정 중인 저장 덱.");
}

function loadPayloadIntoBuilder(payload, editingId = null) {
  const normalizedPayload = normalizeDeckPayload(payload);

  builderState.selected.front = normalizedPayload.identities.front;
  builderState.selected.back = normalizedPayload.identities.back;
  builderState.activeSlot = "front";
  builderState.activeDeckTab = "all";
  builderState.activeDeckTags = [];
  builderState.activeDeckSins = [];
  builderState.activeDeckAttackTypes = [];
  builderState.activeDeckEffects = [];
  builderState.deckCards = [...normalizedPayload.cards];
  builderState.selectedEgo = normalizedPayload.ego;
  builderState.upgradeCards = [...normalizedPayload.upgrades];
  builderState.isDeckReviewing = true;
  builderState.deckSave.featuredFilters = normalizeFeaturedFilters(normalizedPayload.featuredFilters);
  builderState.deckSave.editingId = editingId;
  setDeckSaveInputs(normalizedPayload);
  syncDeckCardsWithAvailableCards();
}

function setDeckSaveInputs(payload) {
  if (deckSaveName) deckSaveName.value = payload.name || "";
  if (deckSaveIntro) deckSaveIntro.value = payload.intro || "";
  if (deckSaveNotes) deckSaveNotes.value = payload.notes || "";
}

async function copySavedDeckCode(deckId) {
  const deck = getSavedDeckById(deckId);
  if (!deck) {
    setSavedDeckActionStatus("저장 덱을 찾을 수 없음.", true);
    return;
  }

  const payload = normalizeDeckPayload(deck);

  try {
    await copyTextToClipboard(await encodeDeckPayload(payload));
    setSavedDeckActionStatus("덱 코드 복사됨.");
  } catch {
    setSavedDeckActionStatus("코드 복사 실패.", true);
  }
}

async function exportSavedDeckFile(deckId) {
  const deck = getSavedDeckById(deckId);
  if (!deck) {
    setSavedDeckActionStatus("저장 덱을 찾을 수 없음.", true);
    return;
  }

  try {
    await downloadDeckFile(deck);
    setSavedDeckActionStatus("덱 파일 저장됨.");
  } catch {
    setSavedDeckActionStatus("파일 저장 실패.", true);
  }
}


function deleteSavedDeck(deckId) {
  if (!window.confirm("저장된 덱을 삭제할까요?")) return;

  const nextDecks = getSavedDecks().filter((deck) => deck.id !== deckId);
  setSavedDecks(nextDecks);
  if (builderState.deckSave.editingId === deckId) builderState.deckSave.editingId = null;
  setSavedDeckActionStatus("삭제됨.");

  if (savedViewState.activeDeckId === deckId) {
    savedViewState.activeDeckId = null;
    openSaves();
    return;
  }

  renderSavedDecks();
}

function openSavesFromDeckReview() {
  const snapshot = getDeckSelectionSnapshot();
  const canSave = isDeckSelectionComplete(snapshot);

  if (!isCurrentDeckSaved()) {
    if (!canSave) {
      const shouldMove = window.confirm("전방/후방 인격 또는 20장 덱이 완성되지 않아 저장할 수 없습니다.\n저장하지 않고 저장 목록으로 이동할까요?");
      if (!shouldMove) return;
    } else {
      const shouldSave = window.confirm("아직 저장되지 않은 덱입니다.\n확인: 저장하고 이동\n취소: 저장하지 않고 이동");
      if (shouldSave && !saveCurrentDeck()) return;
    }
  }

  openSaves();
}

function handleSavedDeckAction(event) {
  const mobileSavedViewEditButton = event.target.closest("[data-mobile-saved-view-edit]");
  if (mobileSavedViewEditButton) {
    if (savedViewState.mode === "current") {
      showView("deck");
      renderDeckBuilder();
    } else if (savedViewState.activeDeckId) {
      loadSavedDeckForEdit(savedViewState.activeDeckId);
    }
    return;
  }

  const mobileSavedViewPaneButton = event.target.closest("[data-mobile-saved-view-pane]");
  if (mobileSavedViewPaneButton) {
    setMobileSavedViewPane(mobileSavedViewPaneButton.dataset.mobileSavedViewPane);
    return;
  }

  const mobilePaneButton = event.target.closest("[data-mobile-saves-pane]");
  if (mobilePaneButton) {
    setMobileSavesPane(mobilePaneButton.dataset.mobileSavesPane);
    return;
  }

  const currentActionButton = event.target.closest("[data-current-view-action]");
  if (currentActionButton) {
    handleCurrentDeckViewAction(currentActionButton.dataset.currentViewAction);
    return;
  }

  const selectButton = event.target.closest("[data-saved-select]");
  if (selectButton) {
    savedListState.mobilePane = "preview";
    renderSavedDecks(selectButton.dataset.savedSelect);
    return;
  }

  const actionButton = event.target.closest("[data-saved-action]");
  if (!actionButton) return;

  const deckId = actionButton.dataset.savedDeckId;
  const action = actionButton.dataset.savedAction;

  if (action === "view") {
    openSavedDeckView(deckId);
    return;
  }

  if (action === "edit") {
    loadSavedDeckForEdit(deckId);
    return;
  }

  if (action === "copy") {
    copySavedDeckCode(deckId);
    return;
  }

  if (action === "file") {
    exportSavedDeckFile(deckId);
    return;
  }

  if (action === "duplicate") {
    duplicateSavedDeck(deckId);
    return;
  }

  if (action === "delete") {
    deleteSavedDeck(deckId);
  }
}

function renderSavedDecks(selectedDeckId = savedListState.selectedDeckId) {
  if (!savedDeckList) return;

  const savedDecks = getSavedDecks();
  const selectedDeck = savedDecks.find((deck) => deck.id === selectedDeckId) || savedDecks[0] || null;
  savedListState.selectedDeckId = selectedDeck?.id || null;

  if (savedDeckCount) savedDeckCount.textContent = savedDecks.length;

  savedDeckList.innerHTML = savedDecks.length
    ? savedDecks.map((deck) => renderSavedDeckListCard(deck, deck.id === selectedDeck?.id)).join("")
    : `<div class="saved-empty-panel">저장된 덱 없음.</div>`;

  renderSavedDeckPreviewPanel(selectedDeck);
  syncMobileSavesPane(Boolean(selectedDeck));
}

function setMobileSavesPane(pane) {
  const panes = ["list", "preview", "import"];
  if (!panes.includes(pane)) return;
  if (pane === "preview" && !savedListState.selectedDeckId) return;

  savedListState.mobilePane = pane;
  syncMobileSavesPane(Boolean(savedListState.selectedDeckId));
}

function syncMobileSavesPane(hasSelectedDeck) {
  const panes = ["list", "preview", "import"];
  const activePane = panes.includes(savedListState.mobilePane)
    ? savedListState.mobilePane
    : "list";
  const resolvedPane = activePane === "preview" && !hasSelectedDeck ? "list" : activePane;

  savedListState.mobilePane = resolvedPane;
  panes.forEach((pane) => {
    savesView?.classList.toggle(`is-mobile-pane-${pane}`, resolvedPane === pane);
  });

  if (mobileSavedDeckCount && savedDeckCount) {
    mobileSavedDeckCount.textContent = savedDeckCount.textContent;
  }

  mobileSavesNav?.querySelectorAll("[data-mobile-saves-pane]").forEach((button) => {
    const pane = button.dataset.mobileSavesPane;
    const isActive = pane === resolvedPane;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    if (pane === "preview") button.disabled = !hasSelectedDeck;
  });
}

function renderSavedDeckListCard(deck, isSelected = false) {
  const front = getIdentity(deck.identities?.front);
  const back = getIdentity(deck.identities?.back);

  return `
    <article class="saved-deck-card ${isSelected ? "is-selected" : ""}">
      <button class="saved-deck-main" type="button" data-saved-select="${escapeHtml(deck.id)}">
        <div class="saved-deck-title-block">
          <strong>${escapeHtml(deck.name)}</strong>
        </div>
        <div class="saved-identity-pair">
          ${renderSavedListIdentityThumb(front, "전방")}
          ${renderSavedListIdentityThumb(back, "후방")}
        </div>
      </button>
    </article>
  `;
}

function renderSavedDeckPreviewPanel(deck) {
  if (!savedDeckPreview || !savedDeckActions) return;

  if (!deck) {
    savedDeckPreview.innerHTML = `<span class="deck-save-empty">덱을 클릭하면 정보 표시.</span>`;
    savedDeckActions.innerHTML = "";
    return;
  }

  const snapshot = getSavedDeckSnapshot(deck);
  savedDeckPreview.innerHTML = `
    <article class="saved-preview-card">
      <div class="saved-preview-header">
        <span>${escapeHtml(deck.version)}</span>
        <h3>${escapeHtml(deck.name)}</h3>
        <small>${formatSavedAt(deck.savedAt)}</small>
      </div>

      <section class="saved-preview-box">
        <h4>소개글</h4>
        <p>${deck.intro?.trim() ? escapeHtml(deck.intro) : "소개글 없음"}</p>
      </section>

      <section class="saved-preview-box">
        <h4>중심 키워드</h4>
        <div class="saved-filter-strip is-large">
          ${renderSavedFilterChips(deck.featuredFilters)}
        </div>
      </section>

      <section class="saved-preview-box">
        <h4>전방 / 후방</h4>
        <div class="saved-preview-identity-row">
          ${renderSavedPreviewIdentityThumb(snapshot.front, "전방")}
          ${renderSavedPreviewIdentityThumb(snapshot.back, "후방")}
        </div>
      </section>
    </article>
  `;

  savedDeckActions.innerHTML = renderSavedDeckPreviewActions(deck);
  removeNativeTooltips(savedDeckPreview);
}

function renderSavedDeckPreviewActions(deck) {
  return `
    <button type="button" data-saved-action="view" data-saved-deck-id="${escapeHtml(deck.id)}">보기</button>
    <button type="button" data-saved-action="edit" data-saved-deck-id="${escapeHtml(deck.id)}">수정</button>
    <button type="button" data-saved-action="duplicate" data-saved-deck-id="${escapeHtml(deck.id)}">복사</button>
    <button type="button" data-saved-action="copy" data-saved-deck-id="${escapeHtml(deck.id)}">코드 복사</button>
    <button type="button" data-saved-action="file" data-saved-deck-id="${escapeHtml(deck.id)}">파일 저장</button>
    <button type="button" data-saved-action="delete" data-saved-deck-id="${escapeHtml(deck.id)}">삭제</button>
  `;
}

function renderSavedListIdentityThumb(identity, label) {
  if (!identity) {
    return `
      <span class="saved-identity-thumb is-empty">
        <b>${label}</b>
      </span>
    `;
  }

  return `
    <span class="saved-identity-thumb">
      <b>${label}</b>
      <img src="${identity.image}" alt="" />
    </span>
  `;
}

function renderSavedPreviewIdentityThumb(identity, label) {
  if (!identity) {
    return `
      <span class="saved-preview-identity is-empty">
        <b>${label}</b>
        <span>비어있음</span>
      </span>
    `;
  }

  return `
    <span class="saved-preview-identity">
      <b>${label}</b>
      <img src="${identity.image}" alt="" />
    </span>
  `;
}

function openSavedDeckView(deckId) {
  const deck = getSavedDeckById(deckId);
  if (!deck) {
    setSavedDeckActionStatus("저장 덱을 찾을 수 없음.", true);
    return;
  }

  savedViewState.mode = "saved";
  savedViewState.activeDeckId = deck.id;
  showView("savedDeck");
  renderSavedDeckView(deck, { mode: "saved" });
}

function openCurrentDeckView() {
  const previewDeck = {
    id: builderState.deckSave.editingId || "current-deck-preview",
    ...buildCurrentDeckPayload()
  };

  savedViewState.mode = "current";
  savedViewState.activeDeckId = null;
  showView("savedDeck");
  renderSavedDeckView(previewDeck, { mode: "current" });
}

function closeSavedDeckView() {
  if (savedViewState.mode === "current") {
    showView("deck");
    renderDeckBuilder();
    return;
  }

  openSaves();
}

function renderSavedDeckView(deck, { mode = "saved" } = {}) {
  if (!savedViewSummary || !savedViewDetail) return;

  const snapshot = getSavedDeckSnapshot(deck);
  const extraCards = [
    ...(snapshot.selectedEgo ? [snapshot.selectedEgo] : []),
    ...snapshot.selectedUpgrades
  ];

  savedViewState.mode = mode;
  savedViewState.mobilePane = "summary";
  if (savedViewTitle) savedViewTitle.textContent = deck.name;
  if (savedViewBackButton) savedViewBackButton.textContent = mode === "current" ? "덱 만들기" : "저장 목록";
  setSavedDeckActionStatus("");
  savedViewSummary.innerHTML = renderSavedDeckViewSummary(deck, snapshot, extraCards);
  savedViewDetail.innerHTML = renderSavedDeckViewContent(deck, snapshot);
  if (savedViewActions) {
    savedViewActions.innerHTML = mode === "current"
      ? renderCurrentDeckViewActions()
      : renderSavedDeckViewActions(deck);
  }
  renderSavedViewPreview(null);
  attachSavedViewPreviewListeners(savedViewSummary);
  attachSavedViewPreviewListeners(savedViewDetail);
  syncMobileSavedViewPane();
  removeNativeTooltips(savedDeckView);
}

function setMobileSavedViewPane(pane) {
  const panes = ["summary", "preview"];
  if (!panes.includes(pane)) return;

  savedViewState.mobilePane = pane;
  syncMobileSavedViewPane();
}

function syncMobileSavedViewPane() {
  const panes = ["summary", "preview"];
  const activePane = panes.includes(savedViewState.mobilePane)
    ? savedViewState.mobilePane
    : "summary";

  savedViewState.mobilePane = activePane;
  panes.forEach((pane) => {
    savedDeckView?.classList.toggle(`is-mobile-pane-${pane}`, activePane === pane);
  });

  mobileSavedViewNav?.querySelectorAll("[data-mobile-saved-view-pane]").forEach((button) => {
    const isActive = button.dataset.mobileSavedViewPane === activePane;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderSavedDeckViewSummary(deck, snapshot, extraCards) {
  return `
    <section class="saved-view-box saved-view-keyword-box">
      <div>
        <h3>중심 키워드</h3>
        <div class="saved-filter-strip is-large">
          ${renderSavedFilterChips(deck.featuredFilters)}
        </div>
      </div>
      <div>
        <h3>키워드</h3>
        <div class="saved-keyword-row">
          ${snapshot.selectedKeywordItems.length ? renderSavedKeywordItems(snapshot.selectedKeywordItems) : `<span class="deck-save-empty">없음</span>`}
        </div>
      </div>
    </section>

    ${renderSavedViewIdentitySection(snapshot.front, "전방 인격")}
    ${renderSavedViewIdentitySection(snapshot.back, "후방 인격")}

    <section class="saved-view-box">
      <h3>EGO / 강화</h3>
      <div class="saved-extra-card-grid">
        ${extraCards.length ? renderSavedCardGrid(extraCards, true) : `<span class="deck-save-empty">선택 없음</span>`}
      </div>
    </section>

    <section class="saved-view-box">
      <div class="saved-section-heading">
        <h3>20장</h3>
        <span>${snapshot.mainCards.length} / ${DECK_LIMIT}</span>
      </div>
      <div class="saved-card-grid saved-view-main-card-grid">
        ${renderSavedMainCardGrid(snapshot.mainCards)}
      </div>
    </section>
  `;
}

function renderSavedDeckViewActions(deck) {
  return `
    <button type="button" data-saved-action="edit" data-saved-deck-id="${escapeHtml(deck.id)}">수정</button>
    <button type="button" data-saved-action="copy" data-saved-deck-id="${escapeHtml(deck.id)}">코드 복사</button>
    <button type="button" data-saved-action="duplicate" data-saved-deck-id="${escapeHtml(deck.id)}">복사</button>
    <button type="button" data-saved-action="file" data-saved-deck-id="${escapeHtml(deck.id)}">파일 저장</button>
    <button type="button" data-saved-action="delete" data-saved-deck-id="${escapeHtml(deck.id)}">삭제</button>
  `;
}

function renderCurrentDeckViewActions() {
  return `
    <button type="button" data-current-view-action="edit">수정</button>
    <button type="button" data-current-view-action="save">저장</button>
    <button type="button" data-current-view-action="copy">코드 복사</button>
    <button type="button" data-current-view-action="file">파일 저장</button>
    <button type="button" data-current-view-action="open-saves">저장 목록</button>
  `;
}

async function handleCurrentDeckViewAction(action) {
  if (action === "edit") {
    showView("deck");
    renderDeckBuilder();
    return;
  }

  if (action === "save") {
    const savedDeck = saveCurrentDeck();
    setSavedDeckActionStatus(savedDeck ? "저장됨." : "전방/후방 인격과 20장 구성 후 저장 가능.", !savedDeck);
    return;
  }

  if (action === "copy") {
    await copyCurrentDeckCodeFromView();
    return;
  }

  if (action === "file") {
    await exportCurrentDeckFileFromView();
    return;
  }

  if (action === "open-saves") {
    openSavesFromDeckReview();
  }
}

async function copyCurrentDeckCodeFromView() {
  const snapshot = getDeckSelectionSnapshot();
  if (!isDeckSelectionComplete(snapshot)) {
    setSavedDeckActionStatus("전방/후방 인격과 20장 구성 후 코드 복사 가능.", true);
    return;
  }

  try {
    const code = await encodeDeckPayload(buildCurrentDeckPayload());
    await copyTextToClipboard(code);
    setSavedDeckActionStatus("코드 복사됨.");
  } catch {
    setSavedDeckActionStatus("코드 복사 실패.", true);
  }
}

async function exportCurrentDeckFileFromView() {
  const snapshot = getDeckSelectionSnapshot();
  if (!isDeckSelectionComplete(snapshot)) {
    setSavedDeckActionStatus("전방/후방 인격과 20장 구성 후 파일 저장 가능.", true);
    return;
  }

  try {
    await downloadDeckFile(buildCurrentDeckPayload());
    setSavedDeckActionStatus("덱 파일 저장됨.");
  } catch {
    setSavedDeckActionStatus("파일 저장 실패.", true);
  }
}

function renderSavedMainCardGrid(cards) {
  return Array.from({ length: DECK_LIMIT }, (_, index) => {
    const card = cards[index];
    if (card) return renderSavedCardThumb(card, index);

    return `
      <span class="saved-card-thumb is-empty">
        <b>${String(index + 1).padStart(2, "0")}</b>
      </span>
    `;
  }).join("");
}

function duplicateSavedDeck(deckId) {
  const deck = getSavedDeckById(deckId);
  if (!deck) {
    setSavedDeckActionStatus("저장 덱을 찾을 수 없음.", true);
    return;
  }

  const duplicateDeck = {
    ...normalizeDeckPayload(deck),
    id: createSavedDeckId(),
    name: `${deck.name} 복사본`,
    savedAt: new Date().toISOString()
  };

  setSavedDecks([duplicateDeck, ...getSavedDecks()]);
  savedListState.selectedDeckId = duplicateDeck.id;
  setSavedDeckActionStatus("복사본 생성됨.");

  if (!savesView.hidden) renderSavedDecks(duplicateDeck.id);
}

function formatSavedAt(savedAt) {
  const date = new Date(savedAt);
  if (Number.isNaN(date.getTime())) return "저장일 없음";

  return new Intl.DateTimeFormat("ko-KR", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function renderDeckReviewIdentity(identity, label) {
  const shortLabel = label === "전방" ? "전" : "후";

  if (!identity) {
    return `
      <article class="deck-review-identity is-empty">
        <span>${shortLabel}</span>
        <strong>선택 없음</strong>
      </article>
    `;
  }

  return `
    <article class="deck-review-identity">
      <button
        class="deck-review-identity-card deck-preview-source"
        type="button"
        data-preview-image="${identity.image}"
        data-preview-alt="${identity.id}"
      >
        <span>${shortLabel}</span>
        <img src="${identity.image}" alt="" />
      </button>
    </article>
  `;
}

function renderDeckReviewCard(card, index) {
  return `
    <button
      class="deck-review-card deck-preview-source"
      type="button"
      data-preview-image="${card.image}"
      data-preview-alt="${card.id}"
    >
      <span>${String(index + 1).padStart(2, "0")}</span>
      <img src="${card.image}" alt="" />
    </button>
  `;
}

function renderDeckReviewExtraCard(card) {
  return `
    <button
      class="deck-review-extra-card deck-preview-source"
      type="button"
      data-preview-image="${card.image}"
      data-preview-alt="${card.id}"
    >
      <img src="${card.image}" alt="" />
    </button>
  `;
}

function renderDeckExtraKeywordToken(item) {
  if (!item) return "";

  return `
    <button
      class="deck-token deck-extra-keyword-token ${item.isCard ? "is-card-token" : ""} deck-preview-source"
      type="button"
      aria-label="${item.label}"
      data-preview-image="${item.previewImage}"
      data-preview-alt="${item.label}"
    >
      <img src="${item.image}" alt="" />
    </button>
  `;
}

function getSelectedDeckKeywordItems(availableCards = getDeckCardMap()) {
  const tags = getSelectedDeckKeywordTags(availableCards);
  return getKeywordItemsFromTags(tags);
}

function getKeywordItemsFromTags(tags = []) {
  const items = tags
    .map((tag) => {
      const keywordFilter = getKeywordFilter(tag);
      if (!keywordFilter) return null;

      return {
        label: tag,
        image: keywordFilter.image,
        previewImage: keywordFilter.cardImage,
        isCard: false
      };
    })
    .filter(Boolean);

  derivedDeckKeywordCards.forEach((card) => {
    if (!tags.includes(card.triggerTag)) return;
    if (items.some((item) => item.label === card.label)) return;

    items.push({
      label: card.label,
      image: card.image,
      previewImage: card.previewImage,
      isCard: false
    });
  });

  return items;
}

function getSelectedDeckKeywordTags(availableCards = getDeckCardMap()) {
  const selectedCardIds = [
    ...builderState.deckCards,
    ...(builderState.selectedEgo ? [builderState.selectedEgo] : []),
    ...builderState.upgradeCards
  ];
  const selectedTags = new Set();

  selectedCardIds.forEach((cardId) => {
    const card = availableCards.get(cardId);
    card?.tags.forEach((tag) => selectedTags.add(tag));
  });

  return orderKeywordTags(selectedTags);
}

function orderKeywordTags(tagSet) {
  const orderedTags = [];
  const knownFilters = [
    ...(LIMBUS_DATA.cardTagFilters || []),
    ...(LIMBUS_DATA.identityTagFilters || [])
  ];

  knownFilters.forEach((filter) => {
    if (tagSet.has(filter.tag) && !orderedTags.includes(filter.tag)) {
      orderedTags.push(filter.tag);
    }
  });

  tagSet.forEach((tag) => {
    if (!orderedTags.includes(tag)) orderedTags.push(tag);
  });

  return orderedTags;
}

function getDeckSelectionSnapshot() {
  const availableCards = getDeckCardMap();
  const mainCards = builderState.deckCards
    .map((cardId) => availableCards.get(cardId))
    .filter((card) => card?.countsTowardDeck);
  const selectedEgo = builderState.selectedEgo ? availableCards.get(builderState.selectedEgo) : null;
  const selectedUpgrades = builderState.upgradeCards
    .map((cardId) => availableCards.get(cardId))
    .filter(Boolean);

  return {
    front: getIdentity(builderState.selected.front),
    back: getIdentity(builderState.selected.back),
    mainCards,
    selectedEgo,
    selectedUpgrades,
    availableUpgrades: Array.from(availableCards.values()).filter((card) => card.category === "upgrade"),
    selectedKeywordItems: getSelectedDeckKeywordItems(availableCards)
  };
}

function isDeckSelectionComplete(snapshot = getDeckSelectionSnapshot()) {
  return Boolean(snapshot.front && snapshot.back && snapshot.mainCards.length === DECK_LIMIT);
}

function renderDeckStatus() {
  const snapshot = getDeckSelectionSnapshot();
  if (deckNextButton) deckNextButton.disabled = !isDeckSelectionComplete(snapshot);
  renderMobileDeckSummary();
  syncMobileDeckPane();
}

function handleDeckNextStep() {
  const snapshot = getDeckSelectionSnapshot();
  if (!isDeckSelectionComplete(snapshot)) return;

  builderState.isDeckReviewing = true;
  builderState.mobileDeckPane = "save";
  renderDeckReview();
  syncDeckMode();
  renderDeckPreview(null);
}

function renderDeckIncludedSlot(card, index) {
  return `
    <div class="deck-included-slot is-filled">
      <button
        class="deck-included-card deck-preview-source"
        type="button"
        title="${card.id}"
        data-remove-deck-card="${card.id}"
        data-preview-image="${card.image}"
        data-preview-alt="${card.id}"
      >
        <span>${String(index + 1).padStart(2, "0")}</span>
        <img src="${card.image}" alt="${card.id}" />
      </button>
    </div>
  `;
}

function renderDeckEmptySlot(index) {
  return `<div class="deck-included-slot">${String(index + 1).padStart(2, "0")}</div>`;
}

function getFilteredDeckCards() {
  return getDeckCards().filter((card) => {
    const tabMatched = builderState.activeDeckTab === "all"
      || card.category === builderState.activeDeckTab;
    const hasOptionalFilters = builderState.activeDeckTags.length
      || builderState.activeDeckEffects.length;
    const tagMatched = builderState.activeDeckTags.length
      && card.tags.some((tag) => builderState.activeDeckTags.includes(tag));
    const sinMatched = builderState.activeDeckSins.length
      && builderState.activeDeckSins.includes(card.sin);
    const attackTypeMatched = builderState.activeDeckAttackTypes.length
      && builderState.activeDeckAttackTypes.includes(card.attackType);
    const effectMatched = builderState.activeDeckEffects.length
      && card.effects.some((effect) => builderState.activeDeckEffects.includes(effect));

    const coreMatched = (!builderState.activeDeckSins.length || sinMatched)
      && (!builderState.activeDeckAttackTypes.length || attackTypeMatched);
    const optionalMatched = !hasOptionalFilters || tagMatched || effectMatched;

    return tabMatched && coreMatched && optionalMatched;
  });
}

function getDeckCardMap() {
  return new Map(getDeckCards().map((card) => [card.id, card]));
}

function getCardTags(cardId) {
  return LIMBUS_DATA.tagsByCardId?.[cardId] || [];
}

function getCardSin(cardId) {
  return LIMBUS_DATA.sinByCardId?.[cardId] || null;
}

function getCardAttackType(cardId) {
  return LIMBUS_DATA.attackTypeByCardId?.[cardId] || null;
}

function getCardEffects(cardId) {
  return LIMBUS_DATA.effectsByCardId?.[cardId] || [];
}

function toggleDeckCard(cardId) {
  const card = getDeckCardMap().get(cardId);
  if (!card || !card.selectable) return;

  if (!card.countsTowardDeck) {
    toggleDeckExtraCard(card);
    return;
  }

  if (getSelectedDeckCardCount(cardId) >= getDeckCardCopyLimit(card)) return;
  if (builderState.deckCards.length >= DECK_LIMIT) return;

  builderState.deckCards = [...builderState.deckCards, cardId];
  renderDeckCardPool();
  renderDeckIncludedGrid();
  renderDeckExtraGrid();
  renderDeckStatus();
}

function removeDeckCard(cardId) {
  const nextCards = [...builderState.deckCards];
  const removeIndex = nextCards.indexOf(cardId);
  if (removeIndex < 0) return;

  nextCards.splice(removeIndex, 1);
  builderState.deckCards = nextCards;
  renderDeckCardPool();
  renderDeckIncludedGrid();
  renderDeckExtraGrid();
  renderDeckStatus();
}

function toggleDeckExtraCard(card) {
  if (card.category === "ego") {
    builderState.selectedEgo = builderState.selectedEgo === card.id ? null : card.id;
  }

  if (card.category === "upgrade") {
    builderState.upgradeCards = builderState.upgradeCards.includes(card.id)
      ? builderState.upgradeCards.filter((cardId) => cardId !== card.id)
      : [...builderState.upgradeCards, card.id];
  }

  renderDeckCardPool();
  renderDeckExtraGrid();
  renderDeckStatus();
}

function removeDeckExtraCard(cardId) {
  if (builderState.selectedEgo === cardId) builderState.selectedEgo = null;
  builderState.upgradeCards = builderState.upgradeCards.filter((activeCardId) => activeCardId !== cardId);
  renderDeckCardPool();
  renderDeckExtraGrid();
  renderDeckStatus();
}

function isDeckCardSelected(card) {
  if (card.category === "ego") return builderState.selectedEgo === card.id;
  if (card.category === "upgrade") return builderState.upgradeCards.includes(card.id);
  return getSelectedDeckCardCount(card.id) > 0;
}

function getSelectedDeckCardCount(cardId) {
  return builderState.deckCards.filter((activeCardId) => activeCardId === cardId).length;
}

function getDeckCardCopyLimit(card) {
  return card.category === "sinner" || card.category === "identity" ? 2 : 1;
}

function syncDeckCardsWithAvailableCards() {
  const availableCards = getDeckCardMap();
  builderState.deckCards = builderState.deckCards.filter((cardId) => availableCards.has(cardId));
  if (builderState.selectedEgo && !availableCards.has(builderState.selectedEgo)) builderState.selectedEgo = null;
  builderState.upgradeCards = builderState.upgradeCards.filter((cardId) => availableCards.has(cardId));
}

function resetDeckState({ clearSaveDraft = false } = {}) {
  builderState.activeDeckTab = "all";
  builderState.activeDeckTags = [];
  builderState.activeDeckSins = [];
  builderState.activeDeckAttackTypes = [];
  builderState.activeDeckEffects = [];
  builderState.deckCards = [];
  builderState.selectedEgo = null;
  builderState.upgradeCards = [];
  builderState.isDeckReviewing = false;
  builderState.mobileDeckPane = "cards";
  deckView.classList.remove("is-mobile-filter-open");
  if (clearSaveDraft) resetDeckSaveDraft();
}

function resetDeckSaveDraft() {
  builderState.deckSave.featuredFilters = normalizeFeaturedFilters();
  builderState.deckSave.editingId = null;
  setDeckSaveInputs({ name: "", intro: "", notes: "" });
  setDeckSaveStatus("");
}

function attachCardPreviewListeners(root, renderPreviewItem, { onClick } = {}) {
  root.querySelectorAll(".deck-preview-source").forEach((button) => {
    const showPreview = () => {
      const previewId = button.dataset.previewId || button.dataset.previewAlt;
      renderPreviewItem({
        image: button.dataset.previewImage,
        alt: button.dataset.previewAlt,
        filters: getPreviewFiltersForId(previewId)
      });
    };

    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
    button.addEventListener("mouseenter", showPreview);
    button.addEventListener("mouseover", showPreview);
    button.addEventListener("pointerenter", showPreview);
    button.addEventListener("focus", showPreview);
    button.addEventListener("click", () => {
      showPreview();
      onClick?.();
    });
  });
}

function attachDeckPreviewListeners(root) {
  attachCardPreviewListeners(root, renderDeckPreview);
}

function attachSavedViewPreviewListeners(root) {
  attachCardPreviewListeners(root, renderSavedViewPreview, {
    onClick: () => setMobileSavedViewPane("preview")
  });
}

function renderDeckPreview(item) {
  if (!item) {
    deckPreview.innerHTML = "<span>카드 위에 마우스를 올리면 크게 표시.</span>";
    renderDeckPreviewFilters([]);
    return;
  }

  deckPreview.innerHTML = `<img src="${item.image}" alt="${item.alt}" />`;
  renderDeckPreviewFilters(item.filters || getPreviewFiltersForId(item.alt));
}

function renderSavedViewPreview(item) {
  if (!savedViewPreview) return;

  if (!item) {
    savedViewPreview.innerHTML = "<span>카드 위에 마우스를 올리면 크게 표시.</span>";
    renderPreviewFilters(savedViewPreviewFilters, []);
    return;
  }

  savedViewPreview.innerHTML = `<img src="${item.image}" alt="${item.alt}" />`;
  renderPreviewFilters(savedViewPreviewFilters, item.filters || getPreviewFiltersForId(item.alt));
}

function padNumber(value) {
  return String(value).padStart(2, "0");
}

function renderPreview(identityId) {
  if (identityId && typeof identityId === "object") {
    identityPreview.innerHTML = `<img src="${identityId.image}" alt="${identityId.alt}" />`;
    renderIdentityPreviewFilters(identityId.filters || getPreviewFiltersForId(identityId.alt));
    return;
  }

  const identity = getIdentity(identityId);

  if (!identity) {
    identityPreview.innerHTML = "<span>인격 위에 마우스를 올리면 크게 표시.</span>";
    renderIdentityPreviewFilters([]);
    return;
  }

  identityPreview.innerHTML = `<img src="${identity.image}" alt="${identity.id}" />`;
  renderIdentityPreviewFilters(getPreviewFiltersForId(identity.id));
}

renderBuilder();
