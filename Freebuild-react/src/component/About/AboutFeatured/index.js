import React, {Component} from "react";
import VideoImage from '../../../images/video_img.jpg';
import Grid from "@material-ui/core/Grid";

class AboutFeatured extends Component {
    render() {
        return (
            <section className="featured-about-wrap sada-bg section-padding">
                <Grid container spacing={3} className="websitePadding">
                    <Grid item md={6} sm={12} xs={12} className="col-lg-6 col-md-12">
                        <Grid className="video-section-content video-section-content-1">
                            <h2>Why Choose Us</h2>
                            <ul>
                                <li>
                                    <h3>Commitment</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.</p>
                                </li>
                                <li>
                                    <h3>Dependable and honesty</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.</p>
                                </li>
                                <li>
                                    <h3>Alwasy improving</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.</p>
                                </li>
                            </ul>
                            <a href="javascript:" className="theme_btn">LEARN MORE</a>
                        </Grid>
                    </Grid>
                    <Grid item md={1}></Grid>
                    <Grid item md={5} sm={12} xs={12} className="col-lg-5 offset-lg-1 col-md-12">
                        <Grid className="video-section-img">
                            <img src={VideoImage} alt=""/>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default AboutFeatured;