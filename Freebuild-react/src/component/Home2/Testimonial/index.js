import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import ClientImage from '../../../images/client/1.png'

class Testimonial extends Component {
    render() {
        return (
            <section
                className={this.props.bgColor ? "testimonial-area section-padding  page-section-bg" : "testimonial-area section-padding"}>
                <Grid container spacing={3} className="websitePadding">
                    <Grid item lg={1}></Grid>
                    <Grid item lg={10} md={12} xs={12} className="text-center">
                        <Grid className="what-we-do-title">
                            <span>Testimonials</span>
                            <h2>Our Customers Say</h2>
                        </Grid>
                    </Grid>
                    <Grid lg={4} item md={4} sm={6} xs={12} className="">
                        <Grid className="single-testimonial">
                            <i className="fas fa-quote-left"></i>
                            <p>Of course, the theme is amazing! But what really impressed me was the excellent
                                customer support. This is a class act all the way. Thank you!</p>
                            <Grid className="client-details d-flex align-items-center">
                                <Grid className="client-img">
                                    <img src={ClientImage} alt=""/>
                                </Grid>
                                <Grid className="client-info">
                                    <h4>Kiwhi Leonard</h4>
                                    <span>Themeforest Author</span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid lg={4} item md={4} sm={6} xs={12} className="">
                        <Grid className="single-testimonial">
                            <i className="fas fa-quote-left"></i>
                            <p>Of course, the theme is amazing! But what really impressed me was the excellent
                                customer support. This is a class act all the way. Thank you!</p>
                            <Grid className="client-details d-flex align-items-center">
                                <Grid className="client-img">
                                    <img src={ClientImage} alt=""/>
                                </Grid>
                                <Grid className="client-info">
                                    <h4>Salman Ahmed</h4>
                                    <span>Themeforest Author</span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid lg={4} item md={4} sm={6} xs={12} className="">
                        <Grid className="single-testimonial">
                            <i className="fas fa-quote-left"></i>
                            <p>Of course, the theme is amazing! But what really impressed me was the excellent
                                customer support. This is a class act all the way. Thank you!</p>
                            <Grid className="client-details d-flex align-items-center">
                                <Grid className="client-img">
                                    <img src={ClientImage} alt=""/>
                                </Grid>
                                <Grid className="client-info">
                                    <h4>Mugli Leonard</h4>
                                    <span>UI/UX Designer</span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default Testimonial;