// ===========================================================================
// BIOGRAPHIES — conductors and composer.
// `photo` is an imported image, or null to show initials instead.
// The first paragraph always shows; the rest hide behind "Read more".
// ===========================================================================
import composerPhoto from '../assets/images/composer.jpg'

export const bios = [
  {
    name: '[Conductor Name]',
    role: 'Music Director & Conductor',
    photo: null,
    paragraphs: [
      '[First paragraph: current role with APO, years with the orchestra, headline credits.]',
      '[More: training, other ensembles, awards, community work.]',
    ],
  },
  {
    name: '[Guest Conductor Name]',
    role: 'Guest Conductor',
    photo: null,
    paragraphs: ['[First paragraph of guest conductor bio.]', '[Additional paragraphs.]'],
  },
  {
    name: '[Composer Name]',
    role: 'Composer',
    photo: composerPhoto,
    paragraphs: [
      '[First paragraph: who they are and how tonight’s piece came to APO.]',
      '[More: commissions, recordings, education.]',
    ],
  },
]
