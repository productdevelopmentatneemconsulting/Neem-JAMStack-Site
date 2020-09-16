
const path = require(`path`)


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/pages/ClientPage.js`)

  return graphql(`
    query loadPagesQuery  {
      allSanityClient {
        edges {
          node {
              id
            name
              slug{
                  current
              }

          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allSanityClient.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `project/${edge.node.slug.current}`,
        component: blogPostTemplate,
        context: {
          pagePath: edge.node.slug.current
        },
      })
    })
  })
}