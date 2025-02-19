import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaInstagram, FaArrowUp } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
//import { InstagramEmbed } from "../components/InstagramEmbed";

/* Interface containing data for officer's grid. */
interface Officer {
  name: string;
  position: string;
  image: string; // URL for the officer's image
}

const officers: Officer[] = [
  { name: "Mark Wilson", position: "President", image: "/images/officers/joedee_blaugh_2025.jpg" },
  { name: "Michael Stewart", position: "Vice President", image: "/images/officers/joedee_blaugh_2025.jpg" },
  { name: "Rohini Rai", position: "Secretary", image: "/images/officers/joedee_blaugh_2025.jpg" },
  { name: "Angel Conde", position: "Treasurer", image: "/images/officers/joedee_blaugh_2025.jpg" },
  { name: "Brian Hoffpauir", position: "Historian", image: "/images/officers/brian_hoffpauir_2025.jpg" },
  { name: "Stephen Matherne", position: "Event Coordinator", image: "/images/officers/joedee_blaugh_2025.jpg" },
];

/**
 * Component for displaying officer headshots in a grid.
 */
function OfficersList({ officers }: { officers: Officer[] }) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-black text-black">Current Officers</h1>
      <div className="ma-w-7xl mx-auto mt-2 mb-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 gap-4 p-4">
        {officers.map(({ name, position, image }, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
            <img src={image} alt={`${name}'s photo`} className="max-h-full m-auto h-64 object-cover rounded-[50%] mb-2" />
            <h3 className="font-semibold text-xl">{name}</h3>
            <p className="text-gray-600 text-lg">{position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiamondList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <FaDiamond className="text-blue-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
//export default DiamondList;

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
  "Annual ACM Spring Banquet",
  "Weekly Leet-Code Workshops & Coding Hangouts",
  "Game Nights Every Other Week",
  "Bi-montly General Meetings",
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#f2f0ef] p-8 flex flex-col items-center mt-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-black text-black text-center">About the ACM</h1>
        <p className="text-xl text-center mt-4">ACM (Association for Computing Machinery) is the <b>world’s largest computing society</b>, dedicated to <b>advancing computing as a science and profession</b> through research, collaboration, and education.</p>

        <div className="flex justify-between w-full gap-8 mt-6">
          <div className="flex-1">
            <h2 className="text-2xl font-black text-black text-center">Our Mission</h2>
            <div className="text-lg"><DiamondList items={missionItems} /></div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-black text-black text-center ">Why Join ACM?</h2>
            <div className="text-lg"><DiamondList items={whyJoinItems} /></div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f0ef] p-8 mt-4 max-w-6xl mx-auto">
        <h1 className="text-3xl text-center font-black text-black">About Our ACM Student Chapter</h1>
        <p className="text-xl text-center mt-4">We are the Lamar University ACM Student Chapter!  As an ACM student chapter, we aim to bring the mission of the international ACM directly to you at our own campus.</p>

        <div className="flex justify-between w-full gap-8 mt-6">
          <div className="flex-1">
            <h2 className="text-2xl font-black text-black text-center">Events</h2>
            <div className="text-lg"><DiamondList items={eventItems} /></div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-black text-black text-center ">Image Gallery</h2>
          </div>
        </div>

        <div className="flex flex-row justify-between mt-4">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                See More Events
              </button>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Become a Member
              </button>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                ACM on LU Hub
              </button>
            </div>
      </div>
      <div className="p-8 mt-4 max-w-6xl mx-auto"><OfficersList officers={officers} /></div>
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
      <div>
        <h1 className="text-3xl font-bold text-center">Follow Us On Instagram!</h1>
        {/* <InstagramEmbed url="" /> */}
      </div>
    </>
  );
}
