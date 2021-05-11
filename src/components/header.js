import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { header, title, navList, navItem, activeNavItem } from '../styles/header.module.scss';

// import './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return ( 
        <header className={header}>
            <title>The Great Gatsby Blog</title>
            <h1>
                <Link className={title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={navList}>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            

        </header>

     );
}
 
export default Header;