import React from 'react'
import '../assets/css/styles.css'
import Img from "gatsby-image"

import {Breadcrumb} from "react-bootstrap";
function HeaderSmall(props) {
    return (
        <div>
            <div className="hero-small-image">
                <Img className="hero-small-img" alt="client_image" fluid={props.img}/>
                <span className="hero-small-content">
<div className="hero-small-breadcrumb">

                        <Breadcrumb.Item className="hero-small-breadcrumb-item" href="/" >Home</Breadcrumb.Item>

                        <Breadcrumb.Item className="hero-small-breadcrumb-item" active>{props.breadcrumb}</Breadcrumb.Item>
                        </div><br/>

                    {props.text}</span>
            </div>
        </div>
    )
}

export default HeaderSmall
