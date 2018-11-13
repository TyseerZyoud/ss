import React from 'react'
import { Link } from 'gatsby'

// const googleTranslateElementInit = () =>
//   new google.translate.TranslateElement(
//     {
//       pageLanguage: 'en',
//       layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
//     },
//     'google_translate_element'
//   )

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ height: 200, width: 200, backgroundColor: 'orange' }}>
        <div id="google_translate_element" />
        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb={() => {
          new google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
          )
        }}"
        />
      </div>
    </div>
  </div>
)

export default Header
