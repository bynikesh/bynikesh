import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
const resume = () => (
  <Layout>
    <SEO title="About: nikesh Adhikari" />
    <div
      className="page "
      style={{
        opacity: "0.7",
        marginLeft: "145px",
      }}
      data-simplebar
    >
      <section className="container">
        {/* Section Title */}
        <div className="header-page mt-70 mob-mt">
          <h2>Resume</h2>
          <span />
        </div>
        {/* Experience & Education Row Start */}
        <div className="row mt-100">
          {/* Experience Column Start */}
          <div className="col-lg-6 col-sm-12">
            {/* Header Block */}
            <div className="header-box mb-50">
              <h3>What I Work On</h3>
            </div>
            <div className="experience box">
              {/* Experience Item */}
              {/* Experience Item */}
              <div className="item">
                <div className="main">
                  <h4>Fornt-End Development</h4>
                  <p>
                    <a href="#" className="icon-h fab fa-html5" /> Html5
                    <a href="#" className="icon-h fab fa-css3" /> CSS3
                    <a href="#" className="icon-h fab fa-js-square" />{" "}
                    Javascript
                    <a href="#" className="icon-h fab fa-vuejs" /> Vue JS
                  </p>
                </div>
              </div>
              {/* Experience Item */}
              <div className="item">
                <div className="main">
                  <h4>Web Development</h4>
                  <p>
                    <a href="#" className="icon-h fab fa-node" /> Node Js
                    <a href="#" className="icon-h fab fa-python" /> python
                    <a href="#" className="icon-h fab fa-php" /> Php
                    <a href="#" className="icon-h fab fa-sql" /> My SQL
                    <a href="#" className="icon-h fab fa-sql" />
                    Mongo DB
                  </p>
                </div>
              </div>
              {/* Experience Item */}
              <div className="item">
                <div className="main">
                  <h4>Mobile Application</h4>
                  <p>
                    <a href="#" className="icon-h fab fa-apple" /> Swift
                  </p>
                </div>
              </div>
              {/* Experience Item */}
              <div className="item">
                <div className="main">
                  <h4>CMS</h4>
                  <p>
                    <a href="#" className="icon-h fab fa-wordpress" /> wordpress
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Education Column Start */}
          <div className="col-lg-6 col-sm-12">
            {/* Header Block */}
            <div className="header-box mb-50 mob-box-mt">
              <i className="fas fa-user-graduate" /> <h3>Education</h3>
            </div>
            <div className="experience box">
              {/* Education Item */}
              <div className="item">
                <div className="main">
                  <h4>Post Graduation</h4>
                  <p>
                    <i className="fas fa-university" /> University Of
                    Technology, Sydney
                  </p>
                </div>
                <p>
                  <i className="far fa-calendar-alt" />
                  2019 - 2017 | Software Development
                </p>
              </div>
              {/* Education Item */}
              <div className="item">
                <div className="main">
                  <h4>Under Graduation</h4>
                  <p>
                    <i className="fas fa-university" /> Leeds Beckett
                    University, London
                  </p>
                </div>
                <p>
                  <i className="far fa-calendar-alt" />
                  2016 - 2019 | Bachelor In Information Technology
                </p>
              </div>
              {/* Education Item */}
            </div>
          </div>
        </div>
        {/* Skills Row Start */}
        <div className="row mt-100">
          {/* Header Block */}
          <div className="col-md-12">
            <div className="header-box mb-50">
              <h3>Skills</h3>
            </div>
          </div>
        </div>
        <div className="box skills">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              {/* Skill Item */}
              <div className="skill-item">
                <h4 className="progress-title">HTML5</h4>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "98%" }}>
                    <div className="progress-value">98%</div>
                  </div>
                </div>
              </div>
              {/* Skill Item */}
              <div className="skill-item">
                <h4 className="progress-title">CSS3</h4>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}>
                    <div className="progress-value">60%</div>
                  </div>
                </div>
              </div>
              {/* Skill Item */}
              <div className="skill-item">
                <h4 className="progress-title">JavaScript</h4>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}>
                    <div className="progress-value">80%</div>
                  </div>
                </div>
              </div>
              {/* Skill Item */}
              <div className="skill-item">
                <h4 className="progress-title">PHP</h4>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "77%" }}>
                    <div className="progress-value">85%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="row">
                {/* Skill Item */}
                <div className="col-lg-6 col-sm-6">
                  <div
                    className="chart"
                    data-percent={80}
                    data-bar-color="#fff"
                  >
                    50%
                    <p>Python</p>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="col-lg-6 col-sm-6">
                  <div
                    className="chart"
                    data-percent={70}
                    data-bar-color="#fff"
                  >
                    70%
                    <p>Wordpress</p>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="col-lg-6 col-sm-6">
                  <div
                    className="chart"
                    data-percent={60}
                    data-bar-color="#fff"
                  >
                    60%
                    <p>Node Js</p>
                  </div>
                </div>
                {/* Skill Item */}
                <div className="col-lg-6 col-sm-6">
                  <div
                    className="chart"
                    data-percent={90}
                    data-bar-color="#fff"
                  >
                    90%
                    <p>SQL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Work Process Row Start */}
        <div className="row mt-100">
          {/* Header Block */}
          <div className="col-md-12">
            <div className="header-box mb-50">
              <h3>My Working Process</h3>
            </div>
          </div>
        </div>
        <div className="box work-process mb-100">
          <div className="row">
            <div className="col-lg-4 col-sm-12 ltr">
              {/* Working Process Item*/}
              <div className="single-wp width-sm process-1">
                <p className="wp-step">01</p>
                <h4 className="wp-title">Discuss idea</h4>
              </div>
              {/* Working Process Item*/}
              <div className="single-wp width-sm process-2">
                <p className="wp-step">02</p>
                <h4 className="wp-title">Creative concept</h4>
              </div>
            </div>
            <div className="col-lg-4 hidden-sm">
              {/* Working Process Circle*/}
              <div className="wp-circle">
                <h4>Working Process</h4>
                <span className="dots top-l" />
                <span className="dots bottom-l" />
                <span className="dots top-r" />
                <span className="dots bottom-r" />
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 rtl">
              {/* Working Process Item*/}
              <div className="single-wp width-sm process-3">
                <p className="wp-step">03</p>
                <h4 className="wp-title">Web concept</h4>
                <p></p>
              </div>
              {/* Working Process Item*/}
              <div className="single-wp width-sm process-4">
                <p className="wp-step">04</p>
                <h4 className="wp-title">Final concept</h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default resume
