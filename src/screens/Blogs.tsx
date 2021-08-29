import React from "react";
import { BLOGS_PRIMARY, BLOGS_SECONDARY } from "../utils/blogs";

export const Blogs = () => {
  return (
    <>
      <section className="relative w-full bg-white">
        <div className="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white" />
        <div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
          <h1 className="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3">
            <a href="#_">The Project Blog</a>
          </h1>
          <p className="text-lg font-medium text-gray-500 sm:text-2xl">
            Designs and layouts to help you with your app.
          </p>
          <div className="grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
            {BLOGS_PRIMARY.map((blogPost, index) => (
              <div
                key={index}
                className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4"
              >
                <a
                  href="#_"
                  className="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
                  style={{
                    backgroundImage: `url(${blogPost.imageSrc})`,
                  }}
                ></a>
                <div
                  className={`relative z-20 w-full h-auto py-8 text-white  border-t-0 border-yellow-200 px-7 ${
                    index === 0
                      ? "bg-purple-500"
                      : index === 1
                      ? "bg-blue-400"
                      : "bg-yellow-400"
                  }`}
                >
                  <a
                    href="#_"
                    className={`inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase bg-white ${
                      index === 0
                        ? "text-purple-500"
                        : index === 1
                        ? "text-blue-500"
                        : "text-yellow-400"
                    }`}
                  >
                    {blogPost.type}
                  </a>
                  <h2 className="mb-5 text-5xl font-bold">
                    <a href="#_">{blogPost.name}</a>
                  </h2>
                  <p className="mb-2 text-lg font-semibold text-purple-100 opacity-100">
                    {blogPost.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-12 col-span-12 gap-7">
              {BLOGS_SECONDARY.map((blogPost, index) => (
                <div
                  key={index}
                  className=" flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4"
                >
                  <a
                    href="#_"
                    className="block transition duration-200 ease-out transform hover:scale-110 w-full"
                  >
                    <img
                      className="object-cover w-full shadow-sm h-56 md:max-h-56"
                      src={blogPost.imageSrc}
                    />
                  </a>
                  <div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl w-full">
                    <div className="bg-indigo-400 absolute top-0 -mt-3 items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white">
                      <span>{blogPost.type}</span>
                    </div>
                    <h2 className="text-base font-bold sm:text-lg md:text-xl">
                      <a href="#_">{blogPost.name}</a>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      {blogPost.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
