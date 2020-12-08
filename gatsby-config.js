/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const { FilterNone } = require("@material-ui/icons");

module.exports = {
  /* Your site config here */
  pathPrefix: "/apprentice",
  plugins: [
    `gatsby-plugin-react-helmet`,
  ],
  "scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  },
}
