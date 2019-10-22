import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../scss/pages/blog.scss"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <main class = "blog">
        <section className = "hero">
          <div className = "contain">
            <h1>Blog</h1>
            <p>Read about our Blog.</p>
          </div>
        </section>
        <section className = "blog-posts">
          <div className = "contain">
              <h1>Blog Posts</h1>
          </div>
        </section>
    </main>
    <div>
      {/* <Image /> */}
    </div>
    
  </Layout>
)

export default Blog
