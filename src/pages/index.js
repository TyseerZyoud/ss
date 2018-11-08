import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Welcome!!</h1>
    <Link to="/products/">Go to product listing</Link>
  </Layout>
)

export default IndexPage

// const LISTING_QUERY = graphql`
//   query ProductsListing {
//     allProduct {
//       edges {
//         node {
//           id
//           name
//           brand
//           description
//           categories
//           price
//           image
//           rating
//         }
//       }
//     }
//   }
// `

// const IndexPage = () => (
//   <StaticQuery
//     query={LISTING_QUERY}
//     render={({ allProduct }) => (
//       <Layout>
//         {allProduct.edges.map(({ node }) => (
//           <div key={node.id}>
//             <ProductTitle id={node.id} name={node.name} />
//           </div>
//         ))}
//       </Layout>
//     )}
//   />
// )

// export default IndexPage
