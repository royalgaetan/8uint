import React from "react";
import { LucideUserRoundCheck } from "lucide-react";
import Link from "next/link";
import { holdingName } from "@/lib/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Mission */}
          <div className="text-center md:text-left">
            <div className="flex flex-1  gap-3 justify-start items-center">
              <Image
                src={"/8uint logo.png"}
                alt="8uint logo"
                width={35}
                height={35}
                className=""
              />
              <h2 className="text-2xl font-bold text-white">{holdingName}</h2>
            </div>

            <p className="text-gray-400 mt-2 max-w-md">
              We create world-class apps from scratch— and scale them.
            </p>
            <p className="text-gray-500 mt-0 max-w-md text-sm">
              Aka the next generation of apps that shape the future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <div></div>

            <div>
              <h3 className="text-gray-300 font-semibold">Company</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white text-gray-400 font-normal"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="hover:text-white text-gray-400 font-normal"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white text-gray-400 font-normal"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-300 font-semibold">Legal</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white text-gray-400 font-normal"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white text-gray-400 font-normal"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {holdingName}. All rights
            reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.royalgaetan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <LucideUserRoundCheck size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
