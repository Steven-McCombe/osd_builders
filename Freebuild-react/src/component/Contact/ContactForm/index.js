import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null
        }
    }

    FormSubmit = (event) => {
        event.preventDefault();
    }
    FormChange = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render() {
        const {name} = this.state
        return (
            < section className = "contact-form-section section-padding websitePadding" >
                <Grid container spacing={3} className="">
                    <Grid item xl={12} md={12} xs={12} className="">
                        <Grid className="contact-form-main wow animated fadeInUp" data-wow-duration="2s">
                            <form onSubmit={this.FormSubmit} method="POST">
                                <Grid container spacing={3} className="">
                                    <Grid item lg={4} xs={12} md={4} className="form-group">
                                        <input type="text" className="form-control" name="name" id="name"
                                               placeholder="Enter Your Name" onChange={this.FormChange}/>
                                    </Grid>
                                    <Grid item lg={4} xs={12} md={4} className="form-group">
                                        <input type="email" className="form-control" name="email" id="email"
                                               placeholder="Enter Your Mail"/>
                                    </Grid>
                                    <Grid item lg={4} xs={12} md={4} className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject"
                                               placeholder="Your Subject"/>
                                    </Grid>
                                </Grid>
                                <Grid className="row">
                                    <Grid className="form-group col-12 col-md-12 col-sm-12 col-xl-12 message-box">
                                        <textarea name="message" id="message" name="message"
                                                  placeholder="Message"></textarea>
                                    </Grid>
                                </Grid>
                                <Grid className="send-message mt-35 text-center">
                                    <button type="submit" className="btn-send">send</button>
                                </Grid>
                                <span className="form-message"></span>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default ContactForm;