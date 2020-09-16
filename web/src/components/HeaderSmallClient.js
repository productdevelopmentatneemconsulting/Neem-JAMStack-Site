import React from 'react'
import '../assets/css/styles.css'

import {Breadcrumb} from "react-bootstrap";
function HeaderSmallClient(props) {
    return (
        <div>
            <div className="hero-small-image">
                <img className="hero-small-img" alt="client_image" src={props.img}/>
                <span className="hero-small-content">
                <div className="hero-small-breadcrumb">

                        <Breadcrumb.Item className="hero-small-breadcrumb-item" href="/" >Home</Breadcrumb.Item>
                        <Breadcrumb.Item className="hero-small-breadcrumb-item" href="/Portfolio" >Client</Breadcrumb.Item>

                        <Breadcrumb.Item className="hero-small-breadcrumb-item" active>{props.breadcrumb}</Breadcrumb.Item>
                        </div><br/>

                {props.text}</span>
            </div>
        </div>
    )
}

export default HeaderSmallClient
