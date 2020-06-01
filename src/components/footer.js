import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SelectLanguage from "./select-language"
import twitter from "../images/icons/social/twitter.svg"
import pinterest from "../images/icons/social/pinterest.svg"
import instagram from "../images/icons/social/instagram.svg"
import youtube from "../images/icons/social/youtube.svg"
import facebook from "../images/icons/social/facebook.svg"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="f-contain">
      <div className="f-main-nav">
        <nav>
          <div className="f-main-nav-column f-main-left">
            <h5>Company</h5>
            <Link to ="/">About</Link>
            <Link to ="/">Contact US</Link>
            <Link to ="/">Careers</Link>
          </div>
          <div className="f-main-nav-column f-main-middle">
            <h5>About</h5>
            <Link to ="/">Log In</Link>
            <Link to ="/">Create Account</Link>
          </div>
          <div className="f-main-nav-column f-main-right">
            <h5>Support</h5>
            <Link to ="/">Support</Link>
            <Link to ="/">Accessibility</Link>
          </div>
        </nav>
      </div>
      <div className="f-social-nav">
        <nav>
            <div className="social-border-wrap">
              <Link to ="/">
                <img src={youtube} alt=""/>
              </Link>
            </div>
            <div className="social-border-wrap">
              <Link to ="/">
                <img src={pinterest} alt=""/>
              </Link>
            </div>
            <div className="social-border-wrap">
              <Link to ="/">
               <img src={facebook} alt=""/>
              </Link>
            </div>
            <div className="social-border-wrap">
              <Link to ="/">
                <img src={twitter} alt=""/>
              </Link>
            </div>
            <div className="social-border-wrap">
              <Link to ="/">
                <img src={instagram} alt=""/>
              </Link>
            </div>
        </nav>
      </div>
      <div className="f-terms">
        <SelectLanguage />
        <nav>
          <span>© iFit.com. All Rights Reserved.</span>
          <Link to ="/">Privacy Policy</Link>
          <Link to ="/">Terms of Use</Link>
        </nav>
        <div className="spacer"></div>
      </div>
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
