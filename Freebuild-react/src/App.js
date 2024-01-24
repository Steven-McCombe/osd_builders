import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from "./component/Home1/Page";
import HomeTwo from "./component/Home2/HomeTwo";
import Blog from "./component/Home1/Blog";
import Footer from "./component/Home1/Footer";
import HomeThree from "./component/Home3/Home3";
import aboutPage from "./component/About/aboutPage";
import BlogNews from './component/Blog';
import ContactPage from "./component/Contact/ContactPage";
import PortfolioPage from "./component/Portfolio/PortfolioPage";
import OurServicePage from "./component/OurService/OurServicePage";
import ServiceDetailsPage from "./component/SerciceDetails/serviceDetailsPage";
import Shop from "./component/Shop";
import SingleBlogPage from "./component/SingleBlog/SingleBlogPage";
import SinglePortfolio from "./component/SinglePortfolio";
import SingleProductPage from "./component/SingleProduct/SingleProductPage";

let ServicePath = window.location.href;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      siteUrl: window.location.pathname
    }
  }

  handleClick() {
   this.setState({
     siteUrl : window.location.pathname
   });
  }
  render() {
    return (
        <div onClick={this.handleClick.bind(this)} className="App">
          <div className="main-wrapper">
            <Router>
              <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/home-two' component={HomeTwo}/>
                <Route path='/home-three' component={HomeThree}/>
                <Route path='/about' component={aboutPage}/>
                <Route path='/blog' component={BlogNews}/>
                <Route path='/contact' component={ContactPage}/>
                <Route path='/portfolio' component={PortfolioPage}/>
                <Route path='/services' component={OurServicePage}/>
                <Route path='/servicesdetails' component={ServiceDetailsPage}/>
                <Route path='/shop' component={Shop}/>
                <Route path='/singlepost' component={SingleBlogPage}/>
                <Route path='/singleportfolio' component={SinglePortfolio}/>
                <Route path='/singleproduct' component={SingleProductPage}/>
              </Switch>
              <Footer websiteUrl={this.state.siteUrl}/>
            </Router>
          </div>
        </div>
    );
  }
}
export default App;
