import { useRootContext } from "@/context/context";
import header from "@/data/header";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const { logo2, phone, phoneIcon, navItems } = header;

const Header = ({ pageTitle }) => {
  const scrollTop = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();

  return (
    <header className={`main-header main-header-three clearfix`}>
      <nav
        className={`${
          scrollTop
            ? "stricky-header stricked-menu stricky-fixed slideInDown"
            : "slideIn"
        } main-menu animated clearfix main-menu-three`}
      >
        <div
          className={`${
            scrollTop
              ? "sticky-header__content main-menu-wrapper clearfix"
              : "main-menu-wrapper clearfix"
          }`}
        >
          <div className="main-menu-wrapper__logo">
            <Link href="/">
              <a>
                <Image src={logo2.src} alt="" />
              </a>
            </Link>
          </div>
          <div className="main-menu-wrapper__main-menu">
            <span onClick={() => toggleMenu()} className="mobile-nav__toggler">
              <i className="fa fa-bars"></i>
            </span>
            <ul className="main-menu__list">
              {navItems.map((navItem) => (
                <NavItem key={navItem.id} navItem={navItem} />
              ))}
            </ul>
          </div>
          <div className="main-menu-wrapper__right">
            <div className="main-menu-wrapper__call">
              <div className="main-menu-wrapper__call-icon">
                <Image src={phoneIcon.src} alt="" />
              </div>
              <div className="main-menu-wrapper__call-number">
                <p></p>
                <h5>
                  <a href={`tel:${phone.split(" ").join("")}`}>+ {phone}</a>
                </h5>
              </div>
            </div>
            <div className="main-menu-wrapper__search-box">
              <span
                onClick={toggleSearch}
                style={{ cursor: "pointer" }}
                className="main-menu-wrapper__search search-toggler icon-magnifying-glass"
              ></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;












// import { useRootContext } from "@/context/context";
// import header from "@/data/header";
// import useScroll from "@/hooks/useScroll";
// import Link from "next/link";
// import React from "react";
// import { Image } from "react-bootstrap";
// import NavItem from "./NavItem";

// const { logo1, logo2, phone, phoneIcon, navItems } = header;

// const Header = ({ pageTitle }) => {
//   const scrollTop = useScroll(130);
//   const { toggleMenu, toggleSearch } = useRootContext();

//   return (
//     <header
//       className={`main-header${
//         pageTitle === "Home Two"
//           ? " main-header-two"
//           : pageTitle === "Home Three"
//           ? " main-header-three"
//           : ""
//       } clearfix`}
//     >
//       <nav
//         className={`${
//           scrollTop
//             ? "stricky-header stricked-menu stricky-fixed slideInDown"
//             : "slideIn"
//         } main-menu animated clearfix${
//           pageTitle === "Home Two"
//             ? " main-menu-two"
//             : pageTitle === "Home Three"
//             ? " main-menu-three"
//             : ""
//         }`}
//       >
//         <div
//           className={
//             scrollTop
//               ? "sticky-header__content main-menu-wrapper clearfix"
//               : "main-menu-wrapper clearfix"
//           }
//         >
//           <div className="main-menu-wrapper__logo">
//             <Link href="/">
//               <a>
//                 <Image
//                   src={pageTitle === "Home Two" ? logo2.src : logo1.src}
//                   alt=""
//                 />
//               </a>
//             </Link>
//           </div>
//           <div className="main-menu-wrapper__main-menu">
//             <span onClick={() => toggleMenu()} className="mobile-nav__toggler">
//               <i className="fa fa-bars"></i>
//             </span>
//             <ul className="main-menu__list">
//               {navItems.map((navItem) => (
//                 <NavItem key={navItem.id} navItem={navItem} />
//               ))}
//             </ul>
//           </div>
//           <div className="main-menu-wrapper__right">
//             <div className="main-menu-wrapper__call">
//               <div className="main-menu-wrapper__call-icon">
//                 <Image src={phoneIcon.src} alt="" />
//               </div>
//               <div className="main-menu-wrapper__call-number">
//                 <p>Call Anytime</p>
//                 <h5>
//                   <a href={`tel:${phone.split(" ").join("")}`}>+ {phone}</a>
//                 </h5>
//               </div>
//             </div>
//             <div className="main-menu-wrapper__search-box">
//               <span
//                 onClick={toggleSearch}
//                 style={{ cursor: "pointer" }}
//                 className="main-menu-wrapper__search search-toggler icon-magnifying-glass"
//               ></span>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
