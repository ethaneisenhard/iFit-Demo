import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <section id = "aboutPage">
        <section className = "hero">
          <div className = "contain">
            <h1>About</h1>
            <p>Here is what we are about.</p>
            <p>Lets build something great.</p>
          </div>
        </section>
        <section className = "team">
          <div className = "contain">
              <h1>About Our Team</h1>
          </div>
        </section>
    </section>
  </Layout>
)

export default About
