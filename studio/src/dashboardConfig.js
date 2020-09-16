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
//                 {
//                   buildHookId: "5f61bcdc79678d6efc404c68",
//                   title: "Sanity Studio",
//                   name: "neemstudio",
//                   apiId: "ca94b8d3-0c74-4e4b-86c7-d4c4690f8483",
//                 },
                {
                  buildHookId: "5f61c102a52ea54248d718e7",
                  title: "Neem Website",
                  name: "lucid-spence-f8b895",
                  apiId: "85921af4-a09b-4a70-a6ae-2432aa2e2bd6",
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
