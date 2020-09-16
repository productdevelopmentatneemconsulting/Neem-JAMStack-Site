import React from 'react'
import '../assets/css/styles.css';
import Grid from '@material-ui/core/Grid';
import ReactWOW from 'react-wow'

function Desc(props) {
    return (

        <Grid container>

            <Grid item md={12} xs={12}>

                <center>
                <ReactWOW animation='fadeInUp'>
                    <div className="desc-small-div">
                        <span className="desc-small-content-text">{props.text}</span>

                    </div>
                    </ReactWOW>
                </center>
            </Grid>

        </Grid>

    )
}

export default Desc
