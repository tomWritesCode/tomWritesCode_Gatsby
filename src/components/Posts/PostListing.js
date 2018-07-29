import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Article = styled.article`
  font-family: Helvetica, sans-serif, Arial;
  background-color: rgba(142, 209, 252, 0.3); 
  padding: 15px 20px;
  border-radius: 8px;
  transition: ease-in-out 200ms;

  &:hover {
    box-shadow: 3px 3px 15px #b2b2b2;
    transition: ease-in-out 200ms;
    transform: scale(1.05);
  }
`;

const H3 = styled.h3`
  display: inline-block;
  margin-bottom: 15px;
`;

const Span = styled.span`
  float: right;
`;

const P = styled.p`
  margin-bottom: 0;
`;

const PostListing = ({ post }) => (
  <div>
    <Link
      to={post.fields.slug}
      style={{
          textDecoration: 'none',
          color: 'black',
        }}
    >
      <Article>
        <H3>{post.frontmatter.title}</H3>
        <Span>{post.frontmatter.date}</Span>
        <P>{post.excerpt}</P>
      </Article>
    </Link>
  </div>
);

export default PostListing;
