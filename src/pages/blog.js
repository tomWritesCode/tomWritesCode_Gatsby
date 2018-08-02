import React, { Component } from 'react';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
  <div>
    <h2>The Blog</h2>
    {data.allContentfulBlogPost.edges.map(({ node }) => <PostListing key={node.id} post={node} />)}
  </div>
);

export default IndexPage;

export const query = graphql`
	query BlogQuery {
		site {
			siteMetadata {
				title
				desc
			}
		}
		allContentfulBlogPost {
			edges {
				node {
					title
					body {
						childMarkdownRemark {
							excerpt
						}
					}
          createdAt(formatString: "MMMM DD, YYYY")
					slug
					id
				}
			}
		}
	}
`;
