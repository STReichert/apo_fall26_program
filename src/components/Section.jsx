// SECTION — a reusable wrapper every content section uses.
//
// "Props" are the inputs a component receives, like arguments to a function:
//   <Section id="program" title="Program"> ... </Section>
// `children` is a special prop: whatever you put BETWEEN the opening and
// closing tags. That lets Section handle the shared layout while each
// section supplies its own content.
import './Section.css'

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="section__head">
          <h2 className="section__title">{title}</h2>
        </header>
        {children}
      </div>
    </section>
  )
}
