import './Card.css'
import { useState } from 'react' // { useState } ist eine Abkürzung für React.useState, siehe weiter unten

export default function Card({
  name,
  species,
  gender,
  status,
  origin,
  location,
  image,
}) {
  const [isCardDetailsVisible, setIsCardDetailsVisible] = useState(false) // siehe Kommentar oben Z 2

  return (
    <>
      <section className="Card">
        <div className="Card__header">
          <h1 className="Card__title">{name}</h1>
          <button
            className="Card__detailsButton"
            onClick={event => {
              event.stopPropagation()
              setIsCardDetailsVisible(!isCardDetailsVisible)
            }}
          >
            {!isCardDetailsVisible ? 'Show details' : 'Hide details'}
          </button>
          <ul hidden={!isCardDetailsVisible} className="Card__details">
            <li>Species: {species === 'Human' ? '😎' : '👽'}</li>
            <li>Gender: {gender}</li>
            <li>Status: {status}</li>
            <li>Origin: {origin}</li>
            <li>Location: {location}</li>
          </ul>
        </div>
        <img src={image} alt="" className="Card__profilePic" />
      </section>
    </>
  )
}
