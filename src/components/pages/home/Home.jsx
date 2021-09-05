import React, { Component } from "react";
import AboutBlock from "./AboutBlock";
import LandingPage from "./LandingPage";
import BigSale from "./BigSale";
import NewTitles from "./NewTitles";
import BigTitle from "./BigTitle";
import AgentOf from "./AgentOf";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <LandingPage />
                <AboutBlock />
                <BigSale />
                <NewTitles />
                <BigTitle />
                <AgentOf />
            </div>
        );
    }
}

export default Home;
