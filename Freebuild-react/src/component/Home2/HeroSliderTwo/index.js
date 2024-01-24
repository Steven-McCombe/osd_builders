import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage1 from '../../../images/slide/s1.jpg';
import SliderImage2 from '../../../images/slide/slide1.jpg';

class HeroSliderTwo extends Component {
    render() {
        var settings = {
            dots: false,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <section className="hero-slider-area slider-home-two">
                    <Grid className="hero-slide-active owl-carousel">
                        <Grid
                            className="single-hero-slide bg-cover bg-center text-white dark-overlay d-flex align-items-center"
                            style={{backgroundImage: `url(${SliderImage1})`}}>
                            <Grid container spacing={3} className="websitePadding sLider2-grid-item">
                                <Grid item md={11} lg={10} sm={12} xs={12} className="wow fadeInUp"
                                      data-wow-duration="2s">
                                    <span>Construction group</span>
                                    <h2>The only constant in the <br/>technology industry is change</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br/>eiusmod
                                        tempor incididunt ut labore</p>
                                    <a href="javascript:" className="theme_btn get_start">Get details</a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </section>

                <section className="hero-slider-area slider-home-two">
                    <Grid className="hero-slide-active owl-carousel">
                        <Grid
                            className="single-hero-slide bg-cover bg-center text-white dark-overlay d-flex align-items-center"
                            style={{backgroundImage: `url(${SliderImage2})`}}>
                            <Grid container spacing={3} className="websitePadding sLider2-grid-item">
                                <Grid item md={11} sm={12} lg={10} xs={12} className="wow fadeInUp"
                                      data-wow-duration="2s">
                                    <span>Construction group</span>
                                    <h2>The only constant in the <br/>technology industry is change</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br/>eiusmod
                                        tempor incididunt ut labore</p>
                                    <a href="javascript:" className="theme_btn get_start">Get details</a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </section>

                <section className="hero-slider-area slider-home-two">
                    <Grid className="hero-slide-active owl-carousel">
                        <Grid
                            className="single-hero-slide bg-cover bg-center text-white dark-overlay d-flex align-items-center"
                            style={{backgroundImage: `url(${SliderImage1})`}}>
                            <Grid container spacing={3} className="websitePadding sLider2-grid-item">
                                <Grid item md={11} sm={12} lg={10} xs={12} className="wow fadeInUp" data-wow-duration="2s">
                                    <span>Construction group</span>
                                    <h2>The only constant in the <br/>technology industry is change</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br/>eiusmod
                                        tempor incididunt ut labore</p>
                                    <a href="javascript:" className="theme_btn get_start">Get details</a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </section>
            </Slider>
        );
    }
}

export default HeroSliderTwo;