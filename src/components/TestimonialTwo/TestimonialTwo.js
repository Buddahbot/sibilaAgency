import testimonialTwo from "@/data/testimonialTwo";
import dynamic from "next/dynamic";
import React, { useRef } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import SingleTestimonial from "./SingleTestimonial";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: true,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  controlsContainer: ".tns-controls",
};

const { shape, image, tagline, title, testimonials } = testimonialTwo;

const TestimonialTwo = ({ className = "" }) => {
  const listRef = useRef(null);

  return (
    <section className={`testimonial-two ${className}`}>
      <div className="testimonial-two-shape animated slideInRight">
        <Image src={shape.src} alt="" />
      </div>
      <Container>
        <Row>
          <Col xl={5}>
            <div className="testimonial-two__left animated slideInLeft">
              <div className="testimonial-two__img">
                <Image src={image.src} alt="" />
                <div className="testimonial-two__content">
                  <h3 className="testimonial-two__title">
                    #Happy <span>Customers</span>
                  </h3>
                </div>
                <div className="testimonial-two__box-1"></div>
                <div className="testimonial-two__box-2"></div>
              </div>
            </div>
          </Col>
          <Col xl={7}>
            <div className="testimonial-two__right">
              <Title tagline={tagline} className="text-left" title={title} />
              <div className="testimonial-two__carousel">
                <TinySlider options={settings} listRef={listRef}>
                  {testimonials.map((testimonial) => (
                    <SingleTestimonial
                      key={testimonial.id}
                      testimonial={testimonial}
                      listRef={listRef}
                    />
                  ))}
                </TinySlider>
                <div className="tns-controls">
                  <button>
                    <span className="icon-arrow-left"></span>
                  </button>
                  <button>
                    <span className="icon-arrow-right"></span>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialTwo;
