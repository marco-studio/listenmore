module.exports = {
  siteMetadata: {
    title: `LISTEN MOVE LOVE`,
    description: ``,
    author: `by JORINDE ZIEGERT`,
    twitter: ``,
    instagram: `https://www.instagram.com/jorindeziegert/`,
    facebook: ``,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1475067053?ct=podlink&mt=2`,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly9saXN0ZW5tb3ZlbG92ZS5saWJzeW4uY29tL3Jzcw==`,
    pocket: `https://pca.st/itunes/1475067053`,
    spotify: `https://open.spotify.com/show/4vmFsZ06GuaG60OKOSsZ2p`,
    overcast: `https://overcast.fm/itunes1475067053`,
    castbox: `https://castbox.fm/vic/1475067053`,
    castro: `https://castro.fm/itunes/1475067053`,
    podbean: ``,
    beaker: `https://www.breaker.audio/shows?feed_url=https%3A%2F%2Flistenmovelove.libsyn.com%2Frss`,
    stitcher: ``
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `https://listenmovelove.libsyn.com/rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
