import React, { Component } from "react";
import AboutBlock from "./AboutBlock";
import LandingPage from "./LandingPage";
import BigSale from "./BigSale";
import NewTitles from "./NewTitles";
import BigTitle from "./BigTitle";
import AgentOf from "./AgentOf";
import TheBlog from "./TheBlog";
import { homeService } from "../../../services/HomeService";

class Home extends Component {
    state = {
        books: [],
        featured: [],
        partners: [],
        saleBooks: [],
    };
    async componentDidMount() {
        const { success, data } = await homeService.getHomeData();

        if (!success) return;

        this.setState({
            books: data.books,
            featured: data.featured,
            partners: data.partners,
            saleBooks: data.saleBooks,
        });
    }

    render() {
        const { books, featured, partners, saleBooks } = this.state;
        return (
            <div className="home">
                <LandingPage />
                <AboutBlock />
                <BigSale />
                <NewTitles title="New Title" data={books} />
                <BigTitle />
                <AgentOf />
                <TheBlog />
            </div>
        );
    }
}

export default Home;
