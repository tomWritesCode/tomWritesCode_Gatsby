import React, { Component } from 'react';
import styled from 'styled-components';

const welcome = 'welcometophotography.com';
const framelines = 'framelines.photo';

const P = styled.p`
  font-family: helvetica, sans-serif;
`;

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

export default class About extends Component {
  render() {
    return (
      <div>
        <h1> Hey, my names Tom and I'm a Web Developer </h1>
        <P>
          So about me?
          <br /> <br />
          Well as well as being a Web Developer I am also a Photographer and Graphic Designer, triple threat I know but working with the web is where I am most passionate.
          <br /> <br />
          I have been doing web development for just over a year now and I am absolutly extactic about the amount of things there are to learn as well as the number of inovative things that keep evolving in the industry.
          <br /> <br />
          Outside of web development I am a really into photography and started/built/maintain/contribute to the site <A href={welcome} target="_blank">welcometophotography.com</A> as well as <A href={welcome} target="_blank">framelines.photo</A>, there is a bit more information about what these sites are for and what they do in the Work section of this site.
        </P>
      </div>
    );
  }
}
