import React, { useRef } from 'react';
import './App.css';
import Profile from "./components/Profile";
import Content from "./components/Content";



function App() {
  const contentRef = useRef(null);

  const handleNavigation = (id) => {
    if (contentRef.current) {
      contentRef.current.scrollToSection(id);
    }
  };

  return (
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
  );
}

export default App;
