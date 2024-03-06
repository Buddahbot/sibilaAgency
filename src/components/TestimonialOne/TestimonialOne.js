import testimonialOne from "@/data/testimonialOne";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTestimonial from "./SingleTestimonial";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  loop: true,
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    768: {
      items: 2,
      gutter: 30,
    },
    1200: {
      items: 3,
      gutter: 30,
    },
  },
};

const { bg, tagline, title, testimonials } = testimonialOne;

const TestimonialOne = () => {
  const listRef = useRef(null);

  return (
    <section className="testimonial-one">
      <div
        className="testimonial-one__map"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">{tagline}</span>
          <h2 className="section-title__title">{title}</h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="testimonial-one__carousel">
              <TinySlider options={settings} listRef={listRef}>
                {testimonials.map((testimonial) => (
                  <SingleTestimonial
                    key={testimonial.id}
                    testimonial={testimonial}
                    listRef={listRef}
                  />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialOne;
