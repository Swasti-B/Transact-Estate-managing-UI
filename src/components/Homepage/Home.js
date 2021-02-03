import React, { Component } from 'react';

import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div class="container">

                <img class="container_image" src={`${process.env.PUBLIC_URL}/images/trans.png`} />
                <div class="container_text">
        

                </div>



            </div>

        );
    }
}

export default Home;