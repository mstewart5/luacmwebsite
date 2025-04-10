"use client";

import { useEffect } from "react";
// Import utilities, types, and data:
import { officers } from "@/lib/index";
import { Officer, ImageGalleryPhoto, ImageSize } from "@/types/index";
// Import components:
import Image from "next/image";
import Link from "next/link";
import { DiamondList } from "@/components/DiamondList";
import { EventsImageGallery } from "@/components/EventsImageGallery";
import { OfficerBoard } from "@/components/OfficerBoard";
import { InstagramEmbed } from "@/components/InstagramEmbed";
import { FaDiscord, FaInstagram, FaArrowUp } from "react-icons/fa";

const missionItems: string[] = [
  "Foster innovation in computing and technology",
  "Connect students and professionals worldwide",
  "Support research, education, and career growth",
];

const whyJoinItems: string[] = [
  "Access to exclusive networking and learning opportunities",
  "Participate in programming competitions like ICPC",
  "Discounts on conferences, events, and digital resources",
];

const eventItems: string[] = [
  "Annual ACM Spring Banquet 🎉",
  "Weekly Leet-Code Workshops & Coding Hangouts 💻",
  "Game Nights 🎮 Every Other Week",
  "Bi-montly General Meetings 📣",
];

type LinkData = {
  href: string;
  title: string;
};

function makeLink(link: LinkData, index: number) {
  // Transform the links into HTML <a> tags
  return (
    <a
      key={index}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline block mb-2"
    >
      {link.title}
    </a>
  );
}

const acmLinks = [
  { href: "https://www.acm.org/", title: "ACM Official Website" },
  // Commented this out, to prevent cornfusion about our own membership
  //{ href: "https://www.acm.org/membership", title: "ACM Membership" },
  { href: "https://www.acm.org/publications", title: "ACM Publications" },
  {
    href: "https://libproxy.lamar.edu/login?url=https://www.acm.org/dl",
    title: "ACM Digital Library",
  },
  { href: "https://learning.acm.org/", title: "ACM Learning Center" },
].map(makeLink); // Apply transformation into HTML

function DeveloperProfiles() {
  // List of website developers and their LinkedIn profiles/personal URLs.
  const developers = [
	{ name: "Michael Stewart", linkedin: "https://www.linkedin.com/in/michael-octavio-stewart/" },
	{ name: "Brian Hoffpauir", linkedin: "https://www.bhoffpauir.com/" },
	{ name: "Bilal Maqsood", linkedin: "https://www.linkedin.com/in/bilal-maq/" },
	{ name: "Grayson Conger", linkedin: "https://www.linkedin.com/in/grayson-conger-80110b325/" },
	{ name: "Mark Wilson", linkedin: "https://www.linkedin.com/in/mark-wilson-137529338/" },
  ];
  
  return (
	<div className="bg-[#f2f0ef] p-8 mt-4 mb-4 max-w-6xl mx-auto rounded-lg shadow">
      <h1 className="text-2xl text-center font-black text-black">Website Developers</h1>
		<p className="mt-2">The following Lamar ACM members helped create this website (completed April 2025):</p>
	  {/* <DiamondList items={developers} /> */}
	  <div className="mt-2">
		{developers.map((dev, index) => (
	      <span key={index}>
		    <a className="underline" href={dev.linkedin} target="_blank">{dev.name}</a>
			{(index < developers.length - 1) ? ', ' : '' }
		  </span>
		))}
	  </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <div className="text-black bg-white">
        {/* Information about the global ACM: */}
        <div className="bg-[#f2f0ef] p-8 flex flex-col items-center mt-4 max-w-6xl mx-auto rounded-lg shadow">
          <h1 className="text-3xl font-black text-black text-center">
            About the ACM
          </h1>
          <p className="text-xl text-center mt-4">
            ACM (Association for Computing Machinery) is the{" "}
            <b>world’s largest computing society</b>, dedicated to{" "}
            <b>advancing computing as a science and profession</b> through
            research, collaboration, and education.
          </p>

          <div className="flex justify-between w-full gap-8 mt-6">
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black text-center mb-4">
                Our Mission
              </h2>
              <div className="text-lg flex justify-center">
                <DiamondList items={missionItems} />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black text-center mb-4">
                Why Join ACM?
              </h2>
              <div className="text-lg flex justify-center">
                <DiamondList items={whyJoinItems} />
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full gap-8 mt-6">
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black font-bold mb-4 text-center">
                Explore ACM International
              </h2>
              <div className="text-lg flex justify-center">
                <DiamondList items={acmLinks} />
              </div>
            </div>
          </div>
        </div>

        {/* Information about our ACM student chapter: */}
        <div className="bg-[#f2f0ef] p-8 mt-4 max-w-6xl mx-auto rounded-lg shadow">
          <h1 className="text-3xl text-center font-black text-black">
            About Our ACM Student Chapter
          </h1>
          <p className="text-xl text-center mt-4">
            We are the <b>Lamar University ACM Student Chapter!</b> As an ACM
            student chapter, we aim to bring the mission of the international
            ACM directly to you at your campus. Our chapter is dedicated to
            fostering a collaborative environment where students can enhance
            their technical skills, engage in cutting-edge research, and connect
            with industry professionals. Through workshops, competitions,
            networking events, and mentorship opportunities, we strive to
            inspire innovation, promote ethical computing, and prepare students
            for successful careers in technology.
          </p>
          <div className="flex justify-between w-full gap-8 mt-6">
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black text-center mb-4">
                Events
              </h2>
              <div className="text-lg flex justify-center">
                <DiamondList items={eventItems} />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-black text-black text-center mb-4">
                Event Gallery
              </h2>
              <EventsImageGallery />
            </div>
          </div>

          <div className="flex flex-row justify-between mt-4">
            <Link href="/events">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                See More Events
              </button>
            </Link>
            <Link href="/membership">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Become a Member
              </button>
            </Link>
            <a href="https://luhub.lamar.edu/ACM/club_signup" target="_blank">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                ACM on LU Hub
              </button>
            </a>
          </div>
        </div>

        {/* Information about the current student officers: */}
        <div className="p-8 mt-4 max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-black text-black">
            Current Student Officers
          </h1>
          <OfficerBoard officers={officers} />
        </div>

        {/* Instagram profile preview widget: */}
        <div className="bg-[#f2f0ef] p-8 flex flex-col items-center mt-4 mb-4 max-w-6xl mx-auto rounded-lg shadow">
          <h1 className="text-3xl font-bold text-center mb-4">
            Follow Us On Instagram!
          </h1>
          <InstagramEmbed permalink="https://www.instagram.com/lamar_acm/" />
		</div>

	    {/* Developer profiles section */}
	    <DeveloperProfiles />
      </div>
    </>
  );
}
