import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
return(
<nav className="bg-[#f2f0ef] text-black p-4 sm:p-6 md:flex md:justify-between
md:items-center">
    <div className="container mx-auto flex justify-between items-center">
    <Image
              src="/images/logo.png"
              height="100"
              width="100"
              alt="acmlogo"
            />
        <a href="" className="text-2xl font-bold">
        </a>    
        <div className="hidden md:flex">
        <Link href="/About" className="mx-2 hover:text-gray-300">
        About
        </Link>
        <Link href="/Membership" className="mx-2 hover:text-gray-300">
        Memberships
        </Link>
        <Link href="/Events" className="mx-2 hover:text-gray-300">
        Events
        </Link>
        <Link href="/Contact" className="mx-2 hover:text-gray-300">
        Contact
        </Link>
        </div>
    </div>
</nav>  
)
}