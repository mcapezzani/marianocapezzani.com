/**
 * Site configuration — edit the three constants below.
 *
 * Preview on GitHub Pages (project URL, a subpath):
 *   basePath: "/marianocapezzani.com"
 *   siteUrl:  "https://mcapezzani.github.io/marianocapezzani.com"
 *
 * Later, when marianocapezzani.com points at GitHub Pages, switch to the root:
 *   basePath: ""
 *   siteUrl:  "https://marianocapezzani.com"
 *   and add a CNAME file whose only line is: marianocapezzani.com
 * Do not add that CNAME file until DNS is actually pointed here. A CNAME
 * makes GitHub redirect the project URL to the custom domain.
 *
 * Contact form: set formspreeEndpoint to a Formspree form URL
 * (https://formspree.io/f/xxxxxxxx) to show the form on /me.
 * Leave it empty and the page shows the social links only — no broken form,
 * and no personal email address is published.
 */
const BASE_PATH = "/marianocapezzani.com";
const SITE_URL = "https://mcapezzani.github.io/marianocapezzani.com";
const FORMSPREE_ENDPOINT = "";

function cleanBase(value) {
  if (!value || value === "/") return "";
  return String(value).replace(/\/$/, "");
}

module.exports = {
  basePath: cleanBase(process.env.BASE_PATH ?? BASE_PATH),
  siteUrl: String(process.env.SITE_URL ?? SITE_URL).replace(/\/$/, ""),
  formspreeEndpoint: process.env.FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT,
  name: "Mariano Capezzani",
  lang: "en",
  nav: [
    { id: "home", label: ".home", href: "/" },
    { id: "work", label: ".work", href: "/work/" },
    { id: "blog", label: ".blog", href: "/blog/" },
    { id: "music", label: ".music", href: "/music/" },
    { id: "me", label: ".me", href: "/me/" },
  ],
  social: [
    {
      name: "Twitter",
      url: "https://twitter.com/mcapezzani",
      icon: "social-twitter.webp",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/marianocapezzani/",
      icon: "social-linkedin.webp",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/mcapezzani",
      icon: "social-soundcloud.webp",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/6CEige5k9gP8PidwvdjEnm",
      icon: "social-spotify.webp",
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/us/artist/mariano-capezzani/1465284336",
      icon: "social-apple-music.webp",
    },
  ],
};
