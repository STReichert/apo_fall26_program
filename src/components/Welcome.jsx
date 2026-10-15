import { concert } from '../content/concert.js'
import Section from './Section.jsx'
import './Welcome.css'

export default function Welcome() {
  const { welcome } = concert

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
      </div>
    </Section>
  )
}

