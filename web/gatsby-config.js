// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

const clientConfig = require("./client-config")

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  siteMetadata: {
    title: `Neem Website`,
    description: `Resourcing Consulting Development Company in UK`,
    author: `@gatsbyjs Neem Development Team`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // defaultCrumb: optional To create a default crumb
        // see Click Tracking default crumb example below
        defaultCrumb: {
          location: {
            pathname: "/",
          },
          crumbLabel: "Home",
          crumbSeparator: " > ",
        },
        // usePathPrefix: optional, if you are using pathPrefix above
        usePathPrefix: "/blog",
      },
    },

    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,

    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
        graphqlTag: "default",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Neem Consulting Website`,
        short_name: `Neem`,
        start_url: `/`,
        background_color: `#DD4027`,
        theme_color: `#DD4027`,
        display: `standalone`,
        icon: `src/assets/media/favicon-1.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
