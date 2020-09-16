import React from 'react'
import '../assets/css/styles.css'
import Grid from '@material-ui/core/Grid';

import ReactWOW from 'react-wow'
function DescHead(props) {
    return (

        <Grid container>

            <Grid item md={12} xs={12}>
                <center>

                <ReactWOW animation='fadeInUp'>
                        <div className="desc-big-head-div">
                            <center>
                                <span className="desc-big-header">{props.text}</span>
                            </center>
                        </div>
</ReactWOW>
                </center>
            </Grid>

        </Grid>

    )
}

export default DescHead
