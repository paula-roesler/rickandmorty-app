import { useState, useEffect } from 'react'
import './App.css'
import '../../global.css'
import Card from '../Card'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getAllCharacters() // no url provided, so the default parameter is used
  }, [])

  // url has a default value that is used in the useEffect() above
  function getAllCharacters(url = 'https://rickandmortyapi.com/api/character') {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // data is this object: {info: ..., results: ...}

        // https://reactjs.org/docs/hooks-reference.html#functional-updates
        setCharacters(oldState => [...oldState, ...data.results])

        const nextUrl = data.info.next // contains the next url, if it exists
        nextUrl && getAllCharacters(nextUrl) // if nextUrl exists, fetch it
      })
  }

  return (
    <div className="App">
      {characters.map(
        ({
          name,
          species,
          gender,
          status,
          origin,
          location,
          buttonText,
          image,
          id,
        }) => (
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
      )}
    </div>
  )
}

export default App
