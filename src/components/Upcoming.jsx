import { upcoming } from '../content/upcoming.js'
import Section from './Section.jsx'
import './Upcoming.css'

export default function Upcoming() {
  return (
    <Section id="upcoming" eyebrow="2026–27 Season · Harmony" title="Upcoming concerts">
      <ul className="upcoming">
        {upcoming.map((show) => (
          <li key={show.title} data-color={show.color}>
            <a className="show" href={show.url} target="_blank" rel="noopener noreferrer">
              <span className="show__date">{show.date}</span>
              <span className="show__title">{show.title}</span>
              <span className="show__more">Details &amp; tickets →</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
