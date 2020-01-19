import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Customers = () => (
  <Layout>
    <SEO title="Customers" />
    <section id = "customersPage">
        <section className = "hero">
          <div className = "contain">
            <h1>Customers</h1>
            <p>Here is what our customers have to say.</p>
            <p>Read more.</p>
          </div>
        </section>
        <section className = "case-studies">
          <div className = "contain">
              <h1>Case Studies</h1>
          </div>
        </section>
    </section>  
  </Layout>
)

export default Customers
