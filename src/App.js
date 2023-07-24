import './App.css';
// import Attribute from './components/Attributes/Attribute';
import CharacterCreator from './components/CharacterCreator'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <CharacterCreator />
      </section>
    </div>
  );
}

export default App;
