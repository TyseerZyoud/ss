const algoliasearch = require('algoliasearch')
const crypto = require('crypto')
const path = require(`path`)
const createPaginatedPages = require('gatsby-paginate')

const ALGOLIA_API_KEY = 'c5bff1bb0a5abeb964ef55e8ae9cd153'
const ALGOLIA_INDEX = 'dev_PRODUCTS'
const ALGOLIA_APP_ID = 'BD8VPPRIEE'

const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY)
const algoliaIndex = algoliaClient.initIndex(ALGOLIA_INDEX)

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  return new Promise((resolve, reject) => {
    algoliaIndex.search(
      {
        query: '', //fetch all
        hitsPerPage: 1000,
      },
      function searchDone(err, content) {
        if (err) {
          console.log('\nError')
          console.log(err)
          reject()
        } else {
          content.hits.forEach(content => {
            const productNode = {
              id: content.objectID,
              parent: null,
              children: [],
              internal: {
                type: `Product`,
                contentDigest: crypto
                  .createHash(`md5`)
                  .update(JSON.stringify(content))
                  .digest(`hex`),
              },
              name: content.name,
              brand: content.brand,
              description: content.description,
              categories: content.categories,
              price: content.price,
              image: content.image,
              rating: content.rating,
            }
            createNode(productNode)
          })
          resolve()
        }
      }
    )
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allProduct {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `).then(result => {
      createPaginatedPages({
        edges: result.data.allProduct.edges,
        createPage: createPage,
        pageTemplate: 'src/templates/products.js',
        pageLength: 10, // This is optional and defaults to 10 if not used
        pathPrefix: 'products', // This is optional and defaults to an empty string if not used
      })

      result.data.allProduct.edges.forEach(({ node }) => {
        createPage({
          path: `product/${node.id}`,
          component: path.resolve(`./src/pages/product.js`),
          context: {
            productId: node.id,
          },
        })
      })
      resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
}
