import React from 'react';
import Head from 'next/head';
import Home from '../src/components/home/home';

import profile from '../src/profile.js';

const Index = () => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Marck+Script&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Literata&display=swap" rel="stylesheet" />
      <title>{`${profile.name} | ${profile.title}`}</title>
    </Head>

    <Home />
  </>
);

export default Index;
