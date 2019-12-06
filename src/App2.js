import React, { Component } from "react";

import Swiper from "swiper/js/swiper.esm.bundle";

// import 'swiper/css/swiper.css'

import "./styles.css";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount = async () => {
    await fetch("https://reqres.in/api/unknown")
      .then(res => res.json())
      .then(res => {
        console.log({ res });
        this.setState({
          data: res.data
        });
      });
    new Swiper(".swiper-container1", {
      slidesPerView: "auto",
      slidesPerGroup: 2
    });
  };
  render() {
    return (
      <div className="swiper-container1" dir="ltr">
        <div className="swiper-wrapper">
          {this.state.data.map((item, i) => (
            <div
              key={item.id}
              className="swiper-slide"
              data-hash={item.pantone_value}
            >
              <img
                alt={item.name}
                src={`https://placehold.it/170x170/FF0000/FFFFFF?text=${
                  item.name
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
