const contactPage = {
  title: "have a question?",
  tagline: "contact us",
  inputs: [
    {
      type: "text",
      placeholder: "Your name",
      name: "name",
      required: true,
    },
    {
      type: "email",
      placeholder: "Email address",
      name: "email",
      required: true,
    },
    {
      type: "text",
      placeholder: "Phone",
      name: "phone",
      required: false,
    },
    {
      type: "text",
      placeholder: "Subject",
      name: "subject",
      required: true,
    },
    {
      type: "",
      placeholder: "Write message",
      name: "message",
      required: true,
    },
  ],
};

export default contactPage;
