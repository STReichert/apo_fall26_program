import { program } from '../content/program.js'
import Section from './Section.jsx'
import './Program.css'

export default function Program() {
  return (
    <Section id="program" title="Program">
      <div className="program">
        {program.map((item, i) => {
          if (item.intermission) {
            return (
              <p key={i} className="meta program__intermission">
                Intermission
              </p>
            )
          }

          return (
            <article key={i} className="work">
              <div className="work__heading">
                <p className="work__composer">{item.composer}</p>
                <h3 className="work__title">{item.title}</h3>
                {item.date && (
                  <p className="meta work__date">
                    <span className="visually-hidden">Composed </span>
                    {item.date}
                  </p>
                )}
                {item.note && <p className="work__note">{item.note}</p>}
              </div>

              {item.movements.length > 0 && (
                <ol className="work__movements">
                  {item.movements.map((movement) => (
                    <li key={movement}>{movement}</li>
                  ))}
                </ol>
              )}
            </article>
          )
        })}
      </div>
    </Section>
  )
}
