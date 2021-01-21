import './App.css';

function App() {
  const name = 'li';
const element = <h1>{name}</h1>;
  return (
    <div className="App">
      <header className="App-header">
        {element}
      </header>
    </div>
  );
}

export default App;
