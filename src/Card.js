import './Card.css'

export default function Card({ name, species, gender, status, image }) {
  return (
    <section className="Card">
      <h1 className="Card__title">{name}</h1>
      <ul className="Card__details">
        <li>Species: {species === 'Human' ? '😎' : '👽'}</li>
        <li>Gender: {gender}</li>
        <li>Status: {status}</li>
      </ul>
      <img src={image} alt="" />
    </section>
  )
}
