const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
			{
			  allContentfulBlogPost {
					edges {
						node {	
              id
              slug
						}
					}
				}
			}
		`).then((result) => {
      result.data.allContentfulblogPost.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve('./src/posts/PostPage.js'),
          context: {
            slug: node.slug,
          },
        });
      });
      resolve();
    });
  });
};
