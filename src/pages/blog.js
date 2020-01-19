import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <section id = "blogPage">
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
    </section>
  </Layout>
)

export default Blog
