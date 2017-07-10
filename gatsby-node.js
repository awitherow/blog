// In your gatsby-node.js
const path = require("path");

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const filePath = path.parse(fileNode.relativePath);

    if (filePath.name !== "index" && filePath.dir !== "") {
      slug = `/${filePath.dir}/${filePath.name}/`;
    } else if (filePath.dir === ``) {
      slug = `/${filePath.name}/`;
    } else {
      slug = `/${filePath.dir}/`;
    }

    // Add slug as a field on the node.
    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const pages = [];
    const blogPost = path.resolve("src/templates/blog-post.js");
    resolve(
      graphql(
        `
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: edge.node.fields.slug, // required
            component: blogPost,
            context: {
              slug: edge.node.fields.slug
            }
          });
        });
      })
    );
  });
};
