import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sketch from './Sketch';
import Home from './Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sketch" element={<Sketch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
