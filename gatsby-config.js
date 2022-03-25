module.exports = {
  siteMetadata: {
    title: `Nick Zuber`,
    description: `Software engineer, long walk taker, wannabe chess master.`,
    author: `Nick Zuber <zuber.nicholas@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nick Zuber`,
        short_name: `nickzuber`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#f5c0a2`,
        display: `minimal-ui`,
        icon: `src/images/circle-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
