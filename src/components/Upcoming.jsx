// UPCOMING — the rest of the season. Each card wears its own concert color
// by setting data-color on it (see styles/tokens.css).
// STARTER: works, but unstyled. See docs/LEARNING-PATH.md → Step 8.
import { upcoming } from '../content/upcoming.js'
import Section from './Section.jsx'

export default function Upcoming() {
  return (
    <Section id="upcoming" eyebrow="2026–27 Season · Harmony" title="Upcoming concerts">
      {upcoming.map((show) => (
        <a key={show.title} href={show.url} data-color={show.color} target="_blank" rel="noopener noreferrer">
          <h3>{show.title}</h3>
          <p>{show.date}</p>
        </a>
      ))}
    </Section>
  )
}
