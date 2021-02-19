import './App.css'
import '../../global.css'
import Header from '../Header'
import CharactersPage from '../CharactersPage'
import Navigation from '../Navigation'

function App() {
  return (
    <div className="App">
      <Header title="Rick & Morty" />
      <main>
        <CharactersPage />
      </main>
      <Navigation title="Navigation" />
    </div>
  )
}

export default App
