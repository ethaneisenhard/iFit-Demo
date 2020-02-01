import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id = "homePage">
        <section className = "hero">
          <div className = "contain">
            <h2>Web Development and Photography Agency</h2>
            <p>Welcome to your new future.</p>
            <p>Lets build something great.</p>
          </div>
        </section>
        <section className = "about">
          <div className = "contain">
              <h2>About</h2>
          </div>
        </section>
        <section className = "mission">
          <div className = "contain">
            <h2>Mission</h2>
          </div>
        </section>
        <section className = "benefits">
          <div className = "contain">
            <h2>Benefits</h2>
          </div>
        </section>
        <section className = "testimonial">
          <div className = "contain">
            <h2>Testimonials</h2>
          </div>
        </section>
        <section className = "call-to-action">
          <div className = "contain">
            <h2>Call To Action</h2>
            <button>Start For Free</button>
          </div>
        </section>
        <section className = "blog">
          <div className = "contain">
              <h2>Read Our Blog</h2>
              <Link to="/blog">Go to page 2</Link>
          </div>
        </section>
    </section>
    <div>
      {/* <Image /> */}
    </div>
    
  </Layout>
)

export default IndexPage
