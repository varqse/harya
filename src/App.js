import React, { useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./components/Profile";
import Content from "./components/Content";
import Gallery from "./pages/Gallery";
import Makroholic from "./pages/Makroholic";
import MotionAndEmotion from "./pages/MotionAndEmotion";
import UltimateDrivingMachine from "./pages/UltimateDrivingMachine";

function App() {
  const contentRef = useRef(null);

  const handleNavigation = (id) => {
    if (contentRef.current) {
      contentRef.current.scrollToSection(id);
    }
  };

  return (
    <Router>
      <Routes>
        {/* Rute utama dengan layout penuh */}
        <Route path="/" element={
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-md-none">
                <div className="scrollable-container">
                  <Profile />
                  <Content />
                </div>
              </div>

              <div className="col-md-4 d-none d-md-block side-panel">
                <Profile onNavigate={handleNavigation} />
              </div>

              <div className="col-md-8 col-12 scrollable-content d-none d-md-block">
                <Content ref={contentRef} />
              </div>
            </div>
          </div>
        } />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/Makroholic" element={<Makroholic />} />
        <Route path="/gallery/MotionAndEmotion" element={<MotionAndEmotion />} />
        <Route path="/gallery/UltimateDrivingMachine" element={<UltimateDrivingMachine />} />
      </Routes>
    </Router>
  );
}

export default App;

