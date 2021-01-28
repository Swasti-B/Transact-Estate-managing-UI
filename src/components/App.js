import React, { Component } from "react";
import Navbar from './Navbar/Navbar'
import Home from './Homepage/Home'
import SignIn from './SignIn/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../index.css'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/Home" exact component={Home} />
                        <Route path="/signin" component={SignIn} />
                    </Switch>

                </div>

            </Router>


        );
    }
}

export default App;