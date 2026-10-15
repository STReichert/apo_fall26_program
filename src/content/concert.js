// ===========================================================================
// CONCERT DETAILS — edit this file first for each new program.
// Text in [square brackets] is placeholder copy waiting to be written.
// ===========================================================================

// Images are "imported" so Vite can optimize them and get the paths right.
// To swap a picture: drop the new file in src/assets/images/ and change the
// filename on the matching line below.
import heroWide from '../assets/images/hero-wide.jpg'
import heroTall from '../assets/images/1080 x 1350 Social Media-for-digital-program.png'
import logo from '../assets/images/apo-logo.png'

export const concert = {
  // Guideline 03: one primary color per concert. One of:
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
      title: 'Artistic Director',
    }
  },

  links: {
    website: 'https://www.atlantaphilharmonic.org/',
  },

  donate: {
    heading: 'Become a Donor Today',
    text: 'Contribute to the Atlanta Philharmonic Orchestra and help us keep the music alive! Click the link to make a financial contribution. Donations help APO with music purchases and licenses, scholarships for members, outreach to local communities, and guest musician pay.',
    // Square payment link (from Square Dashboard → Payment Links).
    url: 'https://square.link/u/8vHCexZG',
    buttonLabel: 'Give $5 or $10',
    note: 'Opens our secure Square checkout, where you choose $5 or $10.',
  },

}
