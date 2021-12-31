import React from "react";
import Typical from "react-typical";

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={3}
        wrapper="p"
        steps={[
          "React Developer",
          2000,
          "React Enthusiast",
          2000,
        ]}
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
            <div>
              <TypingAnimation/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Title;
