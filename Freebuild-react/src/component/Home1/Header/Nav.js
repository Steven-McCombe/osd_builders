import React, {Component} from "react";
import {Link, BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import Hidden from "@material-ui/core/Hidden";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
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
        id: 4,
        title: 'Services',
        link: '/services'
    },
    {
        id: 6,
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

class Nav extends Component {

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
        var NavURL = window.location.pathname;
        const {active_menu, menu_show} = this.state;
        return (
            <div>
                <div className="mobile-menu-item">
                    <i id="mobile_menu_icon" className="fas fa-align-justify" onClick={this.mobileMenuHandler}></i>
                    <Hidden lgUp>
                        <Collapse in={menu_show} timeout="auto" unmountOnExit>
                            <nav className={NavURL ? '' : ''}>
                                <ul className="menu-items">
                                    {menus.map(item => (
                                        <li key={item.id}>
                                            <Link onClick={this.submenuHandler(item.id)} to={item.link}>{item.title}
                                                {item.submenu ? <i className={`far fa-${active_menu === item.id ? 'minus' : 'plus' }-square submenu-icon`}></i> : null}
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
                <Hidden mdDown>
                    <nav id="responsive-menu" className={NavURL ? 'menu-style-one menu-two' : 'menu-style-one'}>
                        <ul className="menu-items">
                            <li><Link to="/">Home</Link>
                                <ul className="submenu">
                                    <li><Link to="/">Home One</Link></li>
                                    <li><Link to="/home-two">Home Two</Link></li>
                                    <li><Link to="/home-three">Home Three</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services" aaaaa="dfsfsdfsd">Services</Link></li>
                            <li><Link to="/portfolio">All Project</Link></li>
                            <li><Link to="/blog">News</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><a href="javascript:">Pages</a>
                                <ul className="submenu">
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/singlepost">Single Blog</Link></li>
                                    <li><Link to="/servicesdetails">Services Details</Link></li>
                                    <li><Link to="/singleproduct">Single Product</Link></li>
                                    <li><Link to="/singleportfolio">Single Portfolio</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </Hidden>
            </div>
        )
    }
}

export default Nav;