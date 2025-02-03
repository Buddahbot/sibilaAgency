import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import TextSplit from "../Reuseable/TextSplit";

import mainSliderImage from "../../assets/images/resources/main-slider-three-img-1.svg";

const SingleSlider = ({ slider = {} }) => {
  const { bg, map, images, socials, title, text, arrow } = slider;

  return (
    <SwiperSlide>
      <div
        className="image-layer"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div
        className="main-slider-three-map"
        style={{ backgroundImage: `url(${map.src})` }}
      ></div>
      {/* {images.map((image, i) => (
        <div key={i} className={`main-slider-three__img-${i + 1}`}>
          <Image
            src={require(`@/images/resources/${image}`).default.src}
            alt=""
          />
        </div>
      ))} */}
              <div  className={`main-slider-three__img-1`}>
<Image src={mainSliderImage.src}  alt="" style={{ width: "600px", height: "auto" }} />
      <div className="main-slider__social">
               </div>
        {/* {socials.map(({ title, href }, i) => (
          <a key={i} href={href}>
            {title}
          </a>
        ))} */}
      </div>
      <Container>
        <Row>
          <Col xl={6}>
            <div className="main-slider-three__content">
              <h2>
                <TextSplit text={title} />
              </h2>
              <p>
                <TextSplit text={text} />
              </p>
              <div className="main-slider-three__btn-box">
                <Link href="/about">
                  <a className="thm-btn">Our Services</a>
                </Link>
                <div className="main-slider-three__arrow">
                  <Image src={arrow.src} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SwiperSlide>
  );
};

export default SingleSlider;
