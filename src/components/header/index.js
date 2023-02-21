import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { HeaderWrapper, HeaderRight } from "./style"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Link to="/" className="logo">
      <StaticImage alt="logo" src="../../images/logo.svg" />
    </Link>
    <HeaderRight>
      <Link to="/" className="link">
        About
      </Link>
      <Link to="/protfolio" className="link">
        Projects
      </Link>
      <Link to="/blog" className="link">
        Blog
      </Link>
      <Link to="/contact" className="link">
        Contact
      </Link>
    </HeaderRight>
  </HeaderWrapper>
)

export default Header
