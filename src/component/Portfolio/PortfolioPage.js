import React, {Component} from "react";
import Header from "../Home1/Header";
import HeroArea from "../About/HeroArea";
import OurPortfolio from "../Home2/OurPortfolio";

class PortfolioPage extends Component{
    render() {
        return(
            <div>
                <Header/>
                <HeroArea slug='RECENT PROJECT SHOWCASE' title='Our Portfolio'/>
                <OurPortfolio/>
            </div>
        )

    }
}
export default PortfolioPage;