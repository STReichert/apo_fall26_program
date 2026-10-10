// HERO — the big header at the top of the page.
//
// <picture> lets the BROWSER pick the best image for the screen:
//   portrait screens (phones) get the tall social graphic,
//   everything else gets the wide website banner.
// Because the graphic already contains the title and date as pixels, the
// real <h1> is "visually hidden" — invisible on screen, but still read by
// screen readers and search engines.
import { concert } from '../content/concert.js'
import './Hero.css'

export default function Hero() {
  const { images } = concert

  return (
    <header className="hero">
      <h1 className="visually-hidden">
        {concert.title} — Atlanta Philharmonic Orchestra
      </h1>

      <picture>
        <source media="(orientation: portrait)" srcSet={images.heroTall} />
        <img className="hero__image" src={images.heroWide} alt={images.heroAlt} />
      </picture>

      <div className="hero__details">
        <div className="container hero__details-inner">
          <p>
            <strong>{concert.date}</strong> · {concert.time}
          </p>
          <p>
            {concert.venue}
            <span className="hero__address"> · {concert.address}</span>
          </p>
        </div>
      </div>
    </header>
  )
}
