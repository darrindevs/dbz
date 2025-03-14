module.exports = {
  siteMetadata: {
    title: `Doris Baizley`,
    description: `Playwright. Story Editor. Teacher. `,
    author: `Dynamo.dev`,
    siteUrl: `https://dorisbaizley.com`,
    image: "/img.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `starter-template-with-react-bootstrap`,
        short_name: `starter-with-react-bootstrap`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/dbz_favicon_1.png`, // This path is relative to the root of the site.
          
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline',
  ],
}
