import blogDetails from "@/data/blogDetails";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import TextSplit from "../Reuseable/TextSplit";

// const {
//   image,
//   date,
//   admin,
//   title,
//   texts,
//   tags,
//   socials,
//   pagination,
//   comments,
// } = blogDetails;

const BlogDetailsLeft = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const currentBlogDetails = blogDetails.find(
    (blog) => blog.id === parseInt(id)
  );

  console.log("here is currentBlogDetails:", currentBlogDetails);

  const {
    image,
    date,
    admin,
    title,
    texts,
    tags,
    socials,
    pagination,
    comments,
  } = currentBlogDetails;

  const onSubmit = (data) => console.log(data);

  return (
    <div className="blog-details__left">
      <div className="blog-details__img">
        <Image src={image.src} alt="welcome" />
        <div className="blog-details__date-box">
          <p>{date}</p>
        </div>
      </div>
      <div className="blog-details__content">
        <ul className="list-unstyled blog-details__meta">
          <li>
            <Link href="/blog-details">
              <a>
              </a>
            </Link>
          </li>
          <li>
            <p></p>
           
          </li>
          <li>
            <Link href="/blog-details">
              <a>
              </a>
            </Link>
          </li>
        </ul>
        <h3 className="blog-details__title">{title}</h3>
        {texts.map((text, i) => (
  <div key={i}>
    {React.createElement('div', { dangerouslySetInnerHTML: { __html: text } })}
  </div>
))}
      </div>
      <div className="blog-details__bottom">
        <p className="blog-details__tags">
          <span>Tags</span>
          {tags.map((tag, i) => (
            <a key={i} href="#">
              {tag}
            </a>
          ))}
        </p>
        <div className="blog-details__social-list">
          {socials.map(({ id, icon, href }) => (
            <a key={id} href={href}>
              <i className={icon}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="blgo-details__pagenation-box">
        <ul className="list-unstyled blog-details__pagenation">
          {pagination.map((text, i) => (
            <li key={i}>
              <TextSplit text={text} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetailsLeft;
