import React from 'react';
import './WelCom.css';
import Logo from "./logo/Daltin_Logo_TM (1).png"

const Welcome = ({ onNext }) => (
    <div className="welcome-screen fade-in">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>Welcome to the Student Registration Portal</h1>
        <p></p>
        <button onClick={onNext} className="next-button">Start Registration</button>
    </div>
);

export default Welcome;
