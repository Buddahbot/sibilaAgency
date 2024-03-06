import React from "react";

const SingleHowItWorks = ({ process = {} }) => {
  const { id, bg, icon, title } = process;

  return (
    <li className="how-it-works__process-single animated fadeInUp">
      <div className="how-it-works__process-box">
        <div
          className="how-it-works__img"
          style={{
            backgroundImage: `url(${
              require(`@/images/resources/${bg}`).default.src
            })`,
          }}
        ></div>
        <div className="how-it-works__img-overly"></div>
        <div className="how-it-works__icon">
          <span className={icon}></span>
        </div>
        <div className="how-it-works__count">0{id}</div>
      </div>
      <h3 className="how-it-works__title">{title}</h3>
    </li>
  );
};

export default SingleHowItWorks;
