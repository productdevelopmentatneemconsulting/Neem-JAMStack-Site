import React from 'react'
import '../assets/css/styles.css';
import Grid from '@material-ui/core/Grid';
import ReactWOW from 'react-wow'
import {Link} from "gatsby";
function CardMid(props) {
    return (
        <Grid>
            <Grid item md={12} xs={12}>
                <ReactWOW animation='fadeInUp'>
                    <div className="card-mid-div">
                        <center><img className="card-mid-img" alt={props.title} src={props.img}/></center>
                        <center>
                            <div className="card-mid-header">
                                {props.title}
                            </div>
                        </center>
                        <div className="card-mid-content">
                            {props.content}
                        </div>
                        <center>
                            <Link to={"/"+props.title}>Know More</Link>
                        </center>
                    </div>
                </ReactWOW>
            </Grid>
        </Grid>
    )
}

export default CardMid
