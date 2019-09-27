import React from 'react'
import PropTypes from 'prop-types'

const Schema = ({
  name,
  email,
  url,
  logoUrl: logo,
}) => {
  // see http://schema.org/docs/schemas.html
  // test https://search.google.com/structured-data/testing-tool

  const data = {
    '@context': 'http://schema.org/',
    '@type': type,
    name,
    email,
    logo
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

Schema.propTypes = {
  type: PropTypes.string, // schema type e.g. LocalBusiness
  name: PropTypes.string,
  url: PropTypes.string,
  email: PropTypes.string,
  logoUrl: PropTypes.string
}

export default Schema
