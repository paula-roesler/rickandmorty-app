import './AboutPage.css'

export default function AboutPage({ show, hide }) {
  function show() {
    AboutPage.hidden = false
  }

  function hide() {
    AboutPage.hidden = true
  }

  return (
    <section className="AboutPage">
      <h1>About Page</h1>
    </section>
  )
}
