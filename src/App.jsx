import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/home/Home.jsx';
import MyAC from './pages/myAC/MyAC.jsx';
import MilAC from './pages/milAC/MilAC.jsx';
import Harmon from './pages/harmon/Harmon.jsx';

function App() {
  return (
    <div className="app-container">
      <Header />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-ac" element={<MyAC />} />
          <Route path="/af-ac" element={<MilAC />} />
          <Route path="/harmon" element={<Harmon />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
