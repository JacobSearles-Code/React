import React from "react";

function LoginForm() {
    return (
        <form>
            <div className="inner-form">
                <h2>Login</h2>
                <div className="formGroup">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="Login" />
            </div>
        </form>
    )
}

export default LoginForm;