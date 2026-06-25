import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {setDate(new Date());}, 1000);

    return () => clearInterval(intervalId);}, []);

  return <p className="clock">{date.toLocaleTimeString()}</p>;
}

function ClockTime() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  const [isClockedIn, setIsClockedIn] = useState(false);

  const fetchStatus = async (name) => {
    try {
      const res = await fetch(`https://script.google.com/macros/s/AKfycby3L65Kw9Fa0TcakeIa4oEu7uslOi3_Gh_Bsj44yJr3CETp1sD9nt_drN3f4xeKRfJ-tg/exec?name=${name}`);
      
      const data = await res.json();

      setIsClockedIn(data.lastAction === "Clock In");
    } catch (err) {
      console.error("Status fetch failed", err);
    }
  };

  useEffect(() => {
    if (user?.name) {
      fetchStatus(user.name);
    }
  }, [user]);

  if (!user) {
    return <p>Please log in first.</p>;
    navigate("/React/");
  }

  const handleClock = async (e) => {
    e.preventDefault();

    const action = isClockedIn ? "Clock Out" : "Clock In";

    const payload = {
      name: user.name,
      action,
      time: new Date().toLocaleString(),
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby3L65Kw9Fa0TcakeIa4oEu7uslOi3_Gh_Bsj44yJr3CETp1sD9nt_drN3f4xeKRfJ-tg/exec",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      await fetchStatus(user.name);

      alert(`${action} successful!`);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="clockDiv">
      <h1 className="clockTitle">Time Clock</h1>

      <div>
        <p className="nameInputLbl">
          Welcome {user.name}!
        </p>

        <button type="button" className="clockBtn" onClick={handleClock}>
          {isClockedIn ? "Clock Out" : "Clock In"}
        </button>
      </div>

      <Clock />
    </div>
  );
}

export default ClockTime;