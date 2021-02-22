import { useState, useEffect } from 'react'
import { ReactComponent as Heart } from '@fortawesome/fontawesome-free/svgs/solid/heart.svg'

import Card from '../Card'
import './CharactersPage.css'

export default function CharactersPage() {
  const heart = <Heart className="Card__detailsLikeButton" />
  const heart_active = <Heart className="Card__detailsLikeButton--active" />

  const [characters, setCharacters] = useState([])
  const [likedCharacters, setLikedCharacters] = useState([])

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

  function likeMe() {
    // onClick={() => likeCharacter(character.id)}>
    //              { likedCharacters.includes(character.id) ? '❤️' : '🤍' }
  }

  function likeCharacter(currentId) {
    let newArray

    if (likedCharacters.includes(currentId)) {
      newArray = likedCharacters.filter(id => id !== currentId)
    } else {
      newArray = [...likedCharacters, currentId]
    }

    setLikedCharacters(newArray)
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
            likeButton={
              likedCharacters.includes(characters.id) ? (
                <Heart className="Card__detailsLikeButton--active" />
              ) : (
                <Heart className="Card__detailsLikeButton" />
              )
            }
          />
        )
      )}
    </>
  )
}
