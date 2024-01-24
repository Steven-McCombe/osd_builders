import React, {Component} from "react";
import Header from "../Home1/Header";
import HeroArea from "../About/HeroArea";
import ProductSection from "./ProductSection";
import ProductDescription from "./ProductDescription";
import RelatedProduct from "./RealtedProduct";

class SingleProductPage extends Component{
    render() {
        return(
            <div>
                <Header/>
                <HeroArea slug='OUR PRODUCT' title="Product Details"/>
                <ProductSection/>
                <ProductDescription/>
                <RelatedProduct/>
            </div>
        )
    }
}
export default SingleProductPage;