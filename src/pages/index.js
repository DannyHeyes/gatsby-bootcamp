import React from 'react';
import { Link } from 'gatsby';
import Head from '../components/head'
import PageLayout from './../components/layout';

const IndexPage = () => {

  return ( 
    <PageLayout>
    <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Danny, a front-end developer living in Milan. </h2>
    </PageLayout>
  );

}

export default IndexPage;
