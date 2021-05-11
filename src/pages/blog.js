import React from 'react';
import Head from '../components/head'
import PageLayout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { posts, post } from './blog.module.scss';



const BlogPage = () => {
const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
            sort: {
                fields: publishedDate 
                order: DESC 
            }
        ) {
            edges {
                node {
                    title
                    slug 
                    publishedDate(formatString:"MMMM Do, YYYY")
                }
            }
        }
    }
`)

    return (
        <div>
            <PageLayout>
            <Head title="Blog"/>
                <h1>Blog</h1>
                <ol className={posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => (
                        <li className={post}>
                        <Link to={`/blog/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.publishedDate}</p>
                        </Link>
                            
                        </li>
                    ))}
                </ol>
            </PageLayout>
          
        </div>
    )
}

export default BlogPage;