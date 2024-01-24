import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage1 from '../../../images/slide/s1.jpg';
import SliderManImage1 from '../../../images/man.png';

class HeroSlider extends Component {
    render() {
        var settings = {
            dots: false,
            autoplay: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <section className="hero-slider-area ">
                    <Grid className="hero-slides owl-carousel">
                        <Grid className="single-hero-slide gray-overlay bg-cover bg-top d-flex align-items-center"
                              style={{backgroundImage: `url(${SliderImage1})`}}>
                            <Grid container spacing={3} className="sLider-grid-item customGridwidth websitePadding">
                                <Grid item lg={12} xs={12} md={12} className="customGridwidth">
                                    <span></span>
                                    <h1>Building the Future</h1>
                                    <p>At OSD Builders, we turn architectural dreams into reality. Witness our craftsmanship in our successful projects.</p>
                                    <a href="javascript:" className="theme_btn get_start">Explore our projects</a>
                                </Grid>
                            </Grid>
                            <Grid className="slide-img d-none d-lg-block">
                                <img src={SliderManImage1} alt=""/>
                            </Grid>
                        </Grid>
                    </Grid>
                </section>
                <section className="hero-slider-area">
                    <Grid className="hero-slides owl-carousel">
                        <Grid className="single-hero-slide gray-overlay bg-cover bg-top d-flex align-items-center"
                              style={{backgroundImage: `url(${SliderImage1})`}}>
                            <Grid container spacing={3} className="sLider-grid-item websitePadding">
                                <Grid item lg={12} className="text-center">
                                    <span></span>
                                    <h1>Building Trust, One Project at a Time</h1>
                                    <p>Your satisfaction is our blueprint. Join the multitude of happy clients who chose OSD Builders for their construction needs.</p>
                                    <a href="javascript:" className="theme_btn get_start">Read Client Testimonials</a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </section>
                <section className="hero-slider-area">
                    <Grid className="hero-slides owl-carousel">
                        <Grid className="single-hero-slide gray-overlay bg-cover bg-top d-flex align-items-center"
                              style={{backgroundImage: `url(${SliderImage1})`}}>
                            <Grid container spacing={3} className="sLider-grid-item websitePadding">
                                <Grid className="slide-img slide-img-left d-none d-lg-block">
                                    <img src={SliderManImage1} alt=""/>
                                </Grid>
                                <Grid item lg={12} className="text-right">
                                    <span></span>
                                    <h1>Experience Meets Innovation</h1>
                                    <p>With over 12 in the industry, we blend time-tested techniques with innovative solutions to deliver exceptional quality.</p>
                                    <a href="javascript:" className="theme_btn get_start">Learn About Us</a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </section>
            </Slider>
        );
    }
}

export default HeroSlider;