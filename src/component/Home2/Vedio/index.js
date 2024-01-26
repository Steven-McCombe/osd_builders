import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import SliderImage1 from "../../../images/slide/s1.jpg";
import VideoBg from '../../../images/video-bg.jpg';
import ReactDOM from 'react-dom';
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';

class Video extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <section className="video-section-wrap d-flex align-items-center">
                <Grid className="video-bg bg-cover"
                      style={{backgroundImage: `url(${VideoBg})`}}></Grid>
                <Grid container spacing={3} className="websitePadding">
                    <Grid item md={6} sm={12} >
                        <Grid  className="video-buttton">
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='_TI26foIVy0'
                                        onClose={() => this.setState({isOpen: false})}/>
                            <a onClick={this.openModal} href="javascript:" className="play_video_btn popup-video">
                                <i className="fal fa-play"></i>
                            </a>
                        </Grid>
                    </Grid>
                    <Grid item md={1}></Grid>
                    <Grid item md={5} sm={12} className="offset-lg-1">
                        <Grid className="video-section-content">
                            <h2>Why Choose Us</h2>
                            <ul>
                                <li>
                                    <h3>Commitment</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.</p>
                                </li>
                                <li>
                                    <h3>Dependable and honesty</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.</p>
                                </li>
                                <li>
                                    <h3>Alwasy improving</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.</p>
                                </li>
                            </ul>
                            <a href="javascript:" className="theme_btn">LEARN MORE</a>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        )
    }
}

export default Video;