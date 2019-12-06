import React, { useEffect, useState } from "react";

import Swiper from "swiper/js/swiper.esm.bundle";

// import 'swiper/css/swiper.css'

import "./styles.css";

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    function fetchData() {
      fetch("https://reqres.in/api/unknown")
        .then(res => res.json())
        .then(res => {
          console.log({ res });
          setData(res.data);
          new Swiper(".swiper-container1", {
            slidesPerView: "auto",
            slidesPerGroup: 2
          });
        });
    }
    fetchData();
  }, []);
  return (
    <div className="swiper-container swiper-container1" dir="ltr">
      <div className="swiper-wrapper">
        {data.map((item, i) => (
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
};
