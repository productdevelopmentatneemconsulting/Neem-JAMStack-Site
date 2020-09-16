import React from 'react'
import Grid from '@material-ui/core/Grid';
import '../assets/css/styles.css';
import Img from "gatsby-image"
import ReactWOW from 'react-wow'
const BlockContent = require('@sanity/block-content-to-react')
function BigHomeCard(props) {
    return (
        <Grid container>
            <Grid item md={6} xs={12}>
                <Img fluid={props.img} className="big-card-image" alt="Impactful"/>
            </Grid>
            <Grid item md={6} xs={12}>
                <div className="big-card-right">
                    <ReactWOW animation='fadeInUp'>
                  <h6 className="big-card-tagline"> {props.tagline}</h6>
                    </ReactWOW>
                    <ReactWOW animation='fadeInUp'>
                        <h1 className="big-card-header">{props.title}</h1>
                    </ReactWOW>
                    <ReactWOW animation='fadeInUp'>
                    <div className="big-card-content" >
                    <BlockContent blocks={props.text}/>
                    <a href={props.url}>DISCOVER MORE</a>
                    </div>

                    </ReactWOW>
                </div>
            </Grid>
        </Grid>

    )
}

export default BigHomeCard
