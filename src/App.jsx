import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LoginForm from './pages/LoginForm.jsx';
import ClockTime from './pages/timeclock.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1 className="compName">Bright Path Employee Portal</h1>
        <nav className="navBar"> 
          <Link to="/React/">Login</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/React/" element={<LoginForm />} />
        <Route path="/clock" element={<ClockTime />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;