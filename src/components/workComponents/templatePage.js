import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin-bottom: 40px;
  padding: 10px;
  border-radius: 8px;
  background: rgba(24, 24, 24, 0.1);  
	font-family: helvetica, sans-serif;
`;
const H2 = styled.h2`
  text-align: center;
`;
const P = styled.p`
  text-align: center;
`;
const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  margin: 0 auto;

  @media(max-width: 660px) {
    grid-template-columns: 100%;
  }
`;
const Li = styled.li`
  display: inline-block;
  text-align: center;
  background: lightblue;
  border-radius: 8px;
  padding: 5px 10px;
  margin: 5px;
`;

export default class Project extends Component {
  render() {
    return (
      <Div>
        <H2>{this.props.work.title}</H2>
        <P>{this.props.work.desc}</P>
        <P>These technologies went into the the site</P>
        <Ul>
          <Li>{this.props.work.stack.tech1}</Li>
          <Li>{this.props.work.stack.tech2}</Li>
          <Li>{this.props.work.stack.tech3}</Li>
          <Li>{this.props.work.stack.tech4}</Li>
          <Li>{this.props.work.stack.tech5}</Li>
          <Li>{this.props.work.stack.tech6}</Li>
          <Li>{this.props.work.stack.tech7}</Li>
        </Ul>
      </Div>
    );
  }
}
