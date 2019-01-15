import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SpearHeader from "./components/SpearHeader"
import SpearFooter from "./components/SpearFooter"

import SpearHomePage from "./pages/home"
import SpearBlogPage from "./pages/blog"
import SpearBlogDetailPage from "./pages/blogdetail"
import SpearPeoplePage from "./pages/people"
import SpearContactPage from "./pages/contact"
import SpearInfoPage from "./pages/info"
import SpearSponsorPage from "./pages/sponsor"
import SpearNotFoundPage from "./pages/404"

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tab: 0,
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <SpearHeader/>

          <Switch>
            <Route exact path="/" component={SpearHomePage}/>
            <Route exact path="/blog" component={SpearBlogPage}/>
            <Route exact path="/blog/:id" component={SpearBlogDetailPage}/>
            <Route exact path="/people" component={SpearPeoplePage}/>
            <Route exact path="/contact" component={SpearContactPage}/>
            <Route exact path="/info" component={SpearInfoPage}/>
            <Route exact path="/sponsors" component={SpearSponsorPage}/>
            <Route component={SpearNotFoundPage} />
          </Switch>
          <SpearFooter/>
        </div>
      </Router>
    );
  }
}

export default App
