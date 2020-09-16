import React from "react"
import {Link} from "gatsby"
import Header from '../components/header';
import Footer from '../components/Footer';
import HeaderImage from '../assets/media/client-page-header.jpg'
import HeaderSmallClient from '../components/HeaderSmallClient'
import '../assets/css/styles.css';
const NotFoundPage = () => (

   <div>
   <Header/>
   <HeaderSmallClient text={"Oops You are Lost"} breadcrumb={"Not Found"} img={HeaderImage}/>
   <div className="not-found-div">
<center>Oops! That page can’t be found. Click here to continue Browsing : <Link to="/">Home</Link></center>

   </div>
   <Footer/>
   </div>
)

export default NotFoundPage
