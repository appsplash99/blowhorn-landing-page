import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import { FOOTER_LINKS } from "../utils/footerLinks";

export const Footer = () => {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            {FOOTER_LINKS.map((link, index) => (
              <div key={index} className="px-5 py-2">
                <a
                  href="#"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  {link}
                </a>
              </div>
            ))}
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <FaFacebook className="cursor-pointer text-2xl text-gray-400 hover:text-gray-500" />
            <FaInstagram className="cursor-pointer text-2xl text-gray-400 hover:text-gray-500" />
            <FaTwitter className="cursor-pointer text-2xl text-gray-400 hover:text-gray-500" />
            <FaGithub className="cursor-pointer text-2xl text-gray-400 hover:text-gray-500" />
            <FaDribbble className="cursor-pointer text-2xl text-gray-400 hover:text-gray-500" />
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2021 SomeCompany, Inc. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
};
