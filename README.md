# Mariano Capezzani

Static rebuild of [mcapezzani4.wixsite.com/website](https://mcapezzani4.wixsite.com/website). Five pages: Home, Work, Blog, Music, Me. Plain HTML and CSS, generated with [Eleventy](https://www.11ty.dev/), deployed to GitHub Pages.

Preview: https://mcapezzani.github.io/marianocapezzani.com/

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

The dev server respects the base path in `src/_data/site.js`, so local links match the GitHub Pages project URL.

## Base path and the custom domain

All links and assets are prefixed from one file, `src/_data/site.js`.

Today the site is served from a project URL, so:

```js
const BASE_PATH = "/marianocapezzani.com";
const SITE_URL = "https://mcapezzani.github.io/marianocapezzani.com";
```

When `marianocapezzani.com` is pointed at GitHub Pages, change those two lines to:

```js
const BASE_PATH = "";
const SITE_URL = "https://marianocapezzani.com";
```

Then add a `CNAME` file in the repo root whose only line is:

```
marianocapezzani.com
```

Do not add `CNAME` before the DNS records point at GitHub. With a `CNAME` file present, GitHub redirects the project URL to the custom domain, and the preview would break until DNS is live. In the repository settings, set Pages → Custom domain to `marianocapezzani.com` at the same time.

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
