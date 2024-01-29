import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectsGallery from './pages/ProjectsGallery';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import React from 'react';
import './styles/style.css'

function App() {
  return <div className="page"><Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects-gallery" element={<ProjectsGallery />} />
      <Route path="/project-details/:id" element={<ProjectDetails />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  </div>
}

export default App
