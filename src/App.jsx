import { useState } from 'react'
import './global.css'
import './styles/_variables.css'
import Header from './components/Header'
import Grid from './components/Grid'
import AboutPage from './components/AboutPage'
import CharactersPage from './components/CharactersPage'
import LikedPage from './components/LikedPage'
import Navigation from './components/Navigation'

function App({ titel }) {
  const [currentPage, setCurrentPage] = useState('AboutPage')

  return (
    <Grid>
      <Header title="Rick & Morty" />
      <main className="Gird__main">
        <AboutPage hidden={currentPage !== 'AboutPage'} titel="About" />
        <LikedPage hidden={currentPage !== 'LikedPage'} titel="Liked" />
        <CharactersPage
          hidden={currentPage !== 'CharactersPage'}
          title="Characters"
        />
      </main>
      <Navigation onNavigate={setCurrentPage} />
    </Grid>
  )
}

export default App
