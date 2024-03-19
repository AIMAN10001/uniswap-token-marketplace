import React from "react";

// internal import
import { Twitter, Facebook, Insta, Logo } from "./index";
const Footer = () => {
  const footerMenu = ["Features", "Integrations", "Pricing", "FAQ"];
  const footerMenu2 = ["Privacy", "Terms of Services"];
  return (
    <footer className=" px-4 devide-y bg-[#4ABDAC] text-gray-100">
      <div className=" container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className=" lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className=" flex justify-center space-x-3 lg:justify-start"
          >
            <div className=" flex items-center justify-center w-12 h-12 rounded-full bg-transparent">
              <Logo />
            </div>
            <span className=" self-center text-2xl font-semibold text-gray-50">
              Coin Swap
            </span>
          </a>
        </div>
        <div className=" grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className=" space-y-3">
            <h3 className=" tracki font-semibold uppercase text-[#FC4A1A]">
              Product
            </h3>
            <ul className=" space-y-1 text-gray-50">
              {footerMenu.map((menu, i) => (
                <li key={i + 1}>
                  <a rel="noopener noreferrer" href="#">
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" space-y-3">
            <h3 className=" tracki uppercase font-semibold text-[#FC4A1A]">
              Company
            </h3>
            <ul className=" space-y-1 text-gray-50">
              {["Privacy", "Terms of Services"].map((menu, i) => (
                <li key={i + 1}>
                  <a rel="noopener noreferrer" href="#">
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" space-y-3">
            <h3 className=" tracki uppercase font-semibold text-[#FC4A1A]">
              Developers
            </h3>
            <ul className=" space-y-1 text-gray-50">
              {["Public API", "Documentation", "Guides"].map((menu, i) => (
                <li key={i + 1}>
                  <a rel="noopener noreferrer" href="#">
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <div className=" uppercase font-semibold text-[#FC4A1A]">
              Social Media
            </div>
            <div className=" flex justify-start space-x-3 text-gray-50">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className=" flex items-center p-1"
              >
                <Facebook />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className=" flex items-center p-1"
              >
                <Twitter />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className=" flex items-center p-1"
              >
                <Insta />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-6 text-sm text-center border-[#FC4A1A] border-t-[1.5px] text-gray-200">
        @ 2023 Co. All rights reserved by the author.
      </div>
    </footer>
  );
};

export default Footer;
