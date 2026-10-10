// BIOS — conductors and composer, photo + text.
// STARTER: works, but unstyled and shows every paragraph.
// See docs/LEARNING-PATH.md → Step 6 (your first React "state": Read more).
import { bios } from '../content/bios.js'
import Section from './Section.jsx'

export default function Bios() {
  return (
    <Section id="artists" eyebrow="Meet the artists" title="Biographies">
      {bios.map((bio) => (
        <article key={bio.name}>
          {bio.photo && <img src={bio.photo} alt={`Portrait of ${bio.name}`} width="240" />}
          <p>{bio.role}</p>
          <h3>{bio.name}</h3>
          {bio.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </article>
      ))}
    </Section>
  )
}
