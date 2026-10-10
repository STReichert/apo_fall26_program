# Learning path

Each step builds one piece of the program and introduces one or two new
ideas. Steps 1–2 are done; the rest are ours to build together.

| Step | Build | You learn |
|---|---|---|
| 1 ✅ | Project scaffold, design tokens, content files | How a Vite + React project is laid out; CSS variables |
| 2 ✅ | `Section`, `Hero`, `Nav`, `Footer` (finished examples) | Components, props, `children`, `<picture>`, sticky positioning |
| 3 | **Mobile nav**: hamburger menu on phones, row of links on desktop | Your first React **state** (`useState`), click handlers, `aria-expanded`, mobile-first media queries |
| 4 | **Welcome**: style the letter | Readable typography: line length, `max-width: 40rem`, a drop cap with `::first-letter` |
| 5 | **Program**: cards for each work, intermission divider | CSS Grid, the BEM naming pattern, conditional rendering |
| 6 | **Musicians**: leadership tiles + roster that is one column on phones, 2 on tablets, 3–4 on desktop (a section never splits across columns) | CSS `columns` + `break-inside: avoid`, mobile-first breakpoints, mapping data → symbols (CM, *, †), an accessible legend |
| 7 | **Bios**: photo beside text, "Read more" toggle | Reusing `useState` (one per bio card), media queries for side-by-side vs stacked |
| 8 | **Donate**: full-width call-to-action band | Layering a background, button groups that wrap on phones |
| 9 | **Upcoming**: one card per concert in its own color | `data-color` re-theming, responsive card grids with `auto-fit` |
| 10 | Polish | Active link in the nav as you scroll (`useEffect` + IntersectionObserver), close menu with Esc, "back to top" button |
| 11 | Publish | Building, and hosting on GitHub Pages; a QR code for the printed insert |

## Ideas to keep in mind as you go

- **Structure vs. style vs. content.** `.jsx` says *what* is on the page,
  `.css` says *how it looks*, `src/content/` says *what it says*. When
  you want to change something, first ask which of the three it is.
- **Mobile first.** Write the phone layout as the default CSS, then add
  `@media (min-width: 48rem) { … }` blocks for wider screens.
- **Brand rule of thumb.** Use only `var(--c-1)` … `var(--c-5)` for color,
  never a second concert color. The full rainbow appears only as the
  thin edge stripe (`var(--flag-stripe)`).
- **Check both themes.** The page switches to the warm off-black ground
  when a phone is in dark mode. Test with your OS dark-mode toggle.
