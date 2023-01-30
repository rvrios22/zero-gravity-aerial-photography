import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';
import Layout from './pages/Layout';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route index element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
