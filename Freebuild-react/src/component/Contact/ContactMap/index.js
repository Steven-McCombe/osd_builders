import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";

class ContactMap extends Component {
    render() {
        return (
            <section class="google-map-wrap">
                <Grid container spacing={3} class="websitePadding">
                    <Grid item lg={12} class="">
                        <Grid class="gmap">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.4799429634813!2d90.36797221536375!3d23.83708534137526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14a3366b005%3A0x901b07016468944c!2sMirpur+DOHS%2C+Dhaka!5e0!3m2!1sen!2sbd!4v1564410251738!5m2!1sen!2sbd"
                                allowfullscreen></iframe>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default ContactMap;