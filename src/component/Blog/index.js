import React, {Component} from "react";
import HeroArea from "../About/HeroArea";
import Header from "../Home1/Header";
import BlogGid from "./BlogGrid";


class Blog extends Component{
    render() {
        return(
            <div>
            <Header/>
            <HeroArea slug='OUR BLOG' title='Blog Standard'/>
            <BlogGid/>
            </div>
        )
    }
}
export default Blog;