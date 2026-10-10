// MUSICIANS — leadership plus the roster by section, with role marks.
// STARTER: works, but unstyled. See docs/LEARNING-PATH.md → Step 5.
import { leadership, sections } from '../content/musicians.js'
import Section from './Section.jsx'

// Maps a role from musicians.js to the symbol printed after the name.
const roleMarks = {
  concertmaster: 'CM',
  principal: '*',
  'assistant principal': '†',
}

export default function Musicians() {
  return (
    <Section id="musicians" eyebrow="The orchestra" title="Musicians">
      <ul>
        {leadership.map((person) => (
          <li key={person.title}>
            {person.title}: {person.name}
          </li>
        ))}
      </ul>

      {sections.map((section) => (
        <div key={section.name}>
          <h3>{section.name}</h3>
          <ul>
            {section.players.map((player, i) => (
              <li key={i}>
                {player.name}
                {player.note && `, ${player.note}`}
                {player.role && ` ${roleMarks[player.role]}`}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <p>CM Concertmaster · * Principal · † Assistant principal</p>
    </Section>
  )
}
