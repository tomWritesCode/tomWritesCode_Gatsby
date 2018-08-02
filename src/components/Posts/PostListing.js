import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Article = styled.article`
  font-family: Helvetica, sans-serif, Arial;
  background-color: rgba(142, 209, 252, 0.3); 
  padding: 15px 20px;
  border-radius: 8px;
  transition: ease-in-out 200ms;
  text-decoration: none;
  color: #16161d;

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
    <Link to={`../${post.slug}`} style={{ textDecoration: 'none' }}>
      <Article>
        <H3>
          {post.title}
        </H3>
        <Span>{post.createdAt}</Span>
        <P>{post.body.childMarkdownRemark.excerpt}</P>
      </Article>
    </Link>
  </div>
);

export default PostListing;
