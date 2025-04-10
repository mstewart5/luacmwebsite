'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PiHamburgerLight } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { useState } from 'react'; 
import { redirect } from 'next/navigation'
import { IconType } from 'react-icons';
const HamburgerIcon = PiHamburgerLight as unknown as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const CloseIcon = IoClose as unknown as React.ComponentType<React.SVGProps<SVGSVGElement>>;


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#f2f0ef] text-black p-4 sm:p-6 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <Image
                    src="/images/art/lamar-university-acm-v5-with-rt-sym.png"
                    height="150"
                    width="150"
                    alt="acmlogo"
   				    className="min-w-[100px] min-h-[100px] w-[150px] h-auto sm:w-[120px] md:w-[150px] cursor-pointer"
                    onClick={() => redirect('/')}
                />
                <div className="md:hidden">
                    {!isMenuOpen && (
                        <button onClick={toggleMenu}>
                            <HamburgerIcon className="w-12 h-12"  />
                        </button>
                    )}
                </div>
                <div className="hidden md:flex space-x-6">
                    <Link href="/about" className="hover:text-gray-500">About</Link>
                    <Link href="/membership" className="hover:text-gray-500">Memberships</Link>
                    <Link href="/events" className="hover:text-gray-500">Events</Link>
                    <Link href="/contact" className="hover:text-gray-500">Contact</Link>
                </div>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex flex-col items-center justify-center text-white text-2xl z-50">
                    <button onClick={toggleMenu} className="absolute top-6 right-6">
                        <CloseIcon className="w-12 h-12" />
                    </button>
                    <Link href="/about" className="py-4 hover:text-gray-400" onClick={toggleMenu}>
                        About
                    </Link>
                    <Link href="/membership" className="py-4 hover:text-gray-400" onClick={toggleMenu}>
                        Memberships
                    </Link>
                    <Link href="/events" className="py-4 hover:text-gray-400" onClick={toggleMenu}>
                        Events
                    </Link>
                    <Link href="/contact" className="py-4 hover:text-gray-400" onClick={toggleMenu}>
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
