import React from 'react';
import Head from 'next/head';
import Home from '../src/components/home/home';

const Index = () => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Trade+Winds"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Code+Pro"
        rel="stylesheet"
      />
    </Head>

    <Home />
  </>
);

export default Index;
