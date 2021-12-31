import { motion } from "framer-motion";
import React from "react";
import Typical from "react-typical";

import GithubIcon from "./icons/Github";
import LinkedinIcon from "./icons/Linkedin"

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={2}
        wrapper="p"
        steps={["Full-stack Developer", 2000, "AWS Enthusiast", 2000]}
      />
    );
  },
  (props, prevProps) => true
);

const Title = () => {
  return (
    <>
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span> I&apos;m
            </h4>
            <h1 className="mt-4 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:wt-6 dark:text-white">
              Turhan Ergene
            </h1>
            <div className="mt-5 text-2xl font-normal text-transparent md:text-4xl bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-5">
              <TypingAnimation />
            </div>
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/turhanergene"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Title;
