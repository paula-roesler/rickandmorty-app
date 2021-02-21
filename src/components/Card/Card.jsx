import './Card.css'
import { useState } from 'react'

export default function Card({
  name,
  species,
  gender,
  status,
  origin,
  location,
  image,
}) {
  const [isCardDetailsVisible, setIsCardDetailsVisible] = useState(false)

  return (
    <>
      <section className="Card">
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
        <div className="Card__details" hidden={!isCardDetailsVisible}>
          <img src={image} alt="" className="Card__profilePic" />
          <ul className="Card__detailsList">
            <li>Species: {species === 'Human' ? '😎' : '👽'}</li>
            <li>Gender: {gender}</li>
            <li>Status: {status}</li>
            <li>Origin: {origin}</li>
            <li>Location: {location}</li>
          </ul>
        </div>
      </section>
    </>
  )
}
