module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: "Thoughts and Things",
    descriptin: "Where I write about thoughts and things that come and go."
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-plugin-sharp`
  ]
};
