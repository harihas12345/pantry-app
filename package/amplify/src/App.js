import React from 'react';
import './App.css';
import homeImage from './assets/home.png';

function App() {
  return (
    <div className="App">
      <img src={homeImage} alt="Pantry Home" className="home-image" />
    </div>
  );
}

export default App;
