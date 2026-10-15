import { leadership, sections } from '../content/musicians.js'
import Section from './Section.jsx'
import './Musicians.css'

// What each role in musicians.js looks like on the page.
const roles = {
  concertmaster: { mark: '†', label: 'Concertmaster', lead: true },
  principal: { mark: '*', label: 'Principal', lead: true },
  member: { mark: 'M', label: 'Member', lead: false },
}

// One name in the roster. A small component used only by this file.
function Player({ player }) {
  const role = roles[player.role] // undefined when the player has no role

  return (
    <li className={role && role.lead ? 'player player--lead' : 'player'}>
      {player.name}
      {player.note && <span className="player__note">, {player.note}</span>}
      {role && (
        <>
          <span className="player__mark" aria-hidden="true"> {role.mark}</span>
          <span className="visually-hidden"> ({role.label})</span>
        </>
      )}
    </li>
  )
}

export default function Musicians() {
  // Look up the concertmaster in the roster, so their name is typed only once.
  const concertmaster = sections
    .flatMap((section) => section.players)
    .find((player) => player.role === 'concertmaster')

  const leaders = concertmaster
    ? [...leadership, { title: 'Concertmaster', name: concertmaster.name }]
    : leadership

  return (
    <Section id="musicians" title="Musicians">
      <ul className="leaders">
        {leaders.map((person) => (
          <li key={person.title} className="leaders__item">
            <span className="leaders__name">{person.name}</span>
            <span className="label leaders__title">{person.title}</span>
          </li>
        ))}
      </ul>

      <div className="roster">
        {sections.map((section) => (
          <div key={section.name} className="roster__section">
            <h3 className="label roster__heading">{section.name}</h3>
            <ul className="roster__players">
              {section.players.map((player, i) => (
                <Player key={i} player={player} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="roster__legend" aria-hidden="true">
        {Object.values(roles).map((role) => (
          <span key={role.label}>
            {role.mark} {role.label}
          </span>
        ))}
      </p>
    </Section>
  )
}
