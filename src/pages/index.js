import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridCards from "../components/grid-cards"
// import ReviewSlider from "../components/review-slider"
import EquipmentCards from "../components/equipment-cards"
import ReviewCarousel from "../components/review-carousel"
import HeroSection from "../components/heroSection"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <section id="homePage">
        <HeroSection/>
        <ReviewCarousel/>
        {/* <ReviewSlider/> */}
        <GridCards/>
        <EquipmentCards/>
      </section>
    </Layout>
  )
}

export default IndexPage
