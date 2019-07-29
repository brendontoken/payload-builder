import React from 'react';
import './App.css';

import TryButton from './components/TryButton';
import PayloadTransformer from './components/PayloadTransformer';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <TryButton />
        <PayloadTransformer />
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
