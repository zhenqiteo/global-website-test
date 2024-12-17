"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import sitemap from "@/constants/sitemap";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
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
        <nav className="hidden md:flex items-center gap-8">
          {sitemap.map((item, index) =>
            item.items ? (
              <div key={index} className="relative group">
                <button className="flex items-center gap-1 text-white">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full mt-2 w-48 rounded-sm bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div className="py-1">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={index} href={item.href} className="text-white">
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* <nav className="hidden md:flex items-center space-x-8 text-white">
          <Link
            href="/solutions"
            className="text-sm hover:text-primary hover:underline"
          >
            Solutions
          </Link>
          <Link
            href="/industries"
            className="text-sm hover:text-primary hover:underline"
          >
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
        </nav> */}
        <div className="hidden md:flex items-center border rounded-[20px] px-8 text-white hover:bg-black hover:text-white">
          <button> Contact Us </button>
        </div>
      </div>
      .
    </header>
  );
}
