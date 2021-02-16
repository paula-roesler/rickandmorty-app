import Card from './Card'
import data from './rickandmortyapi.json'

function App() {

  return (
    <div className="App">
      { data.results.map(item => <Card 
        name={item.name}
        />)}
      
    </div>
  );
}

export default App;
