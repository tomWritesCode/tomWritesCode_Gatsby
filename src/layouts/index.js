import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
				{ name: 'description', content: 'Sample' },
				{ name: 'keywords', content: 'sample, something' },
			]}
    />
    <Header data={data} location={location} siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '0px 1.0875rem 1.45rem',
				paddingTop: 0,
			}}
    >
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
				desc
			}
		}
		background: imageSharp(id: { regex: "/backgroundImage/" }) {
			sizes(maxWidth: 1240) {
				...GatsbyImageSharpSizes
			}
		}
		allContentfulBlogPost {
			edges {
				node {
					title
					body {
						childMarkdownRemark {
							excerpt
						}
					}
					createdAt(formatString: "MMMM DD, YYYY")
					slug
					id
				}
			}
		}
	}
`;
