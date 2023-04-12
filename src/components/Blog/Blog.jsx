import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-full p-20 bg-slate-100 ">
        <h3 className="text-5xl font-bold">Blog</h3>
      </div>
      <div className="mx-auto px-4 py-12  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
        <div className="space-y-8">
          <div className="bg-slate-100 p-8 rounded-lg space-y-4">
          <h3 className="text-lg font-bold">
            When should you use context api?
          </h3>
          <p className="text-base font-medium text-gray-700 mt-auto">
            Context api is used when when we want to make some data accessable from different routes. Context api makes it easier than prop drilling to send data to any component of a nested route.It can be also used to provide state to multiple components at any level in the component tree.
          </p>
          </div>
          <div className="bg-slate-100 p-8 rounded-lg space-y-4">
          <h3 className="text-lg font-bold">What is a custom hook??</h3>
          <p className="text-base font-medium text-gray-700 mt-auto">
            A custom hook is a reusable function that we can apply in a react application. Custom Hooks start with "use". When we need to add any logic or functionality across multiple components, we can use that custom hook.
          </p>
          </div>
          <div className="bg-slate-100 p-8 rounded-lg space-y-4">
          <h3 className="text-lg font-bold">
          What is useRef?
          </h3>
          <p className="text-base font-medium text-gray-700 mt-auto">
           The useRef hook is is a built-in React hook. It accepts one argument as the initial value and returns a reference. It is used to persist values between renders. It can be used to store a mutable value. When the value is updated, it does not cause re-render. 
          </p>
          </div>
          <div className="bg-slate-100 p-8 rounded-lg space-y-4">
          <h3 className="text-lg font-bold">
          What is useMemo?
          </h3>
          <p className="text-base font-medium text-gray-700 mt-auto">
          The react useMemno hook returns a memoized value. It can memoize expensive functions so that we can avoid calling those on every render. It only runs when it's dependency is updated. It allows us to cache the result of a calculation between re-renders.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
