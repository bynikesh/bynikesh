import React from "react"
import Layout from "../components/layout"

const contact = () => {
  return (
    <Layout>
      <div>
        <div
          className="page"
          style={{
            opacity: "0.7",
            marginLeft: "145px",
          }}
          data-simplebar
        >
          <section className="container">
            {/* Section Title */}
            <div className="header-page mt-70 mob-mt">
              <h2>Contact</h2>
              <span />
            </div>
            {/* Form Start */}
            <div className="row mt-100">
              <div className="col-lg-12 col-sm-12">
                <div className="contact-form ">
                  <form
                    method="post"
                    className="box contact-valid"
                    id="contact-form"
                    name="contact-form"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-sm-12">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Name *"
                        />
                      </div>
                      <div className="col-lg-6 col-sm-12">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Email *"
                        />
                      </div>
                      <div className="col-lg-12 col-sm-12">
                        <textarea
                          className="form-control"
                          name="note"
                          id="note"
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-lg-12 col-sm-12 text-center">
                        <button type="submit" className="btn-st">
                          Send Message
                        </button>
                        <div id="loader">
                          <i className="fas fa-sync" />
                        </div>
                      </div>
                      {/* <div className="col-lg-12 col-sm-12">
                        <div className="error-messages">
                          <div id="success">
                            <i className="far fa-check-circle" />
                            Thank you, your message has been sent.
                          </div>
                          <div id="error">
                            <i className="far fa-times-circle" />
                            Error occurred while sending email. Please try again
                            later.
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Contact Info */}
            <div className="box contact-info">
              <div className="row">
                <div className="col-lg-4 col-sm-12 info">
                  <i className="fas fa-paper-plane" />
                  <p>info@bynikesh.com</p>
                  <span>Email</span>
                </div>
                <div className="col-lg-4 col-sm-12 info">
                  <i className="fas fa-map-marker-alt" />
                  <p>Ryde, Sydney </p>
                  <span>Addres</span>
                </div>
                <div className="col-lg-4 col-sm-12 info">
                  <i className="fas fa-phone" />
                  <p>(+61) 426585123</p>
                  <span>Phone</span>
                </div>
              </div>
            </div>
            {/*Google Map Start*/}
            {/* <div className="google-map box mt-100 mb-100">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    id="map"
                    data-latitude="40.712775"
                    data-longitude="-74.005973"
                    data-zoom={14}
                  />
                </div>
              </div>
            </div> */}
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default contact
