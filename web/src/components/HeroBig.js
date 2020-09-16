import React from 'react'
import Grid from '@material-ui/core/Grid';
import '../assets/css/styles.css';
import ReactWOW from 'react-wow'

import VideoFile from '../assets/media/hero-video.mp4'

function HeaderBig(props) {
    return (
        <div>
            <Grid
                container
                className="homepage-hero-grid"
                >
                <Grid className="homepage-hero-grid" item md={12} xs={12}>
                    <video className="homepage-hero-video " autoPlay  muted loop>
                        <source className="homepage-hero-vide-src" src={VideoFile} playsinline type="video/mp4"/>

                    </video>

                    <div className="homepage-hero-div">
                        <ReactWOW duration="5s" animation='pulse'>
                            <div>

                                <span className="homepage-hero-tags-w">We Are</span><br/>

                                <span className="homepage-hero-header-text">{props.text}</span>
                            </div>
                        </ReactWOW>

                        <br/>

                        <ReactWOW animation='fadeInLeft'>
                            <span className="homepage-hero-tags-d">Development</span>
                        </ReactWOW>

                        <ReactWOW animation='fadeIn'>

                            <span className="homepage-hero-tags-c">Consulting</span>

                        </ReactWOW>
                        <ReactWOW animation='fadeInRight'>

                            <span className="homepage-hero-tags-r">Resourcing</span>

                        </ReactWOW>
                    </div>

                </Grid>

                {/*    <Grid item md={12} xs={12}>
                    <center>
                        <span className="homepage-hero-tags-w">We Are</span>
                    </center>
                </Grid>

                <Grid item md={12} xs={12}>
                    <center>
                        <span className="homepage-hero-header-text">{props.text}</span>
                    </center>
                </Grid>

                <Grid item md={4} xs={12}>
                    <center>
                        <span className="homepage-hero-tags-d">Development</span>
                    </center>
                </Grid>
                <Grid item md={4} xs={12}>
                    <center>
                        <span className="homepage-hero-tags-c">Consulting</span>
                    </center>
                </Grid>
                <Grid item md={4} xs={12}>
                    <center>
                        <span className="homepage-hero-tags-r">Resourcing</span>
                    </center>
    </Grid> */}

            </Grid>
        </div>
    )
}

export default HeaderBig
