import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import Header from "./Header.js";
import Title from './Title'

const Layout = ({ title, description, childeren }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfilio" />
        <meta property="og:title" content={title} />,
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat dark:bg-gray-900 dark:text-white">
        <div className="w-full h-full">
          <Header />
          ---
          <Title/> 
          ---
          {childeren}
        </div>
        <motion.img
          src="/images/ball-1.svg"
          alt="ball-1"
          className="hidden md:block h-auto absolute top-48 right-10 z-[1]"
          whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        />
        <motion.img
          src="/images/ball-2.svg"
          alt="ball-2"
          className="hidden md:block h-auto absolute bottom-10 left-10 z-[1]"
          whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        />
      </div>
    </>
  );
};

export default Layout;
