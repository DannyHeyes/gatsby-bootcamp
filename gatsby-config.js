require('dotenv').config() 

module.exports = {
  siteMetadata: {
    title: 'The Great Gatsby Blog'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'hic7yr8hosrv',
        accessToken: '0aaUYL_j3GttAlumFWKyWTElOE8wB7aYOMKHwv-JnDA'
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750, 
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
}
