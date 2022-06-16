import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Colophon extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Colophon" />
        <h1>About this site</h1>
        <ul>
          <li>No tracking, your privacy is valuable.</li>
          <li>built with Gatsbyjs, a react static site genrator.</li>
          <li>Use Typography.js. The header font is Varela Round and the body font is Lora. Typography is important but I struggle knowing what looks good.</li>
        </ul>
      </Layout>
    )
  }
}

export default Colophon

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
