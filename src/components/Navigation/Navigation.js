import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';

import './nav.css';

const MobileMenu = styled.div`
	@media (min-width: 660px) {
    float: unset;
    display: none;
	}
`;
const DesktopMenu = styled.div`
	@media (max-width: 660px) {
    display: none;
    float:unset;
	}
`;

const MainNav = styled.nav`
	@media (max-width: 660px) {
		text-align: center;
		position: fixed;
	}
	ul {
		list-style: none;
		display: flex;
    margin-left: 0;
    
    @media(max-width:660px){
      width: 12 0px;
      max-width: 120px;
      text-align: center;
    }

		@media (max-width: 660px) {
			display: block;
		}

		li {
      font-size: 2vw;
      margin-left: 15px;
			font-family: sans-serif;

			@media (max-width: 660px) {
        margin-bottom: 25px;
        margin-left: 0;
        font-size: 24px;
			}

			a {
				text-decoration: none;
				color: white;

				&:hover {
					border-bottom: 3px solid #2285cc;
				}
			}
		}
	}
`;

export default class Navigation extends Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <MobileMenu>
          <Menu right width={200} height="105vh" isOpen={false}>
            <MainNav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/work/">Work</Link>
                </li>
                <li>
                  <Link to="/blog/">Blog</Link>
                </li>
              </ul>
            </MainNav>
          </Menu>
        </MobileMenu>

        <DesktopMenu>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/work/">Work</Link>
              </li>
              <li>
                <Link to="/blog/">Blog</Link>
              </li>
            </ul>
          </MainNav>
        </DesktopMenu>
      </div>
    );
  }
}
