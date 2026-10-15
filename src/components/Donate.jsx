// DONATE — the ask, with one-tap amount buttons that open Square.
// STARTER: works, but unstyled. See docs/LEARNING-PATH.md → Step 7.
import { concert } from '../content/concert.js'
import './Donate.css'

export default function Donate() {
  const { donate, links } = concert

  return (
    <section id="donate" className="donate">
      <div className="container">
        <div className="donate__card">
          <p className="label donate__eyebrow">Support the music</p>
          <h2 className="donate__heading">{donate.heading}</h2>
          <p className="donate__text">{donate.text}</p>

          <div className="donate__actions">
            <a className="button donate__button" href={donate.url} target="_blank" rel="noopener noreferrer">
              {donate.buttonLabel}
            </a>
            <a className="donate__more" href={links.website} target="_blank" rel="noopener noreferrer">
              More ways to support APO
            </a>
          </div>

          <p className="donate__note">{donate.note}</p>
        </div>
      </div>
    </section>
  )
}

