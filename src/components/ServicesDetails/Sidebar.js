import servicesDetails from "@/data/servicesDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import TextSplit from "../Reuseable/TextSplit";

const {
  categories,
  needHelp: { bg, icon, title, phone },
} = servicesDetails;

const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <div className="service-details__sidebar">
      <div className="service-details__sidebar-service">
        <h4 className="service-details__sidebar-title">Categories</h4>
        <ul className="service-details__sidebar-service-list list-unstyled">
          {categories.map(({ id, title, href }) => (
            <li key={id} className={pathname === href ? "current" : ""}>
              <Link href={href}>
                <a>
                  {title} <span className="icon-arrow-right"></span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="service-details__need-help">
        <div
          className="service-details__need-help-bg"
          style={{ backgroundImage: `url(${bg.src})` }}
        ></div>
        <div className="service-details__need-help-icon">
          <span className={icon}></span>
        </div>
        <h2 className="service-details__need-help-title">
          <TextSplit text={title} />
        </h2>
        <div className="service-details__need-help-contact">
          <p>Call us Anytime</p>
          <a href={`tel:${phone}`}>+ {phone}</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
