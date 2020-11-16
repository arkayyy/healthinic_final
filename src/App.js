import React from "react";
import "./App.css";
import NavBar from "./Header1";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import EvaluatePage from "./EvaluatePage";
import Footer from "./Footer";
import LoginPage from "./LoginPage";
import ContactUs from "./ContactUs";
import Signup from "./Signup"

import Trial3 from "./trial3"
import Result from "./Result"
import trial4 from "./trial4"
import Presignup from './presignup'
import Header from './Header2'



function App() {
  
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/evaluate" exact component={EvaluatePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/contact" exact component={ContactUs}/>
          <Route path="/res" exact component={Result}/>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/trial" exact component={Trial3}/>
          <Route path="/trial4" exact component={Presignup}/>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
