// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Netflix from './pages/netflix/Netflix';
import Facebook from './pages/facebook/Facebook';
import Youtube from './pages/youtube/Youtube';

const App = () => {
  return (
    <Router>
      <div>
        <nav className='nav'>
          <ul>
            <li>
              <Link to="/">Netflix</Link>
            </li>
            <li>
              <Link to="/facebook">Facebook</Link>
            </li>
            <li>
              <Link to="/youtube">Youtube</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Netflix />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/youtube" element={<Youtube />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
