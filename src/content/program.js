// ===========================================================================
// THE PROGRAM — the works performed, in concert order.
// Each { ... } is one work. Add { intermission: true } where the break goes.
// ===========================================================================

export const program = [
  {
    composer: '[Composer Name]',
    composerDates: '[b. YYYY]',
    title: '[Work Title]',
    movements: [],
    note: '[Optional: premiere, soloist, or guest conductor]',
  },
  {
    composer: '[Composer Name]',
    composerDates: '[YYYY–YYYY]',
    title: '[Work Title, Op. XX]',
    movements: ['[I. Tempo marking]', '[II. Tempo marking]', '[III. Tempo marking]'],
  },
  { intermission: true },
  {
    composer: '[Composer Name]',
    composerDates: '[YYYY–YYYY]',
    title: '[Work Title, Op. XX]',
    movements: [
      '[I. Tempo marking]',
      '[II. Tempo marking]',
      '[III. Tempo marking]',
      '[IV. Tempo marking]',
    ],
  },
]
