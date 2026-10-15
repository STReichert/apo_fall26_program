import { useState } from 'react'
import { bios } from '../content/bios.js'
import Section from './Section.jsx'
import './Bios.css'

// One biography card. Each card has its OWN isOpen state.
function Bio({ bio }) {
  const [isOpen, setIsOpen] = useState(false)

  // Split the paragraphs: the first always shows, the rest are "more".
  const [first, ...more] = bio.paragraphs

  return (
    <article className="bio">
      <div className="bio__photo">
        {bio.photo ? (
          <img src={bio.photo} alt={`Portrait of ${bio.name}`} />
        ) : (
          <div className="bio__placeholder" aria-hidden="true" />
        )}
      </div>

      <div className="bio__body">
        <p className="label bio__role">{bio.role}</p>
        <h3 className="bio__name">{bio.name}</h3>

        <p>{first}</p>
        {isOpen && more.map((text, i) => <p key={i}>{text}</p>)}

        {more.length > 0 && (
          <button
            type="button"
            className="bio__toggle"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
    </article>
  )
}

export default function Bios() {
  return (
    <Section id="artists" eyebrow="Meet the artists" title="Biographies">
      <div className="bios">
        {bios.map((bio) => (
          <Bio key={bio.name} bio={bio} />
        ))}
      </div>
    </Section>
  )
}
