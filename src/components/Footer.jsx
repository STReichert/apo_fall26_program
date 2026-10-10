// FOOTER — logo, link out to the main website, organization details.
import { concert } from '../content/concert.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img className="footer__logo" src={concert.images.logo} alt="" />
        <a className="button" href={concert.links.website} target="_blank" rel="noopener noreferrer">
          Visit atlantaphilharmonic.org
        </a>
        <p className="footer__small">
          GLBTS Symphony of Atlanta, Inc. dba Atlanta Philharmonic Orchestra
          <br />
          PO Box 2968, Decatur, GA 30031-2968
        </p>
      </div>
    </footer>
  )
}
