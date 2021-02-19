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
