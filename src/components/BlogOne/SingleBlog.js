// import Link from "next/link";
// import React from "react";
// import { Col, Image } from "react-bootstrap";

// const SingleBlog = ({ blog = {} }) => {
//   const { image, date, admin, comments, title, id } = blog;

//   return (
//     <Col xl={4} lg={4} className="animated fadeInUp">
//       <div className="blog-one__single">
//         <div className="blog-one__img">
//           <Link href={`/blog-details?id=${id}`}>
//           <Image src={require(`@/images/blog/${image}`).default.src} alt="" />
//           </Link>
//           <Link href={`/blog-details?id=${id}`}  passHref>
//             <a>
//               <span className="blog-one__plus"></span>
//             </a>
//           </Link>
//           <div className="blog-one__date">
//             <p>{date}</p>
//           </div>
//         </div>
//         <div className="blog-content">
//           <ul className="list-unstyled blog-one__meta">
//             <li>
//               {/* <Link href="/blog-details">
//                 <a>
//                   <i className="far fa-user-circle"></i> By {admin}
//                 </a>
//               </Link> */}
//             </li>
//             <li>
//               {/* <span>/</span> */}
//             </li>
//             <li>
//             {/* <Link href={`/blog-details?id=${id}`}>
//                 <a>
//                   <i className="far fa-comments"></i> {comments} Comments
//                 </a>
//               </Link> */}
//             </li>
//           </ul>
//           <h3 className="blog-one__title">
//           <Link href={`/blog-details?id=${id}`}>{title}</Link>
//           </h3>
//           <div className="blog-one__read-btn">
//             <Link href={`/blog-details?id=${id}`}>Read More</Link>
//           </div>
//         </div>
//       </div>
//     </Col>
//   );
// };

// export default SingleBlog;


import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

// Disable ESLint for passHref warning if needed
/* eslint-disable @next/next/link-passhref */

const SingleBlog = ({ blog = {} }) => {
  const { image, date, admin, comments, title, id } = blog;

  return (
    <Col xl={4} lg={4} className="animated fadeInUp">
      <div className="blog-one__single">
        <div className="blog-one__img">
          <Link href={`/blog-details?id=${id}`}>
            <Image src={require(`@/images/blog/${image}`).default.src} alt="" />
          </Link>
          <Link href={`/blog-details?id=${id}`}>
            <span className="blog-one__plus"></span>
          </Link>
          <div className="blog-one__date">
            <p>{date}</p>
          </div>
        </div>
        <div className="blog-content">
          <ul className="list-unstyled blog-one__meta">
            <li>
              {/* <Link href="/blog-details">
                  <i className="far fa-user-circle"></i> By {admin}
              </Link> */}
            </li>
            <li>
              {/* <span>/</span> */}
            </li>
            <li>
              {/* <Link href={`/blog-details?id=${id}`}>
                  <i className="far fa-comments"></i> {comments} Comments
              </Link> */}
            </li>
          </ul>
          <h3 className="blog-one__title">
            <Link href={`/blog-details?id=${id}`}>
              {title}
            </Link>
          </h3>
          <div className="blog-one__read-btn">
            <Link href={`/blog-details?id=${id}`}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleBlog;