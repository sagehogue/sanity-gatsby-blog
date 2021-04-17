export default {
  widgets: [
    { name: "structure-menu" },
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
                  buildHookId:
                    "607b53f439599be088421bc6",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-9vxpxyim",
                  apiId: "624f6de7-29f9-4a17-b108-60565d8a34b2",
                },
                {
                  buildHookId: "607b53f41d8fad22695fabeb",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-es7cpknr",
                  apiId: "73e44475-f16d-4bfc-9075-9a0d745ff514",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sagehogue/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-es7cpknr.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
