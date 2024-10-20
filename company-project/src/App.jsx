import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import Careers from './Pages/Career';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './Pages/Loginfrom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} /> 
        <Route path="/LoginForm" element={<LoginForm />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
