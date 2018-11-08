import React from 'react'

const ProductDetails = ({ name, brand, price, description, image }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>Price: ${price}</div>
      <div>brand: {brand}</div>
      <p>{description}</p>
      <img src={image} alt="Product image" />
    </div>
  )
}

export default ProductDetails
