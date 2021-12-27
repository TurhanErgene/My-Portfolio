import React from "react";
import Head from "next/head";

const Layout = ({ title, description, childeren }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfilio"/>
        <meta property="og:title" content={title}/>,
        <meta property="og:description" content={description}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-primary-light antialiased font-montserrat">{childeren}</div>
    </>
  );
};

export default Layout;
