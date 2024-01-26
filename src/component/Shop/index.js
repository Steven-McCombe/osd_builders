import React, {Component} from "react";
import {Link} from 'react-router-dom'
import Header from "../Home1/Header";
import HeroArea from "../About/HeroArea";
import ProductImg from '../../images/shop/p1.jpg';
import ProductImg1 from '../../images/shop/p2.jpg';
import ProductImg2 from '../../images/shop/p3.jpg';
import ProductImg3 from '../../images/shop/p4.jpg';
import ProductImg4 from '../../images/shop/p5.jpg';
import ProductImg5 from '../../images/shop/p6.jpg';
import ProductImg6 from '../../images/shop/p7.jpg';
import ProductImg7 from '../../images/shop/p8.jpg';
import ProductImg8 from '../../images/shop/p9.jpg';
import ProductImg9 from '../../images/shop/p10.jpg';
import ProductImg10 from '../../images/shop/p11.jpg';
import Grid from "@material-ui/core/Grid";


class Shop extends Component {
    productItem = [
        {
            id: 1,
            name: 'Brush',
            price: 12,
            image: ProductImg
        }, {
            id: 2,
            name: 'Nailer',
            price: 12,
            image: ProductImg2
        }, {
            id: 3,
            name: 'Miter',
            price: 12,
            image: ProductImg3
        }, {
            id: 4,
            name: 'Power tool',
            price: 12,
            image: ProductImg4
        }, {
            id: 5,
            name: 'Brush',
            price: 12,
            image: ProductImg5
        },
        {
            id: 6,
            name: 'Brush',
            price: 12,
            image: ProductImg6
        },
        {
            id: 7,
            name: 'Nailer',
            price: 12,
            image: ProductImg7
        },
        {
            id: 8,
            name: 'Miter',
            price: 12,
            image: ProductImg8
        },
        {
            id: 9,
            name: 'Power tool',
            price: 12,
            image: ProductImg9
        },
        {
            id: 10,
            name: 'Brush',
            price: 12,
            image: ProductImg10
        },
    ]

    render() {
        return (
            <Grid>
                <Header/>
                <HeroArea slug="PRODUCT" title="Our Shop"/>
                <section className="shop-wrapper product-page-wrapper section-padding">
                    <Grid container spacing={3} className="websitePadding">
                        <Grid item sm={6} xs={12} className="">
                            <Grid className="total-product-info">
                                <span>Showing 1–20 of 75 results </span>
                            </Grid>
                        </Grid>
                        <Grid item sm={6} xs={12} className="text-md-right">
                            <Grid className="sort-filter-wrapper">
                                <form action="javascript:">
                                    <span>Sort by :</span>
                                    <select name="sortproduct" id="productsort">
                                        <option value="de">Default sorting</option>
                                        <option value="de">Price</option>
                                        <option value="de">Best Sale</option>
                                        <option value="de">Offer</option>
                                    </select>
                                </form>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} className="product-container">
                            {this.productItem.map(product => {
                                return (
                                    <Grid key={product.id} item md={3} sm={6} xs={12} className="">
                                        <Grid className="single-product-item">
                                            <Grid className="product_thumb">
                                                <img src={product.image} alt=""/>
                                                <a href="javascript:">Add to Cart</a>
                                            </Grid>
                                            <h4><Link to="/singleproduct">{product.name}</Link></h4>
                                            <span>${product.price}</span>
                                        </Grid>
                                    </Grid>
                                )
                            })}

                        </Grid>

                        <Grid className="pagination text-center">
                            <ul>
                                <li><a href="javascript:">1</a></li>
                                <li><a href="javascript:">2</a></li>
                                <li><a href="javascript:"><i className="fal fa-angle-right"></i></a></li>
                            </ul>
                        </Grid>
                    </Grid>
                </section>
            </Grid>
        )
    }
}

export default Shop;