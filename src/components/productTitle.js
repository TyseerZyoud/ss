import React from 'react'
import { Link } from 'gatsby'

const ProductTitle = ({ id, name }) => (
  <Link to={`/product/${id}`}>
    <h3>{name}</h3>
  </Link>
)

export default ProductTitle
