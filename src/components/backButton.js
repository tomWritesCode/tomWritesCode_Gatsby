import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Span = styled.div`
  display: block;
  width: 200px;
  height: 40px;
  font-size: 22px;
  padding: 5px 20px;
  text-align: center;
  background-color: rgba(142, 209, 252, 0.3);
  border-radius: 0 7px 7px 0;
  transition: ease-in-out 200ms;
  margin-bottom: 20px;
  margin-left: -35px;

  &:hover {
    box-shadow: 3px 3px 15px #b2b2b2;
    transition: ease-in-out 200ms;
  }
`;

export default class BackButton extends Component {
  render() {
    return (
      <div>
        <Link
          to="/blog/"
          style={{
            textDecoration: 'none',
            color: 'black',
            fontFamily: 'helvetica, sans-serif, ariel',
          }}
        >
          <Span>Back</Span>
        </Link>
      </div>
    );
  }
}
