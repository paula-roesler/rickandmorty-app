import './App.css'
import './global.css'
import Card from './Card'
import { results } from './rickandmortyapi.json' // { results } ist destructuring assignment von data aus der api; würden wir hier data schreiben (ohne geschweifte Klammern) müssten wir unten data.results.map(...) schreiben

function App() {
  return (
    <div className="App">
      {results.map(
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
