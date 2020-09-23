export default {
  name: "clientSlider",
  type: "document",
  title: "Client Slider",
  description: "Client slider for tile user experiences ",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Slider",
      description: "Name is used to identify the slider for page layout",
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
      description: "Headline will be displayed on website",
    },
    {
      name: "slides",
      type: "array",
      title: "Slides",
      description:
        "Add any client, the image will be taken from the clients section",
      of: [
        {
          type: "reference",
          to: [{ type: "client" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
