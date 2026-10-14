import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import About from './pages/about';
import Contact from './contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;