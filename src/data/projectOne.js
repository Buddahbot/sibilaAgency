const projectOne = {
  tagline: "recent projects",
  title: "work showcase",
  filters: [
    {
      id: 1,
      name: "All",
      filterData: "filter-item",
    },
    {
      id: 2,
      name: "Branding",
      filterData: "bra",
    },
    {
      id: 3,
      name: "Photography",
      filterData: "photo",
    },
    {
      id: 4,
      name: "Web Design",
      filterData: "web",
    },
    {
      id: 5,
      name: "Apps",
      filterData: "app",
    },
  ],
  projects: [
    {
      id: 1,
      image: "project-one-img-1.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: ["bra", "photo", "web"],
    },
    {
      id: 2,
      image: "project-one-img-2.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: ["bra", "app", "web"],
    },
    {
      id: 3,
      image: "project-one-img-3.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: ["bra", "web"],
    },
    {
      id: 4,
      image: "project-one-img-4.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: ["bra", "photo", "web"],
    },
    {
      id: 5,
      image: "project-one-img-5.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: ["bra", "web"],
    },
    {
      id: 6,
      image: "project-one-img-6.jpg",
      title: "Fimlor Experience",
      tagline: "Graphic",
      filter: ["app", "photo"],
    },
  ],
};

export default projectOne;
