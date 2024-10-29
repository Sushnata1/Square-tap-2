import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Game from './Game.jsx';
import Home from './Home.jsx'
import GameOver from './components/GameOver.jsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game-over" element={<GameOver />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
