import React from 'react'

import '../assets/css/styles.css';
import Img from "gatsby-image"
const Card = (props) => {
    return (
        <div>
            <div className="card-small-div">
                <Img className="card-small-img" alt="client_image" fluid={props.img}/>
                <div className="card-small-content-overlay">
                    <span className="card-small-content">
                        {props.title}
                        <hr className="card-line-art"/>

                        </span>

                </div>

            </div>
        </div>

    )
}

export default Card