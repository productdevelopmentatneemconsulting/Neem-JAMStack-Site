import React from 'react'
import {  graphql } from "gatsby"
import CardMid from '../components/CardMid';

import Grid from '@material-ui/core/Grid';
import HeaderSmall from '../components/HeaderSmall';
import Header from '../components/header';
import Footer from '../components/Footer';
import SEO from '../components/seo';
import { Helmet } from "react-helmet"
import BigCard from '../components/BigCard';
const AboutUs = ({data , headerData}) => (
<div>
<SEO title="Neem About" keywords={[`Consulting in UK`, `Technology in UK`, `Resourcing in UK`]} />
<Helmet>
<meta charSet="utf-8" />
<title>Neem About Us</title>

</Helmet>
<Header/>
{data.allSanityHeaderSmall.edges.map(headersmall=>(
  <div  key={headersmall.node.id}>

    <HeaderSmall text={headersmall.node.headerText} breadcrumb={headersmall.node.breadcrumb} img={headersmall.node.headerImage.asset.fluid}/>
    </div>
))}
{data.allSanityDetail.edges.map(detail=>(
  <div key={detail.node.id}>
<BigCard tagline={detail.node.tagline} title={detail.node.headerText} img={detail.node.imageShow.asset.fluid} text={detail.node._rawDescription}/>
  </div>
))}

<Grid container  maxWidth="sm" >
{data.allSanityService.edges.map(client=>(



    <Grid item md={4}xs={12}  className="card-mid-page"  key={client.node._id}>

{console.log(client.node._rawBody[0])}
    <CardMid title={client.node.service_title} img={client.node.image1.asset.url} content={client.node._rawBody[0].children[0].text} url={client.node.link}/>
    <br/>

    </Grid>

       ))}
</Grid>

<Footer/>
</div>

)
export const data =
graphql`
    query MyQueryandMyQuery {
      allSanityService(filter: {service_title: {in: ["Development","Resourcing","Consulting"]}}) {
        edges {
          node {
            _id
            link
            image1 {
              asset {
                url
              }
            }
            service_title
            _rawBody
          }
        }
      },
        allSanityHeaderSmall(filter: {pageText: {eq: "About Us"}}) {
            edges {
              node {
                id
                pageText
                headerText
                headerImage{
                  asset{
                    fluid(maxWidth: 700) {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
                breadcrumb
              }

            }
        },
        allSanityDetail(filter: {pageHeader: {in: "About Us"}}) {
          edges {
            node {
              id
              tagline
              headerText
              _rawDescription
              imageShow {
                asset {
                  fluid(maxWidth: 700) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }

      }

  `

export default AboutUs
