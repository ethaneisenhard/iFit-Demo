import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../scss/pages/about.scss"

const About = () => (
  <Layout>
    <SEO title="About" />
    <main class = "about">
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
    </main>
    <div>
      {/* <Image /> */}
    </div>
    
  </Layout>
)

export default About
