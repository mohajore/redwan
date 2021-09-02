import React, { Component } from "react";
import AboutBlock from "./AboutBlock";
import LandingPage from "./LandingPage";
import BigSale from "./BigSale";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <LandingPage />
                <AboutBlock />
                <BigSale />
            </div>
        );
    }
}

export default Home;
