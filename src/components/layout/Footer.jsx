import React from "react";
import Image from "next/image";
import Link from "next/link";
import sitemap from "@/constants/sitemap";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white font-title">
      <div className="container px-4 py-8 sm:px-6 md:px-8">
        {/* Top Section - logo & contact us & socials */}
        <div className="justify-between gap-8 md:flex-row md:items-center">
          <Link href="/" className="hidden md:block">
            <Image
              src="/images/SUPCON_White_Logo_Footer.png"
              width={315}
              height={45}
              alt="SUPCON Logo"
            />
          </Link>
        </div>
        {/* Large contact us CTA */}
        <div className="items-center gap-8">
          <Link
            href="/contact"
            className="text-neutral-100 uppercase font-light flex items-center gap-1 text-[40px] md:leading-loose"
          >
            Contact us
            <svg
              className="h-10 w-10 -rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
          <div className="flex items-center gap-4" id="socials">
            <Link href="https://linkedin.com" className="hover:text-gray-300">
              <Image
                src="/images/linkedin-icon.svg"
                width={30}
                height={30}
                alt="LinkedIn Logo"
              />
            </Link>
            <Link href="https://youtube.com" className="hover:text-gray-300">
              <Image
                src="/images/youtube-vector.svg"
                width={30}
                height={30}
                alt="YouTube Logo"
              />
            </Link>
            <Link href="/wechat" className="hover:text-gray-300">
              <Image
                src="/images/wechat-icon.svg"
                width={30}
                height={30}
                alt="WeChat Logo"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Tagline + Nav */}
      <div className="px-4 py-6 md:px-14 md:py-10 border-t border-white mt-12 grid grid-cols-1 md:grid-cols-5 gap-6">
        <p className="text-neutral-100 font-title text-lg md:text-xl font-light md:col-span-2 tracking-widest pb-6">
          Leading Industrial AI To
          <br />
          Sustainable Growth
        </p>

        {/* Navigation */}
        <div className="">
          <h3 className="mb-1 md:mb-6 text-[#515151] uppercase text-sm lg:text-base">
            About Supcon
          </h3>
          <ul className="space-y-1 md:space-y-4 text-neutral-100 font-light">
            <li>
              <Link href="/about/who-we-are" className="hover:text-gray-400">
                Who Are We
              </Link>
            </li>
            <li>
              <Link href="/about/location" className="hover:text-gray-400">
                Location
              </Link>
            </li>
            <li>
              <Link
                href="/about/sustainability"
                className="hover:text-gray-400"
              >
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-gray-400">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/newsroom" className="hover:text-gray-400">
                Newsroom
              </Link>
            </li>
            <li>
              <Link href="/career" className="hover:text-gray-400">
                Career
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-1 md:mb-6 text-[#515151] uppercase text-sm lg:text-base">
            Solutions
          </h3>
          <ul className="space-y-1 md:space-y-4 text-neutral-100 font-light">
            <li>
              <Link href="/solutions/next-gen" className="hover:text-gray-400">
                Next Gen Automation
              </Link>
            </li>
            <li>
              <Link href="/solutions/control" className="hover:text-gray-400">
                Control & Instrumentation
              </Link>
            </li>
            <li>
              <Link href="/solutions/digital" className="hover:text-gray-400">
                Digital Solutions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-1 md:mb-6 text-[#515151] uppercase text-sm lg:text-base">
            Industries
          </h3>
          <ul className="space-y-1 md:space-y-4 text-neutral-100 font-light">
            <li>
              <Link href="/industries/oil-gas" className="hover:text-gray-400">
                Oil & Gas
              </Link>
            </li>
            <li>
              <Link href="/industries/chemical" className="hover:text-gray-400">
                Chemical
              </Link>
            </li>
            <li>
              <Link href="/industries/power" className="hover:text-gray-400">
                Power
              </Link>
            </li>
            <li>
              <Link href="/industries/building" className="hover:text-gray-300">
                Building Material
              </Link>
            </li>
            <li>
              <Link
                href="/industries/pulp-paper"
                className="hover:text-gray-300"
              >
                Pulp & Paper
              </Link>
            </li>
            <li>
              <Link
                href="/industries/metallurgy"
                className="hover:text-gray-300"
              >
                Metallurgy
              </Link>
            </li>
            <li>
              <Link
                href="/industries/life-science"
                className="hover:text-gray-300"
              >
                Life Science
              </Link>
            </li>
            <li>
              <Link
                href="/industries/food-beverage"
                className="hover:text-gray-300"
              >
                Food & Beverage
              </Link>
            </li>
            <li>
              <Link href="/industries/utility" className="hover:text-gray-300">
                Utility
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="">
        <div className="border-t border-white container flex flex-col justify-between gap-4 px-4 py-6 pb-12 md:px-14 md:py-10 md:pb-20 md:flex-row md:items-center lg:px-8">
          <p className="text-xs text-gray-400 md:text-sm">
            © 2024 SUPCON. All Rights Reserved
          </p>
          <div className="flex flex-wrap text-xs gap-2 md:gap-6">
            <Link
              href="/privacy"
              className="text-xs md:text-sm text-white hover:text-gray-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs md:text-sm text-white hover:text-gray-300"
            >
              Terms Of Service
            </Link>
            <Link
              href="/accessibility"
              className="text-xs md:text-sm text-white hover:text-gray-300"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
