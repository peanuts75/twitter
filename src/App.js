import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Main from './Main'
import Recommended from './Recommended'

function App() {
  return (
    <div className="App">
      <div className="flexcontainer">
        <Navbar />
        <Main />
        <Recommended />
      </div>
    </div>
  );
}

export default App;
