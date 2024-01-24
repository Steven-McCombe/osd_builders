import React, {Component} from "react";
import {Link} from 'react-router-dom'
import ProductImg2 from '../../../images/shop/p1.jpg';
import ProductImg3 from '../../../images/shop/p2.jpg';
import ProductImg4 from '../../../images/shop/p3.jpg';
import ProductImg5 from '../../../images/shop/p4.jpg';
import Grid from "@material-ui/core/Grid";

class RelatedProduct extends Component {
    render() {
        return (
            <section className="related-products-wrapper mb-80">
                <Grid container spacing={2} className="websitePadding">
                    <Grid item xs={12}><h2>Related products </h2></Grid>
                    <Grid item sm={6} md={3} xs={12} className="">
                        <Grid className="single-product-item">
                            <Grid className="product_thumb">
                                <img src={ProductImg2} alt=""/>
                                <a href="javascript:">Add to Cart</a>
                            </Grid>
                            <h4><Link to="/singleproduct">Brush</Link></h4>
                            <span>$12.00</span>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} className="">
                        <Grid className="single-product-item">
                            <Grid className="product_thumb">
                                <img src={ProductImg3} alt=""/>
                                <a href="javascript:">Add to Cart</a>
                            </Grid>
                            <h4><Link to="/singleproduct">Nailer</Link></h4>
                            <span>$12.00</span>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} className="">
                        <Grid className="single-product-item">
                            <Grid className="product_thumb">
                                <img src={ProductImg4} alt=""/>
                                <a href="javascript:">Add to Cart</a>
                            </Grid>
                            <h4><Link to="/singleproduct">Miter</Link></h4>
                            <span>$12.00</span>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} md={3} xs={12} className="">
                        <Grid className="single-product-item">
                            <Grid className="product_thumb">
                                <img src={ProductImg5} alt=""/>
                                <a href="javascript:">Add to Cart</a>
                            </Grid>
                            <h4><Link to="/singleproduct">Power tool</Link></h4>
                            <span>$12.00</span>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default RelatedProduct;