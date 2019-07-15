import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../header/header';
import './blog.scss';

class Blog extends Component {

  render() {
    return (
      <div>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Trade+Winds" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Song+Myung" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="blog">
          <Header />
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default Blog;
