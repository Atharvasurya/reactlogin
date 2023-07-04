import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [reset, setreset] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="list-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" required/>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Enter your email" id="email" name="email" required/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your pasword" id="password" name="password" required/>
            <label htmlForm="reset">Confirm password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Confirm your password" id="password-reset" name="password" required/>
            <button type="submit">Login</button>
        </form>
        <button className="red-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}