import Link from "next/link";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import VideoModal from "../VideoModal/VideoModal";

const BlogSidebarContentSingle = ({ blog = {} }) => {
  const { image, date, comments, title, text, admin, videoId } = blog;

  const [isOpen, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <div className="blog-sidebar__content-single">
        <div className="blog-sidebar__content-img">
          <Image src={require(`@/images/blog/${image}`).default.src} alt="" />
          <div className="blog-sidebar__date-box">
            <p>{date}</p>
          </div>
          {videoId && (
            <div className="design-studio__video-link">
              <a
                style={{ cursor: "pointer" }}
                onClick={handleOpen}
                className="video-popup"
              >
                <div className="design-studio__video-icon">
                  <span className="icon-play-button"></span>
                  <i className="ripple"></i>
                </div>
              </a>
            </div>
          )}
        </div>
        <div className="blog-sidebar__content-box">
          <ul className="list-unstyled blog-sidebar__meta">
            <li>
              <Link href="/blog-details">
                <a>
                  <i className="far fa-user-circle"></i> By {admin}
                </a>
              </Link>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <Link href="/blog-details">
                <a>
                  <i className="far fa-comments"></i> {comments} Comments
                </a>
              </Link>
            </li>
          </ul>
          <h3 className="blog-sidebar__title">
            <Link href="/blog-details">{title}</Link>
          </h3>
          <p className="blog-sidebar__text">{text}</p>
          <div className="blog-sidebar__read-more-btn">
            <Link href="/blog-details">Read More</Link>
          </div>
        </div>
      </div>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default BlogSidebarContentSingle;
