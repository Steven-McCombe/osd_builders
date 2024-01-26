import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import Portfolio1 from '../../../images/portfolio/p1.jpg';
import Portfolio2 from '../../../images/portfolio/p2.jpg';
import Portfolio3 from '../../../images/portfolio/p3.jpg';
import Portfolio4 from '../../../images/portfolio/p4.jpg';
import SliderImage1 from "../../../images/slide/s1.jpg";
import {Link} from "react-router-dom";
import SinglePortfolio from "../../SinglePortfolio";

class Portfolio extends Component{
    render() {
        const settings = {
            dots: false,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return(

            <Grid>
                <Slider {...settings}>
                    <section className="our-portfolio portfolio-carosuel-wrap" id="portfolio">
                        <Grid className="portfolio-carousel-items owl-carousel">
                            <Grid className="single-portofolio bg-cover text-white"
                                 style={{ backgroundImage: `url(${Portfolio1})` }}>
                                <Grid className="portfolio-content">
                                    <h3>Working in new case</h3>
                                    <p>Excepteur sint occ aecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                                    <Grid className="portfolio-cat">
                                        <span>Building</span>
                                    </Grid>
                                    <Link to="/SinglePortfolio" className="read-more-port">READ MORE <i
                                        className="fas fa-arrow-right"></i></Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </section>
                    <section className="our-portfolio portfolio-carosuel-wrap" id="portfolio">
                        <Grid className="portfolio-carousel-items owl-carousel">
                            <Grid className="single-portofolio bg-cover text-white"
                                 style={{ backgroundImage: `url(${Portfolio2})` }}>
                                <Grid className="portfolio-content">
                                    <h3>Working in new case</h3>
                                    <p>Excepteur sint occ aecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                                    <Grid className="portfolio-cat">
                                        <span>Building</span>
                                    </Grid>
                                    <Link to="/SinglePortfolio" className="read-more-port">READ MORE <i
                                        className="fas fa-arrow-right"></i></Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </section>
                    <section className="our-portfolio portfolio-carosuel-wrap" id="portfolio">
                        <Grid className="portfolio-carousel-items owl-carousel">
                            <Grid className="single-portofolio bg-cover text-white"
                                 style={{ backgroundImage: `url(${Portfolio3})` }}>
                                <Grid className="portfolio-content">
                                    <h3>Working in new case</h3>
                                    <p>Excepteur sint occ aecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                                    <Grid className="portfolio-cat">
                                        <span>Building</span>
                                    </Grid>
                                    <Link to="/SinglePortfolio" className="read-more-port">READ MORE <i
                                        className="fas fa-arrow-right"></i></Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </section>
                    <section className="our-portfolio portfolio-carosuel-wrap" id="portfolio">
                        <Grid className="portfolio-carousel-items owl-carousel">
                            <Grid className="single-portofolio bg-cover text-white"
                                 style={{ backgroundImage: `url(${Portfolio4})` }}>
                                <Grid className="portfolio-content">
                                    <h3>Working in new case</h3>
                                    <p>Excepteur sint occ aecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                                    <Grid className="portfolio-cat">
                                        <span>Building</span>
                                    </Grid>
                                    <Link to="/SinglePortfolio" className="read-more-port">READ MORE <i
                                        className="fas fa-arrow-right"></i></Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </section>
                    <section className="our-portfolio portfolio-carosuel-wrap" id="portfolio">
                        <Grid className="portfolio-carousel-items owl-carousel">
                            <Grid className="single-portofolio bg-cover text-white"
                                 style={{ backgroundImage: `url(${Portfolio2})` }}>
                                <Grid className="portfolio-content">
                                    <h3>Working in new case</h3>
                                    <p>Excepteur sint occ aecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                                    <Grid className="portfolio-cat">
                                        <span>Building</span>
                                    </Grid>
                                    <Link to="/SinglePortfolio" className="read-more-port">READ MORE <i
                                        className="fas fa-arrow-right"></i></Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </section>
                    <section className="our-portfolio portfolio-carosuel-wrap" id="portfolio">
                        <Grid className="portfolio-carousel-items owl-carousel">
                            <Grid className="single-portofolio bg-cover text-white"
                                 style={{ backgroundImage: `url(${Portfolio1})` }}>
                                <Grid className="portfolio-content">
                                    <h3>Working in new case</h3>
                                    <p>Excepteur sint occ aecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                                    <Grid className="portfolio-cat">
                                        <span>Building</span>
                                    </Grid>
                                    <Link to="/SinglePortfolio" className="read-more-port">READ MORE <i
                                        className="fas fa-arrow-right"></i></Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </section>
                </Slider>
            </Grid>


        )
    }
}
export default Portfolio;