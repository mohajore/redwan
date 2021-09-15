import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/style/main.scss";
import Header from "./components/blocks/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/home/Home";
import Footer from "./components/blocks/Footer";
import ContactUs from "./components/pages/countactUs/ContactUs";
import Login from "./components/pages/login/Login";
import Favorites from "./components/pages/favorites/Favorites";
import Cart from "./components/pages/cart/Cart";
import AboutPage from "./components/pages/aboutPage/AboutPage";
import SignUp from "./components/pages/signup/Signup";
import Profile from "./components/pages/profile/Profile";
import ProductDetails from "./components/pages/productDetails/ProductDetails";
import MyLocations from "./components/pages/Location/MyLocation";
import MyOrders from "./components/pages/countactUs/MyOrders/MyOrders";
import OrderDetails from "./components/pages/countactUs/MyOrders/OrderDetails";
import Search from "./components/pages/search/Search";
import CategoryPage from "./components/pages/categoryPage/CategoryPage";
function App() {
    return (
        <div className="App">
            <BrowserRouter basename="/">
                <Header />
                <Switch>
                    <Route component={Home} path="/" exact />
                    <Route component={ContactUs} path="/ContactUs" />
                    <Route component={AboutPage} path="/PublicPage/:machineName" />
                    <Route component={Favorites} path="/Favorites" />
                    <Route component={Cart} path="/Cart" />
                    <Route component={ProductDetails} path="/ProductDetails/:id" />
                    <Route component={SignUp} path="/signup" exact />
                    <Route component={Login} path="/Login" />
                    <Route component={Profile} path="/Profile" />
                    <Route component={MyLocations} path="/MyLocations" />
                    <Route component={MyOrders} path="/MyOrders" />
                    <Route component={OrderDetails} path="/OrderDetails" />
                    <Route component={Search} path="/Search/:key" />
                    <Route component={CategoryPage} path="/CategoryPage/:catType/:id" />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
