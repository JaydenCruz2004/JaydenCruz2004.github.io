# Jayden Cruz Portfolio Website

This repository contains my personal portfolio website, built as a static multi-page site.

## Pages

- `index.html` - landing page and personal intro
- `resume.html` - technical experience, education, and skills
- `projects.html` - project highlights with GitHub links
- `coursework.html` - relevant coursework and certifications
- `contact.html` - contact links and call-to-action

## Tech Stack

- HTML5
- CSS (custom styles in `css/styles.css`)
- Bootstrap (included via the theme stylesheet)
- Bootstrap Icons (CDN)
- Google Fonts (Plus Jakarta Sans)
- Minimal JavaScript in `js/`

## Project Structure

```text
.
├── index.html
├── resume.html
├── projects.html
├── coursework.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── scripts.js
│   └── speed-insights.js
└── assets/
    ├── favicon.ico
    ├── profile.png
    └── profile2.png
```

## Local Development

Because this is a static site, you can open `index.html` directly, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Vercel Speed Insights

Speed Insights is initialized on each page with:

- `js/speed-insights.js` (sets the current route)
- `/_vercel/speed-insights/script.js` (Vercel script)

To use it in production:

1. Enable Speed Insights in your Vercel project dashboard.
2. Deploy the site to Vercel.
3. Review Core Web Vitals in the Speed Insights tab after traffic is recorded.

## Contact

- LinkedIn: [linkedin.com/in/jaydencruz](https://www.linkedin.com/in/jaydencruz/)
- GitHub: [github.com/JaydenCruz2004](https://github.com/JaydenCruz2004)
- Email: [jaydencruz.cs@gmail.com](mailto:jaydencruz.cs@gmail.com)
