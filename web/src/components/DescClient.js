import React from 'react'
import '../assets/css/styles.css';
import Grid from '@material-ui/core/Grid';
import ReactWOW from 'react-wow'
const BlockContent = require('@sanity/block-content-to-react')
function DescClient(props) {
    return (

        <Grid container>

            <Grid item md={12} xs={12}>

                <center>
                <ReactWOW animation='fadeInUp'>
                    <div className="desc-small-div">
                        <div className="desc-small-content-text"><BlockContent blocks={props.text}/></div>

                    </div>
                    </ReactWOW>
                </center>
            </Grid>

        </Grid>

    )
}

export default DescClient
