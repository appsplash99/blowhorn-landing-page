import React from "react";

export const Hero = () => {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
      <div className="text-center">
        <h2 className="text-base font-semibold tracking-wide text-red-600 uppercase">
          Welcome to
        </h2>
        <p className="my-3 text-4xl sm:text-5xl lg:text-6xl font-bold sm:tracking-tight text-gray-900">
          reactjs-vite-tailwindcss-boilerplate
        </p>
        <p className="text-xl text-gray-400">Commit from dev branch</p>
      </div>
    </div>
  );
};
