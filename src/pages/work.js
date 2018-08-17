import React, { Component } from 'react';
import styled from 'styled-components';
import Links from '../components/Links/links';

import WorkTemplate from '../components/workComponents/templatePage';

const P = styled.p`
	font-family: helvetica, sans-serif;
`;

const WorkList = [
  {
    id: 1,
    title: '<tomWritesCode />',
    desc: 'This site built as the main point for Tom and his web development career.',
    stack: {
      tech1: 'Gatsby',
      tech2: 'React',
      tech3: 'GraphQL',
      tech4: 'Styled Components',
      tech5: 'Netlify',
      tech6: 'Contentful',
      tech7: 'Github',
    },
  },
  {
    id: 2,
    title: 'Framelines.Photo',
    desc: 'I have been taking photography serioulsy since about 2011, I have freelanced as a photographer for over 4 years and have a huge passion for it. The name Framelines and the logo comes from my 1954 Leica M3 and is also the same viewfinder that I have as a tattoo on my wrist.',
    stack: {
      tech1: 'Gatsby',
      tech2: 'React',
      tech3: 'GraphQL',
      tech4: 'Styled Components',
      tech5: 'Netlify',
      tech6: 'Contentful',
      tech7: 'Github',
    },
  },
  {
    id: 3,
    title: 'Welcome To Photography',
    desc: 'This site is another personal project which grew from me teaching photography courses and giving talks. When someone is new to photography it is very easy to get lost in the flood of information, much like getting started in web development. My goal with Welcome to Photography is to create a space where someone can come to learn the basics of photography and gain a proper understanding of the very base concepts to help them understand much more complex things in the future.',
    stack: {
      tech1: 'Gatsby',
      tech2: 'React',
      tech3: 'GraphQL',
      tech4: 'Styled Components',
      tech5: 'Netlify',
      tech6: 'Contentful',
      tech7: 'Github',
    },
  },
];
export default class Work extends Component {
  render() {
    return (
      <div>
        <h1>So some things that I have built.</h1>
        <P>So I have mainly been working on small side projects currently, nothing huge yet but the growth rate of what I am learning and building is constantly growing. Below are a list of some of the projects that are either in progress or completed, below that is the links to my Twitter, Linkedin, GitHub and CodePen. </P>
        <section>
          {WorkList.map(work => <WorkTemplate key={WorkList.id} work={work} />)}
        </section>
        <div>
          <h2>Check out some of the links.</h2>
          <Links />
        </div>
      </div>
    );
  }
}
