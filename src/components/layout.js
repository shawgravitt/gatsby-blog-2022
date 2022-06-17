import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import Navigation from "./navigation"
import Promotion from "./promotion"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let mainHeader

    if (location.pathname === rootPath) {
      mainHeader = (
        <h1 style={{fontSize: `2rem`}}>
          Shaw's Blog
        </h1>
      )
    } else {
      mainHeader = (
        <h3 style={{fontSize: `2rem`}}>
          Shaw's Blog
        </h3>
      )
    }

    return (
      <Wrapper className="body">
        <header className="mainHeader">
          <StickyWrapper className="sticky-header">
            <div className="site-heading">
              <Link to="/">
                <Container>
                  <StaticImage src="../images/avatar.jpg" 
                    placeholder="TRACED_SVG"
                    layout="constrained"
                    width={125}
                    height={125}
                    alt="This is me, Shaw Gravitt" 
                    style={{marginRight: 15, borderRadius: `66% 33% 33%`}} />
                  {mainHeader}
                </Container>
              </Link>
            </div>
            <Navigation />
          </StickyWrapper>
        </header>
        
        <Main>{children}</Main>

        <Promotion  location={location} />
        
        <Footer>
          © {new Date().getFullYear()}, <Link to="/colophon">Colophon</Link>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`
const StickyWrapper = styled.div`
  position: sticky;
  top: 25px;
`
const Main = styled.main`
  padding: 35px 10px;
`

const Container = styled.div`
  text-align: center;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
