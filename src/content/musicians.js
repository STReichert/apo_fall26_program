// ===========================================================================
// THE ORCHESTRA
// `role` is optional. Use:
//   'concertmaster'         → shown with a † mark
//   'principal'             → shown with a * mark
//   'member'                → shown with an M mark
// `note` is optional extra text, e.g. 'piccolo' or 'bass trombone'.
// ===========================================================================

export const leadership = [
  { title: 'Artistic Director', name: 'Amy Wilson' },
  { title: 'Associate Conductor Finalist', name: 'Bowen Hoadley' },
]

export const sections = [
  {
    name: 'Violin I',
    players: [
      { name: 'Earl Hough', role: 'concertmaster' },
      { name: 'Tom Collins' },
      { name: 'Brianna Faulkenberry', role: 'member' },
      { name: 'Seth Reichert', role: 'member' },
      { name: 'Dan Salzinger', role: 'member' },
      { name: 'Debbi Whiting', role: 'member' },
    ],
  },
  {
    name: 'Violin II',
    players: [
      { name: 'Jordan Helms', role: 'principal' },
      { name: 'Earlisha Curney', role: 'member' },
      { name: 'Scott Marler', role: 'member' },
      { name: 'Marlina McKay', role: 'member' },
      { name: 'Marilyn Pipkin', role: 'member' },
      { name: 'Megan Wilson' },
    ],
  },
  {
    name: 'Viola',
    players: [
      { name: 'Laura Kuechenmeister', role: 'principal' },
      { name: 'Forrest Carson', role: 'member' },
      { name: 'Dylan Cifuentes', role: 'member' },
    ],
  },
  {
    name: 'Cello',
    players: [
      { name: 'Tim Feverston', role: 'principal' },
      { name: 'Faith Hoover', role: 'member' },
      { name: 'Avery Jacobs', role: 'member' },
      { name: 'Danielle Liburd', role: 'member' },
      { name: 'Kevin Wilson' },
    ],
  },
  {
    name: 'Bass',
    players: [
      { name: 'Ian Brown', role: 'principal' },
      { name: 'Maximilian Simmons' },
    ],
  },
  {
    name: 'Flute & Piccolo',
    players: [
      { name: 'Derrick Jones', role: 'principal' },
      { name: 'April Houston', role: 'member' },
      { name: 'Lynnette Kenith', role: 'member', note: 'Piccolo' },
    ],
  },
  {
    name: 'Oboe',
    players: [
      { name: 'Tom Underwood', role: 'principal' },
      { name: 'Adelyn Carney', role: 'member' },
    ],
  },
  {
    name: 'Clarinet',
    players: [
      { name: 'Jonathan Seletyn', role: 'principal' },
      { name: 'Bethany Petri', role: 'member' },
    ],
  },
  {
    name: 'Bassoon',
    players: [
      { name: 'Joe Sarra', role: 'principal' },
      { name: 'Charlie Jaret', role: 'member' },
      { name: 'Jason Jones', role: 'member', note: 'Contrabassoon' },
    ],
  },
  {
    name: 'Horn',
    players: [
      { name: 'Magdalen Chouinard' },
      { name: 'Elaina Labossiere' },
      { name: 'Greta Masetti', role: 'member' },
      { name: 'Candace Weslosky' },
    ],
  },
  {
    name: 'Trumpet',
    players: [
      { name: 'Eddie Davis' },
      { name: 'Daniel MacNamara' },
    ],
  },
  {
    name: 'Trombone',
    players: [
      { name: 'Dalian Bryan' },
      { name: 'Tim Heston' },
      { name: 'Robert Lurie' },
    ],
  },
  {
    name: 'Tuba',
    players: [{ name: 'Gabe Murray' }],
  },
  {
    name: 'Timpani',
    players: [{ name: 'Mollie Beavers', role: 'member' }],
  },
]
