import logo from './logo.svg';
import './App.css';
import './animations/classes.css'
import { useState } from 'react';

function App() {
  const [ativarClasse, setAtivarClasse] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => setAtivarClasse(!ativarClasse)}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{height: 300, display: 'flex'}}>
        <a
          className={`${ativarClasse ? 'cartaJogadaBottom' : ''} cartaBottom`}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
