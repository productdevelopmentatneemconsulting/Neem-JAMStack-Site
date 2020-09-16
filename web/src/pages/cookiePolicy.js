import React from 'react'
import {graphql} from "gatsby"
import Header from '../components/header';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet"


import HeaderImage from '../assets/media/client-page-header.jpg'
import HeaderSmallClient from '../components/HeaderSmallClient';
import SEO from '../components/seo';
const BlockContent = require('@sanity/block-content-to-react')

const cookiePolicy = ({data, headerData}) => (
    <div>
        <SEO
            title="Neem Cookie Policy"
            keywords={[`Consulting in UK`, `Technology in UK`, `Resourcing in UK`]}/>
            <Helmet>
            <meta charSet="utf-8" />
            <title>Neem Policy</title>
           
          </Helmet>
        <Header/>

        <HeaderSmallClient
            text={data.sanityPolicy.heading}
            breadcrumb={data.sanityPolicy.heading}
            img={HeaderImage}/>

        <div style={{
            margin: 30
        }}>
            <BlockContent blocks={data.sanityPolicy._rawBody}/>

        </div>

        <Footer/>
    </div>

)
export const data = graphql `
    query cookiePolicy {
        sanityPolicy(slug: {current: {eq: "cookie-policy"}}) {
            id
            heading
            _rawBody
          }
      }

  `

export default cookiePolicy
