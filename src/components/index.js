import React from 'react';
import logo from '../assets/common/svg/logo.svg';

function App() {
  return (
    <div className="App">
        <img src={logo}  alt="logo"/>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
