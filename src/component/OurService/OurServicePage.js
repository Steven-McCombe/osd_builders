import React, {Component} from "react";
import Header from "../Home1/Header";
import HeroArea from "../About/HeroArea";
import Services from "./Services";
import CallToAction from "../Home2/CallToAction";
import OurService from "../Home1/OurService";
import Testimonial from "../Home2/Testimonial";

class OurServicePage extends Component{
    state ={
        bgColor: '#f2f3f5'
    }
    render() {
        return(
            <div>
                <Header/>
                <HeroArea slug='WHO WE ARE' title='Our Services'/>
                <Services/>
                <CallToAction/>
                <OurService/>
                <Testimonial bgColor={this.state.bgColor}/>
            </div>
        )
    }
}
export default OurServicePage;