# Mariano Capezzani

Static rebuild of [mcapezzani4.wixsite.com/website](https://mcapezzani4.wixsite.com/website). Five pages: Home, Work, Blog, Music, Me. Plain HTML and CSS, generated with [Eleventy](https://www.11ty.dev/), deployed to GitHub Pages.

Site: https://marianocapezzani.com/

## Edit the site

Page copy lives in the templates:

- `src/index.njk` — Home
- `src/work/index.njk` — Work
- `src/blog/index.njk` — Blog (six Medium teasers; there are no on-site articles)
- `src/music/index.njk` — Music
- `src/me/index.njk` — Me

Shared header, footer, and meta tags are in `src/_includes/base.njk`. Styles are in `src/css/styles.css`. Images are in `src/assets/images/` and videos in `src/assets/videos/`.

```bash
npm install
npm run dev    # local preview
npm run build  # writes _site/
```

The dev server respects the base path in `src/_data/site.js`. With the constants below, local links match the custom domain at the root.

## Base path and the custom domain

All links, asset URLs, canonical URLs, Open Graph URLs, `sitemap.xml`, and `robots.txt` come from one file, `src/_data/site.js`:

```js
const BASE_PATH = "";
const SITE_URL = "https://marianocapezzani.com";
```

`src/static/CNAME` contains `marianocapezzani.com` and is copied to the root of the published site. GitHub Pages uses that file for the custom domain. Set Pages → Custom domain to `marianocapezzani.com` when this is deployed. With the CNAME in the published output, GitHub redirects the old project URL to the custom domain.

To build a project-URL preview instead, override the constants for that build:

```bash
BASE_PATH=/marianocapezzani.com SITE_URL=https://mcapezzani.github.io/marianocapezzani.com npm run build
```

## Contact form

`/me` shows the social links and a map of London. The contact form (First Name, Last Name, Email, Message, Send) is already marked up and styled for [Formspree](https://formspree.io/). It stays hidden until you set an endpoint, so the page never posts to a broken URL and no personal email address is published.

In `src/_data/site.js`:

```js
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-id";
```

After a successful send, the page shows “Thanks!”.

## Deploy

Pushes to `main` run `.github/workflows/pages.yml`, which builds the site and deploys with GitHub Actions. Pages has to be set once to **Settings → Pages → Build and deployment → Source: GitHub Actions**. The workflow token cannot turn that setting on by itself.

## Content notes kept on purpose

- Home says “Rendez-vous with Rama. **2026.**” and Music says “**2025?.**”. Both are copied as written.
- Typos in the original copy are unchanged (“Theer are”, “sounstrack”, “Dissapointing”, and others).
- The Chase icon on Work still links to the Shopmate section. There is no Chase section on the live site, so the target was left as it is.
- The Home heading “Space” still links to the Prototypr article “Apps for martians”. That may be unintentional; the right destination is not clear.
- Blog titles and images that pointed at the wrong Medium article now point at the article that matches the title. See the pull request notes for the list.
