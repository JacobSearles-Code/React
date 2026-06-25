import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useNavigate, Navigate } from 'react-router-dom';

import LoginForm from './pages/LoginForm.jsx';
import ClockTime from './pages/timeclock.jsx';

const App = () => {
  const [logStatus, setLogStatus] = useState(false);

  const handleLog = () => {
      setLogStatus(false);    
  }

  return (
    <HashRouter>
      <header>
        <h1 className="compName">Bright Path Employee Portal</h1>
        <nav className="navBar"> 
          <Link className='navItem' to="/" onClick={handleLog}>{logStatus ? "Log out" : "Log in"}</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<LoginForm setLogStatus={setLogStatus} />} />
        <Route path="/React/clock" element={ logStatus? <ClockTime />: <Navigate to="/" replace /> } />
      </Routes>
    </HashRouter>
  )
}

export default App;