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

        <button onClick={() => $("body,html").animate({ scrollTop: 10 }, 500) } id="return-to-top"><i className="icon-chevron-up"></i></button>

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


