// ===========================================================================
// THE ORCHESTRA
// `role` is optional. Use:
//   'concertmaster'         → shown with a CM mark
//   'principal'             → shown with a * mark
//   'assistant principal'   → shown with a † mark
// `note` is optional extra text, e.g. 'piccolo' or 'bass trombone'.
// ===========================================================================

export const leadership = [
  { title: 'Music Director', name: 'Amy Wilson' },
  { title: 'Associate Conductor Finalist', name: 'Bowen Hoadley' },
]

export const sections = [
  {
    name: 'Violin I',
    players: [
      { name: 'Earl Hough', role: 'concertmaster' },
      { name: 'Tom Collins' },
      { name: 'Brianna Faulkenbery', role: 'member' },
      { name: 'Seth Reichert', role: 'member' },
      { name: 'Dan Salzinger', role: 'member' },
      { name: 'Debbi Whiting' },
    ],
  },
  {
    name: 'Violin II',
    players: [{ name: '[Name]', role: 'principal' }, { name: '[Name]' }, { name: '[Name]' }, { name: '[Name]' }],
  },
  {
    name: 'Viola',
    players: [{ name: '[Name]', role: 'principal' }, { name: '[Name]' }, { name: '[Name]' }],
  },
  {
    name: 'Cello',
    players: [{ name: '[Name]', role: 'principal' }, { name: '[Name]' }, { name: '[Name]' }],
  },
  {
    name: 'Bass',
    players: [{ name: '[Name]', role: 'principal' }, { name: '[Name]' }],
  },
  {
    name: 'Flute',
    players: [{ name: '[Name]', role: 'principal' }, { name: '[Name]', note: 'piccolo' }],
  },
  {
    name: 'Oboe',
    players: [{ name: '[Name]', role: 'principal' }, { name: '[Name]' }],
  },
  {
    name: 'Clarinet',
    players: [{ name: '[Name]', role: 'principal' }, { name: '[Name]' }],
  },
  {
    name: 'Bassoon',
    players: [{ name: '[Name]', role: 'principal' }, { name: '[Name]' }],
  },
  {
    name: 'Horn',
    players: [{ name: '[Name]', role: 'principal' }, { name: '[Name]' }, { name: '[Name]' }, { name: '[Name]' }],
  },
  {
    name: 'Trumpet',
    players: [{ name: '[Name]', role: 'principal' }, { name: '[Name]' }],
  },
  {
    name: 'Trombone & Tuba',
    players: [
      { name: '[Name]', role: 'principal' },
      { name: '[Name]' },
      { name: '[Name]', note: 'bass trombone' },
      { name: '[Name]', note: 'tuba' },
    ],
  },
  {
    name: 'Timpani & Percussion',
    players: [{ name: '[Name]', role: 'principal' }, { name: '[Name]' }],
  },
]
