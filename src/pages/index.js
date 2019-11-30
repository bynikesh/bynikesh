import React, { Component } from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"
import bgimage from "../images/bac.jpg"
import cookieimg from "../images/cookies.png"
import namaste from "../images/namaste.svg"
import Typical from "react-typical"
import "./index.css"
class IndexPage extends React.Component {
  componentDidMount() {
    let spans = document.querySelectorAll(".word span")
    spans.forEach((span, idx) => {
      span.addEventListener("click", e => {
        e.target.classList.add("active")
      })
      span.addEventListener("animationend", e => {
        e.target.classList.remove("active")
      })

      // Initial animation
      setTimeout(() => {
        span.classList.add("active")
      }, 1050 * (idx + 1))
    })
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" />

        <div>
          {/* Home Section */}
          <div
            className="pt-home"
            style={{ backgroundImage: `url(${bgimage})`, opacity: 0.7 }}
          >
            {/* Particles */}
            <div id="particles-js" />
            <section>
              {/* Cookie-banner */}
              <div className="cookie-banner">
                <div className="text">
                  <p>
                    Yes this website uses f***ing{" "}
                    <a href>
                      {" "}
                      <img src={cookieimg} alt="Kiwi standing on oval" />
                      cookies
                    </a>
                  </p>
                </div>
              </div>
              {/* Banner */}
              <div className="banner">
                <div className="word">
                  <span>N</span>
                  <span>I</span>
                  <span>K</span>
                  <span>E</span>
                  <span>S</span>
                  <span>H</span>
                  <span> </span>
                  <span>A</span>
                  <span>D</span>
                  <span>H</span>
                  <span>I</span>
                  <span>K</span>
                  <span>A</span>
                  <span>R</span>
                  <span>I</span>
                </div>
                {/* <div class="cookie-banner">
                        asdsada
                      </div> */}
                {/* <h1>Nikesh Adhikari</h1> */}
                <p className="cd-headline rotate-1">
                  Namaste <img src={namaste} width={30} alt="" />{" "}
                  <span className="cd-words-wrapper">
                    <Typical
                      wrapper="p"
                      loop={Infinity}
                      steps={[
                        " I am a Freelancer ",
                        1000,
                        "I love <Programming />",
                        1000,
                        "I teach students some time",
                        1000,
                        "Travelling and designing is my hobby",
                        1000,
                        "I started some side hustle",
                        1000,
                        "I began investing and is a crypto enthusiast",
                        1500,
                      ]}
                    />
                  </span>
                </p>
              </div>
              {/* Language */}
              <div className="lang">
                <ul>
                  <li>
                    <a href="#" className="active">
                      eng
                    </a>
                  </li>
                  <li>
                    <a href="#">nep</a>
                  </li>
                  <li>
                    <a href="#">hindi</a>
                  </li>
                </ul>
              </div>
              {/* Social */}
              <div className="social">
                <ul>
                  <li>
                    <a href="#" alt="facebook ">
                      {/* <i className="fab fa-facebook-f" /> */}
                      <img src="https://img.icons8.com/nolan/32/000000/facebook-new.png"></img>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/bynikesh" alt="twitter touch">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" alt="instagram">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#" alt="youtube channel ">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/bynikesh" alt="github repo">
                      <i className="fab fa-github-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.behance.net/bynikesh/" alt="behance">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@bynikesh" alt="medium blog">
                      <i className="fab fa-medium" />
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    )
  }
}
export default IndexPage

