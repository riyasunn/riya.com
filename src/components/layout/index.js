import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import "../css/global.css"
import {LayoutWrapper, MainWrapper, FooterWrapper} from'./style';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutWrapper>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <MainWrapper>
          <h1>{pageTitle}</h1>
          {children}
        </MainWrapper>
        <FooterWrapper>
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </FooterWrapper>
    </LayoutWrapper>
  )
}

export default Layout
