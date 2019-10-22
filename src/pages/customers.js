import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../scss/pages/customers.scss"

const Customers = () => (
  <Layout>
    <SEO title="Customers" />
    <main class = "customers">
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
    </main>
    <div>
      {/* <Image /> */}
    </div>
    
  </Layout>
)

export default Customers
