import React, { Component } from 'react';

import BackButton from '../components/backButton';

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <div style={{ fontFamily: 'helvetica, sans-serif, arial' }}>
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
        >
          {data.contentfulBlogPost.date}
        </span>
        <h1 style={{ marginTop: '25px' }}>{data.contentfulBlogPost.title}</h1>
        <div
          dangerouslySetInnerHTML={{
						__html: data.contentfulBlogPost.body.childMarkdownRemark.html,
					}}
        />
        <p style={{
					fontFamily: 'helvetica, sans-serif, arial',
					float: 'right',
					fontWeight: 300,
					marginRight: '20px',
 }}
        >
    By Thomas Whitaker
        </p>
      </div>
    );
  }
}

export const query = graphql`
	query BlogPostQuery($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			body {
				childMarkdownRemark {
					html
					excerpt
				}
			}
			slug
			id
			author
		}
	}
`;
