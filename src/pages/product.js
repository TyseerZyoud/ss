import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ProductDetails from '../components/productDetails'

export default class Product extends Component {
  render() {
    const {
      data: {
        product: { name, brand, price, description, image },
      },
    } = this.props
    console.log(this.props)
    return (
      <Layout>
        <ProductDetails {...{ name, brand, price, description, image }} />
      </Layout>
    )
  }
}

export const query = graphql`
  query ProductDetails($productId: String) {
    product(id: { eq: $productId }) {
      id
      name
      brand
      price
      description
      image
    }
  }
`
