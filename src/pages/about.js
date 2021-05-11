import React from 'react';
import { Link } from 'gatsby';
import Head from '../components/head'
import PageLayout from '../components/layout';


const AboutPage = () => {
    return (
        <div>
            <PageLayout>
            <Head title="About"/>
                <h1>About Page</h1>
                <p>This is an about page. it is usually where you would find out more about me. </p>
                <p>Reach out, find my social link on the <Link to="/contact">Contact page</Link> </p>
            </PageLayout>
            
        </div>
    )
}

export default AboutPage;