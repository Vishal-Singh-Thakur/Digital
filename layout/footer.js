"use client";

import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const handleScroll = (id) => {
    if (!id) return;
    if (window.location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    else {
      router.push(`/#${id}`);
    }
  };
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about-us" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/digitalsbydeee?igsh=Mm1menFpc2xsZGlo&utm_source=qr",
      icon: <Instagram className="w-5 h-5" />,
      hoverColor: "hover:bg-pink-600",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/digitals-by-dee/",
      icon: <Linkedin className="w-5 h-5" />,
      hoverColor: "hover:bg-blue-600",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@digitalsbydee?si=NfEGcu68FqA1l4Ht",
      icon: <Youtube className="w-5 h-5" />,
      hoverColor: "hover:bg-red-600",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className=" px-6 md:px-8 lg:px-12 xl:px-24 4k:px-28 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/d1.png"
                alt="Digitals by Dee Logo"
                width={200}
                height={80}
                className="h-20 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your growth, our passion. Transforming brands through innovative
              digital strategies.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-800 p-3 rounded-lg ${social.hoverColor} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    // onClick={() => scrollToSection(link.id)}
                    onClick={() => handleScroll(link.id)}
                    className="text-gray-400 hover:text-[#0885A6] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#0885A6] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-[#0885A6] transition-colors duration-300 cursor-pointer">
                SEO Optimization
              </li>
              <li className="hover:text-[#0885A6] transition-colors duration-300 cursor-pointer">
                Social Media Marketing
              </li>
              <li className="hover:text-[#0885A6] transition-colors duration-300 cursor-pointer">
                Content Marketing
              </li>
              <li className="hover:text-[#0885A6] transition-colors duration-300 cursor-pointer">
                PPC Advertising
              </li>
              <li className="hover:text-[#0885A6] transition-colors duration-300 cursor-pointer">
                Website Design & Development
              </li>
              <li className="hover:text-[#0885A6] transition-colors duration-300 cursor-pointer">
                Influencer & Celebrity Tie-ups
              </li>
              <li className="hover:text-[#0885A6] transition-colors duration-300 cursor-pointer">
                Product Photography & Styling
              </li>
              <li className="hover:text-[#0885A6] transition-colors duration-300 cursor-pointer">
                Brand Films & Campaign Shoots
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Get In Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:digitalsbydeeksha@gmail.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-[#0885A6] transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="break-all">digitalsbydeeksha@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918383946401"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#0885A6] transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span>+91 8383946401</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Digitals by Dee. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              {/* <button className="hover:text-[#0885A6] transition-colors duration-300">
                Privacy Policy
              </button>
              <span className="text-gray-600">|</span> */}
              <Link
                href="/privacy-policy"
                className="hover:text-[#0885A6] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-[#0885A6] text-white p-4 rounded-full shadow-lg hover:bg-[#800000] transform hover:scale-110 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}
