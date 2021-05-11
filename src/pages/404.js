import React from 'react';
import { Link } from 'gatsby';
import Head from '../components/head'
import PageLayout from './../components/layout';

const NotFound = () => {
    return ( 
        <PageLayout>
        <Head title="404" />
            <h1>Page Not Found</h1>
            <p>
                <Link to="/">Head back home</Link>
            </p>
        </PageLayout>
     );
}
 
export default NotFound;