/* CCE 2026 site script. Dependency-free. Every page works without it. */
(function () {
  function loadAgentTheme() {
    if (!document.querySelector('link[data-agent-theme]')) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'assets/agent-theme.css';
      link.setAttribute('data-agent-theme', '');
      document.head.appendChild(link);
    }

    if (!document.querySelector('link[data-lecture-responsive]')) {
      var lectureLink = document.createElement('link');
      lectureLink.rel = 'stylesheet';
      lectureLink.href = 'assets/lecture-responsive.css';
      lectureLink.setAttribute('data-lecture-responsive', '');
      document.head.appendChild(lectureLink);
    }
  }

  function styleIntroTitle() {
    var current = document.querySelector('.site-nav a.current');
    if (!current || current.getAttribute('href') !== 'index.html') return;

    document.body.classList.add('page-intro');
    var heading = document.querySelector('.page > h1');
    if (!heading || heading.querySelector('.agent-title-neon')) return;

    var prefix = 'AI Agents';
    var text = heading.textContent || '';
    if (text.indexOf(prefix) !== 0) return;

    heading.textContent = '';
    var accent = document.createElement('span');
    accent.className = 'agent-title-neon';
    accent.textContent = prefix;
    heading.appendChild(accent);
    heading.appendChild(document.createTextNode(text.slice(prefix.length)));
  }

  loadAgentTheme();
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

  function animateLectureCommand() {
    var typed = document.querySelector(".lecture-command-type");
    if (!typed) {
      return;
    }

    var fullText = typed.getAttribute("data-text") || typed.textContent.trim();
    typed.setAttribute("data-text", fullText);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      typed.textContent = fullText;
      return;
    }

    var index = 0;
    var deleting = false;
    typed.textContent = "";

    function tick() {
      if (!deleting) {
        index += 1;
        typed.textContent = fullText.slice(0, index);

        if (index >= fullText.length) {
          deleting = true;
          window.setTimeout(tick, 1300);
          return;
        }

        window.setTimeout(tick, 58);
        return;
      }

      index -= 1;
      typed.textContent = fullText.slice(0, index);

      if (index <= 0) {
        deleting = false;
        window.setTimeout(tick, 500);
        return;
      }

      window.setTimeout(tick, 32);
    }

    window.setTimeout(tick, 450);
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
    styleIntroTitle();
    animateLectureCommand();
    addCopyButtons();
    addThemeToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
