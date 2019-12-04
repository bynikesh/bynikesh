import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"
const portfolio = () => (
  <Layout>
    <SEO title="About: nikesh Adhikari" />
    <div className="">
      <div
        className="page portfolio"
        style={{
          opacity: "0.7",
        }}
        data-simplebar
      >
        <section className="container">
          {/* Section Title */}
          <div className="header-page mt-70 mob-mt">
            <h2>Portfolio</h2>
            <span />
          </div>
          {/* Portfolio Filter Row Start */}
          <div className="row mt-100">
            <div className="col-lg-12 col-sm-12 portfolio-filter">
              <ul>
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".design">Design</li>
                <li data-filter=".development">Development</li>
              </ul>
            </div>
          </div>
          {/* Portfolio Item Row Start */}
          <div className="row portfolio-items mt-100 mb-100">
            {/* Portfolio Item */}
            <div className="item col-lg-4 col-sm-6 design">
              <figure>
                <img alt="" src="img/portfolio/Home.jpg" />
                <figcaption>
                  <h3>FantasyClans</h3>
                  <p>Web Design</p>
                  <i className="fas fa-image" />
                  <a className="image-link" href="img/portfolio/Home.jpg" />
                </figcaption>
              </figure>
            </div>
            {/* Portfolio Item */}
            <div className="item col-lg-4 col-sm-6 design">
              <figure>
                <img alt="" src="img/portfolio/home-3.jpg" />
                <figcaption>
                  <h3>Save Cash</h3>
                  <p>Design</p>
                  <i className="fas fa-image" />
                  <a className="image-link" href="img/portfolio/home-3.jpg" />
                </figcaption>
              </figure>
            </div>
            {/* Portfolio Item */}
            <div className="item col-lg-4 col-sm-6 development">
              <figure>
                <img alt="" src="img/portfolio/getmedrone.gif" />
                <figcaption>
                  <h3>getmedrone</h3>
                  <p>Development</p>
                  <i className="fas fa-video" />
                  <a
                    className="image-link"
                    href="img/portfolio/getmedrone.gif"
                  />
                </figcaption>
              </figure>
            </div>
            {/* Portfolio Item */}
            {/* <div class="item col-lg-4 col-sm-6 design">
                  <figure>
                    <img alt="" src="img/portfolio/img-8.jpg" />
                    <figcaption>
                      <h3>Project Name</h3>
                      <p>Brand</p>
                      <i class="fas fa-image"></i>
                      <a
                        class="image-link"
                        href="img/portfolio/img-8.jpg"
                      ></a>
                    </figcaption>
                  </figure>
                </div> */}
            {/* Portfolio Item */}
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default portfolio
