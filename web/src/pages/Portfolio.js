import React from "react"
import { graphql } from "gatsby"
import Card from "../components/Card"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import Grid from "@material-ui/core/Grid"
import HeaderSmall from "../components/HeaderSmall"
import Desc from "../components/Desc"
const Portfolio = ({ data, headerData }) => (
  <div>
    <SEO
      title="Neem Client Showcase"
      keywords={[`Consulting in UK`, `Technology in UK`, `Resourcing in UK`]}
    />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Neem Portfolio</title>
    </Helmet>
    <Header />
    {data.allSanityHeaderSmall.edges.map(headersmall => (
      <HeaderSmall
        key={headersmall.node.id}
        text={headersmall.node.headerText}
        breadcrumb={headersmall.node.breadcrumb}
        img={headersmall.node.headerImage.asset.fluid}
      />
    ))}
    <Desc text="Check out our growing list of clients and find out more about the work we do..." />
    <Grid container spacing={2}>
      {data.sanityClientSlider.slides.map(client => (
        <Grid item md={3} xs={12}>
          <div key={client.id}>
            <Link to={"/project/" + client.slug.current + ""}>
              <Card title={client.name} img={client.preview.asset.fluid} />
            </Link>
            <br />
          </div>
        </Grid>
      ))}
    </Grid>
    <Footer />
  </div>
)
export const data = graphql`
  query MyQuery {
    allSanityClient {
      edges {
        node {
          id
          name
          preview {
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
    }
    sanityClientSlider(headline: { eq: "Our Clients" }) {
      headline
      slides {
        id
        name
        slug {
          current
        }
        preview {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    allSanityHeaderSmall(filter: { pageText: { eq: "Client" } }) {
      edges {
        node {
          id
          pageText
          headerText
          headerImage {
            asset {
              fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
              }
            }
          }
          breadcrumb
        }
      }
    }
  }
`

export default Portfolio
