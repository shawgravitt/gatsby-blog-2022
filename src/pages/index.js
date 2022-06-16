import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"


// import SearchPosts from "../components/searchPosts"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    // const localSearchBlog = data.localSearchBlog

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <ol style={{listStyle: 'none', padding: 0, marginLeft: 0}}>
        {posts.map(post => {
          const title = post.node.frontmatter.title
          const image = getImage(post.node.frontmatter.featuredImage)

          return (
            <li key={post.node.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.node.fields.slug} itemProp="url" style={{textDecoration: `none`}}>
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <ul style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      <li style={{marginBottom: 0}}>
                        <small>{post.node.frontmatter.date}</small><br/>
                      </li>
                      <li>
                        <small>{post.node.timeToRead} minute read</small>
                      </li>
                  </ul>
                </header>
                <section>
                  
                  <GatsbyImage image={image} alt={title} style={{width: `100%`}}/>

                  <div className="article-wrapper" style={{marginTop: 35, marginBottom: 35, overflow: `hidden`, maxHeight: 450}} itemProp="description">
                    <MDXRenderer>{post.node.body}</MDXRenderer>
                  </div>
                  
                  <Link to={post.node.fields.slug} itemProp="url" className="button">
                    <span>Continue Reading...</span>
                  </Link>
                </section>
              </article>
            </li>
          )
        })}
      </ol>




        {/* <Bio /> */}
        {/* <SearchPosts
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        /> */}
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          body
          excerpt(pruneLength: 666)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`
