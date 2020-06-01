import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import IFitLogo from "../images/icons/iFitLogo.js"
// import { slide as Menu } from "react-burger-menu"

// const MobileMenu = () => {
//   return (
//     <Menu right>
//       <Link to="/about/">About</Link>
//       <Link to="/services/">Services</Link>
//       <Link to="/career/">Career</Link>
//       <Link to="/blog/">Blog</Link>
//       <Link to="/contact/">Get Started</Link>
//     </Menu>
//   )
// }

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div className="header-contain">
        <div className="header-top">
          <nav className="header-top-nav">
            <Link to="/">Blog</Link>
            <Link to="/">Nourish</Link>
            <Link to="/">Shop</Link>
          </nav>
        </div>
        <div className="header-bottom">
          <Link to="/" title={siteTitle}>
            <IFitLogo />
          </Link>
          <nav className="main-nav">
            <ul>
              <li>
                <Link to="/">Exercise</Link>
              </li>
              <li>
                <Link to="/">Nutrition</Link>
              </li>
              <li>
                <Link to="/">Activity</Link>
              </li>
              <li>
                <Link to="/">Sleep</Link>
              </li>
            </ul>
          </nav>
          <div className="sign-up-btn-container">
            <button className="btn">Sign Up</button>
          </div>
        </div>
        {/* <DarkModeToggle/> */}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
