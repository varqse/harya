import React from 'react';
import './App.css';
import Profile from "./components/Profile";
import Content from "./components/Content";



function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Profile untuk Mobile (di atas Content) */}
        <div className="col-12 d-md-none">
          <div className="scrollable-container">
            <Profile />
            <Content />
          </div>
        </div>

        {/* Sisi Kiri - Profile untuk Desktop */}
        <div className="col-md-4 d-none d-md-block side-panel">
          <Profile />
        </div>

        {/* Sisi Kanan - Konten yang bisa di-scroll */}
        <div className="col-md-8 col-12 scrollable-content d-none d-md-block">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
