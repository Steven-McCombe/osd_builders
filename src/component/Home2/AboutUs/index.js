import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import AboutImage1 from '../../../images/icons/1.png';
import AboutImage2 from '../../../images/icons/2.png';
import AboutImage3 from '../../../images/icons/3.png';
import AboutImage4 from '../../../images/icons/4.png';

class AboutUsTwo extends Component {
    render() {
        return (
            <section className="about-us section-padding" id="service">
                <Grid container spacing={3} className="websitePadding">
                    <Grid item lg={12} md={12} xs={12} className="text-center">
                        <Grid className="theme-heading">
                            <span>What We Do</span>
                            <h2>About company</h2>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} sm={6} className="text-center">
                        <Grid className="single-about">
                            <img src={AboutImage1} alt=""/>
                            <h3>Building</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor
                                incidid</p>
                            <a href="javascript:"><i className="fal fa-long-arrow-right"></i></a>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} sm={6} className="text-center">
                        <Grid className="single-about">
                            <img src={AboutImage2} alt=""/>
                            <h3>Halls</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor
                                incidid</p>
                            <a href="javascript:"><i className="fal fa-long-arrow-right"></i></a>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} sm={6} className="text-center">
                        <Grid className="single-about">
                            <img src={AboutImage3} alt=""/>
                            <h3>Consaltant</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor
                                incidid</p>
                            <a href="javascript:"><i className="fal fa-long-arrow-right"></i></a>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} sm={6} className="text-center">
                        <Grid className="single-about">
                            <img src={AboutImage4} alt=""/>
                            <h3>Contracting</h3>
                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod tempor
                                incidid</p>
                            <a href="javascript:"><i className="fal fa-long-arrow-right"></i></a>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default AboutUsTwo;