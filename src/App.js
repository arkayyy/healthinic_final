import React from "react";
import "./App.css";
import NavBar from "./Header1";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import EvaluatePage from "./EvaluatePage";
import Footer from "./Footer";
import LoginPage from "./LoginPage";
import ContactUs from "./ContactUs";
import trial2 from "./trial2";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/evaluate" exact component={EvaluatePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/contact" exact component={ContactUs}/>
          <Route path="/res" exact component={trial2}/>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
