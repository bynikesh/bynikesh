import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      className="page "
      style={{
        opacity: "0.7",
        marginLeft: "145px",
      }}
      data-simplebar
    >
      {" "}
      <section className="container">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage
