import watchVideo from "@/data/watchVideo";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";
import VideoModal from "../VideoModal/VideoModal";

const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const { bg, videoId } = watchVideo;

const WatchVideo = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <section className="watch-video">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="watch-video__inner">
                <div className="watch-video-bg-box">
                  <Jarallax
                    speed={0.2}
                    imgPosition="50% 0%"
                    className="watch-video-bg"
                  >
                    <JarallaxImage src={bg.src} />
                  </Jarallax>
                </div>
                <div className="watch-video__box-1"></div>
                <div className="watch-video__box-2"></div>
                <div className="watch-video__video-link">
                  <a
                    onClick={handleOpen}
                    className="video-popup"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="watch-video__video-icon">
                      <span className="icon-play-button"></span>
                      <i className="ripple"></i>
                    </div>
                  </a>
                </div>
                <h2 className="watch-video__title">
                  <span>Watch</span> Video
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default WatchVideo;
