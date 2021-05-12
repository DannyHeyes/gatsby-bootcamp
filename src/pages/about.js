import React from 'react';
import Head from '../components/head'
import PageLayout from '../components/layout';


const AboutPage = () => {
    return (
        <div>
            <PageLayout>
            <Head title="About"/>
                <h1>About Me</h1>
                <p>Generic about the author page. </p>
            </PageLayout>
            
        </div>
    )
}

export default AboutPage;