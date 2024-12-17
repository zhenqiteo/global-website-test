import React from "react";
import Image from "next/image";
import Link from "next/link";
import sitemap from "@/constants/sitemap";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container px-8 py-12">
        {/* Top Section */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <Link href="/" className="text-3xl">
            <Image
              src="/images/SUPCON_White_Logo_Footer.png"
              width={315}
              height={45}
              alt="SUPCON Logo"
            />
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/contact"
              className="text-neutral-100 uppercase font-poppins font-light group flex items-center gap-1 text-[40px] leading-loose"
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
            <div className="flex items-center gap-4">
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

        {/* Tagline */}
        <p className="mt-12 text-2xl font-light">
          Leading Industrial AI To
          <br />
          Sustainable Growth
        </p>

        {/* Navigation */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-24">
          <div>
            <h3 className="mb-6 text-gray-400 uppercase text-sm">
              About Supcon
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about/who-we-are" className="hover:text-gray-300">
                  Who Are We
                </Link>
              </li>
              <li>
                <Link href="/about/location" className="hover:text-gray-300">
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="/about/sustainability"
                  className="hover:text-gray-300"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-gray-300">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="hover:text-gray-300">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-gray-300">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-gray-400 uppercase text-sm">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/solutions/next-gen"
                  className="hover:text-gray-300"
                >
                  Next Gen Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions/control" className="hover:text-gray-300">
                  Control & Instrumentation
                </Link>
              </li>
              <li>
                <Link href="/solutions/digital" className="hover:text-gray-300">
                  Digital Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-gray-400 uppercase text-sm">Industries</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/industries/oil-gas"
                  className="hover:text-gray-300"
                >
                  Oil & Gas
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/chemical"
                  className="hover:text-gray-300"
                >
                  Chemical
                </Link>
              </li>
              <li>
                <Link href="/industries/power" className="hover:text-gray-300">
                  Power
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/building"
                  className="hover:text-gray-300"
                >
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
                <Link
                  href="/industries/utility"
                  className="hover:text-gray-300"
                >
                  Utility
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container flex flex-col justify-between gap-4 px-8 py-6 md:flex-row md:items-center">
          <p className="text-sm text-gray-400">
            © 2024 SUPCON. All Rights Reserved
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-gray-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-gray-300"
            >
              Terms Of Service
            </Link>
            <Link
              href="/accessibility"
              className="text-sm text-gray-400 hover:text-gray-300"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
