// ===========================================================================
// THE PROGRAM — the works performed, in concert order.
// Each { ... } is one work. Add { intermission: true } where the break goes.
// `date` is when the piece was written (a year, or a span like '1804–1808').
// `programNote` is a short note shown under the Welcome. Delete the line (or
// leave it empty) to skip a piece. Optional `programNoteLink` adds a link
// after the note.
// ===========================================================================

export const program = [
  {
    composer: 'Emil Nikolaus von Reznicek',
    title: 'Donna Diana Overture',
    programNote:
      'Emil Nikolaus von Reznicek was a prolific and well regarded composer of his time, but most of his works are rarely performed — excepting this overture. As composed, this piece opens Reznicek’s comedic opera, Donna Diana. The story centers around Don Cesar, the prince of Urgel, who is in love with the princess of Barcelona, Diana. Diana has responded to his affections coldly. At the urging of the clown, Perrin, Cesar himself decides to give her the cold shoulder. Shenanigans ensue, but the opera does end with Cesar and Diana living happily ever after.',
    date: '1894',
    movements: [],
    note: 'Bowen Hoadley, Associate Conductor Finalist',
  },
  {
    composer: 'Jocelyn Rowland Khalaf',
    title: 'Memories from the Old World',
    programNote:
      'Jocelyn Rowland Khalaf composed this piece when returning from a trip with her student honors orchestra to Prague where she was inspired by many of the great musicians and composers of the old world (some of whom you will hear this evening!). This piece honors the inspiration of the music she listened to with her father as a child (Dvořák, Tchaikovsky, Rachmaninoff, and more) through the lens of her own memory.',
    programNoteLink: {
      label: 'Learn more about Khalaf and the piece',
      url: 'https://online.berklee.edu/takenote/how-classical-runaway-jocelyn-rowland-khalaf-found-her-way-back-to-composing/',
    },
    date: '2024',
    note: '2026 APO Composition Competition Winner',
    movements: [],
  },
  {
    composer: 'Johannes Brahms',
    title: 'Academic Festival Overture, Op. 80',
    programNote:
      'Brahms composed this piece as a gesture of gratitude to the University of Breslau for awarding him an honorary doctoral degree. To honor the “academic” nature of the assignment, Brahms composed the piece as “a boisterous potpourri of student drinking songs.” Brahms, ever a comedian, conducted the premiere of this intentionally lighthearted composition of drinking songs for the university during the very serious ceremony in his honor.',
    date: '1881',
    movements: [],
  },
  { intermission: true },
  {
    composer: 'Ludwig van Beethoven',
    title: 'Symphony No. 5 in C minor, Op. 67',
    programNote:
      'Perhaps the most famous symphony ever composed, you will recognize this piece as soon as you hear the opening motif, often interpreted as “fate knocking on the door.” Beethoven wrote this piece during a tumultuous period of history that included the Napoleonic Wars while he himself was coming to terms with his worsening deafness. This motif of fate reappears throughout all four movements of the piece as an unavoidable fact of life, in much the same way that one might imagine Beethoven experienced his deafness and troubles at the time.',
    date: '1804–1808',
    movements: [
      'I. Allegro con brio',
      'II. Andante con moto',
      'III. Scherzo: Allegro',
      'IV. Allegro - Presto',
    ],
  },
]
