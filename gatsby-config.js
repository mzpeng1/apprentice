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
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyA78TYuQXaKMZ3w5t_wvhQpRvdMAt6MCns",
          authDomain: "theapprentice-efe75.firebaseapp.com",
         databaseURL: "https://theapprentice-efe75.firebaseio.com",
  projectId: "theapprentice-efe75",
  storageBucket: "theapprentice-efe75.appspot.com",
  messagingSenderId: "532839982427",
  appId: "1:532839982427:web:39fe7140f73da28761e67e",
  measurementId: "G-P39RLG641B"
        }
      }
    }
  ],
  
}
