import React, { Component } from 'react';
import styled from 'styled-components';

import Github from '../../assets/images/github.png';
import Codepen from '../../assets/images/codepen.png';
import Twitter from '../../assets/images/twitter.png';
import Linkedin from '../../assets/images/linkedin.png';
import './hoverCSS.css';

const Section = styled.section`
	@media (max-width: 650px) {
		padding: 10px;
		font-size: 17px;
		margin-top: 10px;
		text-align: center;
		height: auto;
	}
`;

const H3 = styled.h3`
	padding-top: 5vh;
	margin: 0 auto;
	color: #16161d;
	text-align: center;
	margin-bottom: 20vh;
	font-size: 28px;
	margin-bottom: 5vh;
`;

const Grid = styled.section`
	margin-top: 20px;
	width: 100%;
	display: inline-grid;
	grid-template-columns: repeat(4, 25%);
	grid-gap: 10px;

	@media (max-width: 900px) {
		grid-template-columns: repeat(2, 50%);
	}
	@media (max-width: 490px) {
		display: grid;
		grid-template-rows: 2;
		grid-template-columns: repeat(2, 50%);
		padding-top: 30px;
	}
`;

const A = styled.a`
	margin: 0 auto;
	height: auto;
	width: auto;
	text-decoration: none;
	color: #16161d;
`;

const Img = styled.img`
	display: block;
	max-height: 241px;

	@media (max-width: 650px) {
		max-height: 120px;
	}
`;

const Span = styled.span`
	display: block;
	max-width: 241px;
	font-size: 28px;
	font-weight: 300;
	text-align: center;
	margin-top: 20px;
	margin-bottom: 50px;
	font-family: 'helvetica', 'sans-serif', 'arial';
	
	@media (max-width: 900px) {
		margin-bottom: 50px;
	}

	@media (max-width: 650 px) {
		padding: 0;
		margin: 0 auto;
	}
`;

class Connections extends Component {
  render() {
    return (
      <Section>
        <H3>Check out my social media as well as LinkedIn and GitHub</H3>
        <Grid>
          <A href="https://github.com/tomWritesCode" className="linkHover" target="_blank">
            <Img src={Github} className="logoHover" />
            <Span>GitHub</Span>
          </A>

          <A href="https://codepen.io/tomWritesCode/" className="linkHover" target="_blank">
            <Img src={Codepen} className="logoHover" />
            <Span>CodePen</Span>
          </A>

          <A
            href="https://www.linkedin.com/in/thomas-whitaker-b961b9112/"
            className="linkHover"
            target="_blank"
          >
            <Img src={Linkedin} className="logoHover" />
            <Span>LinkedIn</Span>
          </A>

          <A href="https://twitter.com/tomWritesCode?lang=en" className="linkHover" target="_blank">
            <Img src={Twitter} className="logoHover" />
            <Span>Twitter</Span>
          </A>
        </Grid>
      </Section>
    );
  }
}
export default Connections;
