import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About Shaw Gravitt" />
        <h1>About me</h1>
        <p>One day I will figure out how to write about myself, but until then here are a few bullet points.</p>
        <ul>
          <li>
            Aspiring Novelist (first book is on the verge of completion).
          </li>
          <li>Raised in north Georgia</li>
          <li>Live in Asheville with my wife, alomost 3 year old, and 13 year old beagle.</li>
          <li>
            Web Developer
          </li>
          <li>I rebuild this site every few years when I want to learn a new web technology.</li>
        </ul>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
