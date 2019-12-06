import React, { Component } from "react";

import Swiper from "swiper/js/swiper.esm.bundle";

// import 'swiper/css/swiper.css'

import "./styles.css";

export default class extends Component {
  componentDidMount() {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      slidesPerGroup: 5,
      spaceBetween: 10
    });
  }
  render() {
    return (
      <div className="swiper-container" dir="ltr">
        <div className="swiper-wrapper">
          <div className="swiper-slide" data-hash="slide1">
            Slide 1
          </div>
          <div className="swiper-slide" data-hash="slide2">
            Slide 2
          </div>
          <div className="swiper-slide" data-hash="slide3">
            Slide 3
          </div>
          <div className="swiper-slide" data-hash="slide4">
            Slide 4
          </div>
          <div className="swiper-slide" data-hash="slide5">
            Slide 5
          </div>
          <div className="swiper-slide" data-hash="slide6">
            Slide 6
          </div>
          <div className="swiper-slide" data-hash="slide7">
            Slide 7
          </div>
          <div className="swiper-slide" data-hash="slide8">
            Slide 8
          </div>
          <div className="swiper-slide" data-hash="slide9">
            Slide 9
          </div>
          <div className="swiper-slide" data-hash="slide10">
            Slide 10
          </div>
          <div className="swiper-slide" data-hash="slide11">
            Slide 11
          </div>
          <div className="swiper-slide" data-hash="slide12">
            Slide 12
          </div>
        </div>
      </div>
    );
  }
}
