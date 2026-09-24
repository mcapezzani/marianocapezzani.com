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

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("video").forEach(function (video) {
      video.removeAttribute("autoplay");
      video.pause();
    });
  }
})();
