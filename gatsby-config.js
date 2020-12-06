module.exports = {
  siteMetadata: {
    title: `Darcy | Developer`,
    description: `I’m Darcy, a 28 years' old self-taught developer.`,
    author: `Darcy`,
    siteUrl: "https://darcyeprice.com",
    social: {
      twitter: "darcydev",
      instagram: "darcydev",
      linkedin: "darcydev",
      youtube: "darcydev",
      facebook: "darcydev",
      github: "darcydev",
      email: "darcy@darcydev.com"
    },
    // name of the image for social website share, should be in static folder
    imageShare: `share.jpg`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-141189217-1D",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false
      }
    },
    `gatsby-plugin-use-dark-mode`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noreferrer"
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Darcy | Developer`,
        short_name: `Darcy`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#127EB1`,
        display: `minimal-ui`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-antd`
  ]
};
