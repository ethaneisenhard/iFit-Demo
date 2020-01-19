import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className = "f-wrapper">
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      © {new Date().getFullYear()}, Built with
          {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
