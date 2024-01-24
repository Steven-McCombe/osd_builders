import React, {Component} from "react";
import Header from "../Home1/Header";
import HeroSlider from "../Home1/HeroSlider";
import FeaturedBox from "./FeaturesBox";
import WhatWeDo from "../Home1/WhatWeDo";
import FAQ from "../Home1/FAQ";
import CounterUp from "./Counter";
import CallToAction from "../Home1/CallToAction";
import Portfolio from "../Home1/Portfolio";
import Blog from "../Home1/Blog";

class HomeThree extends Component{
    render() {
        return(
            <div>
                <Header/>
                <HeroSlider/>
                <FeaturedBox/>
                <WhatWeDo/>
                <FAQ/>
                <CounterUp/>
                <CallToAction/>
                <Portfolio/>
                <Blog/>
            </div>
        )
    }
}
export default HomeThree;