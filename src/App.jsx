import { BrowserRouter, Link, Route, Switch, withRouter } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter basename="/">
                {/* <Header /> */}
                {/* <Switch>
              <Route component={Home} path="/" exact />
          </Switch>
          <Footer /> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
