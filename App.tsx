
import React from 'react';
// FIX: The previous import method for react-router-dom was causing type issues. Switched to a standard named import to resolve untyped function call errors.
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import HowWeWork from './pages/HowWeWork';
import Impact from './pages/Impact';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import { LanguageProvider } from './i18n/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:projectId" element={<ProjectDetail />} />
            <Route path="methodology" element={<HowWeWork />} />
            <Route path="impact" element={<Impact />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;