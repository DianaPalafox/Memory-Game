import { useState } from 'react';
import './App.css';
import Information from './components/Information';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';

function App() {
  const [cards, setCards] = useState([
    {id: 1, src:'./img/img1.jpg'}, {id: 2, src:'./img/img2.jpg'}, {id: 3, src:'./img/img3.jpg'}, {id: 4, src:'./img/img4.jpg'},
    {id: 5, src:'./img/img5.jpg'}, {id: 6, src:'./img/img6.jpg'}, {id: 7, src:'./img/img7.jpg'}, {id: 8, src:'./img/img8.jpg'},
    {id: 9, src:'./img/img9.jpg'}, {id: 10, src:'./img/img10.jpg'}, {id: 11, src:'./img/img11.jpg'}, {id: 12, src:'./img/img12.jpg'}
  ])

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [id, setId] = useState([])


  const handleClick = (e) => {
    const shuffle = [...cards];
    shuffle.sort((a, b) => 0.5 - Math.random());
    setId([...id, e.target.id])
    setCards(shuffle)

    if(id.includes(e.target.id)) {
      if(score > bestScore) {
        setBestScore(score)
      }
      setScore(0)
      setId([])
    } else {
      setScore(score + 1)
    }
    
  }


  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Information />
      <Scoreboard score={score} bestScore={bestScore}/>
      <Cards cards={cards} onClick={(e) => handleClick(e)}/>
    </div>
  );
}

export default App;
