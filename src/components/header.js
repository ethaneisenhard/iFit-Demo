import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DarkModeToggle from "../components/darkModeToggle"
import { slide as Menu } from "react-burger-menu"

const MobileMenu = () => {
  return (
    <Menu right>
      <Link to="/about/">About</Link>
      <Link to="/services/">Services</Link>
      <Link to="/career/">Career</Link>
      <Link to="/blog/">Blog</Link>
      <Link to="/contact/">Get Started</Link> 
    </Menu>
  )
}

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-contain">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <nav className="main-nav">
        <MobileMenu />
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
        </ul>
      </nav>
      <DarkModeToggle/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
