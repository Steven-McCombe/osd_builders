import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from 'react-router-dom'
import logo from '../../../images/logo.png';
import Nav from "../../Home1/Header/Nav";
import Hidden from "@material-ui/core/Hidden";
import Collapse from "@material-ui/core/Collapse";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '#',
        submenu: [
            {
                id: 12,
                title: 'Home Two',
                link: '/home-two',
            },
            {
                id: 13,
                title: 'Home Three',
                link: '/home-three',
            },
        ]
    },
    {
        id: 2,
        title: 'about',
        link: '/about'
    },
    {
        id: 3,
        title: 'Services',
        link: '/services'
    },
    {
        id: 5,
        title: 'All Project',
        link: '/portfolio'
    },
    {
        id: 7,
        title: 'News',
        link: '/blog'
    },
    {
        id: 8,
        title: 'Contact',
        link: '/contact'
    },
    {
        id: 9,
        title: 'Pages',
        link: '/#',
        submenu: [
            {
                id: 91,
                title: 'Shop',
                link: '/shop',
            },
            {
                id: 92,
                title: 'Single Blog',
                link: '/singlepost',
            },
            {
                id: 932,
                title: 'Services Details',
                link: '/servicesdetails',
            },
            {
                id: 94,
                title: 'Single Product',
                link: '/singleproduct',
            },
            {
                id: 95,
                title: 'Single Portfolio',
                link: '/singleportfolio',
            },
        ]
    },
];

class HeaderTwo extends Component {

    state = {
        active_menu: 0,
        menu_show: false
    };

    submenuHandler = id => () => {
        this.setState({
            active_menu: id === this.state.active_menu ? 0 : id
        })
    };

    mobileMenuHandler = () => {
        this.setState({
            menu_show: !this.state.menu_show
        })
    }

    render(props) {
        const {active_menu, menu_show} = this.state;
        return (
            <header className="header-two">
                <Grid className="top-bar-two">
                    <Grid container justify="space-between" spacing={3} className="container websitePadding">
                        <Grid item lg={6} md={5} className="">
                            <Grid className="top-right-info">
                                Have any question?<span>Call Us Now!!</span>
                            </Grid>
                        </Grid>
                        <Grid item lg={6} md={7} className="text-lg-right">
                            <Grid className="social-profile">
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className="header-middle">
                    <Grid container spacing={3} className="websitePadding">
                        <Grid item lg={3} md={12} className="">
                            <Grid className="site-logo">
                                <a href="/"><img src={logo} alt=""/></a>
                            </Grid>
                        </Grid>
                        <Grid item lg={9} md={12} className="d-none d-lg-block">
                            <Grid container spacing={3} justify="space-between" className="header-contact-promo row">
                                <Grid item md={4} className="single-contact-info">
                                    <Grid className="contact-top-icon">
                                        <i className="fal fa-alarm-clock"></i>
                                    </Grid>
                                    <Grid className="contact-text">
                                        <span>Working Hours</span>
                                        Mon - Sat 9.00 to 17.00
                                    </Grid>
                                </Grid>
                                <Grid item md={5} className="single-contact-info">
                                    <Grid className="contact-top-icon">
                                        <i className="fal fa-map-marker-alt"></i>
                                    </Grid>
                                    <Grid className="contact-text">
                                        <span>Address</span>
                                        4249 Hart Street Enfield, CT 06082
                                    </Grid>
                                </Grid>
                                <Grid item md={3} className="single-contact-info">
                                    <Grid className="contact-top-icon">
                                        <i className="fal fa-phone-volume"></i>
                                    </Grid>
                                    <Grid className="contact-text">
                                        <span>call us</span>
                                        860 -272 -9738
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className="header-menu-two">
                    <Grid container spacing={3} className="websitePadding">
                        <Grid item lg={10} className="text-lg-left">
                            <Nav/>
                        </Grid>
                        <Grid className="col-12">
                            <div className="mobile-menu-item">
                                {/*<button onClick={this.mobileMenuHandler}>show button</button>*/}
                                <i id="mobile_menu_icon" className="fas fa-align-justify mobile-menu2-item" onClick={this.mobileMenuHandler}></i>
                                <Hidden lgUp>
                                    <Collapse in={menu_show} timeout="auto" unmountOnExit>
                                        <nav className="">
                                            <ul className="menu-items">
                                                {menus.map(item => (
                                                    <li key={item.id}>
                                                        <Link onClick={this.submenuHandler(item.id)} to={item.link}>{item.title}
                                                            {item.submenu ? <i className="far fa-plus-square submenu-icon"></i> : null}
                                                        </Link>
                                                        <Collapse in={active_menu === item.id} timeout="auto" unmountOnExit>
                                                            {item.submenu ?
                                                                <ul className="submenu">
                                                                    {item.submenu.map(submenu => (
                                                                        <li key={submenu.id}><Link
                                                                            to={submenu.link}>{submenu.title}</Link></li>
                                                                    ))}
                                                                </ul> : null}
                                                        </Collapse>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </Collapse>
                                </Hidden>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </header>
        )
    }
}

export default HeaderTwo;