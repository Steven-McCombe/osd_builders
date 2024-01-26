import React, {Component} from "react";
import Header from "../Home1/Header";
import HeroArea from "./HeroArea";
import AboutFeatured from "./AboutFeatured";
import FAQ from "../Home1/FAQ";
import Testimonial from "../Home2/Testimonial";

class aboutPage extends Component{
    render() {
        return(
            <div>
                <Header/>
                <HeroArea slug="WHO WE ARE" title="About Us"/>
                <AboutFeatured/>
                <FAQ/>
                <Testimonial/>
            </div>
        )
    }
}
export default aboutPage;