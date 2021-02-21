import { useState, useEffect } from 'react'
import '../../global.css'
import './App.css'
import Grid from '../Grid'
import Header from '../Header'
import CharactersPage from '../CharactersPage'
import Navigation from '../Navigation'
// import Card from '../Card'

function App() {
  return (
    <Grid>
      <Header title="Rick & Morty" />
      <main>
        <CharactersPage />
      </main>
      <Navigation title="Navigation" />
    </Grid>
  )
}

export default App
