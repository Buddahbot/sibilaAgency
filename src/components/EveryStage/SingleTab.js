import React from "react";
import { Image } from "react-bootstrap";

const SingleTab = ({ tab = {}, active }) => {
  const { id, text, image, points = [] } = tab;

  return (
    <div
      className={`tab animated ${
        active === id ? "active-tab fadeIn" : "fadeOut"
      }`}
      id={id}
    >
      <div className="tabs-content__inner">
        <p className="tab-content__inner-text">{text}</p>
        <div className="tab-content__bottom">
          <div className="tab-content__img">
            <Image
              src={require(`@/images/resources/${image}`).default.src}
              alt=""
            />
          </div>
          <div className="tab-content__points-box">
            <ul className="list-unstyled tab-content-points">
              {points.map((point, i) => (
                <li key={i}>
                  <div className="icon">
                    <span className="icon-check"></span>
                  </div>
                  <div className="text">
                    <p>{point}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTab;
