import React, { useRef, useState, useEffect } from "react"
import { Animate, AnimateGroup } from "react-simple-animate"
import useOnScreen from "../hooks/useOnScreen"
import equipment1 from "../images/Equipmnet/equipment1.png"
import equipment2 from "../images/Equipmnet/equipment2.png"
import equipment3 from "../images/Equipmnet/equipment3.png"
import equipment4 from "../images/Equipmnet/equipment4.png"
import "../styles/components/equipment-cards.scss"

const EquipmentCards = () => {
  const observeElement = useRef()
  const [startAnimation, setStartAnimation] = useState(false)

  const onScreen = useOnScreen(observeElement, true, null, "0px", 0.4)

  const animateProps = {
    start: { opacity: 0 },
    end: { opacity: 1 },
  }

  useEffect(() => {
    if (onScreen === true) {
      setStartAnimation(true)
    }
  }, [onScreen])

  return (
    <>
      <section id="equipment-cards" ref={observeElement}>
        <h3>Interested in our exciting iFit-enabled equipment?</h3>
        <div className="contain">
          <AnimateGroup play={startAnimation}>
            <Animate {...animateProps} sequenceIndex={0}>
              <article>
                <div className="image">
                  <img src={equipment1} alt="" />
                </div>
                <div className="article-text">
                  <h4>Treadmills</h4>
                </div>
              </article>
            </Animate>
            <Animate {...animateProps} sequenceIndex={1}>
              <article>
                <div className="image">
                  <img src={equipment2} alt="" />
                </div>
                <div className="article-text">
                  <h4>Bikes</h4>
                </div>
              </article>
            </Animate>
            <Animate {...animateProps} sequenceIndex={2}>
              <article>
                <div className="image">
                  <img src={equipment3} alt="" />
                </div>
                <div className="article-text">
                  <h4>Ellipticals</h4>
                </div>
              </article>
            </Animate>
            <Animate {...animateProps} sequenceIndex={3}>
              <article>
                <div className="image">
                  <img src={equipment4} alt="" />
                </div>
                <div className="article-text">
                  <h4>Strength</h4>
                </div>
              </article>
            </Animate>
          </AnimateGroup>
        </div>
      </section>
    </>
  )
}

export default EquipmentCards
