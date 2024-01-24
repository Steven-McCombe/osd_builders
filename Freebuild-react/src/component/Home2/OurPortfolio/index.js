import React, {Fragment, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Lightbox from 'react-image-lightbox';
import {Link} from 'react-router-dom'

import Portfolio1 from "../../../images/portfolio/p1.jpg";
import Portfolio2 from "../../../images/portfolio/p2.jpg";
import Portfolio3 from "../../../images/portfolio/p3.jpg";
import Portfolio4 from "../../../images/portfolio/p4.jpg";

const portfolio = [
    {
        id: 1,
        category: 'building',
        image: Portfolio1
    },
    {
        id: 2,
        category: 'business',
        image: Portfolio2
    },
    {
        id: 3,
        category: 'building',
        image: Portfolio3
    },
    {
        id: 4,
        category: 'building',
        image: Portfolio4
    },
    {
        id: 5,
        category: 'finance',
        image: Portfolio1
    },
    {
        id: 6,
        category: 'finance',
        image: Portfolio2
    },

];

function searchFilter(row, category) {
    return row.category.toLowerCase().includes(category.toLowerCase()) || !category;
}

const OurPortfolio = () => {
    const [category, setCategory] = useState('');
    const [isOpen, setOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    function onOpenHandler(id) {
        setOpen(true);
        setPhotoIndex(id - 1);
    }

    return (
        <Fragment>
            <section className="our-portfolio section_bg portfolio-two section-padding" id="portfolio">
                <Grid container spacing={3} className="websitePadding">
                    <Grid item xs={12} className="text-center">
                        <Grid className="theme-heading">
                            <span>Working Projects</span>
                            <h2>Our Latest Projects</h2>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="portfolio-filter-buttons text-center">
                    <button className={`cBtn cBtnRadius cBtnUppercase ${category === '' ? 'active' : ''}`}
                            onClick={() => setCategory('',)}>all portfolio
                    </button>
                    <button className={`cBtn cBtnRadius cBtnUppercase ${category === 'agency' ? 'active' : ''}`}
                            onClick={() => setCategory('building')}>Building
                    </button>
                    <button className={`cBtn cBtnRadius cBtnUppercase ${category === 'creative' ? 'active' : ''}`}
                            onClick={() => setCategory('business')}>Business
                    </button>
                    <button className={`cBtn cBtnRadius cBtnUppercase ${category === 'design' ? 'active' : ''}`}
                            onClick={() => setCategory('finance')}>Finance
                    </button>
                </Grid>

                <Grid className="portfolio-grid-items">
                    {portfolio.filter(row => searchFilter(row, category)).slice(0, 6).map(item => {
                        return (
                            <Grid key={item.id} item md={4} sm={6} className="single-portofolio grid-item d-inline-block building bg-cover text-white"
                                  style={{backgroundImage: `url(${item.image})`}}>
                                <Grid className="portfolio-content">
                                    <h3>Working in new case</h3>
                                    <p>Excepteur sint occ aecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt </p>
                                    <Grid className="portfolio-cat">
                                        <span>Building</span>
                                    </Grid>
                                    <Link to="/singleportfolio" className="read-more-port">READ MORE <i
                                        className="fas fa-arrow-right"></i></Link>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
                <Grid className="ajax_load_btn text-center mt-60">
                    <a href="javascript:" className="theme_btn">VIEW MORE</a>
                </Grid>
            </section>
        </Fragment>
    )
};
export default OurPortfolio;