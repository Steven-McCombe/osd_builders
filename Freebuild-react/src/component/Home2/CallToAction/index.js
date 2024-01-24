import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import VedioImage from "../../../images/callto_video_bg.jpg";
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';

class CallToAction extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    FormSubmit = (event) => {
        event.preventDefault();
    }

    openModal() {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <section className="call-to-action-form home_two_contactform section-padding text-white" id="contact">
                <Grid container spacing={3} className="websitePadding">
                    <Grid item md={6} sm={12} className="">
                        <Grid className="call-to-form">
                            <h2>Request Call Back</h2>
                            <form onSubmit={this.FormSubmit} method="POST">
                                <Grid container spacing={3} className="call-to-action-container">
                                    <Grid item sm={6} xs={12}>
                                            <input type="text" placeholder="Your name"/>
                                        <div className="input-group">
                                        </div>
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <input type="text" placeholder="Your name"/>
                                    <div className="input-group">
                                    </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <textarea name="message" placeholder="How can we help?"></textarea>
                                    <div className="input-group">
                                    </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                    <button className="submit_btn theme_btn">Submit Now</button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                    <Grid item md={1}></Grid>
                    <Grid item md={5} sm={12} alignItems="center" className="">
                        <Grid justify="center" className="call-to-video d-flex align-items-center justify-content-center"
                              style={{backgroundImage: `url(${VedioImage})`}}>
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='_TI26foIVy0'
                                        onClose={() => this.setState({isOpen: false})}/>
                            <a onClick={this.openModal} href="javascript:" className="play_video_btn popup-video">
                                <i className="fal fa-play"></i>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default CallToAction;