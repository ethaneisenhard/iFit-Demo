import React, { useRef, useState, useEffect } from "react"
import useOnScreen from "../hooks/useOnScreen"
import equipment1 from "../images/Equipmnet/equipment1.png"
import equipment2 from "../images/Equipmnet/equipment2.png"
import equipment3 from "../images/Equipmnet/equipment3.png"
import equipment4 from "../images/Equipmnet/equipment4.png"
import "../styles/components/equipment-cards.scss"

const EquipmentCards = () => {
  const observeElement = useRef()

  const onScreen = useOnScreen(observeElement, true, null, "0px", 0.3)

  useEffect(() => {
    if (onScreen === true) {
     let animateElements = document.querySelectorAll(".js-animate-equipment-card")
     animateElements.forEach((element) =>{
      element.classList.add("animate-fade-in-equipment-card")
     })
    }
  }, [onScreen])

  return (
    <>
      <section id="equipment-cards" ref={observeElement}>
        <h3>Interested in our exciting iFit-enabled equipment?</h3>
        <div className="contain">
              <article className="js-animate-equipment-card">
                <div className="image">
                  <img src={equipment1} alt="Treadmills" />
                </div>
                <div className="article-text">
                  <h4>Treadmills</h4>
                </div>
              </article>
              <article className="js-animate-equipment-card">
                <div className="image">
                  <img src={equipment2} alt="Bikes" />
                </div>
                <div className="article-text">
                  <h4>Bikes</h4>
                </div>
              </article>
              <article className="js-animate-equipment-card">
                <div className="image">
                  <img src={equipment3} alt="Ellipticals" />
                </div>
                <div className="article-text">
                  <h4>Ellipticals</h4>
                </div>
              </article>
              <article className="js-animate-equipment-card">
                <div className="image">
                  <img src={equipment4} alt="Strength" />
                </div>
                <div className="article-text">
                  <h4>Strength</h4>
                </div>
              </article>
        </div>
      </section>
    </>
  )
}

export default EquipmentCards
