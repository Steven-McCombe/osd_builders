import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import HeaderLogo from '../../../images/logo.png';
import Nav from "./Nav";
import CountUp from "react-countup";

class Header extends Component {

    state = {
        isRender: false
    }

    componentDidMount() {
        window.addEventListener('scroll', event => {
            let cached = null
            if (!cached) {
                setTimeout(() => {
                    cached = null
                }, 0)
            }
            cached = event
            if (window.scrollY >= "60") {
                console.log(this.state.isRender)
                this.setState({
                    isRender: true
                })
            } else {
                this.setState({
                    isRender: false
                })
            }
        })
    }


    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        };
        this.toggleBox = this.toggleBox.bind(this);
    }

    toggleBox() {
        const {opened} = this.state;
        this.setState({
            opened: !opened,
        });
    }

    render() {

        var {title, children} = this.props;
        const {opened} = this.state;

        if (opened) {
            title = '1';
        } else {
            title = '2';
        }
        return (
            <Grid className="header-one">
                <Grid className="top-header pl-75 pr-75 d-none d-md-block">
                    <Grid container spacing={3} alignItems="center">
                        <Grid item lg={8} md={9} xs={12} className="top-bar-left">
                            <span><i className="fas fa-phone"></i> +123 365 585</span>
                            <span><i className="fas fa-phone"></i> hammer@gmailcom</span>
                            <span><i className="fas fa-clock"></i> SUN-MON, 9:45AM </span>
                        </Grid>
                        <Grid className="col-lg-4 col-md-3 text-md-right">
                            <Grid className="social-profile">
                                <ul>
                                    <li><a href="javascript:"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="javascript:"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="javascript:"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="javascript:"><i className="fab fa-google-plus-g"></i></a></li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="main-menu pl-75 pr-75 pt-30 pb-30" id="sticky-nav">
                    <Grid container spacing={3}>
                        <Grid item lg={2} sm={3} xs={12} justify="space-between" alignItems="center">
                            <Link to="/" className="navbar-brand logo">
                                <img src={HeaderLogo} alt=""/>
                            </Link>
                        </Grid>
                        <Grid item lg={10} sm={9} xs={12} justify="flex-end" alignItems="center" className="text-lg-right">
                            <Nav/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Header;