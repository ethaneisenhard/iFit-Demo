import React, { useEffect } from "react"
import MashableLogo from "../images/icons/mashable-logo.svg"
import GearJunkie from "../images/icons/gear-junkie-logo.svg"
import WiredLogo from "../images/icons/wired-logo.svg"
import "../styles/components/review-carousel.scss"

const ReviewCarousel = () => {

  useEffect(() => {

    // var controls = document.querySelectorAll('.controls');

    // for(var i=0; i<controls.length; i++){
    //     controls[i].style.display = 'inline-block';
    // }
    
    // var slides = document.querySelectorAll('.slides .slide');
    // var currentSlide = 0;
    // var slideInterval = setInterval(nextSlide,2000);
    
    // function nextSlide(){
    //     goToSlide(currentSlide+1);
    // }
    
    // function previousSlide(){
    //     goToSlide(currentSlide-1);
    // }
    
    // function goToSlide(n){
    //     slides[currentSlide].className = 'slide';
    //     currentSlide = (n+slides.length)%slides.length;
    //     slides[currentSlide].className = 'slide showing';
    // }
    
    // var pauseButton = document.getElementById('pause');
        
    // var playing = true;

    // function pauseSlideshow(){
    //     pauseButton.innerHTML = '&#9658;'; // play character
    //     playing = false;
    //     clearInterval(slideInterval);
    // }
    
    // function playSlideshow(){
    //     pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    //     playing = true;
    //     slideInterval = setInterval(nextSlide,2000);
    // }
    
    // pauseButton.onclick = function(){
    //     if(playing){ pauseSlideshow(); }
    //     else{ playSlideshow(); }
    // };
    
    // var next = document.getElementById('next');
    // var previous = document.getElementById('previous');
    
    // next.onclick = function(){
    //     pauseSlideshow();
    //     nextSlide();
    // };
    // previous.onclick = function(){
    //     pauseSlideshow();
    //     previousSlide();
    // };
    
  }, [])

  return (
    <>
      <section id="review-carousel">
        <div className="container">
          <div className="slides">
            <div className="slide showing">
                  <div className="review">
                      <img src={MashableLogo} alt=""/>
                      <p>"You focus on putting in the work, and the technology handles the rest."</p>
                  </div>
                  <div className="review">
                      <img src={GearJunkie} alt=""/>
                      <p>"Literally transports you from home to wherever you choose to run."</p>
                  </div>
                  <div className="review">
                      <img src={WiredLogo} alt=""/>
                      <p>"Breathes new life into a tired, old running routine."</p>
                  </div>
            </div>
            <div className="slide">
                <div className="review">
                      <img src={MashableLogo} alt=""/>
                      <p>"You focus on putting in the work, and the technology handles the rest."</p>
                  </div>
                  <div className="review">
                      <img src={GearJunkie} alt=""/>
                      <p>"Literally transports you from home to wherever you choose to run."</p>
                  </div>
                  <div className="review">
                      <img src={WiredLogo} alt=""/>
                      <p>"Breathes new life into a tired, old running routine."</p>
                  </div>
            </div>
            <div className="slide">
                  <div className="review">
                      <img src={MashableLogo} alt=""/>
                      <p>"You focus on putting in the work, and the technology handles the rest."</p>
                  </div>
                  <div className="review">
                      <img src={GearJunkie} alt=""/>
                      <p>"Literally transports you from home to wherever you choose to run."</p>
                  </div>
                  <div className="review">
                      <img src={WiredLogo} alt=""/>
                      <p>"Breathes new life into a tired, old running routine."</p>
                  </div>
            </div>
          </div>
          <div className="buttons">
            <button className="controls" id="previous">
              &lt;
            </button>

            <button className="controls" id="pause">
              &#10074;&#10074;
            </button>

            <button className="controls" id="next">
              &gt;
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ReviewCarousel
