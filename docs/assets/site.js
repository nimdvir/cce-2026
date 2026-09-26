/* CCE 2026 site script. Dependency-free. Every page works without it. */
(function () {
  "use strict";

  var root = document.documentElement;
  var STORAGE_KEY = "cce2026-theme";

  function storedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeTheme(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* storage unavailable: the choice lasts for this page only */
    }
  }

  // Apply a saved theme before the page paints (this script is not deferred).
  var saved = storedTheme();
  if (saved === "dark" || saved === "light") {
    root.setAttribute("data-theme", saved);
  }

  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) {
      return set;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function fallbackCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "-1000px";
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(area);
    return ok;
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(
        function () { return true; },
        function () { return fallbackCopy(text); }
      );
    }
    return Promise.resolve(fallbackCopy(text));
  }

  function addCopyButtons() {
    var boxes = document.querySelectorAll(".prompt-box");
    Array.prototype.forEach.call(boxes, function (box) {
      var code = box.querySelector("pre code");
      var bar = box.querySelector(".prompt-bar");
      if (!code || !bar) {
        return;
      }
      var button = document.createElement("button");
      button.type = "button";
      button.className = "copy";
      button.textContent = "Copy";
      button.setAttribute("aria-label", "Copy this prompt");
      button.addEventListener("click", function () {
        // The fenced block content, without the newline the renderer adds
        // after the last line.
        var text = code.textContent.replace(/\n$/, "");
        copyText(text).then(function (ok) {
          button.textContent = ok ? "Copied" : "Select and copy";
          setTimeout(function () { button.textContent = "Copy"; }, 1800);
        });
      });
      bar.appendChild(button);
    });
  }

  function addThemeToggle() {
    var nav = document.querySelector(".site-nav");
    if (!nav) {
      return;
    }
    var button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";

    function label() {
      var next = currentTheme() === "dark" ? "light" : "dark";
      button.textContent = next === "dark" ? "Dark" : "Light";
      button.setAttribute("aria-label", "Switch to " + next + " mode");
    }

    button.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      storeTheme(next);
      label();
    });

    label();
    nav.appendChild(button);
  }

  function init() {
    addCopyButtons();
    addThemeToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
