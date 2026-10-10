// APP — the top-level component. It decides the ORDER of the page.
// Each section is its own component; each pulls its words and pictures
// from src/content/. To reorder or remove a section, edit the list below.
import { concert } from './content/concert.js'
import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import Welcome from './components/Welcome.jsx'
import Program from './components/Program.jsx'
import Musicians from './components/Musicians.jsx'
import Bios from './components/Bios.jsx'
import Donate from './components/Donate.jsx'
import Upcoming from './components/Upcoming.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    // data-color switches the whole page to this concert's color
    // (see "ONE COLOR PER CONCERT" in styles/tokens.css).
    <div data-color={concert.color}>
      <Hero />
      <Nav />
      <main>
        <Welcome />
        <Program />
        <Musicians />
        <Bios />
        <Donate />
        <Upcoming />
      </main>
      <Footer />
    </div>
  )
}
