import mainSlider from "@/data/mainSlider";
import React from "react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import SingleSlide from "./SingleSlide";

SwiperCore.use([EffectFade, Pagination, Navigation]);

const sliderOptions = {
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

const MainSlider = () => {
  return (
    <section className="main-slider">
      <Swiper className="thm-swiper__slider" {...sliderOptions}>
        <div className="swiper-wrapper">
          {mainSlider.map((slide) => (
            <SingleSlide key={slide.id} slide={slide} />
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

export default MainSlider;
