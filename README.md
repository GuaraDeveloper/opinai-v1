# Opinaí (v1)

[Leia em português](README.pt-br.md)

A movie, series and anime review website.

> **A 2024 project.** This was my first project using HTML, CSS and JavaScript,
> built during a web programming course. I'm publishing it as a record of
> where I started.
>
> I know this code is outdated and has known issues: the structure is
> repetitive, parts of the site don't work yet, and the layout isn't fully
> responsive. I'm building a new version from scratch to show how much I've
> learned since then.

## What's in this version

- Home page with navbar, movie carousel, and sliders for "Trending" and "Anime"
- Work details page (example: Baby Reindeer) with banner, synopsis, cast, trailer, and suggestions
- Dark layout with orange accents

## Technologies

HTML, CSS, JavaScript and Bootstrap 4.

## How to open

Download the project and open `index.html` in your browser.

## Project structure

```
opinai-v1/
├── index.html       # Home page: navbar, carousel and work sliders
├── pagina.html      # Work details page (example: Baby Reindeer)
├── css/
│   ├── style.css    # Home page styles
│   └── pagina.css   # Details page styles
├── js/
│   └── script.js    # Slider behavior and button messages
├── README.md        # Project description (English)
├── README.pt-br.md  # Project description (Portuguese)
└── LICENSE          # MIT License
```

- **`index.html`**: structure of the home page.
- **`pagina.html`**: structure of a work's details page.
- **`style.css`** and **`pagina.css`**: look of each page (dark theme, cards, slider buttons, small-screen adjustments).
- **`script.js`**: makes the sliders scroll sideways and shows the messages for login, sign-up, and search.

Bootstrap and jQuery are not stored in the repository: they are loaded from the internet through the links in the HTML.

## Limitations of this version

Login, sign-up, search, favorites and comments don't work yet. They are
planned for v2.

## Next steps (v2)

- Generate the cards from a data list in JavaScript
- A single details page for all works
- Search, favorites and comments saved in the browser
- Responsive layout designed mobile-first

## Notes

- The website content is in Brazilian Portuguese.
- Posters and banners belong to their respective owners and are used for
  study purposes only.
