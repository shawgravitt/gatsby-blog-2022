import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Newsletter from "../components/newsletter"

class Subscribe extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Subscribe to my email list" />
        <h1>Sign up for Updates</h1>
        <p>If you're into my stories, sign up for my email list below and I'll send you the new posts right when they come out. That’s the only thing I use the list for–and since my posting schedule isn’t exactly…regular…this is the best way to stay up-to-date with my posts.</p>

        <p>Never spam. Unsubscribe whenever you want. I will never sell your information.</p>
        <Newsletter />
      </Layout>
    )
  }
}

export default Subscribe

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`