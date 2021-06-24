const path = require(`path`)

module.exports = {
  pathPrefix: `/digital-service`, // So I'm not an expert in gatsby, but I think this might be causing an issue where you have two 'homepages' (unless of course that is by design and I'm missing the point). Right now the 'home' link serves you to one version of the homepage at https://connecticut-digital-services.github.io/digital-service and the initial load of the site brings you to a root directory homepage at https://connecticut-digital-services.github.io/ - Maybe this is more in the deployment config for gatsby in gh-pages as far as setting the true homepage. They are both informational, but a little confusing that there's two. -@knaackbuilt (any remote jobs for a dev/product manager/architect on your digital service team?)
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `static/img/fall.jpg`
      }
    },
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
        path: path.join(__dirname, `static`, `img`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/focus-area`,
        name: 'areas',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/work`,
        name: 'works',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/principle`,
        name: 'principles',
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    `gatsby-remark-relative-images`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-styled-components`,
  ]
};
