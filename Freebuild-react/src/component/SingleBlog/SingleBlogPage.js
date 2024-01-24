import React, {Component} from "react";
import Header from "../Home1/Header";
import HeroArea from "../About/HeroArea";
import SinglePost from "./Post";

class SingleBlogPage extends Component{
    render() {
        return(
            <div>
                <Header/>
                <HeroArea slug="OUR BLOG" title="Blog Details"/>
                <SinglePost/>
            </div>
        )
    }
}
export default SingleBlogPage;