import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import { Routes, Route } from 'react-router-dom';
import About from './about';
import Home from './home';
import Contact from './contact';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
