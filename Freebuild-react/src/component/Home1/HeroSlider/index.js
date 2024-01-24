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
                                    <span>WE MAKE</span>
                                    <h1>Dream House</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                                        dicta<br/> sapiente, quo in minus nostrum praesentium quidem.</p>
                                    <a href="javascript:" className="theme_btn get_start">Get details</a>
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
                                    <span>WE MAKE</span>
                                    <h1>Dream House</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                                        dicta<br/> sapiente, quo in minus nostrum praesentium quidem.</p>
                                    <a href="javascript:" className="theme_btn get_start">Get details</a>
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
                                    <span>WE MAKE</span>
                                    <h1>Dream House</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dicta <br/>sapiente,
                                        quo in minus nostrum praesentium quidem.</p>
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

export default HeroSlider;