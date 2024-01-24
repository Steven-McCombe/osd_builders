import React, {Component} from "react";
import {Link} from 'react-router-dom'
import BlogImg1 from '../../../images/blog/blog1.jpg';
import BlogImg2 from '../../../images/blog/blog2.jpg';
import BlogImg3 from '../../../images/blog/blog3.jpg';
import BlogImg4 from '../../../images/blog/blog4.jpg';
import BlogImgR1 from '../../../images/blog/r1.jpg';
import BlogImgR2 from '../../../images/blog/r2.jpg';
import BlogImgR3 from '../../../images/blog/r3.jpg';
import BlogImgR4 from '../../../images/blog/r4.jpg';
import Grid from "@material-ui/core/Grid";

class BlogGid extends Component {
    render() {
        return (
            <section className="blog-wrapper section-padding">
                <Grid container spacing={3} className="websitePadding">
                    <Grid item lg={9} sm={12} className="">
                        <Grid className="blog-item-full-grid">
                            <Grid className="single-blog-item">
                                <Grid className="blog-featured-image">
                                    <img src={BlogImg1} alt=""/>
                                </Grid>
                                <h2><Link to="/singlepost">Example of job specification</Link></h2>
                                <Grid className="post-meta">
                                    <ul>
                                        <li><a href="javascript:">25 February , 2019</a></li>
                                        <li><a href="javascript:">By admin</a></li>
                                        <li><a href="javascript:">Design, Interiors</a></li>
                                        <li><a href="javascript:">3 comments</a></li>
                                    </ul>
                                </Grid>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.</p>
                            </Grid>
                            

                            <Grid className="single-blog-item">
                                <Grid className="blog-featured-image">
                                    <img src={BlogImg2} alt=""/>
                                </Grid>
                                <h2><Link to="/singlepost">Example of job specification</Link></h2>
                                <Grid className="post-meta">
                                    <ul>
                                        <li><a href="javascript:">25 February , 2019</a></li>
                                        <li><a href="javascript:">By admin</a></li>
                                        <li><a href="javascript:">Design, Interiors</a></li>
                                        <li><a href="javascript:">3 comments</a></li>
                                    </ul>
                                </Grid>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.</p>
                            </Grid>

                            <Grid className="single-blog-item">
                                <Grid className="blog-featured-image">
                                    <img src={BlogImg3} alt=""/>
                                </Grid>
                                <h2><Link to="/singlepost">Example of job specification</Link></h2>
                                <Grid className="post-meta">
                                    <ul>
                                        <li><a href="javascript:">25 February , 2019</a></li>
                                        <li><a href="javascript:">By admin</a></li>
                                        <li><a href="javascript:">Design, Interiors</a></li>
                                        <li><a href="javascript:">3 comments</a></li>
                                    </ul>
                                </Grid>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.</p>
                            </Grid>

                            <Grid className="single-blog-item">
                                <Grid className="blog-featured-image">
                                    <img src={BlogImg4} alt=""/>
                                </Grid>
                                <h2><Link to="/singlepost">Example of job specification</Link></h2>
                                <Grid className="post-meta">
                                    <ul>
                                        <li><a href="javascript:">25 February , 2019</a></li>
                                        <li><a href="javascript:">By admin</a></li>
                                        <li><a href="javascript:">Design, Interiors</a></li>
                                        <li><a href="javascript:">3 comments</a></li>
                                    </ul>
                                </Grid>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur.</p>
                            </Grid>

                        </Grid>

                        <Grid className="pagination">
                            <ul>
                                <li><a href="javascript:">1</a></li>
                                <li><a href="javascript:">2</a></li>
                                <li><a href="javascript:"><i className="fal fa-angle-right"></i></a></li>
                            </ul>
                        </Grid>

                    </Grid>
                    <Grid item lg={3} sm={12} className="col-lg-3 col-sm-12">
                        <Grid className="blog-sidebar-wrap">
                            <Grid className="single-sidebar-widgets">
                                <h3>Categories</h3>
                                <Grid className="categorie">
                                    <ul>
                                        <li><a href="javascript:">Branding <span>12</span></a></li>
                                        <li><a href="javascript:">UI Design <span>32</span></a></li>
                                        <li><a href="javascript:">Typography <span>22</span></a></li>
                                        <li><a href="javascript:">Wordpress <span>15</span></a></li>
                                        <li><a href="javascript:">Development <span>30</span></a></li>
                                        <li><a href="javascript:">Photography <span>03</span></a></li>
                                    </ul>
                                </Grid>
                            </Grid>

                            <Grid className="single-sidebar-widgets">
                                <h3>Trending Post</h3>
                                <Grid className="recent-post-widget">
                                    <Grid className="single-recent-post d-flex align-items-center">
                                        <Grid className="recent-img">
                                            <img src={BlogImgR1} alt=""/>
                                        </Grid>
                                        <Grid className="recent-title">
                                            <Link to="singlepost">Outstanding Blog Post</Link>
                                            <span>December 17, 2019</span>
                                        </Grid>
                                    </Grid>
                                    <Grid className="single-recent-post d-flex align-items-center">
                                        <Grid className="recent-img">
                                            <img src={BlogImgR2} alt=""/>
                                        </Grid>
                                        <Grid className="recent-title">
                                            <Link to="singlepost">Hook Your Audience</Link>
                                            <span>April 21, 2019</span>
                                        </Grid>
                                    </Grid>
                                    <Grid className="single-recent-post d-flex align-items-center">
                                        <Grid className="recent-img">
                                            <img src={BlogImgR3} alt=""/>
                                        </Grid>
                                        <Grid className="recent-title">
                                            <Link to="singlepost">Structure Your Post</Link>
                                            <span>December 07, 2019</span>
                                        </Grid>
                                    </Grid>
                                    <Grid className="single-recent-post d-flex align-items-center">
                                        <Grid className="recent-img">
                                            <img src={BlogImgR4} alt=""/>
                                        </Grid>
                                        <Grid className="recent-title">
                                            <Link to="singlepost">Make Your Content</Link>
                                            <span>December 27, 2019</span>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid className="single-sidebar-widgets">
                            <h3>Tags</h3>
                            <Grid className="tags">
                                <ul>
                                    <li><a href="javascript:">Responsive</a></li>
                                    <li><a href="javascript:">Development</a></li>
                                    <li><a href="javascript:">free</a></li>
                                    <li><a href="javascript:">Branding</a></li>
                                    <li><a href="javascript:">Awesome</a></li>
                                    <li><a href="javascript:">Typography</a></li>
                                    <li><a href="javascript:">Wordpress</a></li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default BlogGid;