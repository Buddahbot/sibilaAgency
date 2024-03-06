import featureOne from "@/data/featureOne";
import Link from "next/link";
import React from "react";

const FeatureOne = () => {
  return (
    <section className="feature-one">
      <div className="feature-one__container">
        <ul className="list-unstyled feature-one__list clearfix">
          {featureOne.map(({ id, icon, title, text }) => (
            <li key={id} className="feature-one__single animated fadeInUp">
              <div className="feature-one__content">
                <div className="feature-one__icon">
                  <span className={icon}></span>
                </div>
                <h4 className="feature-one__title">
                  <Link href="/contact">{title}</Link>
                </h4>
                <p className="feature-one__text">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeatureOne;
