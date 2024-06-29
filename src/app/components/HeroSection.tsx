import React from "react";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            How does Partial
            <br className="hidden lg:inline-block" />
            Prerendering work?
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            Partial Prerendering uses React's Suspense (which you learned about
            in the previous chapter) to defer rendering parts of your
            application until some condition is met (e.g. data is loaded). The
            Suspense fallback is embedded into the initial HTML file along with
            the static content. At build time (or during revalidation), the
            static content is prerendered to create a static shell. The
            rendering of dynamic content is postponed until the user requests
            the route. Wrapping a component in Suspense doesn't make the
            component itself dynamic, but rather Suspense is used as a boundary
            between your static and dynamic code. Let's see how you can
            implement PPR in your dashboard route.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/partial.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
