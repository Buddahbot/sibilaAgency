import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Tilt from "react-tilt";
import { SwiperSlide } from "swiper/react";

const SingleSlide = ({ slide = {} }) => {
  const { bg, image, title, socials } = slide;

  return (
    <SwiperSlide>
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${
            require(`@/images/backgrounds/${bg}`).default.src
          })`,
        }}
      ></div>
      <div className="main-slider__social">
        {socials.map(({ title, href }, i) => (
          <a key={i} href={href}>
            {title}
          </a>
        ))}
      </div>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="main-slider__content">
              <div className="main-slider__title-box-1">
                <h2>
                  {title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </h2>
                <div className="main-slider__title-box-2">
                  <h2>
                    {title.split("\n").map((t, i) => (
                      <Fragment key={i}>
                        {t} <br />
                      </Fragment>
                    ))}
                  </h2>
                </div>
              </div>
              <Link href="/about">
                <a className="thm-btn">Discover More</a>
              </Link>
              <div className="main-slider-badge">
                <Tilt options={{ scale: 1 }}>
                  <Image
                    src={require(`@/images/resources/${image}`).default.src}
                    alt=""
                  />
                </Tilt>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SwiperSlide>
  );
};

export default SingleSlide;
