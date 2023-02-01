import { useState } from 'react';
import './App.css';
import Information from './components/Information';
import Scoreboard from './components/Scoreboard';
import CardShow from './components/CardsShow';

function App() {
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Information />
      <Scoreboard />
      <CardShow />
    </div>
  );
}

export default App;
