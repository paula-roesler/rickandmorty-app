import { useState, useEffect } from 'react'
import './App.css'
import '../../global.css'
import Header from '../Header'
import CharactersPage from '../CharactersPage'
import Navigation from '../Navigation'
// import Card from '../Card'

function App() {
  return (
    <div className="App">
      <Header title="Rick & Morty" />
      <main>
        <CharactersPage />
        {/* {characters.map(
        ({ name, species, gender, status, origin, location, image, id }) => (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            status={status}
            origin={origin.name}
            location={location.name}
            buttonText="Show details"
            image={image}
          />
        )
      )} */}
      </main>
      <Navigation title="Navigation" />
    </div>
  )
}

export default App
