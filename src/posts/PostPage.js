import React, { Component } from 'react';

import BackButton from '../components/backButton';

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <BackButton />
        <span
          style={{
            fontFamily: 'helvetica, sans-serif, arial',
            fontWeight: 'light',
            textAlign: 'right',
            display: 'inline-block',
            width: '100%',
            marginTop: '25px',
          }}
        >{data.markdownRemark.frontmatter.date}
        </span>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
      </div>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`;
