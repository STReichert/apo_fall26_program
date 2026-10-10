# APO Digital Concert Program

A mobile-friendly, single-page concert program for the Atlanta Philharmonic
Orchestra, built with **React** and **Vite**, styled with plain **CSS**
following the APO Visual Standards (`reference/APOBrandingGuidelines-092026-1.pdf`).

## Run it

```bash
npm install      # once: downloads React & Vite into node_modules/
npm run dev      # starts a live-reloading site at http://localhost:5173
npm run build    # makes the publishable site in dist/
npm run preview  # serves dist/ locally to double-check the build
```

## Folder map

```
apo_fall26_program/
├── index.html              The one HTML page. Loads fonts and src/main.jsx.
├── package.json            Project name, scripts (dev/build), and dependencies.
├── package-lock.json       Exact installed versions (auto-generated; commit it).
├── vite.config.js          Build-tool settings.
├── node_modules/           Installed packages (auto-generated; never edit/commit).
├── dist/                   Built site to publish (auto-generated).
├── reference/              Brand guide, original graphics, early HTML draft.
├── docs/
│   └── LEARNING-PATH.md    Step-by-step plan for building out the program.
└── src/                    ← everything you work on lives here
    ├── main.jsx            Entry point: loads styles, mounts <App/>.
    ├── App.jsx             Page order: which sections appear, top to bottom.
    ├── content/            ★ EDIT THESE FOR EACH CONCERT ★
    │   ├── concert.js      Title, date, venue, color, welcome note, donate links.
    │   ├── program.js      Works, movements, intermission.
    │   ├── musicians.js    Leadership and roster (concertmaster/principal roles).
    │   ├── bios.js         Conductor & composer biographies and photos.
    │   └── upcoming.js     Rest of the season.
    ├── components/         One .jsx (structure) + .css (looks) per piece of UI.
    ├── assets/images/      Photos and graphics used by the content files.
    └── styles/
        ├── tokens.css      Brand colors, fonts, sizes as CSS variables.
        └── global.css      Base styles for plain HTML elements.
```

## Preparing a new program

1. Duplicate this repo (or make a new branch).
2. Edit the files in `src/content/` — words, names, dates.
3. Put new images in `src/assets/images/` and update the `import` lines at
   the top of `concert.js` / `bios.js`.
4. Change `color` in `concert.js` to the concert's assigned color.
5. `npm run build` and publish `dist/`.
