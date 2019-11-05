import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Main from './Main'
import Recommended from './Recommended'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flexcontainer">
          <Navbar />
          <Main />
          <Recommended />
        </div>
      </header>
    </div>
  );
}

export default App;
