import { concert } from '../content/concert.js'
import { program } from '../content/program.js'
import Section from './Section.jsx'
import './Welcome.css'

export default function Welcome() {
  const { welcome } = concert
  // Only pieces that have a note (skips intermission and blank notes).
  const notes = program.filter((item) => item.programNote)

  return (
    <Section id="welcome" title={concert.title}>
      <div className="welcome">
        {/* <h3 className="welcome__heading">{welcome.heading}</h3>  */}
        {welcome.paragraphs.map((text, i) => (
          <p key={i} className="welcome__text">
            {text}
          </p>
        ))}

        <p className="welcome__signature">
          <span className="welcome__name">{welcome.signature.name}</span>
          <span className="welcome__role">{welcome.signature.title}</span>
        </p>

        {/* Program notes: one short note per piece, from program.js */}
        {notes.length > 0 && (
          <div className="notes">
            <h3 className="notes__heading">Program Notes</h3>
            {notes.map((work) => (
              <article key={work.title} className="notes__item">
                <h4 className="notes__title">
                  {work.title}
                  <span className="notes__composer">{work.composer}</span>
                </h4>
                <p className="notes__text">{work.programNote}</p>
                {work.programNoteLink && (
                  <p className="notes__link">
                    <a
                      href={work.programNoteLink.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {work.programNoteLink.label} →
                    </a>
                  </p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}

