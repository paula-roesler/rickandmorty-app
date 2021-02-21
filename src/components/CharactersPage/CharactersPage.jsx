import { useState, useEffect } from 'react'
import Card from '../Card'
import './CharactersPage.css'

export default function CharactersPage() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getAllCharacters()
  }, [])

  function getAllCharacters(url = 'https://rickandmortyapi.com/api/character') {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(oldState => [...oldState, ...data.results])

        const nextUrl = data.info.next
        nextUrl && getAllCharacters(nextUrl)
      })
  }

  return (
    <>
      {characters.map(
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
      )}
    </>
  )
}
