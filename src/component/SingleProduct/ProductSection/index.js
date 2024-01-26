import React, {Component} from "react";
import ProductImg1 from '../../../images/shop/single-product.jpg';
import ProductImg2 from '../../../images/shop/p1.jpg';
import ProductImg3 from '../../../images/shop/p2.jpg';
import ProductImg4 from '../../../images/shop/p3.jpg';
import ProductImg5 from '../../../images/shop/p4.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@material-ui/core/Grid";

class ProductSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        return (
            <section className="single-product-wrapper mt-80">
                <Grid container spacing={3} className="websitePadding">
                    <Grid item md={6} xs={12} className="">
                        <Grid className="product-gallery-slide">
                            <Grid className="product-slide tab-content">
                                <Slider
                                    asNavFor={this.state.nav2}
                                    ref={slider => (this.slider1 = slider)}
                                >
                                    <Grid classNameName="single-product-slide tab-pane container active">
                                        <img src={ProductImg1} alt=""/>
                                    </Grid>
                                    <Grid classNameName="single-product-slide tab-pane container ">
                                        <img src={ProductImg1} alt=""/>
                                    </Grid>
                                    <Grid classNameName="single-product-slide tab-pane container">
                                        <img src={ProductImg1} alt=""/>
                                    </Grid>
                                </Slider>
                            </Grid>
                            <ul className="product-slide-nav nav nav-tabs">
                                <Slider
                                    asNavFor={this.state.nav1}
                                    ref={slider => (this.slider2 = slider)}
                                    slidesToShow={3}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                >
                                    <li classNameName="product-thumb nav-item">
                                        <a classNameName="nav-link active" data-toggle="tab">
                                            <img src={ProductImg1} alt=""/>
                                        </a>
                                    </li>
                                    <li classNameName="product-thumb nav-item">
                                        <a classNameName="nav-link" data-toggle="tab">
                                            <img src={ProductImg1} alt=""/>
                                        </a>
                                    </li>
                                    <li classNameName="product-thumb nav-item">
                                        <a classNameName="nav-link" data-toggle="tab">
                                            <img src={ProductImg1} alt=""/>
                                        </a>
                                    </li>
                                </Slider>

                            </ul>
                        </Grid>
                    </Grid>
                    <Grid md={6} xs={12} className="">
                        <Grid className="single-top-product-details">
                            <h1>Electric fret saw</h1>
                            <Grid className="product-rating">
                                <ul>
                                    <li><a href="javascript:"><i className="fas fa-star"></i></a></li>
                                    <li><a href="javascript:"><i className="fas fa-star"></i></a></li>
                                    <li><a href="javascript:"><i className="fas fa-star"></i></a></li>
                                    <li><a href="javascript:"><i className="fas fa-star"></i></a></li>
                                    <li><a href="javascript:"><i className="fas fa-star"></i></a></li>
                                    <span>(2)</span>
                                </ul>
                            </Grid>
                            <Grid className="price">
                                <h3>$12.00</h3>
                            </Grid>
                            <Grid className="product-short-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </Grid>
                            <Grid className="add-to-cart-section">
                                <a href="javascript:" className="add-to-cart-btn theme_btn "><i className="fa fa-cart"></i>ADD
                                    TO CART</a>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default ProductSection;