const path = require('path');


// This is to create a new page for every blog post. 
module.exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions; 
    const blogTemplate = path.resolve('./src/templates/blog.js') // Get the path of the template file 

    // Returning the slug of each page so that we can append it onto the URL. 
    const response = await graphql(`
        query {
           allContentfulBlogPost {
               edges {
                   node {
                       slug
                   }
               }
           }
        }
    `)

    // Creating a new page dynamically, depending on how many edges (pages) there are
    response.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`, // appending the slug onto the URL. 
            context: {
                slug: edge.node.slug
            }
        })
    })
    
}