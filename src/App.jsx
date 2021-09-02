import { BrowserRouter, Link, Route, Switch, withRouter } from "react-router-dom";
import "./assets/style/main.scss";
import Header from "./components/blocks/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/home/Home";
function App() {
    return (
        <div className="App">
            <BrowserRouter basename="/">
                <Header />
                <Switch>
                    <Route component={Home} path="/" exact />
                </Switch>
                {/* <Footer /> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
