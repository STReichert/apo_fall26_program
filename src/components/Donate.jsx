// DONATE — the ask, with one-tap amount buttons that open Square.
// STARTER: works, but unstyled. See docs/LEARNING-PATH.md → Step 7.
import { concert } from '../content/concert.js'
import Section from './Section.jsx'

export default function Donate() {
  const { donate } = concert

  return (
    <Section id="donate" eyebrow="Support the music" title={donate.heading}>
      <p>{donate.text}</p>
      <div>
        {donate.quickAmounts.map(({ amount, url }) => (
          // `url ?? donate.url` means: use this amount's link if it exists,
          // otherwise fall back to the general donation page.
          <a
            key={amount}
            className="button"
            href={url ?? donate.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Give ${amount}
          </a>
        ))}
        <a className="button button--outline" href={donate.url} target="_blank" rel="noopener noreferrer">
          Other amount
        </a>
      </div>
    </Section>
  )
}
