import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const Product = () => (
  <Layout>
    <SEO title="Product" />
    <section id = "productPage">
        <section className = "hero">
          <div className = "contain">
            <h2>Product</h2>
            <p>Here is what we build.</p>
            <p>Lets build something great.</p>
          </div>
        </section>
        <section className = "product">
          <div className = "contain">
              <h2>More about our product.</h2>
          </div>
        </section>
    </section>   
  </Layout>
)

export default Product
