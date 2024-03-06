import NeedHelpBg from "@/images/backgrounds/service-details-need-help-bg.jpg";
import image1 from "@/images/resources/service-details-img-1.jpg";
import image2 from "@/images/resources/service-details-img-2.jpg";
import image3 from "@/images/resources/service-details-img-3.jpg";
import image4 from "@/images/resources/service-details-img-4.jpg";
import image5 from "@/images/resources/service-details-img-5.jpg";
import image6 from "@/images/resources/service-details-img-6.jpg";
import benefitsImg from "@/images/resources/service-details__benefits-img.jpg";

const servicesDetails = {
  categories: [
    {
      id: 1,
      title: "Mobile Application",
      href: "/mobile-application",
    },
    {
      id: 2,
      title: "Digital Marketing",
      href: "/digital-marketing",
    },
    {
      id: 3,
      title: "Graphic Designing",
      href: "/graphic-designing",
    },
    {
      id: 4,
      title: "Website Development",
      href: "/website-development",
    },
    {
      id: 5,
      title: "Social Marketing",
      href: "/social-marketing",
    },
    {
      id: 6,
      title: "Content Writing",
      href: "/content-writing",
    },
  ],
  needHelp: {
    bg: NeedHelpBg,
    icon: "icon-phone-call",
    title: "Best Quality \n services",
    phone: "926668880000",
  },
};

const service = {
  text: "Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum Take a look at our round up of the best shows coming soon to your telly box has been the is industrys. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has industr standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of.",
  points: ["high quality project", "Fast & relaible service"],
  benefitsText:
    "Duis aute irure dolor in simply free text exist on reprehende voluptate velit esse cillum.",
  benefits: [
    "Nsectetur cing elit",
    "Suspe ndisse suscip sagittis leo",
    "Entum estib dignissim posuere",
    "If you are going to use a pass",
  ],
  benefitsImg,
  faqs: [
    {
      id: 1,
      title: "We Help to Create Visual Strategies",
      text: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
    {
      id: 2,
      title: "Motion Graphics & Animations",
      text: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
    {
      id: 3,
      title: "We Help to Achieve Mutual Goals",
      text: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
  ],
};

export const mobileService = {
  title: "Mobile Application",
  image: image1,
  ...service,
};

export const digitalMarketingService = {
  title: "Digital Marketing",
  image: image2,
  ...service,
};

export const graphicDesigningService = {
  title: "Graphic Designing",
  image: image3,
  ...service,
};

export const websiteDevelopmentService = {
  title: "Website Development",
  image: image4,
  ...service,
};

export const socialMarketingService = {
  title: "Social Marketing",
  image: image5,
  ...service,
};

export const contentWritingService = {
  title: "Content Writing",
  image: image6,
  ...service,
};

export default servicesDetails;
