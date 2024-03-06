import footerData from "@/data/footerData";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const { bg, title, phone, socials, address, city, email, links, year, author } =
  footerData;

const SiteFooter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div
          className="site-footer__top-shape"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <Container>
          <div className="site-footer__top-inner">
            <div className="site-footer__top-left">
              <h3 className="site-footer__top-left-title">{title}</h3>
              <a
                href={`tel:${phone.split(" ").join("")}`}
                className="site-footer__top-left-phone"
              >
                + {phone}
              </a>
            </div>
            <div className="site-footer__top-right">
              <div className="site-footer__top-right-social">
                {socials.map(({ id, icon, href }) => (
                  <a key={id} href={href}>
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="site-footer__middle">
        <Container>
          <div className="site-footer__middle-inner">
            <Row>
              <Col xl={3} lg={4} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__contact">
                  <h3 className="footer-widget__title">Contact</h3>
                  <p className="footer-widget__contact-text">
                    {address} <br /> {city}
                  </p>
                  <h4 className="footer-widget__contact-email-phone">
                    <a
                      href={`mailto:${email}`}
                      className="footer-widget__contact-email"
                    >
                      {email}
                    </a>
                    <a
                      href={`tel:${phone.split(" ").join("")}`}
                      className="footer-widget__contact-phone"
                    >
                      + {phone}
                    </a>
                  </h4>
                </div>
              </Col>
              <Col xl={4} lg={4} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__links clearfix">
                  <h3 className="footer-widget__title">Links</h3>
                  <ul className="footer-widget__links-list list-unstyled clearfix">
                    {links.slice(0, 5).map(({ id, title, href }) => (
                      <li key={id}>
                        <Link href={href}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="footer-widget__links-list footer-widget__links-list-two list-unstyled clearfix">
                    {links.slice(5).map(({ id, title, href }) => (
                      <li key={id}>
                        <Link href={href}>{title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xl={5} lg={4} className="animated fadeInUp">
                <div className="footer-widget__column footer-widget__newsletter">
                  <h3 className="footer-widget__title">Newsletter</h3>
                  <form
                    onSubmit={handleSubmit}
                    className="footer-widget__newsletter-form"
                  >
                    <div className="footer-widget__newsletter-input-box">
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                      />
                      <button
                        type="submit"
                        className="footer-widget__newsletter-btn"
                      >
                        <i className="far fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                  <div className="footer-widget__newsletter-bottom">
                    <div className="footer-widget__newsletter-bottom-icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="footer-widget__newsletter-bottom-text">
                      <p>I agree to all your terms and policies</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="site-footer__bottom">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="site-footer__bottom-inner">
                <p className="site-footer__bottom-text">
                  © Copyrights, {year} <a href="#">{author}</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default SiteFooter;
