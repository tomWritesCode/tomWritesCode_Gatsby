import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Navigation from '../Navigation/Navigation';

const HeaderWrapper = styled.div`
	background: #2285cc;
	margin-bottom: 1.45rem;
	overflow: hidden;
	position: relative;
	height: ${({ isHome }) => (isHome ? '50vh' : '20vh')};
	h1 {
		img {
			height: 80px;
		}
	}
`;
const HeaderContainer = styled.div`
	margin: 0 auto;
	max-width: 960px;
	padding: 1.45rem 1.0875rem;
	position: relative;
	z-index: 2;
	display: flex;
	justify-content: space-between;

	@media (max-width: 660px) {
		padding-top: 20px;
	}
`;
const H1 = styled.h1`
	@media (max-width: 660px) {
		display: block;
		width: calc(100% - 60px);
		text-align: left;
		font-size: 7vw;
	}
`;

export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === '/') {
        this.wrapper.animate(
          [{ height: '20vh' }, { height: '50vh' }],
          {
            duration: 400,
            fill: 'forwards',
            easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
            iterations: 1,
          });
      } else if (prevProps.location.pathname === '/about/', '/work/', '/blog/' && prevProps.location.pathname !== '/') {
        this.wrapper.animate(
          [{ height: '20vh' }, { height: '20vh' }], {
            duration: 0,
          });
      } else {
        this.wrapper.animate(
          [{ height: '50vh' }, { height: '20vh' }],
          {
            duration: 400,
            fill: 'forwards',
            easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
            iterations: 1,
          });
      }
    }
  }
  render() {
    const { data, location } = this.props;
    return (
      <HeaderWrapper
        isHome={location.pathname === '/'}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <HeaderContainer>
          <H1>
            <Link
              to="/"
              style={{
								color: 'white',
								textDecoration: 'none',
							}}
            >
              {data.site.siteMetadata.title}
            </Link>
          </H1>
          <Navigation />
        </HeaderContainer>
        <Img
          style={{
						position: 'absolute',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%',
						opacity: 0.4,
					}}
          sizes={data.background.sizes}
        />
      </HeaderWrapper>
    );
  }
}
