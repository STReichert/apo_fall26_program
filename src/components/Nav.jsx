// NAV — sticky bar of links that jump to each section of this one page.
//
// This is what makes it a "single-page app": every link points to an id on
// the same page (href="#program"), so nothing reloads — the browser scrolls.
// The links are built from an array with .map(), React's way of turning a
// list of data into a list of elements. Each item needs a unique `key`.
import { useState } from 'react'
import './Nav.css'

const links = [
  { href: '#welcome', label: 'Welcome' },
  { href: '#program', label: 'Program' },
  { href: '#musicians', label: 'Musicians' },
  { href: '#artists', label: 'Artists' },
  { href: '#upcoming', label: 'Upcoming' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="nav" aria-label="Program sections">
      <div className="container nav__bar">
        <button 
          type="button" 
          className="nav__toggle"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="nav__icon" aria-hidden="true" />
          <span>{isOpen ? 'Close' : 'Menu'}</span>
        </button>

        <div id="nav-menu" className={isOpen ? 'nav__menu is-open' : 'nav__menu'}>
          {links.map((link) => (
            <a
              key={link.href} 
              href={link.href} 
              className="nav__link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#donate" className="nav__link nav__link--give">
          Donate
        </a>
      </div>
    </nav>
  )
}
