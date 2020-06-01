import React, {useEffect, useRef} from "react"
import useOnScreen from "../hooks/useOnScreen"
import "../styles/components/hero-section.scss"

const HeroSection = () => {

  const observeElement = useRef()
  const onScreen = useOnScreen(observeElement, false, null, "-100px 0px 0px 0px", 0)

  useEffect(() =>{
    const header = document.querySelector("header")
    if (onScreen) {
      header.classList.remove("animate-hide-header")
    } else {
      header.classList.add("animate-hide-header")
    }
  })

  return (
    <>
      <section id="hero-section" ref={observeElement}>
        <div className="contain">
          {/* <HeroImage/> */}
          <h1 className="hero-header">
            The best personal training, right in your own home
          </h1>
          <button className="btn btn--hero">Join iFit Coach</button>
        </div>
      </section>
    </>
  )
}

export default HeroSection
