import React, { Component } from 'react';
import './signin.css'
// class SignIn extends Component {
    const SignIn = () => {
    // render() {
        return (
            <div className="page">
                <img className="logo-img" src="images/trans.png" alt="transact-logo" />

                <p1>Welcome to Transact Estate Managing Service!</p1>
                <div className="sign-in">
                    <p2>Please sign in here!</p2>
                    <button className="btn"> Sign In</button>
                </div>
                <div className="footer">
                </div>
            </div>
        );
    // }
};

export default SignIn;