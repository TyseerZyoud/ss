import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'

const NavLink = ({ status, text, url }) => {
  if (!status) {
    return (
      <Link to={url}>
        {text} > {url}
      </Link>
    )
  }

  return (
    <span>
      {text} > {url}
    </span>
  )
}

export default class Products extends React.Component {
  render() {
    const { group, index, first, last } = this.props.pageContext

    const previousUrl =
      index - 1 <= 1 ? '/products' : `/products/${(index - 1).toString()}`
    const nextUrl = `/products/${(index + 1).toString()}`

    return (
      <Layout>
        {group.map(({ node }) => {
          return (
            <Link key={node.id} to={`/product/${node.id}`}>
              <div>{node.name}</div>
            </Link>
          )
        })}

        <div className="previousLink">
          <NavLink
            status={first}
            url={previousUrl}
            text="Go to Previous Page"
          />
        </div>

        <div className="nextLink">
          <NavLink status={last} url={nextUrl} text="Go to Next Page" />
        </div>
      </Layout>
    )
  }
}
