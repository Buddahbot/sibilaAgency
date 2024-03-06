import { blogSidebarLeft } from "@/data/blogSidebarPage";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import BlogSidebarContentSingle from "./BlogSidebarContentSingle";

const { blogs, bottomBox, text, icon, title } = blogSidebarLeft;

const BlogSidebarLeft = () => {
  return (
    <div className="blog-sidebar__left">
      <div className="blog-sidebar__content">
        {blogs.map((blog) => (
          <BlogSidebarContentSingle key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="blog-sidebar__bottom-box">
        <div className="blog-sidebar__bottom-box-icon">
          <Image src={bottomBox.src} alt="" />
        </div>
        <p className="blog-sidebar__bottom-box-text">{text}</p>
      </div>
      <div className="blog-sidebar__delivering-services">
        <div className="blog-sidebar__delivering-services-icon">
          <Link href="/blog-details">
            <a>
              <Image src={icon.src} alt="" />
            </a>
          </Link>
        </div>
        <h3 className="blog-sidebar__delivering-services-title">
          <Link href="/blog-details">{title}</Link>
        </h3>
      </div>
      <div className="blog-sidebar__load-more">
        <a
          href="blog-details.html"
          className="thm-btn blog-sidebar__load-more-btn"
        >
          Load more posts
        </a>
      </div>
    </div>
  );
};

export default BlogSidebarLeft;
