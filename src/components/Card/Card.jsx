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
          <dl className="Card__detailsList">
            <dt>Species:</dt>
            <dd>{species}</dd>
            <dt>Gender:</dt>
            <dd>{gender}</dd>
            <dt>Status:</dt>
            <dd>{status}</dd>
            <dt>Origin:</dt>
            <dd>{origin}</dd>
            <dt>Location:</dt>
            <dd>{location}</dd>
          </dl>
        </div>
      </section>
    </>
  )
}
