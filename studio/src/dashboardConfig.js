export default {
  widgets: [
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "",
                  title: "Sanity Studio",
                  name: "",
                  apiId: "",
                },
                {
                  buildHookId: "",
                  title: "Blog Website",
                  name: "",
                  apiId: "",
                },
              ],
            },
          },
        ],
        data: [{ title: "Frontend", value: "", category: "apps" }],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent clients",
        order: "_createdAt desc",
        types: ["client"],
      },
      layout: { width: "medium" },
    },
  ],
};
