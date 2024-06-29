import React from "react";

const About = () => {
  return (
    <div className="flex justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Muhammad Tahir Iqbal
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-base">
              I am is software developer. I can develop a website for you.
            </p>
            <ul>
              <li>Typescript</li>
              <li>Next JS</li>
              <li>React JS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
