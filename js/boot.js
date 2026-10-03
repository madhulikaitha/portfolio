(function () {
  var page = (location.hash || "").slice(1).toLowerCase();
  var overlay = {
    research: 1,
    projects: 1,
    resume: 1,
    about: 1,
    contact: 1,
    thanks: 1,
    adaptive: 1,
    security: 1,
    thought: 1,
  };
  document.documentElement.dataset.page = overlay[page] ? page : "home";
})();
