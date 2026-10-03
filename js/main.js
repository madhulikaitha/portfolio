/**
 * Poses are each layer's absoluteTransform on the 1280×832 Figma frame.
 * Hover uses the prototype timing: 300ms ease-out (Smart Animate).
 * "rest" is MAIN-HOMEPAGE 335:335, the frame shown before any hover.
 */
const POSES = {
  rest: {
    paper: [868, 23.28, 1, -0.1, 0.1, 1, 431.27, 287.51],
    diagram: [803.09, 164.89, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerB: [806.23, 66.39, 1, 0, 0, 1, 296.16, 197.44],
    fingerC: [794.21, 155.09, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerD: [741.28, 124.33, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerA: [727.26, -22.89, 0.94, 0.35, -0.35, 0.94, 272.9, 181.93],
    armLeft: [843.06, 443, -1, 0, 0, 1, 106.06, 132.53],
    armRight: [932, 442.4, 1, -0.03, 0.03, 1, 106.76, 133.41],
    body: [728.34, 413.35, 1, 0, 0, 1, 322.31, 483.47],
    handLeft: [687, 524, 1, 0, 0, 1, 78.64, 98.27],
    handRight: [1090.64, 521, -1, 0, 0, 1, 78.64, 98.27],
    head: [828, 339, 1, 0, 0, 1, 94, 108],
    bin0: [1050.13, 569.25, -0.09, -1, 1, -0.09, 239.87, 17, "0100100010111101010101010110010001010001110010000111010"],
    bin1: [816.73, 447.33, 0.03, -1, 1, 0.03, 191.9, 17, "01001000101111010101010101100100010100011110"],
    bin2: [938.36, 443.82, -0.04, -1, 1, -0.04, 109.69, 17, "0100100010111101010101110"],
    bin3: [872.76, 355.53, 0.05, -1, 1, 0.05, 79.61, 17, "01000010010011"],
    bin4: [716, 568.81, 0.15, -0.99, 0.99, 0.15, 392.65, 17, "0100100010111101010101010110010001010001101001010100100100010001000010001111101101010111000"],
  },
  home: {
    paper: [868, 23.28, 1, -0.1, 0.1, 1, 431.27, 287.51],
    diagram: [803.09, 164.89, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerB: [806.23, 66.39, 1, 0, 0, 1, 296.16, 197.44],
    fingerC: [794.21, 155.09, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerD: [741.28, 124.33, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerA: [764.37, -66, 0.82, 0.57, -0.57, 0.82, 272.9, 181.93],
    armLeft: [843.06, 443, -1, 0, 0, 1, 106.06, 132.53],
    armRight: [932, 442.4, 1, -0.03, 0.03, 1, 106.76, 133.41],
    body: [728.34, 413.35, 1, 0, 0, 1, 322.31, 483.47],
    handLeft: [684.38, 516.5, 1, 0, 0, 1, 78.64, 98.27],
    handRight: [1090.64, 521, -1, 0, 0, 1, 78.64, 98.27],
    head: [828, 339, 1, 0, 0, 1, 94, 108],
    bin0: [1050.13, 569.25, -0.09, -1, 1, -0.09, 239.87, 17, "0100100010111101010101010110010001010001110010000111010"],
    bin1: [816.73, 447.33, 0.03, -1, 1, 0.03, 191.9, 17, "01001000101111010101010101100100010100011110"],
    bin2: [938.36, 443.82, -0.04, -1, 1, -0.04, 109.69, 17, "0100100010111101010101110"],
    bin3: [872.76, 355.53, 0.05, -1, 1, 0.05, 79.61, 17, "01000010010011"],
    bin4: [720, 564.65, 0.1, -0.99, 0.99, 0.1, 422.34, 17, "01001000101111010101010101100100010100011010010101001001000100010000100011111011010101110001100100"],
  },
  research: {
    paper: [868, 23.28, 1, -0.1, 0.1, 1, 431.27, 287.51],
    diagram: [803.09, 164.89, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerB: [839.62, 26.58, 0.96, 0.27, -0.27, 0.96, 296.16, 197.44],
    fingerC: [794.21, 155.09, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerD: [741.28, 124.33, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerA: [727.26, -22.89, 0.94, 0.35, -0.35, 0.94, 272.9, 181.93],
    armLeft: [847.21, 441.9, -0.97, -0.24, -0.24, 0.97, 106.06, 132.53],
    armRight: [932, 442.4, 1, -0.03, 0.03, 1, 106.76, 133.41],
    body: [728.34, 413.35, 1, 0, 0, 1, 322.31, 483.47],
    handLeft: [667, 496, 1, 0, 0, 1, 78.64, 98.27],
    handRight: [1090.64, 521, -1, 0, 0, 1, 78.64, 98.27],
    head: [828, 339, 1, 0, 0, 1, 94, 108],
    bin0: [1050.13, 569.25, -0.09, -1, 1, -0.09, 239.87, 17, "0100100010111101010101010110010001010001110010000111010"],
    bin1: [803.98, 448.78, -0.01, -1, 1, -0.01, 228.53, 17, "01001000101111010101010101100100010100011110000101010"],
    bin2: [938.36, 443.82, -0.04, -1, 1, -0.04, 109.69, 17, "0100100010111101010101110"],
    bin3: [872.76, 355.53, 0.05, -1, 1, 0.05, 79.61, 17, "01000010010011"],
    bin4: [693.1, 542.8, 0.22, -0.98, 0.98, 0.22, 371.03, 17, "01001000101111010101010101100100010100011010010101001001000100010000100011111011011011"],
  },
  projects: {
    paper: [868, 23.28, 1, -0.1, 0.1, 1, 431.27, 287.51],
    diagram: [803.09, 164.89, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerB: [806.23, 66.39, 1, 0, 0, 1, 296.16, 197.44],
    fingerC: [794.21, 155.09, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerD: [758.95, 58, 0.97, 0.26, -0.26, 0.97, 296.16, 197.44],
    fingerA: [727.26, -22.89, 0.94, 0.35, -0.35, 0.94, 272.9, 181.93],
    armLeft: [843.06, 443, -1, 0, 0, 1, 106.06, 132.53],
    armRight: [932, 442.4, 1, -0.03, 0.03, 1, 106.76, 133.41],
    body: [728.34, 413.35, 1, 0, 0, 1, 322.31, 483.47],
    handLeft: [687, 524, 1, 0, 0, 1, 78.64, 98.27],
    handRight: [1090.64, 521, -1, 0, 0, 1, 78.64, 98.27],
    head: [854.87, 324, 0.95, 0.31, -0.31, 0.95, 94, 108],
    bin0: [1050.13, 569.25, -0.09, -1, 1, -0.09, 239.87, 17, "0100100010111101010101010110010001010001110010000111010"],
    bin1: [816.73, 447.33, 0.03, -1, 1, 0.03, 191.9, 17, "01001000101111010101010101100100010100011110"],
    bin2: [938.36, 443.82, -0.04, -1, 1, -0.04, 109.69, 17, "0100100010111101010101110"],
    bin3: [864.72, 352.78, -0.25, -0.97, 0.97, -0.25, 86.86, 17, "01000010010011000000"],
    bin4: [716, 568.81, 0.15, -0.99, 0.99, 0.15, 392.65, 17, "0100100010111101010101010110010001010001101001010100100100010001000010001111101101010111000"],
  },
  resume: {
    paper: [868, 23.28, 1, -0.1, 0.1, 1, 431.27, 287.51],
    diagram: [803.09, 164.89, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerB: [806.23, 66.39, 1, 0, 0, 1, 296.16, 197.44],
    fingerC: [779, 92, 0.98, 0.19, -0.19, 0.98, 296.16, 197.44],
    fingerD: [741.28, 124.33, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerA: [727.26, -22.89, 0.94, 0.35, -0.35, 0.94, 272.9, 181.93],
    armLeft: [843.06, 443, -1, 0, 0, 1, 106.06, 132.53],
    armRight: [922, 443.29, 0.95, -0.32, 0.32, 0.95, 106.76, 133.41],
    body: [728.34, 413.35, 1, 0, 0, 1, 322.31, 483.47],
    handLeft: [687, 524, 1, 0, 0, 1, 78.64, 98.27],
    handRight: [1100.43, 474, -0.97, 0.24, 0.24, 0.97, 78.64, 98.27],
    head: [828, 339, 1, 0, 0, 1, 94, 108],
    bin0: [1056.53, 520.83, -0.18, -0.98, 0.98, -0.18, 194, 17, "010010001011110101010101011001000101000111001"],
    bin1: [816.73, 447.33, 0.03, -1, 1, 0.03, 191.9, 17, "01001000101111010101010101100100010100011110"],
    bin2: [956, 451.4, -0.52, -0.85, 0.85, -0.52, 165.64, 17, "01001000101111010101011101110101011010"],
    bin3: [872.76, 355.53, 0.05, -1, 1, 0.05, 79.61, 17, "01000010010011"],
    bin4: [716, 568.81, 0.15, -0.99, 0.99, 0.15, 392.65, 17, "0100100010111101010101010110010001010001101001010100100100010001000010001111101101010111000"],
  },
  about: {
    paper: [868, 23.28, 1, -0.1, 0.1, 1, 431.27, 287.51],
    diagram: [813, 239.37, 0.91, -0.42, 0.42, 0.91, 296.16, 197.44],
    fingerB: [806.23, 66.39, 1, 0, 0, 1, 296.16, 197.44],
    fingerC: [794.21, 155.09, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerD: [741.28, 124.33, 1, -0.1, 0.1, 1, 296.16, 197.44],
    fingerA: [727.26, -22.89, 0.94, 0.35, -0.35, 0.94, 272.9, 181.93],
    armLeft: [843.06, 443, -1, 0, 0, 1, 106.06, 132.53],
    armRight: [932, 442.4, 1, -0.03, 0.03, 1, 106.76, 133.41],
    body: [728.34, 413.35, 1, 0, 0, 1, 322.31, 483.47],
    handLeft: [687, 524, 1, 0, 0, 1, 78.64, 98.27],
    handRight: [1079.74, 505, -0.96, 0.27, 0.27, 0.96, 78.64, 98.27],
    head: [828, 339, 1, 0, 0, 1, 94, 108],
    bin0: [1057.83, 560.89, 0.03, -1, 1, 0.03, 245.03, 17, "01001000101111010101010101100100010100011100100001110101"],
    bin1: [816.73, 447.33, 0.03, -1, 1, 0.03, 191.9, 17, "01001000101111010101010101100100010100011110"],
    bin2: [938.36, 443.82, -0.04, -1, 1, -0.04, 109.69, 17, "0100100010111101010101110"],
    bin3: [872.76, 355.53, 0.05, -1, 1, 0.05, 79.61, 17, "01000010010011"],
    bin4: [716, 568.81, 0.15, -0.99, 0.99, 0.15, 392.65, 17, "0100100010111101010101010110010001010001101001010100100100010001000010001111101101010111000"],
  },
};

const INDICATOR = {
  rest: { left: 105, width: 93 },
  home: { left: 105, width: 93 },
  research: { left: 335, width: 120 },
  projects: { left: 584, width: 112 },
  resume: { left: 834, width: 101 },
  about: { left: 1083, width: 93 },
};

const NAV_STATES = ["home", "research", "projects", "resume", "about"];
const PAGE_TITLES = {
  home: "Madhulika Itha — Human-Centered Security Researcher",
  research: "Research — Madhulika Itha",
  contact: "Get in Touch — Madhulika Itha",
  thanks: "Thank you — Madhulika Itha",
  adaptive: "Adaptive Task Redistribution System — Madhulika Itha",
  security: "Security Foundations for an Early-Stage Platform — Madhulika Itha",
  thought: "Second Thought — Madhulika Itha",
  projects: "Projects — Madhulika Itha",
  resume: "Resume — Madhulika Itha",
  about: "About — Madhulika Itha",
};
const CONTACT_MAIL = "mitha1@lsu.edu";
const FORMSPREE_URL = "https://formspree.io/f/mbglnbzr";
const PHONE_MQ = window.matchMedia("(max-width: 720px)");
const stage = document.getElementById("stage");
const pageMark = document.getElementById("page-mark");
const spotlight = document.getElementById("spotlight");
const spotlightLine = document.getElementById("spotlight-line");
const nav = document.getElementById("nav");
const hero = document.querySelector(".hero");
const researchPage = document.querySelector(".page-research");
const projectsPage = document.querySelector(".page-projects");
const resumePage = document.querySelector(".page-resume");
const aboutPage = document.querySelector(".page-about");
const contactPage = document.querySelector(".page-contact");
const thanksPage = document.querySelector(".page-thanks");
const casePages = {
  adaptive: document.getElementById("case-page"),
  security: document.getElementById("security-page"),
  thought: document.getElementById("thought-page"),
};
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const sendBtn = contactForm?.querySelector(".contact-send");
const navToggle = document.getElementById("nav-toggle");
const goBack = document.getElementById("go-back");
const leaveThanks = document.getElementById("leave-thanks");
const partEls = [...document.querySelectorAll("[data-part]")];
const binEls = [...document.querySelectorAll("[data-bin]")];
const navLinks = [...nav.querySelectorAll("[data-nav]")];

let selected = "rest";
let preview = null;
let contactFrom = "research";

function applyLayer(el, pose) {
  const [tx, ty, a, b, c, d, w, h] = pose;
  el.style.left = `${tx}px`;
  el.style.top = `${ty}px`;
  el.style.width = `${w}px`;
  el.style.height = `${h}px`;
  el.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, 0, 0)`;
}

const SUPPLEMENT_PAGES = new Set(["contact", "thanks", "adaptive", "security", "thought"]);

function isSupplement(page) {
  return SUPPLEMENT_PAGES.has(page);
}

function isOverlay(page) {
  return page === "research" || page === "projects" || page === "resume" || page === "about" || isSupplement(page);
}

function currentPage() {
  return selected === "rest" ? "home" : selected;
}

function isPhone() {
  return PHONE_MQ.matches;
}

function closeNavMenu() {
  document.documentElement.classList.remove("nav-open");
  if (!navToggle) return;
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open menu");
}

function setNavMenu(open) {
  document.documentElement.classList.toggle("nav-open", open);
  if (!navToggle) return;
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

function syncPage() {
  const page = currentPage();
  const prev = stage.dataset.page;
  stage.dataset.page = page;
  document.documentElement.dataset.page = page;
  document.title = PAGE_TITLES[page] || PAGE_TITLES.home;

  const onResearch = page === "research";
  const onProjects = page === "projects";
  const onAbout = page === "about";
  const onContact = page === "contact";
  const onThanks = page === "thanks";
  const onOverlay = isOverlay(page);
  if (hero) {
    hero.inert = onOverlay;
    hero.setAttribute("aria-hidden", onOverlay ? "true" : "false");
  }
  if (researchPage) {
    researchPage.inert = !onResearch;
    researchPage.setAttribute("aria-hidden", onResearch ? "false" : "true");
    if (onResearch && prev !== "research") researchPage.scrollTop = 0;
  }
  if (projectsPage) {
    projectsPage.inert = !onProjects;
    projectsPage.setAttribute("aria-hidden", onProjects ? "false" : "true");
    if (onProjects && prev !== "projects") projectsPage.scrollTop = 0;
  }
  if (resumePage) {
    resumePage.inert = page !== "resume";
    resumePage.setAttribute("aria-hidden", page === "resume" ? "false" : "true");
    if (page === "resume" && prev !== "resume") resumePage.scrollTop = 0;
  }
  if (aboutPage) {
    aboutPage.inert = !onAbout;
    aboutPage.setAttribute("aria-hidden", onAbout ? "false" : "true");
    if (onAbout && prev !== "about") aboutPage.scrollTop = 0;
  }
  if (contactPage) {
    contactPage.inert = !onContact;
    contactPage.setAttribute("aria-hidden", onContact ? "false" : "true");
    if (onContact && prev !== "contact") contactPage.scrollTop = 0;
  }
  if (thanksPage) {
    thanksPage.inert = !onThanks;
    thanksPage.setAttribute("aria-hidden", onThanks ? "false" : "true");
  }
  Object.entries(casePages).forEach(([name, el]) => {
    if (!el) return;
    const on = page === name;
    el.inert = !on;
    el.setAttribute("aria-hidden", on ? "false" : "true");
    if (on && prev !== name) el.scrollTop = 0;
  });
  if (prev !== page) fitFrame();
}

function applyState(name, { updateHash = false, moveFocus = false } = {}) {
  const state = POSES[name] ? name : "rest";
  stage.dataset.state = state;
  syncPage();

  partEls.forEach((el) => applyLayer(el, statePose(state, el.dataset.part)));
  binEls.forEach((el) => applyLayer(el, statePose(state, `bin${el.dataset.bin}`)));
  stackResumeFinger(state);
  placeNavMarks();

  const current = currentPage();
  navLinks.forEach((link) => {
    if (NAV_STATES.includes(current) && link.dataset.nav === current) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (updateHash) {
    if (isSupplement(current)) {
      if (location.hash !== `#${current}`) history.replaceState(null, "", `#${current}`);
    } else if (state === "rest") {
      if (location.hash) history.replaceState(null, "", location.pathname);
    } else if (location.hash !== `#${state}`) {
      history.replaceState(null, "", `#${state}`);
    }
  }

  if (moveFocus && current === "research") {
    document.getElementById("research-title")?.focus({ preventScroll: true });
  }
  if (moveFocus && current === "projects") {
    document.getElementById("projects-title")?.focus({ preventScroll: true });
  }
  if (moveFocus && current === "resume") {
    document.getElementById("resume-title")?.focus({ preventScroll: true });
  }
  if (moveFocus && current === "about") {
    document.getElementById("about-title")?.focus({ preventScroll: true });
  }
  if (moveFocus && current === "contact") {
    document.getElementById("contact-first")?.focus({ preventScroll: true });
  }
  if (moveFocus && current === "thanks") {
    document.getElementById("thanks-title")?.focus({ preventScroll: true });
  }
  if (moveFocus && casePages[current]) {
    casePages[current].querySelector("h1")?.focus({ preventScroll: true });
  }
}

function statePose(state, key) {
  return POSES[state][key];
}

const resumeFinger = document.querySelector("[data-part=fingerC]");
let resumeFingerTimer = 0;

function stackResumeFinger(state) {
  window.clearTimeout(resumeFingerTimer);
  if (state === "resume") {
    resumeFinger.style.zIndex = "2";
    return;
  }
  const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 300;
  resumeFingerTimer = window.setTimeout(() => {
    if (stage.dataset.state !== "resume") resumeFinger.style.zIndex = "";
  }, delay);
}

function currentVisual() {
  return preview || selected;
}

function parseHash() {
  const value = (location.hash || "").slice(1).toLowerCase();
  if (isSupplement(value)) return value;
  return NAV_STATES.includes(value) ? value : "rest";
}

function openContact() {
  const page = currentPage();
  if (!isSupplement(page)) contactFrom = selected;
  selected = "contact";
  preview = null;
  closeNavMenu();
  applyState("contact", { updateHash: true, moveFocus: true });
  contactForm?.querySelectorAll("[required]").forEach(clearFieldError);
}

function showThanks() {
  selected = "thanks";
  preview = null;
  applyState("thanks", { updateHash: true, moveFocus: true });
}

function leaveContact() {
  selected = contactFrom === "home" ? "rest" : contactFrom;
  preview = null;
  applyState(selected, { updateHash: true, moveFocus: true });
}

navLinks.forEach((link) => {
  const name = link.dataset.nav;
  link.addEventListener("mouseenter", () => {
    if (isPhone()) return;
    preview = name;
    applyState(name);
  });
  link.addEventListener("focus", () => {
    if (isPhone()) return;
    preview = name;
    applyState(name);
  });
  link.addEventListener("click", (event) => {
    event.preventDefault();
    selected = name;
    preview = null;
    closeNavMenu();
    applyState(name, { updateHash: true, moveFocus: true });
  });
});

if (navToggle) {
  navToggle.addEventListener("click", () => {
    setNavMenu(!document.documentElement.classList.contains("nav-open"));
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.documentElement.classList.contains("nav-open")) {
    closeNavMenu();
    navToggle?.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!document.documentElement.classList.contains("nav-open")) return;
  const target = event.target;
  if (nav.contains(target) || navToggle?.contains(target)) return;
  closeNavMenu();
});

PHONE_MQ.addEventListener("change", () => {
  if (!isPhone()) closeNavMenu();
  fitFrame();
});

nav.addEventListener("mouseleave", () => {
  if (isPhone()) return;
  preview = null;
  applyState(selected);
});

nav.addEventListener("keydown", (event) => {
  const index = navLinks.indexOf(document.activeElement);
  if (index < 0) return;
  let next = index;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % navLinks.length;
  else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + navLinks.length) % navLinks.length;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = navLinks.length - 1;
  else return;
  event.preventDefault();
  navLinks[next].focus();
});

window.addEventListener("hashchange", () => {
  const next = parseHash();
  if (isSupplement(next) && !isSupplement(currentPage())) contactFrom = selected;
  selected = next;
  preview = null;
  closeNavMenu();
  applyState(selected);
});

document.querySelectorAll(".cta").forEach((cta) => {
  cta.addEventListener("click", (event) => {
    const href = cta.getAttribute("href") || "";
    if (/^https?:\/\//i.test(href) || cta.hasAttribute("download")) return;
    const name = href.replace(/^#/, "");
    if (name === "contact") {
      event.preventDefault();
      openContact();
      return;
    }
    if (isSupplement(name)) {
      event.preventDefault();
      if (!isSupplement(currentPage())) contactFrom = selected;
      selected = name;
      preview = null;
      applyState(name, { updateHash: true, moveFocus: true });
      return;
    }
    if (!NAV_STATES.includes(name)) return;
    event.preventDefault();
    selected = name;
    preview = null;
    applyState(name, { updateHash: true, moveFocus: true });
  });
});

if (projectsPage) {
  projectsPage.addEventListener("click", (event) => {
    const jump = event.target.closest("[data-project-jump]");
    if (!jump) return;
    const target = document.getElementById(jump.getAttribute("data-project-jump") || "");
    if (!target) return;
    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  });
}

document.querySelector(".logo").addEventListener("click", (event) => {
  event.preventDefault();
  selected = "rest";
  preview = null;
  closeNavMenu();
  applyState("rest");
  if (location.hash) history.replaceState(null, "", location.pathname);
});

if (goBack) {
  goBack.addEventListener("click", (event) => {
    event.preventDefault();
    leaveContact();
  });
}

if (leaveThanks) {
  leaveThanks.addEventListener("click", (event) => {
    event.preventDefault();
    leaveContact();
  });
}

function fieldErrorEl(field) {
  return field.parentElement?.querySelector(".field-error");
}

function clearFieldError(field) {
  field.removeAttribute("aria-invalid");
  const hint = fieldErrorEl(field);
  if (hint) {
    hint.hidden = true;
    hint.textContent = "";
  }
}

function showFieldError(field, message) {
  field.setAttribute("aria-invalid", "true");
  const hint = fieldErrorEl(field);
  if (hint) {
    hint.textContent = message;
    hint.hidden = false;
  }
}

function validateContactField(field, { show = true } = {}) {
  const value = field.value.trim();
  clearFieldError(field);
  if (!value) {
    field.setAttribute("aria-invalid", "true");
    if (show) showFieldError(field, "Please fill out this field.");
    return false;
  }
  if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    field.setAttribute("aria-invalid", "true");
    if (show) showFieldError(field, "Please enter a valid email address.");
    return false;
  }
  return true;
}

function setFormStatus(message, kind) {
  if (!formStatus) return;
  if (!message) {
    formStatus.hidden = true;
    formStatus.textContent = "";
    formStatus.removeAttribute("data-kind");
    return;
  }
  formStatus.hidden = false;
  formStatus.textContent = message;
  formStatus.dataset.kind = kind || "info";
}

if (contactForm) {
  contactForm.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("input", () => clearFieldError(field));
  });
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const fields = [...contactForm.querySelectorAll("[required]")];
    let firstInvalid = null;
    fields.forEach((field) => {
      field.value = field.value.trim();
      if (!validateContactField(field, { show: true }) && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }
    const data = new FormData(contactForm);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    data.set("name", `${firstName} ${lastName}`);
    data.set("_subject", subject);
    data.set("_replyto", email);
    const subjectInput = document.getElementById("contact-mail-subject");
    if (subjectInput) subjectInput.value = subject;

    if (sendBtn) sendBtn.disabled = true;
    setFormStatus("Sending…");
    try {
      const response = await fetch(contactForm.getAttribute("action") || FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload.error || "Request failed");
      }
      contactForm.reset();
      setFormStatus("");
      showThanks();
    } catch (error) {
      setFormStatus(
        "Couldn't send right now. Please email me directly at madhulika.itha@gmail.com.",
        "error"
      );
    } finally {
      if (sendBtn) sendBtn.disabled = false;
    }
  });
}

function fitFrame() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const overlay = isOverlay(document.documentElement.dataset.page);
  let scale;
  let sceneX;
  let sceneY;
  let sceneFade;

  if (isPhone()) {
    document.documentElement.style.setProperty("--s", "1");
    document.documentElement.style.setProperty("--type", "1");
    document.documentElement.style.setProperty("--scene-x", "0px");
    document.documentElement.style.setProperty("--scene-y", "0px");
    document.documentElement.style.setProperty("--scene-fade", "0px");
    document.documentElement.style.setProperty("--nav-h", "48px");
    document.documentElement.style.setProperty("--nav-bar-h", "56px");
    document.documentElement.style.setProperty("--nav-line-h", "2px");
    document.documentElement.style.setProperty("--nav-glow-h", "64px");
    document.documentElement.style.setProperty("--nav-glow-blur", "24px");
    document.documentElement.style.setProperty("--nav-bottom", "0px");
    document.documentElement.style.setProperty("--logo-left", "16px");
    document.documentElement.style.setProperty("--logo-top", overlay ? "18px" : "14px");
    document.documentElement.style.setProperty("--logo-w", "72px");
    document.documentElement.style.setProperty("--logo-h", "48px");
    placeNavMarks();
    return;
  }

  if (overlay) {
    scale = Math.max(vw / 1280, vh / 832);
    const sceneW = 1280 * scale;
    const sceneH = 832 * scale;
    sceneX = (vw - sceneW) / 2;
    sceneY = (vh - sceneH) / 2;
    sceneFade = "0px";
  } else {
    const minText = 240;
    scale = vh / 832;
    if (vw - 620 * scale < minText) scale = (vw - minText) / 620;
    scale = Math.max(0.45, scale);
    const sceneW = 1280 * scale;
    const sceneH = 832 * scale;
    sceneX = vw - sceneW;
    sceneY = (vh - sceneH) / 2;
    sceneFade = vw - sceneW > 2 ? "180px" : "0px";
  }

  document.documentElement.style.setProperty("--s", String(scale));
  document.documentElement.style.setProperty("--type", String(Math.min(vw / 1280, vh / 832)));
  document.documentElement.style.setProperty("--scene-x", `${sceneX}px`);
  document.documentElement.style.setProperty("--scene-y", `${sceneY}px`);
  document.documentElement.style.setProperty("--scene-fade", sceneFade);
  const navScale = Math.min(1, Math.max(vw / 1280, 0.75));
  document.documentElement.style.setProperty("--nav-h", `${34 * navScale}px`);
  document.documentElement.style.setProperty("--nav-bar-h", `${59 * navScale}px`);
  document.documentElement.style.setProperty("--nav-line-h", `${Math.max(1, 2 * navScale)}px`);
  document.documentElement.style.setProperty("--nav-glow-h", `${89 * navScale}px`);
  document.documentElement.style.setProperty("--nav-glow-blur", `${40 * navScale}px`);
  const navBottom = overlay ? 0 : Math.max(0, sceneY);
  document.documentElement.style.setProperty("--nav-bottom", `${navBottom}px`);
  const logoScale = overlay ? Math.min(1, vw / 1280) : scale;
  document.documentElement.style.setProperty("--logo-left", `${20 * logoScale}px`);
  document.documentElement.style.setProperty(
    "--logo-top",
    overlay ? "18px" : `${sceneY + 18 * scale}px`
  );
  document.documentElement.style.setProperty("--logo-w", `${72 * logoScale}px`);
  document.documentElement.style.setProperty("--logo-h", `${48 * logoScale}px`);
  const marks = [pageMark, spotlight, spotlightLine];
  marks.forEach((el) => {
    el.style.transition = "none";
  });
  placeNavMarks();
  requestAnimationFrame(() => {
    placeNavMarks();
    marks.forEach((el) => {
      el.style.transition = "";
    });
  });
}

function placeMark(el, name) {
  const link = navLinks.find((item) => item.dataset.nav === name);
  if (!link) return;
  const linkBox = link.getBoundingClientRect();
  const stageBox = stage.getBoundingClientRect();
  const range = document.createRange();
  range.selectNodeContents(link);
  const textWidth = range.getBoundingClientRect().width || linkBox.width * 0.4;
  const width = Math.max(textWidth + 10, 40);
  const center = linkBox.left + linkBox.width / 2 - stageBox.left;
  el.style.width = `${width}px`;
  el.style.left = `${center - width / 2}px`;
}

function placeNavMarks() {
  if (isPhone()) {
    pageMark.style.opacity = "0";
    spotlight.style.opacity = "0";
    spotlightLine.style.opacity = "0";
    fitTags();
    fitCtas();
    return;
  }
  const current = currentPage();
  const supplement = isSupplement(current);
  if (!supplement) placeMark(pageMark, current);
  pageMark.style.opacity = supplement ? "0" : "";
  const visual = preview || (supplement ? null : current);
  if (visual) {
    placeMark(spotlight, visual);
    placeMark(spotlightLine, visual);
  }
  spotlight.style.opacity =
    preview || current === "research" || current === "projects" || current === "resume" || current === "about" ? "1" : "0";
  spotlightLine.style.opacity = preview ? "0.5" : "0";
  fitTags();
  fitCtas();
}

function fitTags() {
  document.querySelectorAll(".tags").forEach((tags) => {
    tags.style.setProperty("--tag", "1");
    if (isPhone() || tags.closest(".hero")) return;
    const available = tags.clientWidth;
    const needed = tags.scrollWidth;
    if (available > 0 && needed > available + 1) {
      tags.style.setProperty("--tag", String(available / needed));
    }
  });
}

function fitCtas() {
  const ctas = document.querySelector(".ctas");
  if (!ctas || !ctas.clientWidth) return;
  const scale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--s")) || 1;
  const minGap = 20 * scale;
  ctas.style.flexWrap = "nowrap";
  ctas.style.columnGap = "";
  const available = ctas.clientWidth;
  const itemsWidth = [...ctas.children].reduce((sum, item) => sum + item.offsetWidth, 0);
  const maxGap = parseFloat(getComputedStyle(ctas).columnGap) || 0;
  const room = available - itemsWidth;
  if (room >= minGap) {
    ctas.style.columnGap = `${Math.min(maxGap, room)}px`;
    ctas.style.flexWrap = "nowrap";
  } else {
    ctas.style.columnGap = `${minGap}px`;
    ctas.style.flexWrap = "wrap";
  }
}

window.addEventListener("resize", fitFrame);
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", fitFrame);
}
if (typeof ResizeObserver !== "undefined") {
  new ResizeObserver(() => {
    pageMark.style.transition = "none";
    spotlight.style.transition = "none";
    spotlightLine.style.transition = "none";
    placeNavMarks();
    requestAnimationFrame(() => {
      pageMark.style.transition = "";
      spotlight.style.transition = "";
      spotlightLine.style.transition = "";
    });
  }).observe(nav);
}
fitFrame();
document.fonts.ready.then(() => {
  fitTags();
  fitCtas();
});

selected = parseHash();
applyState(selected);

/* The pose sets each string's anchor, angle, and length. Digits stream on
   their own: new bits enter at the fingertip and travel toward the puppet,
   and the count follows the live length so a moving hand shortens the line
   from the finger instead of swapping the whole string at once. */
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let charWidth = 239.87 / 55;

const streams = binEls.map((el, index) => ({
  el,
  bits: (el.textContent.match(/[01]/g) || ["0"]).join(""),
  next: performance.now() + index * 80,
}));

function measureCharWidth() {
  const probe = document.createElement("span");
  probe.className = "binary";
  probe.style.transition = "none";
  probe.style.visibility = "hidden";
  probe.style.width = "auto";
  probe.textContent = "0".repeat(40);
  document.querySelector(".binaries").appendChild(probe);
  const width = probe.offsetWidth / 40;
  probe.remove();
  if (width > 3 && width < 6) charWidth = width;
}

function fitStream(stream, flow) {
  const count = Math.max(1, Math.round(stream.el.offsetWidth / charWidth));
  let bits = stream.bits;
  if (bits.length > count) bits = bits.slice(0, count);
  while (bits.length < count) bits += Math.random() < 0.5 ? "0" : "1";
  if (flow && bits.length > 1) bits = bits.slice(1) + (Math.random() < 0.5 ? "0" : "1");
  stream.bits = bits;
  if (stream.el.textContent !== bits) stream.el.textContent = bits;
}

function runStrings(now) {
  const flow = !motionQuery.matches && !document.hidden;
  for (const stream of streams) {
    const tick = flow && now >= stream.next;
    if (tick) stream.next = now + 110;
    fitStream(stream, tick);
  }
  requestAnimationFrame(runStrings);
}

document.fonts.ready.then(() => {
  measureCharWidth();
  requestAnimationFrame(runStrings);
});
