import { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());
    
    useEffect(() => {
      const intervalId = setInterval(() => {
        setDate(new Date());
      }, 1000)

      return () => clearInterval(intervalId);
    }, [])

    return (
      <p className='clock'>
        {date.toLocaleTimeString()}
      </p>
    );
}

const App = () => {
  const [name, setName] = useState("");

  const clockIn = async (e) => {
  e.preventDefault();

  const payload = {
    name,
    action: "Clock In",
    time: new Date().toLocaleString(),
  }

  await fetch (
    "https://script.google.com/macros/s/AKfycby3L65Kw9Fa0TcakeIa4oEu7uslOi3_Gh_Bsj44yJr3CETp1sD9nt_drN3f4xeKRfJ-tg/exec", {
      method: "POST",
      body: JSON.stringify(payload),
    }
  );

  console.log("Clocked in!");
  alert(`Clocked in!`);
  };

  const clockOut = async (e) => {
    e.preventDefault();

    const payload = {
    name,
    action: "Clock Out",
    time: new Date().toLocaleString(),
    }

    await fetch (
      "https://script.google.com/macros/s/AKfycby3L65Kw9Fa0TcakeIa4oEu7uslOi3_Gh_Bsj44yJr3CETp1sD9nt_drN3f4xeKRfJ-tg/exec", {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    console.log("Clocked out!")
    alert(`Clocked out`);
  };

  return (
    <div className="clockDiv">
      <h1 className="clockTitle">Time Clock</h1>
      <form>
        <label htmlFor="nameInput" className="nameInputLbl">Name:</label>
        <input id="nameInput" className="nameInputLbl" value={name} onChange={ (e) => setName(e.target.value)}/><br />
        <button className="clockInBtn" onClick={clockIn}>Clock In</button>
        <button className="clockOutBtn" onClick={clockOut}>Clock Out</button>
      </form>
      <Clock />
    </div>
  )
}

export default App;