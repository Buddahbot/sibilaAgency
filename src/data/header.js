import phoneIcon from "@/images/icon/phone-icon.png";
import logo1 from "@/images/resources/logo-1.png";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/home3",
    // subNavItems: [
    //   {
    //     id: 1,
    //     name: "Home One",
    //     href: "/",
    //   },
    //   {
    //     id: 2,
    //     name: "Home Two",
    //     href: "/home2",
    //   },
    //   {
    //     id: 1,
    //     name: "Home Three",
    //     href: "/home3",
    //   },
    //   {
    //     id: 4,
    //     name: "Header Styles",
    //     href: "/",
    //     subItems: [
    //       {
    //         id: 1,
    //         name: "Header One",
    //         href: "/",
    //       },
    //       { id: 2, name: "Header Two", href: "/home2" },
    //       { id: 3, name: "Header Three", href: "/home3" },
    //     ],
    //   },
    // ],
  },
  {
    id: 2,
    name: "About",
    href: "/",
    // subNavItems: [
    //   { id: 1, name: "About", href: "/about" },
    //   { id: 2, name: "Team", href: "/team" },
    //   { id: 3, name: "FAQs", href: "/faq" },
    //   { id: 4, name: "404 Error", href: "/404" },
    // ],
  },
  {
    id: 3,
    name: "Services",
    href: "/services",
    subNavItems: [
      { id: 1, name: "Services", href: "/services" },
      { id: 2, name: "Mobile Application", href: "/mobile-application" },
      { id: 3, name: "Digital Marketing", href: "/digital-marketing" },
      { id: 4, name: "Graphic Designing", href: "/graphic-designing" },
      { id: 5, name: "Website Development", href: "/website-development" },
      { id: 6, name: "Social Marketing", href: "/social-marketing" },
      { id: 7, name: "Content Writing", href: "/content-writing" },
    ],
  },
  {
    id: 4,
    name: "Portfolio",
    href: "/project",
    subNavItems: [
      { id: 1, name: "Projects", href: "/project" },
      { id: 2, name: "Project Details", href: "/project-details" },
    ],
  },
  {
    id: 5,
    name: "Insights",
    href: "/blog",
    subNavItems: [
      { id: 1, name: "Blog Posts", href: "/blog" },
      { id: 2, name: "Blog Sidebar", href: "/blog-sidebar" },
      { id: 3, name: "Blog Details", href: "/blog-details" },
    ],
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const header = {
  logo1,
  logo2,
  phone: "34 661 02 36 22",
  email: "needhelp@mibooz.com",
  phoneIcon,
  navItems,
  socials: [
    "fab fa-twitter",
    "fab fa-facebook-square",
    "fab fa-pinterest-p",
    "fab fa-instagram",
  ],
};

export default header;
