import React, {Component} from "react";

import Swiper from 'swiper/js/swiper.esm.bundle';

// import 'swiper/css/swiper.css'

import "./styles.css";

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // dummy slides data
      slides: (function () {
        var slides = [];
        for (var i = 0; i < 600; i += 1) {
          slides.push('Slide ' + (i + 1));
        }
        return slides;
      }()),
      // virtual data
      virtualData: {
        slides: [],
      },
    }
  }
  componentDidMount() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
    });
  }
  render() {
    return (
    <div className="swiper-container" dir="rtl">
      <div className="swiper-wrapper">
        <div className="swiper-slide" data-hash="slide1">Slide 1</div>
        <div className="swiper-slide" data-hash="slide2">Slide 2</div>
        <div className="swiper-slide" data-hash="slide3">Slide 3</div>
        <div className="swiper-slide" data-hash="slide4">Slide 4</div>
        <div className="swiper-slide" data-hash="slide5">Slide 5</div>
      </div>
    </div>
    )
  }
}