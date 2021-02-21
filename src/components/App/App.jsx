import { useState, useEffect } from 'react'
import './App.css'
import '../../global.css'
import Header from '../Header'
import AboutPage from '../AboutPage'
import CharactersPage from '../CharactersPage'
import LikedPage from '../LikedPage'
import Navigation from '../Navigation'

function App({ titel }) {
  const [currentPage, setCurrentPage] = useState('AboutPage')

  return (
    <div className="App">
      <Header title="Rick & Morty" />
      {/* muss Grid werden*/}
      <main>
        <AboutPage hidden={currentPage !== 'AboutPage'} titel="About" />
        <LikedPage hidden={currentPage !== 'LikedPage'} titel="Liked" />
        <CharactersPage
          hidden={currentPage !== 'CharactersPage'}
          title="Characters"
        />
      </main>
      <Navigation onNavigate={setCurrentPage} />
    </div>
  )
}

export default App
