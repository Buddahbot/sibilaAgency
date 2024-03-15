import bg from "@/images/shapes/site-footer-top-shape.png";

const footerData = {
  bg,
  title: "We help you solve business problems, foster customer loyalty, and grow your income.",
  phone: "34 661 02 36 22",
  email: "sebastian.sibila at gmail dotcom",
  address: "Vista Hermosa 117",
  city: "Santa Margarita, Spain",
  year: new Date().getFullYear(),
  author: "Sibila Digital Agency",
  socials: [
    {
      id: 1,
      icon: "fab fa-twitter",
      href: "#",
    },
    {
      id: 2,
      icon: "fab fa-facebook",
      href: "#",
    },
    {
      id: 3,
      icon: "fab fa-pinterest-p",
      href: "#",
    },
    {
      id: 4,
      icon: "fab fa-instagram",
      href: "#",
    },
  ],
  links: [
    {
      id: 1,
      title: "Home",
      href: "/services",
    },
    {
      id: 2,
      title: "About",
      href: "/about",
    },
    {
      id: 3,
      title: "Services",
      href: "/services",
    },
    // {
    //   id: 4,
    //   title: "Contact",
    //   href: "/contact",
    // },
    // {
    //   id: 5,
    //   title: "News",
    //   href: "/blog",
    // },
    // {
    //   id: 6,
    //   title: "FAQs",
    //   href: "/faq",
    // },
    {
      id: 7,
      title: "Portfolio",
      href: "/project",
    },
    {
      id: 8,
      title: "Insights",
      href: "/blog",
    },
    {
      id: 9,
      title: "Contact",
      href: "/about",
    },
    // {
    //   id: 10,
    //   title: "Services",
    //   href: "/services",
    // },
  ],
};

export default footerData;
