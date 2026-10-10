// NAV — sticky bar of links that jump to each section of this one page.
//
// This is what makes it a "single-page app": every link points to an id on
// the same page (href="#program"), so nothing reloads — the browser scrolls.
// The links are built from an array with .map(), React's way of turning a
// list of data into a list of elements. Each item needs a unique `key`.
import './Nav.css'

const links = [
  { href: '#welcome', label: 'Welcome' },
  { href: '#program', label: 'Program' },
  { href: '#musicians', label: 'Musicians' },
  { href: '#artists', label: 'Artists' },
  { href: '#upcoming', label: 'Upcoming' },
]

export default function Nav() {
  return (
    <nav className="nav" aria-label="Program sections">
      <div className="container nav__track">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="nav__link">
            {link.label}
          </a>
        ))}
        <a href="#donate" className="nav__link nav__link--give">
          Donate
        </a>
      </div>
    </nav>
  )
}
