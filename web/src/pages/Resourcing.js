import React from 'react'
import { Link, graphql } from "gatsby"
import Header from '../components/header';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet"
import Card from '../components/Card';

import HeaderSmall from '../components/HeaderSmall';
import SEO from '../components/seo';
import BigCard from '../components/BigCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
const Resourcing = ({data , headerData}) => (
<div>
<SEO title="Neem Resourcing" keywords={[`Consulting in UK`, `Technology in UK`, `Resourcing in UK`]} />
<Helmet>
<meta charSet="utf-8" />
<title>Neem Resourcing</title>

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
    query MyQueryandMyQueryandMyQuery {
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
        allSanityHeaderSmall(filter: {pageText: {eq: "Resourcing"}}) {
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
        allSanityDetail(filter: {pageHeader: {in: "Resourcing"}}) {
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
          }

      }

  `

export default Resourcing
