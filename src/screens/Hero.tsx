import React from "react";
import { Button } from "../components/Button";

export const Hero = () => {
  return (
    <div className="h-screen pt-20 pb-32 py-16 sm:py-24 px-4 sm:px-6 md:px-16 lg:px-8 mx-auto max-w-screen-xl flex flex-col items-center justify-center gap-10">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-black">
          Start Crafting Your
        </h2>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-indigo-600">
          Next Great Idea
        </h2>
      </div>
      <div className="text-center text-sm md:text-xl lg:text-xl w-2/4 md:w-3/6 lg:w-2/6  mx-auto text-gray-400">
        Simplify the creation of landing Pages, blog Pages, application pages
        and so much more!
      </div>
      <div className="relative flex flex-col items-center justify-center gap-2">
        <div className="absolute -right-6 md:-right-4 -top-2 md:-top-3 px-1 py-0 md:px-2 md:py-1 rounded-full bg-green-400 text-white text-xs">
          only $15/mo
        </div>
        <Button className="py-2 px-4 md:py-4 md:px-6 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full text-sm md:text-xl">
          Purchase Now
        </Button>
        <Button className="py-2 px-2 bg-white hover:bg-indigo-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-600 transition ease-in duration-200 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-0 rounded-full text-xs md:text-base">
          Learn More
        </Button>
      </div>
    </div>
  );
};
