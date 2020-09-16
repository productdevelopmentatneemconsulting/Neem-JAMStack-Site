import {Link} from "gatsby"

import React ,{Component}from "react"
import {Helmet} from "react-helmet";


import Logo from '../assets/media/logowhite.png'
import { Navbar , Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';






class Header extends Component {
    componentDidMount() {
        document.addEventListener("scroll", () => {
        const backgroundcolor = window.scrollY < 70 ? "transparent" : "rgba(0,0,0,0.9)";
        

          document.getElementById("navbar-header").style.backgroundColor = backgroundcolor;
        
        });
      }
render(){
    return(
    <Navbar className="navbar-topnav" id="navbar-header" variant="dark" fixed="top" expand="lg">
    <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Helmet>
    <Navbar.Brand><Link to="/"><img alt="company-logo"className="navbar-topnav-img" src={Logo}/></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">

       <Link to="/"> Home</Link>


        <Link to="/AboutUs"> About Us</Link>

        <Link to="/Portfolio"> Client Showcase</Link>

        <Link to="/ContactUs"> Contact Us</Link>


      </Nav>

    </Navbar.Collapse>
  </Navbar>
    )}
}




export default Header
