import React from 'react';

const IndexPage = ({ data }) => (
  <div>
    <h2>Hey there, welcome to the site</h2>
  </div>
);

export default IndexPage;

export const query = graphql`
  query Sitemeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`;
