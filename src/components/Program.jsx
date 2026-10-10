// PROGRAM — the list of works, with an intermission divider.
// STARTER: works, but unstyled. See docs/LEARNING-PATH.md → Step 4.
import { program } from '../content/program.js'
import Section from './Section.jsx'

export default function Program() {
  return (
    <Section id="program" eyebrow="Tonight’s music" title="Program">
      {program.map((item, i) => {
        // A "conditional render": intermission entries look different.
        if (item.intermission) {
          return <p key={i}>— Intermission —</p>
        }
        return (
          <article key={i}>
            <p>
              {item.composer} ({item.composerDates})
            </p>
            <h3>{item.title}</h3>
            {item.movements.length > 0 && (
              <ol>
                {item.movements.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ol>
            )}
            {item.note && <p>{item.note}</p>}
          </article>
        )
      })}
    </Section>
  )
}
