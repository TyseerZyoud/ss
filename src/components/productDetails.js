import React from 'react'

const ProductDetails = ({ name, brand, price, description }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>Price: ${price}</div>
      <div>brand: {brand}</div>
      <p>{description}</p>
    </div>
  )
}

export default ProductDetails
