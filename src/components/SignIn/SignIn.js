import React, { Component } from 'react';
import './signin.css'
class SignIn extends Component {
    render() {
        return (
            <div className="page">
                <div className="block">
                </div>
                <img className="logo-img" src="images/trans.png" alt="transact-logo" />

                <h1>WELCOME TO TRANSACT ESTATE MANAGING SERVICE!</h1>
                <div className="sign-in">
                    <button className="btn"> SignIn</button>
                </div>
                <div className="footer">
                </div>
            </div>
        );
    }
}

export default SignIn;