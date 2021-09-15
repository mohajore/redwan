import React, { Component } from "react";
import AboutBlock from "./AboutBlock";
import LandingPage from "./LandingPage";
import BigSale from "./BigSale";
import NewTitles from "./NewTitles";
import BigTitle from "./BigTitle";
import AgentOf from "./AgentOf";
import TheBlog from "./TheBlog";
import { homeService } from "../../../services/HomeService";
import MainLoader from "../../blocks/MainLoader";

class Home extends Component {
    state = {
        books: [],
        featured: [],
        partners: [],
        saleBooks: [],
        blogs: [],
        about: "",
        pageLoader: true,
    };
    componentDidMount() {
        this.getHomeData();
    }
    getHomeData = async () => {
        const { success, data } = await homeService.getHomeData();

        if (!success) return;

        this.setState({
            books: data.books,
            about: data.about,
            featured: data.featured,
            partners: data.partners,
            saleBooks: data.saleBooks,
            blogs: data.blogs,
            pageLoader: false,
        });
    };

    render() {
        const { books, featured, partners, saleBooks, about, pageLoader, blogs } = this.state;
        return pageLoader ? (
            <MainLoader />
        ) : (
            <div className="home">
                <LandingPage data={featured} />
                <AboutBlock data={about} />
                <BigSale data={saleBooks} getHomeData={() => this.getHomeData()} />
                <NewTitles title="New Title" data={books} reFetchData={() => this.getHomeData()} />
                <BigTitle data={saleBooks[2]} />
                <AgentOf />
                <TheBlog data={blogs} />
            </div>
        );
    }
}

export default Home;
