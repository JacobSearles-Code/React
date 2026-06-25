import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

import LoginForm from './pages/LoginForm.jsx';
import ClockTime from './pages/timeclock.jsx';

const App = () => {
  return (
    <HashRouter>
      <header>
        <h1 className="compName">Bright Path Employee Portal</h1>
        <nav className="navBar"> 
          <Link to="/">Login</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/React/clock" element={<ClockTime />} />
      </Routes>
    </HashRouter>
  )
}

export default App;