const path = require(`path`)

module.exports = {
  pathPrefix: `/digital-service`,
  siteMetadata: {
    title: `Connecticut Digital Service`,
    description: `We better serve the citizens of Connecticut through smart, user-centered digital services.`,
    author: `@taylorbryant`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/fall.jpg`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`
  ]
};
