import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"
import "../pages/index.css"

const Header = ({ siteTitle, data }) => (
  <>
    {/* Navbar Component*/}

    <div className="header-mobile">
      <a className="header-toggle">
        <i className="fas fa-bars" />
      </a>
      <h2>Bynikesh</h2>
    </div>
    {/* Left Block */}
    <nav className="header-main" data-simplebar>
      {/* Logo */}
      <div className="logo">
        <img alt="bynikesh logo" src={logo} alt="" />
      </div>
      <ul>
        <li data-tooltip="Home" data-position="top">
          <Link to="/" className="icon-h fas fa-housee-damage">
            {" "}
            <img
              alt="home icon"
              src="https://img.icons8.com/nolan/48/000000/home-page.png"
            ></img>{" "}
          </Link>
        </li>
        <li data-tooltip="About" data-position="top">
          <Link to="/about" className="icon-a fas fa-userr-tie">
            <img
              alt="about icon"
              src="https://img.icons8.com/nolan/48/000000/user.png"
            ></img>
          </Link>
        </li>

        <li data-tooltip="Portfolio" data-position="top">
          <Link to="/portfolio" className="icon-a fas fa-userr-tie">
            <img
              alt="portfolio icon"
              src="https://img.icons8.com/nolan/48/000000/code.png"
            ></img>
          </Link>
        </li>
        <li data-tooltip="Blog" data-position="top">
          <Link to="/blog" className="icon-a fas fa-userr-tie">
            <img
              alt="blog icon"
              src="https://img.icons8.com/nolan/48/000000/note.png"
            ></img>
          </Link>
        </li>
        <li data-tooltip="Contact me" data-position="top">
          <Link
            alt="contact icon"
            to="/contact"
            className="icon-a fas fa-userr-tie"
          >
            <img src="https://img.icons8.com/nolan/48/000000/email.png"></img>
          </Link>
        </li>
      </ul>
      {/* copyright */}
      <p>
        {" "}
        <span> © 2019 All rights reserved.</span>{" "}
      </p>{" "}
      {/* Sound wave */}
      {/* <a class="music-bg">
                    <div class="lines">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>su
                      <span></span>
                      <span></span>
                    </div>
                    <p>My Spotify Playlist</p>
                  </a> */}
    </nav>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/BN..png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
