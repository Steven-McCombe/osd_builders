import React, {Component} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import HeaderTwo from '../Home2/Header';
import HeroSliderTwo from "./HeroSliderTwo";
import WhatWeDo from "../Home1/WhatWeDo";
import Video from "./Vedio";
import AboutUsTwo from "./AboutUs";
import OurPortfolio from "./OurPortfolio";
import Testimonial from "./Testimonial";
import CallToAction from "../Home2/CallToAction";
import Blog from "../Home1/Blog";

class HomeTwo extends Component{
    render() {
        return(
            <div>
                <HeaderTwo/>
                <HeroSliderTwo/>
                <WhatWeDo/>
                <Video/>
                <AboutUsTwo/>
                <OurPortfolio/>
                <Testimonial/>
                <CallToAction/>
                <Blog/>
            </div>
        )
    }
}
export default HomeTwo;