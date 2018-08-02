module.exports = {
  siteMetadata: {
    title: '< tomWritesCode />',
    desc: 'Website and Blog for Thomas Whitaker - Web Developer',
  },
  pathPrefix: '/tomWritesCode_Gatsby',
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-123148835-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'i97majv0duw2',
        accessToken: 'd4412090e9d9bea88a4d443ad00071a2461e200dc04a1052fc9814949095372b',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
  ],
};
