import location from "@/data/location";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const { bg, locations, socials, title } = location;

const Location = () => {
  return (
    <section className="location">
      <div
        className="location-shape"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="container">
        <Row>
          {locations.map(({ id, text, email, title, phone }) => (
            <Col key={id} xl={12} lg={12}>
              <div
                className={`location__single${
                  !text ? " location__single-last" : ""
                }`}  style={{minHeight: "240px"}}
              > 
                {/* <h3 className="location__title">{title}</h3> */}
                <h3>Sibila Digital Agency</h3><p></p>
                {text ? (<>
                  <p className="location__text">{text}</p>
                  <a href={`mailto:${email}`} className="location__text">
                        {email}
                      </a>
                      <a
                        href={`tel:${phone.split(" ").join("")}`}
                        className="location__text"
                      >
                        + {phone}
                      </a>
                  <div className="location__social">
                      {socials.map(({ id, icon, href }) => (
                        <a key={id} href={href}>
                          <i className={icon}></i>
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                  <p className="location__text">{text}</p>
                    {/* <h5 className="location__phone-email">
                      <a
                        href={`tel:${phone.split(" ").join("")}`}
                        className="location__phone"
                      >
                        + {phone}
                      </a>
                      <a href={`mailto:${email}`} className="location__email">
                        {email}
                      </a>
                    </h5> */}
                 
                  </>
                )}
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xl={12}>
            <div className="location__bottom">
              {/* <p className="location-bottom__text">
                {title} <Link href="/about">Find Your Solution</Link>
              </p> */}
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Location;
