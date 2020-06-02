import React, { useEffect } from "react"
import MashableLogo from "../images/icons/mashable-logo.svg"
import GearJunkie from "../images/icons/gear-junkie-logo.svg"
import WiredLogo from "../images/icons/wired-logo.svg"
import Glide from "@glidejs/glide"
import leftArrow from "../images/icons/leftArrow.svg"
import rightArrow from "../images/icons/leftArrow.svg"
import "../styles/components/review-carousel.scss"

const ReviewCarousel = () => {
  useEffect(() => {

    var glide = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 3, 
      peek: {
        before: "60px",
        after: "60px"
      }, 
      gap: "40px",
      breakpoints: {
        1024: {
          perView: 2
        },
        600: {
          perView: 1
        }
      }
    })

    glide.mount()

  }, [])

  return (
    <>
      <section id="review-carousel">
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <img src={GearJunkie} alt=""/>
                <p>"Literally transports you from home to wherever you choose to run."</p>
              </li>
              <li className="glide__slide">
                <img src={WiredLogo} alt=""/>
                <p>"Breathes new life into a tired, old running routine."</p>
              </li>
              <li className="glide__slide">
                <img src={MashableLogo} alt=""/>
                <p>"You focus on putting in the work, and the technology handles the rest."</p>
              </li>
              <li className="glide__slide">
                <img src={GearJunkie} alt=""/>
                <p>"Literally transports you from home to wherever you choose to run."</p>
              </li>
              <li className="glide__slide">
                <img src={WiredLogo} alt=""/>
                <p>"Breathes new life into a tired, old running routine."</p>
              </li>
              <li className="glide__slide">
                <img src={MashableLogo} alt=""/>
                <p>"You focus on putting in the work, and the technology handles the rest."</p>
              </li>
              <li className="glide__slide">
                <img src={GearJunkie} alt=""/>
                <p>"Literally transports you from home to wherever you choose to run."</p>
              </li>
              <li className="glide__slide">
                <img src={WiredLogo} alt=""/>
                <p>"Breathes new life into a tired, old running routine."</p>
              </li>
              <li className="glide__slide">
                <img src={MashableLogo} alt=""/>
                <p>"You focus on putting in the work, and the technology handles the rest."</p>
              </li>
            </ul>
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <button className="glide__arrow glide__arrow--left" data-glide-dir="<" title="left arrow for reviews">
              <img src={leftArrow} alt=""/>
            </button>
            <button className="glide__arrow glide__arrow--right" data-glide-dir=">" title="right arrow for reviews">
              <img src={rightArrow} alt=""/>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ReviewCarousel
