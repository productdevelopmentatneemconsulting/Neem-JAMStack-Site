import React from "react"
import HeaderSmallClient from "../components/HeaderSmallClient"
import CardMid from "../components/Card"
import DescClient from "../components/DescClient"
import DescHead from "../components/DescHead"
import { graphql } from "gatsby"
import "../assets/css/styles.css"
import Header from "../components/header"
import { Helmet } from "react-helmet"

import Footer from "../components/Footer"
import Grid from "@material-ui/core/Grid"
import SEO from "../components/seo"
import HeaderImage from "../assets/media/client-page-header.jpg"
function ClientPage({ data }) {
  return (
    <div>
      <SEO
        title="Neem Clients"
        keywords={[`Consulting in UK`, `Technology in UK`, `Resourcing in UK`]}
      />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Neem Clients</title>
        <link rel="canonical" href="https://www.neemconsulting.com/Portfolio" />
      </Helmet>
      <Header />
      <HeaderSmallClient
        text={data.sanityClient.name}
        breadcrumb={data.sanityClient.name}
        img={HeaderImage}
      />
      <DescHead text={data.sanityClient.name} />
      <hr className="line-art" />
      <DescClient text={data.sanityClient._rawBody} />
      <Grid container>
        <Grid item md={4} xs={12}>
          <CardMid img={data.sanityClient.image1.asset.fluid} />
        </Grid>
        <Grid item md={4} xs={12}>
          <CardMid img={data.sanityClient.image2.asset.fluid} />
        </Grid>
        <Grid item md={4} xs={12}>
          <CardMid img={data.sanityClient.image3.asset.fluid} />
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}
export const data = graphql`
  query($pagePath: String) {
    sanityClient(slug: { current: { eq: $pagePath } }) {
      name
      _rawBody
      image1 {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
      image2 {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
      image3 {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
      slug {
        current
      }
    }
  }
`
export default ClientPage
