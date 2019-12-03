import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import profileimage from "../images/profileimg.jpg"
import "./index.css"
const about = () => (
  <Layout>
    <SEO title="About: nikesh Adhikari" />

    <div
      className="page"
      style={{
        opacity: "0.7",
        marginLeft: "145px",
      }}
      data-simplebar
    >
      <div className="about">
        <section className="container">
          {/* Section Title */}
          <div className="header-page mt-70 mob-mt">
            <h2>About Me</h2>
            <span />
          </div>
          {/* Personal Info Start */}
          <div className="row mt-100">
            {/* Information Block */}
            <div className="col-lg-12 col-sm-12">
              <div className="info box">
                <div className="row">
                  <div className="col-lg-3 col-sm-4">
                    <div className="photo">
                      <img alt="Photo of Nikesh Adhikari" src={profileimage} />
                    </div>
                  </div>
                  <div className="col-lg-9 col-sm-8">
                    <h4>Nikesh Adhikari</h4>
                    <div className="loc">
                      <i className="fas fa-map-marked-alt" /> Sydney, Australia
                    </div>
                    <p>
                      An accomplished, patient and determined problem solver
                      with extensive experience in Software Engineering who
                      approaches problems systematically and logically to
                      provide effective solutions. Also has an excellent
                      technical knowledge, always keeps up to date with Internet
                      technology, uses own initiative and functions well as a
                      member of a team. Willing to undertake any necessary
                      further training and now seeking an opening where existing
                      and potential skills may be utilized to fullest extent. A
                      caring and helpful person who enjoys meeting different
                      types of people, have the ability to manage a varied
                      workload and enjoy the challenge of new tasks, possess an
                      outgoing personality and can work without supervision,
                      self-motivated and computer literate, with these skills
                      intend to work to the best of abilities.
                    </p>
                    <p>
                      When I’m not designing, I spend my time running, exploring
                      the web, experimenting, traveling, volunteering, watching
                      movies and listening to music.
                    </p>
                  </div>
                  {/* Icon Info */}
                  <div className="col-lg-3 col-sm-4">
                    <div className="info-icon">
                      <i className="fas fa-award" />
                      <div className="desc-icon">
                        <h6>2 Years Job</h6>
                        <p>Experience</p>
                      </div>
                    </div>
                  </div>
                  {/* Icon Info */}
                  <div className="col-lg-3 col-sm-4">
                    <div className="info-icon">
                      <i className="fas fa-certificate" />

                      <div className="desc-icon">
                        <h6>5+ Projects</h6>
                        <p>Completed</p>
                      </div>
                    </div>
                  </div>
                  {/* Icon Info */}
                  <div className="col-lg-3 col-sm-4">
                    <div className="info-icon">
                      <i className="fas fa-user-astronaut" />
                      <div className="desc-icon">
                        <h6>Freelance</h6>
                        <p>Available</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-4 ">
                    <div className="info-icon">
                      <i className="fas fa-user-astronaut" />
                      <div className="desc-icon">
                        <h6>Currently</h6>
                        <p>Working from Home</p>
                      </div>
                    </div>
                    {/* <a href="#" class="btn-st">Download CV</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Interests Row Start */}
          <div className="row mt-100">
            {/* Header Block */}
            <div className="col-md-12">
              <div className="header-box mb-50">
                <h3>My Interests</h3>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <div className="box">
                <div className="row">
                  {/* Interests Item */}
                  <div className="col-lg-3 col-sm-6">
                    <div className="inter-icon">
                      <i className="fas fa-music" />
                      <div className="desc-inter">
                        <h6>Music</h6>
                      </div>
                    </div>
                  </div>
                  {/* Interests Item */}
                  <div className="col-lg-3 col-sm-6">
                    <div className="inter-icon">
                      <i className="fas fa-route" />
                      <div className="desc-inter">
                        <h6>Travelling</h6>
                      </div>
                    </div>
                  </div>
                  {/* Interests Item */}
                  <div className="col-lg-3 col-sm-6">
                    <div className="inter-icon">
                      <i className="far fa-image" />
                      <div className="desc-inter">
                        <h6>Photos</h6>
                      </div>
                    </div>
                  </div>
                  {/* Interests Item */}
                  <div className="col-lg-3 col-sm-6">
                    <div className="inter-icon">
                      <i className="fas fa-film" />
                      <div className="desc-inter">
                        <h6>Movies</h6>
                      </div>
                    </div>
                  </div>
                  {/* Interests Item */}
                  <div className="col-lg-3 col-sm-6">
                    <div className="inter-icon">
                      <i className="fas fa-space-shuttle" />
                      <div className="desc-inter">
                        <h6>Space</h6>
                      </div>
                    </div>
                  </div>
                  {/* Interests Item */}
                  <div className="col-lg-3 col-sm-6">
                    <div className="inter-icon">
                      <i className="fas fa-book" />
                      <div className="desc-inter">
                        <h6>Books</h6>
                      </div>
                    </div>
                  </div>
                  {/* Interests Item */}
                  <div className="col-lg-3 col-sm-6">
                    <div className="inter-icon">
                      <i className="fas fa-gamepad" />
                      <div className="desc-inter">
                        <h6>Video games</h6>
                      </div>
                    </div>
                  </div>
                  {/* Interests Item */}
                  <div className="col-lg-3 col-sm-6">
                    <div className="inter-icon">
                      <i className="fas fa-tree" />
                      <div className="desc-inter">
                        <h6>Forest</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Service Row Start */}
          <div className="row mt-100">
            {/* Header Block */}
            <div className="col-md-12">
              <div className="header-box mb-50">
                <h3>Skills</h3>
              </div>
            </div>
            {/* Service Item */}
            <div className="col-lg-6 col-sm-6">
              <div className="service box mb-40">
                <i className="fas fa-desktop" />
                <h4>Problem Solver</h4>
                <p>
                  I can take vague problems and requirements and break them down
                  into steps and solutions.
                </p>
              </div>
            </div>
            {/* Service Item */}
            <div className="col-lg-6 col-sm-6">
              <div className="service box mb-40">
                <i className="fas fa-cogs" />
                <h4>Think Smart</h4>
                <p>
                  I'm good at thinking abstractly and putting together systems
                  with many moving parts.
                </p>
              </div>
            </div>
            {/* Service Item */}
            <div className="col-lg-6 col-sm-6">
              <div className="service box mb-40">
                <i className="fas fa-mobile-alt" />
                <h4>Communication</h4>
                <p>
                  I can explain things clearly, communicate problems quickly and
                  write accurately and concisely.
                </p>
              </div>
            </div>
            {/* Service Item */}
            <div className="col-lg-6 col-sm-6">
              <div className="service box mb-40">
                <i className="fas fa-medkit" />
                <h4>Organised</h4>
                <p>
                  I can self-manage, work to deadlines, organise projects and
                  present well-structured and complete deliverables.
                </p>
              </div>
            </div>
          </div>
          {/* Testimonial Row Start */}
          <div className="row testimonial mt-60">
            {/* Header Block */}
            <div className="col-md-12">
              <div className="header-box mb-50">
                <h3>Testimonials</h3>
              </div>
            </div>
            <div className="owl-carousel owl-theme">
              {/* Testimonail Item */}
              <div className="testimonial-item">
                <div className="media">
                  <img src="img/testimonials/testimonial-1.jpg" alt="" />
                  <div className="content">
                    <h4>Albert</h4>
                    <p>FantasyClans</p>
                  </div>
                  <ul className="rating">
                    <li>
                      <i className="far fa-star" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                  </ul>
                </div>
                <div className="comment pt-30">
                  <p>
                    Nikesh is a great guy to work with. Good spirit, competent,
                    and more than willing to put to long hours in to meet our
                    deadline --- H works with a lot of structure and
                    understanding in a area of web development where this is
                    rare. He's got a eye for design and good coding sense.
                  </p>
                </div>
              </div>
              {/* Testimonail Item */}
              <div className="testimonial-item">
                <div className="media">
                  <img src="img/testimonials/testimonial-2.jpg" alt="" />
                  <div className="content">
                    <h4>Ashok dawadi</h4>
                    <p>hamrokhata</p>
                  </div>
                  <ul className="rating">
                    <li>
                      <i className="far fa-star" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                    <li>
                      <i className="far fa-star" />
                    </li>
                    <li>
                      <i className="far fa-star-half" />
                    </li>
                  </ul>
                </div>
                <div className="comment pt-30">
                  <p>
                    Nikesh is a highly smart thinker. Nikesh can quickly
                    understand what our needs are, what our audience expects and
                    quickly speak to that. His work ethics is stellar as his
                    work
                  </p>
                </div>
              </div>
              {/* Testimonail Item */}
            </div>
          </div>
        </section>
        {/* 
       #########resume section############3
        */}

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
                      <a href="#" className="icon-h fab fa-wordpress" />{" "}
                      wordpress
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
          </div>{" "}
          
        </section>
        {/* Price Row Start */}

        <div className="box work-process mb-100">
          {/* Working Process Circle*/}
          <div className="wp-circle">
            <div className="row mt-100 mb-60">
              {/* Header Block */}
              <div className="col-md-12">
                <div className="header-box mb-90">
                  <h3>Let's start a project together, do not hesitate to</h3>
                </div>
                <div className="container justify-content-md-center">
                  <svg
                    style={{ position: "", width: 0, height: 0 }}
                    width={0}
                    height={0}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <symbol id="icon-paperplane" viewBox="0 0 1024 1024">
                        <title>paperplane</title>
                        <path
                          className="path1"
                          d="M1009.376 5.12c-5.312-3.424-11.36-5.12-17.376-5.12-6.176 0-12.384 1.76-17.76 5.376l-960 640c-9.888 6.56-15.328 18.112-14.048 29.952 1.216 11.808 8.896 22.016 19.936 26.368l250.368 100.192 117.728 206.016c5.632 9.888 16.096 16 27.424 16.128 0.128 0 0.224 0 0.352 0 11.232 0 21.664-5.952 27.424-15.552l66.464-110.816 310.24 124.064c3.808 1.536 7.808 2.272 11.872 2.272 5.44 0 10.816-1.376 15.68-4.128 8.448-4.736 14.24-13.056 15.872-22.624l160-960c2.080-12.576-3.488-25.184-14.176-32.128zM100.352 664.864l741.6-494.432-539.2 577.184c-2.848-1.696-5.376-3.936-8.512-5.184l-193.888-77.568zM326.048 770.112c-0.064-0.128-0.16-0.192-0.224-0.32l606.176-648.8-516.768 805.184-89.184-156.064zM806.944 947.488l-273.312-109.312c-6.496-2.56-13.248-3.424-19.936-3.808l420.864-652.416-127.616 765.536z"
                        />
                      </symbol>
                    </defs>
                  </svg>
                  <a
                    href="http://www.bynikesh.com"
                    target="_blank"
                    className="contact-button"
                  >
                    Contact
                    <svg className="icon icon-paperplane">
                      <use xlinkHref="#icon-paperplane" />
                    </svg>
                    <span>info@bynikesh.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
const style = {
  fontFamiliy: "opensans",
}
export default about
