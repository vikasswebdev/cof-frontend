import React, { useState } from "react";
import Link from "next/link";
import bar from "../assets/icons/menu.svg";
import Image from "next/image";

const Nav = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      {active && (
        <div
          className={`fixed top-0 left-0 z-[51] w-2/3 h-full bg-white drop-shadow-lg transition ${
            !active ? "-translate-x-full" : "-translate-x-0"
          }`}
        >
          <nav className="py-10">
            <ul className="px-4">
              <li className="bg-gray-100 rounded px-3 py-2 mb-2">
                <Link href={`/`} className="mr-5 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li className="bg-gray-100 rounded px-3 py-2 mb-2">
                <Link
                  href={`/integration`}
                  className="mr-5 hover:text-gray-900"
                >
                  Integration
                </Link>
              </li>
              <li className="bg-gray-100 rounded px-3 py-2 mb-2">
                <Link href={`/blogs`} className="mr-5 hover:text-gray-900">
                  Blogs
                </Link>
              </li>
              <li className="bg-gray-100 rounded px-3 py-2 mb-2">
                <Link href={`/contactus`} className="mr-5 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
      <header className="text-gray-600 body-font sticky top-0 backdrop-blur-3xl z-50">
        <div className="container mx-auto flex flex-wrap p-4 flex-row items-center justify-between">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            <span className="ml-3 text-xl">CODEOFLYF</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center hidden md:block text-base justify-center">
            <Link href={`/`} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href={`/integration`} className="mr-5 hover:text-gray-900">
              Integration
            </Link>
            <Link href={`/blogs`} className="mr-5 hover:text-gray-900">
              Blogs
            </Link>
            <Link href={`/contactus`} className="mr-5 hover:text-gray-900">
              Contact Us
            </Link>
          </nav>
          <button
            className="md:hidden block"
            onClick={() => setActive(!active)}
          >
            <Image src={bar} width={30} height={30} alt="menu" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Nav;
