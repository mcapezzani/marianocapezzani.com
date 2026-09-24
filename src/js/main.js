(function () {
  var button = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");

  function setOpen(open) {
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", open);
  }

  if (button && nav) {
    button.addEventListener("click", function () {
      setOpen(button.getAttribute("aria-expanded") !== "true");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }

  var form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = form.querySelector(".form-status");
      var button = form.querySelector("button[type=submit]");
      button.disabled = true;
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (!response.ok) throw new Error("request failed");
          form.reset();
          status.hidden = false;
          status.textContent = "Thanks!";
        })
        .catch(function () {
          status.hidden = false;
          status.textContent = "Something went wrong. Please try again.";
        })
        .finally(function () {
          button.disabled = false;
        });
    });
  }

  var motionReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("video").forEach(function (video) {
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("playsinline", "");
    video.playsInline = true;
    if (motionReduce) {
      video.removeAttribute("autoplay");
      video.pause();
      return;
    }
    var start = function () {
      var play = video.play();
      if (play && play.catch) play.catch(function () {});
    };
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) start();
          else video.pause();
        });
      }, { threshold: 0.2 });
      observer.observe(video);
    } else {
      start();
    }
  });
})();
