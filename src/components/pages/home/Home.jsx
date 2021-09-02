import React, { Component } from "react";
import AboutBlock from "./AboutBlock";
import LandingPage from "./LandingPage";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <LandingPage />
                <AboutBlock />
            </div>
        );
    }
}

export default Home;
