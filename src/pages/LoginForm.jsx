import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../assets/emps.json";

function LoginForm() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.employees.find(
            (u) => u.name.toLowerCase().trim() === name.toLowerCase().trim() && u.password === password
        );

        if (user) {
            navigate("/React/clock", { state: { user } });
        } else {
            alert("Invalid Login");
        }
    }

    return (
        <form className="outerForm" onSubmit={handleSubmit}>
            <div className="inner-form">
                <h2 className="LogTitle">Login</h2>
                <div className="formGroup">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={ (e) => setName(e.target.value)}/>
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={ (e) => setPassword(e.target.value)}/>
                </div>
                <input type="submit" value="Login" />
            </div>
        </form>
    )
}

export default LoginForm;