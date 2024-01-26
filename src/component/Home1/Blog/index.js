import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import Slider from "react-slick";
import BlogImg1 from '../../../images/blog1.jpg';
import BlogImg2 from '../../../images/blog2.jpg';
import BlogImg3 from '../../../images/blog3.jpg';

class Blog extends Component {
    render() {
        const settings = {
            dots: false,
            arrow: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
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
                    breakpoint: 768,
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
        return (
            <section className="blog-wrapper blog-one section-padding" id="news">
                <Grid className="websitePadding">
                    <Grid item sm={12} xs={12} className="col-sm-12">
                        <Grid className="theme-heading">
                            <span>BLOG UPDATES</span>
                            <h2>News & Blogs</h2>
                        </Grid>
                    </Grid>
                    <Slider {...settings}>
                        <Grid className="blog-carousel-items owl-carousel owl-theme">
                            <Grid className="single-blog-box">
                                <Grid className="blog-feature-img"
                                     style={{backgroundImage: `url(${BlogImg1})`}}></Grid>
                                <Grid className="blog-box-content">
                                    <Grid className="post-date">
                                        <span>19</span>
                                        <span>Oct</span>
                                    </Grid>
                                    <Grid className="post-cats">
                                        <span>Staff</span>
                                        <span>Startup</span>
                                        <span>Work</span>
                                    </Grid>
                                    <h3><Link to="/singlepost">Design to next level</Link></h3>
                                    <p>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in </p>

                                    <Link to="/singlepost" className="read-more"><i className="fas fa-caret-right"></i>read
                                        more</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className="blog-carousel-items owl-carousel owl-theme">
                            <Grid className="single-blog-box">
                                <Grid className="blog-feature-img"
                                     style={{backgroundImage: `url(${BlogImg1})`}}></Grid>
                                <Grid className="blog-box-content">
                                    <Grid className="post-date">
                                        <span>19</span>
                                        <span>Oct</span>
                                    </Grid>
                                    <Grid className="post-cats">
                                        <span>Staff</span>
                                        <span>Startup</span>
                                        <span>Work</span>
                                    </Grid>
                                    <h3><Link to="/singlepost">Design to next level</Link></h3>
                                    <p>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in </p>

                                    <Link to="/singlepost" className="read-more"><i className="fas fa-caret-right"></i>read
                                        more</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className="blog-carousel-items owl-carousel owl-theme">
                            <Grid className="single-blog-box">
                                <Grid className="blog-feature-img"
                                     style={{backgroundImage: `url(${BlogImg2})`}}></Grid>
                                <Grid className="blog-box-content">
                                    <Grid className="post-date">
                                        <span>19</span>
                                        <span>Oct</span>
                                    </Grid>
                                    <Grid className="post-cats">
                                        <span>Staff</span>
                                        <span>Startup</span>
                                        <span>Work</span>
                                    </Grid>
                                    <h3><Link to="/singlepost">Design to next level</Link></h3>
                                    <p>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in </p>

                                    <Link to="/singlepost" className="read-more"><i className="fas fa-caret-right"></i>read
                                        more</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className="blog-carousel-items owl-carousel owl-theme">
                            <Grid className="single-blog-box">
                                <Grid className="blog-feature-img"
                                     style={{backgroundImage: `url(${BlogImg3})`}}></Grid>
                                <Grid className="blog-box-content">
                                    <Grid className="post-date">
                                        <span>19</span>
                                        <span>Oct</span>
                                    </Grid>
                                    <Grid className="post-cats">
                                        <span>Staff</span>
                                        <span>Startup</span>
                                        <span>Work</span>
                                    </Grid>
                                    <h3><Link to="/singlepost">Design to next level</Link></h3>
                                    <p>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in </p>

                                    <Link to="/singlepost" className="read-more"><i className="fas fa-caret-right"></i>read
                                        more</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className="blog-carousel-items owl-carousel owl-theme">
                            <Grid className="single-blog-box">
                                <Grid className="blog-feature-img"
                                     style={{backgroundImage: `url(${BlogImg1})`}}></Grid>
                                <Grid className="blog-box-content">
                                    <Grid className="post-date">
                                        <span>19</span>
                                        <span>Oct</span>
                                    </Grid>
                                    <Grid className="post-cats">
                                        <span>Staff</span>
                                        <span>Startup</span>
                                        <span>Work</span>
                                    </Grid>
                                    <h3><Link to="/singlepost">Design to next level</Link></h3>
                                    <p>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in </p>

                                    <Link to="/singlepost" className="read-more"><i className="fas fa-caret-right"></i>read
                                        more</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className="blog-carousel-items owl-carousel owl-theme">
                            <Grid className="single-blog-box">
                                <Grid className="blog-feature-img"
                                     style={{backgroundImage: `url(${BlogImg2})`}}></Grid>
                                <Grid className="blog-box-content">
                                    <Grid className="post-date">
                                        <span>19</span>
                                        <span>Oct</span>
                                    </Grid>
                                    <Grid className="post-cats">
                                        <span>Staff</span>
                                        <span>Startup</span>
                                        <span>Work</span>
                                    </Grid>
                                    <h3><Link to="/singlepost">Design to next level</Link></h3>
                                    <p>veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in </p>

                                    <Link to="/singlepost" className="read-more"><i className="fas fa-caret-right"></i>read
                                        more</Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Slider>
                </Grid>
            </section>
        );
    }
}

export default Blog;