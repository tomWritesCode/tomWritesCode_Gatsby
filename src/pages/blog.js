import React, { Component } from 'react';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
  <div>
    <h2>The Blog</h2>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
        ))}
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
    allMarkdownRemark(sort:{
      fields: [frontmatter___date],
      order: DESC,
    }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`;
