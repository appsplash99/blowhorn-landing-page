import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Navbar } from "./components/Navbar";
import "./App.css";

const App: React.FC = () => {
  const [showMobileNav, setshowMobileNav] = useState<boolean>(false);
  return (
    <div className="bg-white md:px-16">
      <Navbar showMobileNav={showMobileNav} setshowMobileNav={setshowMobileNav}>
        <>
          <a
            href="/"
            className="text-gray-800 focus:text-blue-600"
            onClick={(e) => e.preventDefault()}
          >
            Home
          </a>
          <a
            href="/features"
            className="text-gray-800 focus:text-blue-600"
            onClick={(e) => e.preventDefault()}
          >
            Features
          </a>
          <a
            href="/blog"
            className="text-gray-800 focus:text-blue-600"
            onClick={(e) => e.preventDefault()}
          >
            Blog
          </a>
          <a
            href="/contact"
            className="text-gray-800 focus:text-blue-600"
            onClick={(e) => e.preventDefault()}
          >
            Contact
          </a>
          <a
            href="/search"
            className="text-gray-800 focus:text-blue-600"
            onClick={(e) => e.preventDefault()}
          >
            <AiOutlineSearch
              className="text-gray-800 focus:text-blue-600"
              onClick={(e) => e.preventDefault()}
            />
          </a>
        </>
      </Navbar>
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
    </div>
  );
};

export default App;
