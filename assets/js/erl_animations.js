/**
 * ERL IIT Bombay — site-wide scroll-reveal animations
 * Targets cards, publications, news items, and equipment grids across all pages.
 */
(function () {
  "use strict";

  // Elements to animate in on scroll
  var SELECTORS = [
    ".card",
    ".equipment-card",
    ".software-card",
    ".bib",
    ".news li",
    ".reveal",
    "table",
    ".profile",
  ].join(", ");

  function init() {
    // Skip if IntersectionObserver not supported (old Safari)
    if (!("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -30px 0px" }
    );

    // Add .reveal to matched elements that don't already have it
    var els = document.querySelectorAll(SELECTORS);
    els.forEach(function (el) {
      // Stagger siblings in the same row/parent
      var siblings = Array.from(el.parentElement.children).filter(function (c) {
        return c.matches && c.matches(SELECTORS);
      });
      var idx = siblings.indexOf(el);
      if (idx > 0) {
        el.style.transitionDelay = idx * 0.1 + "s";
      }
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
