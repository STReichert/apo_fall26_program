// ===========================================================================
// THE ORCHESTRA
// `role` is optional. Use:
//   'concertmaster'         → shown with a CM mark
//   'principal'             → shown with a * mark
//   'assistant principal'   → shown with a † mark
// `note` is optional extra text, e.g. 'piccolo' or 'bass trombone'.
// ===========================================================================

export const leadership = [
  { title: 'Music Director', name: '[Name]' },
  { title: 'Guest Conductor', name: '[Name]' },
]

export const sections = [
  {
    name: 'Violin I',
    players: [
      { name: '[Name]', role: 'concertmaster' },
      { name: '[Name]', role: 'assistant principal' },
      { name: '[Name]' },
      { name: '[Name]' },
      { name: '[Name]' },
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
