import './Header.css'

export default function Header({ title }) {
  return (
    <header className="Header">
      <h1 className="Header__title">{title}</h1>
    </header>
  )
}
