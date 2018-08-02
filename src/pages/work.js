import React, { Component } from 'react';
import Links from '../components/Links/links';

export default class Work extends Component {
  render() {
    return (
      <div>
        <h1>So some things that I have built.</h1>
        <div>
          <h2>Check out some of the links.</h2>
          <Links />
        </div>
      </div>
    );
  }
}
