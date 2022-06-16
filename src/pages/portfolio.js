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
        <SEO title="Shaw Gravitt's development portfolio" />
        <h1>Projects</h1>
        <p>For the past 6 year I have worked as the Lead developer for a small Shopify agency in Atlanta, GA. Below are a few of the dozens of sites I've built over the years.</p>
        <ul>
          {/* <li>
            <a href="https://www.simplystaging.com/" rel="noopener noreferrer" target="_blank" link-name="Simply Staging">Simply Staging - Coming Soon</a>
          </li> */}
          <li>
            <a href="https://poppyhandcraftedpopcorn.com/" rel="noopener noreferrer" target="_blank" link-name="Poppy Handcrafted Popcorn - Shopify Plus">Poppy Handcrafted Popcorn - Shopify Plus </a>
          </li>
          <li>
            <a href="https://smockingbirdkids.com/" rel="noopener noreferrer" target="_blank" link-name="Smockingbird Kids">Smockingbird Kids - Shopify Plus</a>
          </li>
          <li>
            <a href="https://www.waitingonmarthahome.com/" rel="noopener noreferrer" target="_blank" link-name="Waiting on Martha">Waiting on Martha - Shopify Plus </a>
          </li>

          <li>
            <a href="https://tulerie.com/" rel="noopener noreferrer" target="_blank" link-name="Tulerie">Tulerie</a>
          </li>
           <li>
            <a href="https://rosannebeck.com/" rel="noopener noreferrer" target="_blank" link-name="Rosannbeck Collections">Rosannbeck Collections</a>
          </li>
          
          <li>
            <a href="https://sweetolivefarm.org/" rel="noopener noreferrer" target="_blank" link-name="Sweet Olive Farm">Sweet Olive Farm </a>
          </li>
          <li>
            <a href="https://treehousekidandcraft.com/" rel="noopener noreferrer" target="_blank" link-name="Treehouse Kid and Craft">Treehouse Kid and Craft </a>
          </li>
          <li>
            <a href="https://brutemagnetics.com/" rel="noopener noreferrer" target="_blank" link-name="Brute Magnetics">Brute Magnetics </a>
          </li>
          <li>
            <a href="https://www.squiltmusic.com/" rel="noopener noreferrer" target="_blank" link-name="Squilt Music">Squilt Music </a>
          </li>
          <li>
            <a href="https://blablakids.com/" rel="noopener noreferrer" target="_blank" link-name="Blabla Kids">Blabla Kids </a>
          </li>
          <li>
            <a href="https://shop17bbq.com/" rel="noopener noreferrer" target="_blank" link-name="17th Street BBQ">17th Street BBQ </a>
          </li> 
          <li>
            <a href="https://www.highlanddiamond.com/" rel="noopener noreferrer" target="_blank" link-name="Highland Diamond">Highland Diamond </a>
          </li>
          <li>
            <a href="https://edgar-reeves.com/" rel="noopener noreferrer" target="_blank" link-name="Edgar Reeves">Edgar Reeves</a>
          </li>
          <li>
            <a href="https://talorton.com/" rel="noopener noreferrer" target="_blank" link-name="TA Lorton">TA Lorton </a>
          </li>
          



          {/* <li>
            <a href="" rel="noopener noreferrer" target="_blank" link-name=""> </a>
          </li> */}
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
