import React from 'react';
import Head from '../components/head'
import PageLayout from '../components/layout';
import { contactList } from './contact.module.scss';


const ContactPage = () => {
    return ( 
        <div>
            <PageLayout>
            <Head title="Contact"/>
                <h1>Contact Me</h1>
                <p>If you like what you see, don't hesitate to get in touch here:</p>
                <ul className={contactList}>
                    <li>
                        Email: <a href="mailto:hello@dannyheyes.com">hello@dannyheyes.com</a>
                    </li>
                    <li>
                        Instagram: <a href="https://instagram.com/dannyheyes" target="_blank">@dannyheyes</a>
                    </li>
                    <li>
                        Twitter: <a href="https://twitter.com/dannyheyes" target="_blank">@dannyheyes</a>
                    </li> 
                </ul>

            </PageLayout>
            
        </div>
     );
}
 
export default ContactPage;