"use client"; // This directive for Next.js allows use of onClick

import Link from "next/link";
import { FaDiscord, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  function scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-[#f2f0ef] p-6">
      {/* First row in the footer */}
      <div className="flex justify-around items-start w-full">

        <div className="text-left">
          <h3 className="text-lg font-semibold">Useful Links</h3>

          <ul className="list-none">
            <li><Link href="/dashboard" className="hover:underline">ACM on LU Hub</Link></li>
            <li><Link href="/dashboard" className="hover:underline">ACM Digital Library</Link></li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className="text-lg font-bold">Contact</h3>
          <ul className="list-none">
            <li><a href="mailto:acm@lamar.edu" className="hover:underline">acm@lamar.edu</a></li>
          </ul>
        </div>
        <div className="text-left">

          <h3 className="text-lg font-bold">Navigation</h3>
  		  <ul className="list-none">
		    <li><Link href="/" className="hover:underline">Home</Link></li>	  
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/membership" className="hover:underline">Membership</Link></li>
            <li><Link href="/events" className="hover:underline">Events</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Horizontal rule */}
      <hr className="border-t-2 border-gray-300 my-4 w-full" />

      {/* Second row in the footer */}
      <div className="flex justify-between items-center w-full">
        {/* Social median icons on the left */}
        <div className="flex space-x-6">
          <Link href="https://discord.gg/Zkqvwtc89B" target="_blank" className="text-gray-700 hover:text-gray-900">
            {/* size={24} */}
            <FaDiscord className="w-8 h-8 sm:w-12 sm:h-12 hover:scale-110 transition-transforms" />
          </Link>
          <Link href="https://www.instagram.com/lamar_acm/" target="_blank" className="text-gray-700 hover:text-gray-900">
            {/* size={24} */}
            <FaInstagram className="w-8 h-8 sm:w-12 sm:h-12 hover:scale-110 transition-transform" />
          </Link>
        </div>
        <div className="">
          {/* Scroll-to-top button on the right */}
          {/* className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-900"
            className="flex flex-col w-full sm:w-fit px-12 py-3 items-center text-white text-center text-2xl rounded-full bg-primary hover:bg-secondary transition-all" */}
          <button onClick={scrollToTop}
                  className="flex w-full sm:w-fit px-12 py-3 items-center text-white text-center text-xl rounded-full bg-gray-700 hover:bg-gray-900 transition-all">
            <FaArrowUp className="mr-2" /> Top
          </button>
        </div>
      </div>
    </footer>
  );
}
