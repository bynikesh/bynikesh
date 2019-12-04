import React from "react"
import Layout from "../components/layout"
//import SEO from "../components/seo"
import profileimage from "../images/profileimg.jpg"
import "./index.css"
const about = () => (
  <Layout>
    <div className="page about resume" data-simplebar="init">
      <div className="simplebar-wrapper" style={{ margin: "0px" }}>
        <div className="simplebar-height-auto-observer-wrapper">
          <div className="simplebar-height-auto-observer" />
        </div>
        <div className="simplebar-mask">
          <div
            className="simplebar-offset"
            style={{ right: "-20px", bottom: "0px" }}
          >
            <div
              className="simplebar-content"
              style={{
                padding: "0px calc(20px) 0px 0px",
                height: "100%",
                overflow: "hidden scroll",
              }}
            >
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
                            <img alt="Nikesh Adhikari" src={profileimage} />
                          </div>
                        </div>
                        <div className="col-lg-9 col-sm-8">
                          <h4>Nikesh Adhikari</h4>
                          <div className="loc">
                            <i className="fas fa-map-marked-alt" /> Sydney,
                            Australia
                          </div>
                          <p>
                            An accomplished, patient and determined problem
                            solver with extensive experience in Software
                            Engineering who approaches problems systematically
                            and logically to provide effective solutions. Also
                            has an excellent technical knowledge, always keeps
                            up to date with Internet technology, uses own
                            initiative and functions well as a member of a team.
                            Willing to undertake any necessary further training
                            and now seeking an opening where existing and
                            potential skills may be utilized to fullest extent.
                            A caring and helpful person who enjoys meeting
                            different types of people, have the ability to
                            manage a varied workload and enjoy the challenge of
                            new tasks, possess an outgoing personality and can
                            work without supervision, self-motivated and
                            computer literate, with these skills intend to work
                            to the best of abilities.
                          </p>
                          <p>
                            When I’m not designing, I spend my time running,
                            exploring the web, experimenting, traveling,
                            volunteering, watching movies and listening to
                            music.
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
                      <h3>Soft Skills</h3>
                    </div>
                  </div>
                  {/* Service Item */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="service box mb-40">
                      <i className="fas fa-desktop" />
                      <h4>Problem Solver</h4>
                      <p>
                        I can take vague problems and requirements and break
                        them down into steps and solutions.
                      </p>
                    </div>
                  </div>
                  {/* Service Item */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="service box mb-40">
                      <i className="fas fa-cogs" />
                      <h4>Think Smart</h4>
                      <p>
                        I'm good at thinking abstractly and putting together
                        systems with many moving parts.
                      </p>
                    </div>
                  </div>
                  {/* Service Item */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="service box mb-40">
                      <i className="fas fa-mobile-alt" />
                      <h4>Communication</h4>
                      <p>
                        I can explain things clearly, communicate problems
                        quickly and write accurately and concisely.
                      </p>
                    </div>
                  </div>
                  {/* Service Item */}
                  <div className="col-lg-6 col-sm-6">
                    <div className="service box mb-40">
                      <i className="fas fa-medkit" />
                      <h4>Organised</h4>
                      <p>
                        I can self-manage, work to deadlines, organise projects
                        and present well-structured and complete deliverables.
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
                          Nikesh is a great guy to work with. Good spirit,
                          competent, and more than willing to put to long hours
                          in to meet our deadline --- H works with a lot of
                          structure and understanding in a area of web
                          development where this is rare. He's got a eye for
                          design and good coding sense.
                        </p>
                      </div>
                    </div>
                    {/* Testimonail Item */}
                    <div className="testimonial-item">
                      <div className="media">
                        <img src="img/testimonials/testimonial-2.jpg" alt="" />
                        <div className="content">
                          <h4>Jonathan lewis</h4>
                          <p>mychecklist</p>
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
                          understand what our needs are, what our audience
                          expects and quickly speak to that. His work ethics is
                          stellar as his work
                        </p>
                      </div>
                    </div>
                    {/* Testimonail Item */}
                  </div>
                </div>
                {/* Section Title */}
                <div className="header-page mt-70 mob-mt">
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
                            <i className="icon-h fab fa-html5"> Html5 |</i>
                            <i className="icon-h fab fa-css3"> CSS3 |</i>
                            <i className="icon-h fab fa-js-square">
                              {" "}
                              Javascript |
                            </i>
                            <i className="icon-h fab fa-reactjs"> React JS |</i>
                          </p>
                        </div>
                      </div>
                      {/* Experience Item */}
                      <div className="item">
                        <div className="main">
                          <h4>BackEnd Development</h4>
                          <p>
                            <a href="#" className="icon-h fab fa-node" /> Node
                            Js | Express |
                            <a href="#" className="icon-h fab fa-php" /> Php |
                            Laravel
                          </p>
                        </div>
                      </div>
                      {/* Experience Item */}
                      <div className="item">
                        <div className="main">
                          <h4>Database Application</h4>
                          <p>
                            <a href="#" className="icon-h fab fa-apple" /> Mongo
                            DB
                            <a href="#" className="icon-h fab fa-apple" /> MySQL
                            <a href="#" className="icon-h fab fa-apple" />{" "}
                            GraphQl
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
                      <h3>Tools</h3>
                    </div>
                  </div>
                </div>
                <div className="box skills">
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      {/* Skill Item */}
                      <div className="skill-item">
                        <h4 className="progress-title">Git</h4>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: "88%" }}
                          >
                            <div className="progress-value">88%</div>
                          </div>
                        </div>
                      </div>
                      {/* Skill Item */}
                      <div className="skill-item">
                        <h4 className="progress-title">Docker</h4>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: "70%" }}
                          >
                            <div className="progress-value">50%</div>
                          </div>
                        </div>
                      </div>
                      {/* Skill Item */}
                      <div className="skill-item">
                        <h4 className="progress-title">Visual Studio Code</h4>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: "80%" }}
                          >
                            <div className="progress-value">80%</div>
                          </div>
                        </div>
                      </div>
                      {/* Skill Item */}
                      <div className="skill-item">
                        <h4 className="progress-title">Postman</h4>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: "85%" }}
                          >
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
                            <p>AWS</p>
                          </div>
                        </div>
                        {/* Skill Item */}
                        <div className="col-lg-6 col-sm-6">
                          <div
                            className="chart"
                            data-percent={70}
                            data-bar-color="#fff"
                          >
                            <p>Kanaban</p>
                          </div>
                        </div>
                        {/* Skill Item */}
                        <div className="col-lg-6 col-sm-6">
                          <div
                            className="chart"
                            data-percent={60}
                            data-bar-color="#fff"
                          >
                            <p>Command line</p>
                          </div>
                        </div>
                        {/* Skill Item */}
                        <div className="col-lg-6 col-sm-6">
                          <div
                            className="chart"
                            data-percent={90}
                            data-bar-color="#fff"
                          >
                            <p>WebPack</p>
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
                        <h4 className="wp-title">Final Project</h4>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </section>
            </div>
          </div>
        </div>
        <div
          className="simplebar-placeholder"
          style={{ width: "1318px", height: "2630px" }}
        />
      </div>
      <div
        className="simplebar-track simplebar-horizontal"
        style={{ visibility: "hidden" }}
      >
        <div
          className="simplebar-scrollbar"
          style={{
            transform: "translate3d(0px, 0px, 0px)",
            visibility: "hidden",
          }}
        />
      </div>
      <div
        className="simplebar-track simplebar-vertical"
        style={{ visibility: "visible" }}
      >
        <div
          className="simplebar-scrollbar"
          style={{
            height: "88px",
            transform: "translate3d(0px, 0px, 0px)",
            visibility: "visible",
          }}
        />
      </div>
    </div>
  </Layout>
)

export default about
