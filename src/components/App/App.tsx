import React from 'react';
import logo from './logo.svg';
import './App.css';
import { APP_NAME, VERSION } from '../../constants/application';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Starting <code>{APP_NAME}</code> {VERSION}.
        </p>
      </header>
    </div>
  );
}

export default App;
