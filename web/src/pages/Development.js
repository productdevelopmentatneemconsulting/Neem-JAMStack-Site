import React from 'react'
import { Link, graphql } from "gatsby"

import Header from '../components/header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import SEO from '../components/seo';
import HeaderSmall from '../components/HeaderSmall';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Helmet } from "react-helmet"
import "slick-carousel/slick/slick-theme.css";
import BigCard from '../components/BigCard';
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  arrows:true,

  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
const Development = ({data , headerData , location}) => (
<div>

{console.log(headerData)}
{console.log(location)}
<SEO title="Neem Development" keywords={[`Consulting in UK`, `Technology in UK`, `Resourcing in UK`]} />
<Helmet>
<meta charSet="utf-8" />
<title>Neem Development</title>

</Helmet>
<Header/>
{data.allSanityHeaderSmall.edges.map(headersmall=>(
  <div  key={headersmall.node.id}>

    <HeaderSmall loca={location}text={headersmall.node.headerText} breadcrumb={headersmall.node.breadcrumb} img={headersmall.node.headerImage.asset.fluid}/>
    </div>
))}
{data.allSanityDetail.edges.map(detail=>(
  <div key={detail.node.id}>
<BigCard tagline={detail.node.tagline} title={detail.node.headerText} img={detail.node.imageShow.asset.fluid} text={detail.node._rawDescription}/>
  </div>
))}
<Slider style={{margin:40}}{...settings}>
{data.allSanityClient.edges.map(client=>(

    <div key={client.node.id} >
    <Link  to={'/project/'+client.node.slug.current+''}><Card title={client.node.name} img={client.node.preview.asset.fluid}/>
    </Link>
    <br/>
    </div>


       ))}
       </Slider>
<Footer/>
</div>

)
export const data = graphql`
    query MyQueryandMyQueryandMyQueryandMyQuery {
      allSanityService(filter: {service_title: {in: ["Development","Resourcing","Consulting"]}}) {
        edges {
          node {
            _id
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
        allSanityHeaderSmall(filter: {pageText: {eq: "Development"}}) {
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
        allSanityClient {
            edges {
              node {
                  id
                name
                slug{
                  current
                }
                  preview{
                      asset{
                        fluid(maxWidth: 700) {
                          ...GatsbySanityImageFluid
                        }
                      }
                  }
              }
            }
          },

        allSanityDetail(filter: {pageHeader: {in: "Development"}}) {
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

export default Development
