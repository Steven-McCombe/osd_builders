import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import AboutBanner from '../../../images/page_banner_bg.png';

class HeroArea extends Component {
    render() {
        return (
            <section className="page-banner-wrap bg-contain bg-bottom d-flex align-items-center"
                     style={{backgroundImage: `url(${AboutBanner})`}}>
                <Grid container spacing={3} className="websitePadding">
                    <Grid item md={12} xs={12} className="text-center">
                        <Grid className="page-banner">
                            <span>{this.props.slug}</span>
                            <h2>{this.props.title}</h2>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        );
    }
}

export default HeroArea;