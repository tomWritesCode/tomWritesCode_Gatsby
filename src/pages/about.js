import React, { Component } from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-family: helvetica, sans-serif;
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
        </P>
      </div>
    );
  }
}
