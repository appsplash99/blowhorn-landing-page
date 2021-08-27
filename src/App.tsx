import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Hero } from "./components/screens/Hero";

const App: React.FC = () => {
  const [showMobileNav, setshowMobileNav] = useState<boolean>(false);
  return (
    <div className="bg-white md:px-16">
      <Navbar showMobileNav={showMobileNav} setshowMobileNav={setshowMobileNav}>
        <>
          <a
            href="/"
            className="text-gray-600 focus:text-blue-600 font-medium"
            onClick={(e) => e.preventDefault()}
          >
            Home
          </a>
          <a
            href="/features"
            className="text-gray-600 focus:text-blue-600 font-medium"
            onClick={(e) => e.preventDefault()}
          >
            Features
          </a>
          <a
            href="/blog"
            className="text-gray-600 focus:text-blue-600 font-medium"
            onClick={(e) => e.preventDefault()}
          >
            Blog
          </a>
          <a
            href="/contact"
            className="text-gray-600 focus:text-blue-600 font-medium"
            onClick={(e) => e.preventDefault()}
          >
            Contact
          </a>
          <a
            href="/search"
            className="text-gray-600 focus:text-blue-600 font-medium"
            onClick={(e) => e.preventDefault()}
          >
            <AiOutlineSearch
              className="text-gray-600 focus:text-blue-600 font-medium"
              onClick={(e) => e.preventDefault()}
            />
          </a>
        </>
      </Navbar>
      <Hero />
    </div>
  );
};

export default App;
