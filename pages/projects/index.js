import Link from "next/link";
import Head from "next/head";

import ArrowLeftIcon from "../../components/icons/ArrowLeft";
import Header from "../../components/Header";

import { getAllProjects } from '../../functions/getAllProjects'

export default function ProjectsPage() {
  return (
    <div className="relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat dark:bg-gray-900 dark:text-white w-full h-full">
      <Header />
      <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
        <Link href="/">
          <a className="flex items-center space-x-4 font-montserrat pb-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200">
            <ArrowLeftIcon className="w-8 h-8 fill-current" />
            <span>Back to Home</span>
            {/* className="text-xl font-normal" */}
          </a>
        </Link>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2"></div>
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects
    },
  };
};
