import { useState, useEffect } from 'react'
import './App.css'
import '../../global.css'
import Header from '../Header'
import Grid from '../Grid'
import AboutPage from '../AboutPage'
import CharactersPage from '../CharactersPage'
import LikedPage from '../LikedPage'
import Navigation from '../Navigation'

function App({ titel }) {
  const [currentPage, setCurrentPage] = useState('AboutPage')

  return (
    <Grid>
      <Header title="Rick & Morty" />
      <main>
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
