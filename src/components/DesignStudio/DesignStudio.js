import VideoModal from "@/components/VideoModal/VideoModal";
import designStudio from "@/data/designStudio";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";
const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const { bg, videoId } = designStudio;

const DesignStudio = ({ className = "" }) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <section className={`design-studio ${className}`}>
        <div className="design-studio-bg-box">
          <Jarallax
            speed={0.2}
            imgPosition="50% 0%"
            className="design-studio-bg"
          >
            <JarallaxImage src={bg.src} />
          </Jarallax>
        </div>
        <Container>
          <Col lg={12}>
            <div className="design-studio__inner">
              <h2 className="design-studio__title">
                Design <span>Studio</span> that gets <br /> excited about
              </h2>
              <div className="design-studio__video-link">
                <a
                  onClick={handleOpen}
                  style={{ cursor: "pointer" }}
                  className="video-popup"
                >
                  <div className="design-studio__video-icon">
                    <span className="icon-play-button"></span>
                    <i className="ripple"></i>
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default DesignStudio;
