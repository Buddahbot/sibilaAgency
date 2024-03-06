import mainSliderThree from "@/data/mainSliderThree";
import React from "react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import SingleSlider from "./SingleSlider";

SwiperCore.use([EffectFade, Navigation, Pagination]);

const options = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  pagination: {
    el: "#main-slider-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};

const MainSliderThree = () => {
  return (
    <section className="main-slider-three">
      <Swiper className="thm-swiper__slider" {...options}>
        <div className="swiper-wrapper">
          {mainSliderThree.map((slider) => (
            <SingleSlider key={slider.id} slider={slider} />
          ))}
        </div>
        <div className="slider-bottom-box clearfix">
          <div className="swiper-pagination" id="main-slider-pagination"></div>
          <div className="main-slider__nav">
            <div
              className="swiper-button-prev"
              id="main-slider__swiper-button-next"
            >
              <span className="icon-arrow-left"></span>
            </div>
            <div
              className="swiper-button-next"
              id="main-slider__swiper-button-prev"
            >
              <span className="icon-arrow-right"></span>
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default MainSliderThree;
