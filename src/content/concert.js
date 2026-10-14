// ===========================================================================
// CONCERT DETAILS — edit this file first for each new program.
// Text in [square brackets] is placeholder copy waiting to be written.
// ===========================================================================

// Images are "imported" so Vite can optimize them and get the paths right.
// To swap a picture: drop the new file in src/assets/images/ and change the
// filename on the matching line below.
import heroWide from '../assets/images/hero-wide.jpg'
import heroTall from '../assets/images/hero-tall.jpg'
import logo from '../assets/images/apo-logo.png'

export const concert = {
  // §03 of the brand guide: one color per concert. One of:
  // red, orange, yellow, green, blue, purple, pink, lightblue, brown
  color: 'pink',

  title: 'Color Me Romantic',
  season: '2026–27 Season',
  seasonTheme: 'Harmony',
  date: 'Saturday, October 17, 2026',
  time: '7:30 PM',
  venue: 'North Decatur Presbyterian Church',
  address: '611 Medlock Rd, Decatur, GA 30033',

  images: {
    logo,
    heroWide, // shown on desktops / landscape screens
    heroTall, // shown on phones / portrait screens
    // Describes the graphic for screen-reader users.
    heroAlt:
      'Atlanta Philharmonic Orchestra, 2026–27 season Harmony: Color Me Romantic, October 17, 2026 at 7:30 PM.',
  },

  welcome: {
    heading: 'Welcome',
    // Each string in this list becomes its own paragraph.
    paragraphs: [
      'Welcome to Color Me Romantic.',
      '[A second paragraph: what to listen for, a thank-you to volunteers and sponsors, or a reminder to silence phones.]',
    ],
    signature: {
      name: 'Amy Wilson',
      title: 'Music Director',
    }
  },

  links: {
    website: 'https://www.atlantaphilharmonic.org/',
  },

  donate: {
    heading: 'Keep Atlanta in Harmony',
    text: '[Ticket sales cover only part of what it takes to put an orchestra on stage. Your gift supports rehearsal space, music, and guest artists.]',
    // General donation page (any amount).
    url: 'https://squareup.com/market/atlanta-philharmonic-orchestra',
    // One-tap buttons. Make a Square "Payment Link" for each amount
    // (Square Dashboard → Payment Links → Create) and paste it in `url`.
    // Until then, `url: null` falls back to the general page above.
    quickAmounts: [
      { amount: 5, url: null },
      { amount: 25, url: null },
      { amount: 50, url: null },
    ],
  },
}
