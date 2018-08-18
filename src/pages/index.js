import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Body = styled.div`
	font-family: Helvetica, sans-serif, Arial;
`;
const GitHub = 'https://github.com/tomWritesCode';
const CodePen = 'https://codepen.io/tomWritesCode/';
const Twitter = 'https://twitter.com/tomWritesCode?lang=en';
const Instagram = 'https://www.instagram.com/framelines.photo/';

const A = styled.a`
	text-decoration: none;
	font-weight: 700;
	color: #16161d;
	transition: 300ms ease-in-out;

	&:hover {
		transition: 300ms ease-in-out;
		font-size: 1.2rem;
		padding: 1px 5px;
		background-color: rgba(142, 209, 252, 0.3);
		border-radius: 6px;
	}
`;
const Connection = A.extend``;

const IndexPage = ({ data }) => (
  <div>
    <h2>Hey there, my name is Tom and I am a Web Developer.</h2>

    <Body>
      <h4>Thanks for coming.</h4>
      <p>
				Now that you have dropped by take a look around and check out some of my work on{' '}
        <A href={GitHub} target="_blank">
					GitHub
        </A>, have a look at some of things I have built on{' '}
        <A href={CodePen} target="_blank">
					CodePen
        </A>, watch me ramble and fangirl on{' '}
        <A href={Twitter} target="_blank">
					Twitter
        </A>, or if you want to see my photography stuff which is the other side to things I love doing check out my <A href={Instagram} target="_blank">
					Instagram
        </A>.
					<br /> <br />
				
      </p>
    </Body>
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
