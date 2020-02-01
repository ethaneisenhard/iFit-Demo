import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => (
  <Layout>
    <SEO title="Blog" />
    <section id = "blogPage">
        <section className = "hero">
          <div className = "contain">
            <h2>Blog</h2>
            <p>Read about our Blog.</p>
          </div>
        </section>
        <section className = "blog-posts">
          <div className = "contain">
              <h2>Blog Posts</h2>
          </div>
        </section>
    </section>
  </Layout>
)

export default Blog
