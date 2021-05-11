import React from 'react';
import { Link } from 'gatsby';
import Head from '../components/head'
import PageLayout from '../components/layout';


const ContactPage = () => {
    return ( 
        <div>
            <PageLayout>
            <Head title="Contact"/>
                <h1>Contact</h1>
                <p>Contact me at the following links:</p>
                <p>twitter: <a href="https://twitter.com/dannyheyes" target="_blank">@dannyheyes</a></p>

            </PageLayout>
            
        </div>
     );
}
 
export default ContactPage;