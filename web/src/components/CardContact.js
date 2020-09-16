import React from 'react'
import '../assets/css/styles.css';
import Grid from '@material-ui/core/Grid';
import ReactWOW from 'react-wow'
function CardContact(props) {
    return (
        <Grid>
            <Grid item md={12} xs={12}>
            <ReactWOW animation='fadeInUp'>
                <div className="card-mid-div-contact">
                    <center><img className="card-mid-contact-img" alt={props.title} src={props.img}/></center>
                    <center>
                        <div className="card-mid-header">
                        <a target="_blank" rel="noopener noreferrer" href={props.url}>    {props.title}</a>
                        </div>
                    </center>
                    <div className="card-mid-content">
                        {props.content}
                    </div>

                </div>
                </ReactWOW>
            </Grid>
        </Grid>
    )
}

export default CardContact
