import { motion } from "framer-motion";
import Link from 'next/link' 
import React from "react";
import Typical from "react-typical";

import GithubIcon from "./icons/Github";
import LinkedinIcon from "./icons/Linkedin"
import JobIcon from "./icons/Job.js"


const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={Infinity}
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
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 hover:text-sky-400"
                whileHover={{ scale: 1.3 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/turhan-e-b25916113/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 hover:text-sky-400"
                whileHover={{ scale: 1.3 }}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="#"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 hover:text-sky-400"
                whileHover={{ scale: 1.3 }}
              >
                <JobIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          </div>

          {/* Code Area */}
          <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">This website</span> created in Nextjs
                  </p>

                  <div className="flex">
                    <div>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">2</span> =
                        ["Reactjs", "Nextjs", "MongoDB", "Nodejs"];
                      </p>
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-pink-300">3</span> =
                        ["Solidity", "Web3.js"];
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <Link href="/projects">
                      <a className="transition duration-300">Projects</a>
                    </Link>
                    <Link href="/blogs">
                      <a className="transition duration-300">Blogs</a>
                    </Link>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Title;
