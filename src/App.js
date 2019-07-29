import React from 'react';
import './App.css';

import JsonInput from './components/JsonInput';
import TryButton from './components/TryButton';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TryButton />
        <JsonInput />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
