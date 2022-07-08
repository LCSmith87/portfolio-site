require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Levi Smith - Portfolio`,
    siteTitleAlt: `👋 Levi Smith - Full Stack Engineer`,
    siteHeadline: `Levi Smith - Full Stack Engineer`,
    siteUrl: `https://levismith.dev`,
    siteDescription: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
    siteLanguage: `en`,
    siteImage: `/android-chrome-512x512.png`,
    author: ``,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
