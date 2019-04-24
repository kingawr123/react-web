import React, { Component } from 'react';
import './App.css';
import { Header } from './Header-component/Header';
import { AboutMe } from './About-me-component/AboutMe';
import { AboutWeb } from './About-web-component/AboutWeb';
import { ColumnsContainer } from './Column-container-component/ColumnsContainer';
// import {
//   BrowserRouter as Router,
//   Route
// } from 'react-router-dom';
import { News } from './News-component/News';
import { Gallery } from './Gallery-component/Gallery';
import $ from "jquery";

class App extends Component {
  render() {

    document.addEventListener("DOMContentLoaded", function () {

      const Btn = document.querySelectorAll(".button-container button");

      for (let i = 0; i < Btn.length; i++) {
        Btn[i].addEventListener("click", () => windowScroll(i))
      }

      function windowScroll(index) {
        window.scrollTo({
          left: 0,
          top: 580 * (index + 1),
          behavior: "smooth"
        })
      }

      const slider = document.querySelector(".slider");
      const slides = document.querySelectorAll(".slider li");

      const slideWidth = slides[0].clientWidth;
      let currentIndex = 0;
      let slidesNumber = slides.length - 1;

      function goToSlide(index) {
        if(index > slidesNumber){
          index = 0;
        }
        else if(index < 0){
          index = slidesNumber;
        }
        slider.style.left = index * (-slideWidth) + "px";
        currentIndex = index;
      }

      const prev = document.querySelector(".previous-arrow");
      const next = document.querySelector(".next-arrow");

      next.addEventListener("click", slideToNext )

      function slideToNext(){
        goToSlide(currentIndex + 1);
      }

      prev.addEventListener("click", slideToPrev )

      function slideToPrev() {
        goToSlide(currentIndex - 1);
      }

      setInterval(slideToNext, 5000)
    })

    $(window).scroll(function () {
      if ($(this).scrollTop() >= 50) {
        $("#return-to-top").fadeIn(200)
      }
      else {
        $("#return-to-top").fadeOut(200)
      }
    })

    return (
      <div>

        <button onClick={() => $("body,html").animate({ scrollTop: 50 }, 500)} id="return-to-top"><i className="icon-chevron-up"></i></button>

        <header className="header">
          <Header />
        </header>
        <section className="columns">
          <ColumnsContainer />
        </section>
        <section className="informations">
          <AboutMe />
          <AboutWeb />
          <News />
        </section>
        <section className="gallery">
          <Gallery />
        </section>
      </div>
    )
  }
}

export default App;


