// WELCOME — the program note / welcome letter.
// STARTER: works, but unstyled. See docs/LEARNING-PATH.md → Step 3.
import { concert } from '../content/concert.js'
import Section from './Section.jsx'

export default function Welcome() {
  const { welcome } = concert

  return (
    <Section id="welcome" eyebrow={concert.title} title={welcome.heading}>
      <div>
        {welcome.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
        <p>— {welcome.signature}</p>
      </div>
    </Section>
  )
}
