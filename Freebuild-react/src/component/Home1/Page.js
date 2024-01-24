import React, {Component} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import Header from '../Home1/Header';
import HeroSlider from '../Home1/HeroSlider';
import WhatWeDo from '../Home1/WhatWeDo';
import FAQ from '../Home1/FAQ';
import OurService from '../Home1//OurService';
import CallToAction from "../Home1/CallToAction";
import Portfolio from "../Home1/Portfolio";
import Blog from "../Home1/Blog";

class HomePage extends Component{
    render() {
        return(
            <div>
                <Header/>
                <HeroSlider/>
                <WhatWeDo/>
                <FAQ/>
                <OurService/>
                <CallToAction/>
                <Portfolio/>
                <Blog/>
            </div>
        )
    }

}
export default HomePage;