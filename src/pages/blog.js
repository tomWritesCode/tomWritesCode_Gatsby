import React, { Component } from 'react';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
  <div>
    <h2>The Blog</h2>
    {data.allContentfulTomWritesCode.edges.map(({ node }) => <PostListing key={node.id} post={node} />)}
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
		allContentfulTomWritesCode {
			edges {
				node {
					title
					body {
						childMarkdownRemark {
							excerpt(pruneLength: 250)
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
