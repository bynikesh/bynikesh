import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/BN..png"

const Header = ({ siteTitle, data }) => (
  <div>
    {/* Navbar Component*/}
    <div id="home">
      <div id="about">
        <div id="resume">
          <div id="portfolio">
            <div id="blog">
              <div id="contact">
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
                    <img src={logo} alt="" />
                  </div>
                  <ul>
                    <li>
                      <Link to="/" className="icon-h fas fa-housee-damage">
                        {" "}
                        <img src="https://img.icons8.com/nolan/64/000000/home-page.png"></img>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="icon-a fas fa-userr-tie">
                        <img src="https://img.icons8.com/nolan/64/000000/user.png"></img>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="icon-a fas fa-userr-tie">
                        <img src="https://img.icons8.com/nolan/64/000000/email.png"></img>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="icon-a fas fa-userr-tie">
                        <img src="https://img.icons8.com/nolan/64/000000/code.png"></img>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="icon-a fas fa-userr-tie">
                        <img src="https://img.icons8.com/nolan/64/000000/note.png"></img>
                      </Link>
                    </li>
                  </ul>
                  {/* copyright */}
                  <p> © 2018 All rights reserved.</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
