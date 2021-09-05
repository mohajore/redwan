import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/style/main.scss";
import Header from "./components/blocks/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/home/Home";
import Footer from "./components/blocks/Footer";
import ContactUs from "./components/pages/countactUs/ContactUs";
import AboutPage from "./components/pages/aboutUS/AboutPage";
function App() {
    return (
        <div className="App">
            <BrowserRouter basename="/">
                <Header />
                <Switch>
                    <Route component={Home} path="/" exact />
                    <Route component={ContactUs} path="/ContactUs" exact />
                    <Route component={AboutPage} path="/AboutPage" exact />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
