import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          <Image
            src="/images/SUPCON_White_Logo_1.png"
            width={100}
            height={100}
            alt="SUPCON Logo"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-white">
          <Link href="/solutions" className="text-sm hover:text-primary">
            Solutions
          </Link>
          <Link href="/industries" className="text-sm hover:text-primary">
            Industries
          </Link>
          <Link href="/resources" className="text-sm hover:text-primary">
            Resources
          </Link>
          <Link href="/newsroom" className="text-sm hover:text-primary">
            Newsroom
          </Link>
          <Link href="/career" className="text-sm hover:text-primary">
            Career
          </Link>
          <Link href="/about-us" className="text-sm hover:text-primary">
            About Us
          </Link>
        </nav>
        <div className="hidden md:flex items-center text-white">
          <button> contact us </button>
        </div>
      </div>
      .
    </header>
  );
}
