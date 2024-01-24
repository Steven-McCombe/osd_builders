import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from 'react-router-dom'
import SingleBlogImg1 from '../../../images/blog/blog1.jpg';
import SingleBlogImg2 from '../../../images/blog/blog-details.jpg';
import SingleBlogImg3 from '../../../images/blog/r1.jpg';
import SingleBlogImg4 from '../../../images/blog/r2.jpg';
import SingleBlogImg5 from '../../../images/blog/r3.jpg';
import SingleBlogComment from '../../../images/blog/comment1.jpg';
import SingleBlogComment1 from '../../../images/blog/comment2.jpg';
import SingleBlogComment3 from '../../../images/blog/comment3.jpg';

class SinglePost extends Component {
    FormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <section className="blog-wrapper section-padding">
                <Grid container spacing={3} className="websitePadding">
                    <Grid item lg={9} sm={12} className="col-lg-9 col-sm-12">
                        <Grid className="blog-item-full-grid">
                            <Grid className="single-blog-item">
                                <Grid className="blog-featured-image">
                                    <img src={SingleBlogImg1} alt=""/>
                                </Grid>
                                <h2><a href="javascript:">Example of job specification</a></h2>
                                <Grid className="post-meta">
                                    <ul>
                                        <li><a href="javascript:">25 February , 2019</a></li>
                                        <li><a href="javascript:">By admin</a></li>
                                        <li><a href="javascript:">Design, Interiors</a></li>
                                        <li><a href="javascript:">3 comments</a></li>
                                    </ul>
                                </Grid>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum. </p>

                                <h3>Job description in hr</h3>
                                <p>The world's leading conservation organization, WWF works in 100 countries and is
                                    supported by 1.2 million members in the United States and close to 5 million
                                    globally.The world's leading conservation organization, WWF works in 100 countries
                                    and is supported by 1.2 million members in the United States and close to 5 million
                                    globally.</p>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3} className="tags-share-section">
                            <Grid item sm={6} xs={12} className="tags-list">
                                <span>TAGS  :</span>
                                <a href="javascript:">Photography</a>
                                <a href="javascript:">Content</a>
                                <a href="javascript:">News</a>
                            </Grid>
                            <Grid item sm={6} xs={12} className="share-post text-lg-right">
                                <a href="javascript:"><i className="fab fa-facebook-f"></i></a>
                                <a href="javascript:"><i className="fab fa-twitter"></i></a>
                                <a href="javascript:"><i className="fab fa-linkedin-in"></i></a>
                                <a href="javascript:"><i className="fab fa-instagram"></i></a>
                            </Grid>
                        </Grid>

                        <Grid className="comment-template-section">
                            <h3>Comments</h3>
                            <Grid className="comment-list">
                                <Grid className="media single-comment">
                                    <img src={SingleBlogComment} alt=""/>
                                    <Grid className="media-body">
                                        <h5>Chris Hemsworth</h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at.
                                        <span><a href="javascript:"><i className="fal fa-reply"></i> Reply</a></span>
                                        <Grid className="media mt-3 comment-replay ml-140">
                                            <a href="javascript:">
                                                <img src={SingleBlogComment1} alt=""/>
                                            </a>
                                            <Grid className="media-body">
                                                <h5>jasicca ben</h5>
                                                viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                                Donec lacinia congue felis in faucibus.
                                                <span><a href="javascript:"><i
                                                    className="fal fa-reply"></i> Reply</a></span>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                                <Grid className="media single-comment">
                                    <img src={SingleBlogComment3} alt=""/>
                                    <Grid className="media-body">
                                        <h5>Chris evans</h5>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio, vestibulum in vulputate at.
                                        <span><a href="javascript:"><i className="fal fa-reply"></i> Reply</a></span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid className="comment-from-section">
                            <h3>leave your comments</h3>
                            <Grid className="comment-form">
                                <form onSubmit={this.FormSubmit} method="POST" classNameName="">
                                    <Grid container spacing={3}>
                                        <Grid item sm={6} xs={12} className="">
                                            <input type="text" placeholder="Your Name *"/>
                                        </Grid>
                                        <Grid item sm={6} xs={12} className="">
                                            <input type="email" placeholder="Your Email*"/>
                                        </Grid>
                                        <Grid item xs={12} className="">
                                            <textarea name="coment" placeholder="Comment"></textarea>
                                        </Grid>
                                        <Grid item xs={12} className="">
                                            <button>Send message</button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} sm={12} className="">
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
                                            <img src={SingleBlogImg3} alt=""/>
                                        </Grid>
                                        <Grid className="recent-title">
                                            <Link to="/singlepost"> Outstanding Blog Post</Link>
                                            <span>December 17, 2019</span>
                                        </Grid>
                                    </Grid>
                                    <Grid className="single-recent-post d-flex align-items-center">
                                        <Grid className="recent-img">
                                            <img src={SingleBlogImg4} alt=""/>
                                        </Grid>
                                        <Grid className="recent-title">
                                            <Link to="/singlepost"> Hook Your Audience</Link>
                                            <span>April 21, 2019</span>
                                        </Grid>
                                    </Grid>
                                    <Grid className="single-recent-post d-flex align-items-center">
                                        <Grid className="recent-img">
                                            <img src={SingleBlogImg5} alt=""/>
                                        </Grid>
                                        <Grid className="recent-title">
                                            <Link to="/singlepost"> Structure Your Post</Link>
                                            <span>December 07, 2019</span>
                                        </Grid>
                                    </Grid>
                                    <Grid className="single-recent-post d-flex align-items-center">
                                        <Grid className="recent-img">
                                            <img src={SingleBlogImg5} alt=""/>
                                        </Grid>
                                        <Grid className="recent-title">
                                            <Link to="/singlepost"> Make Your Content</Link>
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

export default SinglePost;