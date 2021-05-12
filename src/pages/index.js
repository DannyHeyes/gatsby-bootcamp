import React from 'react';
import Head from '../components/head'
import PageLayout from './../components/layout';

import { githubLink } from './index.module.scss'

const IndexPage = () => {

  return ( 
    <PageLayout>
    <Head title="Home" />
      <h1>Hello</h1>
      <h2>I'm Danny, a front-end developer.</h2>
      <p >Welcome to my blog website. This website was built with Gatsby, Contentful for the CMS and 
      GraphQL. Have a look around, and the source code for this build can be found <a className={githubLink} href="https://github.com/DannyHeyes/gatsby-bootcamp" target="_blank">here</a>
      </p>
    </PageLayout>
  );

}

export default IndexPage;
