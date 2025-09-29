// import { useState } from "react";
// import classNames from "classnames";
// import { FcMenu } from "react-icons/fc";
// import { IoMdClose } from "react-icons/io";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="shadow-md w-full fixed top-0 left-0 z-50 py-4">
//       <div className="grid grid-cols-1 md:grid-cols-2">
//         <div className="logo flex items-center justify-start mobile:mx-14">
//           <a
//             href=""
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//           <img
//             src="/1.png"
//             alt="Logo"
//             style={{ width: "70px", height: "50px" }}
//           />
//           </a>
//         </div>

//         {/* Menu Button for Mobile Screens */}
//         <button
//           className="block md:hidden text-black font-serif p-2 absolute left-1/2 transform -translate-x-1/2"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <div className=" mobile:ml-60 mobileM:ml-72 mobileL:ml-[340px]">
//             {isMenuOpen ? (
//               <IoMdClose className="h-10 w-10 text-black" />
//             ) : (
//               <FcMenu className="h-10 w-10" />
//             )}
//           </div>
//         </button>

//         <div className="hidden md:flex items-center justify-end md:mx-6 xl:mx-14 laptopL:mx-20 gap-5">
//           <div className="text-white font-sans cursor-pointer group">
//             <a href="">Home</a>
//             <span className="block inset-x-0 bottom-0 h-0.5 bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//           </div>
//           <div className="text-white font-sans cursor-pointer group">
//             <a href="">About Us</a>
//             <span className="block inset-x-0 bottom-0 h-0.5 bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//           </div>
//           <div className="text-white font-sans cursor-pointer group">
//             <a href="">Services</a>
//             <span className="block inset-x-0 bottom-0 h-0.5 bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//           </div>
//           <div className="text-white font-sans cursor-pointer group">
//             <a href="https://headsupcorporation.com/connect-with-us">
//               Testimonials
//             </a>
//             <span className="block inset-x-0 bottom-0 h-0.5 bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//           </div>
//           <div className="text-white font-sans cursor-pointer group">
//             <a href="https://headsupcorporation.com/connect-with-us">Contact</a>
//             <span className="block inset-x-0 bottom-0 h-0.5 bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//           </div>
//         </div>
//       </div>

//       {/* Dropdown Menu for Mobile Screens */}
//       <div
//         className={classNames("lg:hidden", {
//           block: isMenuOpen,
//           hidden: !isMenuOpen,
//         })}
//       >
//         <div className="flex flex-col items-center space-y-4 bg-pink-100 shadow-md py-4 px-6">
//           {[
//             {
//               href: "",
//               label: "Home",
//             },
//             {
//               href: "",
//               label: "About Us",
//             },
//             {
//               href: "",
//               label: "Services",
//             },
//             {
//               href: "",
//               label: "Testimonial",
//             },
//             {
//               href: "",
//               label: "Contact",
//             },
//           ].map(({ href, label, }) => (
//             <div key={href} className="relative group">
//               <a
//                 href={href}
//                 className="font-sans text-black"
//               >
//                 {label}
//               </a>
//               <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client'

// import { useState, useEffect } from 'react'

// export default function Navigation({ onOpenModal, scrollToSection }) {
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100)
//     }

//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <nav className={`relative z-50 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 transition-all duration-300 ${
//       isScrolled ? 'shadow-lg' : ''
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-lg">D</span>
//             </div>
//             <span className="text-2xl font-bold gradient-text">Digitals by Dee</span>
//           </div>

//           <div className="hidden md:flex space-x-8">
//             <button
//               onClick={() => scrollToSection('home')}
//               className="text-gray-700 hover:text-pink-400 transition-colors"
//             >
//               Home
//             </button>
//             <button
//               onClick={() => scrollToSection('about')}
//               className="text-gray-700 hover:text-pink-400 transition-colors"
//             >
//               About
//             </button>
//             <button
//               onClick={() => scrollToSection('services')}
//               className="text-gray-700 hover:text-pink-400 transition-colors"
//             >
//               Services
//             </button>
//             <button
//               onClick={() => scrollToSection('testimonials')}
//               className="text-gray-700 hover:text-pink-400 transition-colors"
//             >
//               Testimonials
//             </button>
//             <button
//               onClick={onOpenModal}
//               className="btn-primary text-white px-6 py-2 rounded-full font-medium"
//             >
//               Let's Talk
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Navigation({ onOpenModal, scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  const handleMobileModalOpen = () => {
    onOpenModal();
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav
      className={`relative z-50 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Image
                src="/1.png"
                alt="Digitals by Dee Logo"
                width={180}
                height={60}
                className="h-16 w-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-pink-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-pink-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-pink-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-pink-400 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={onOpenModal}
              className="btn-primary text-white px-6 py-2 rounded-full font-medium"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-pink-400 focus:outline-none focus:text-pink-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <IoMdClose className="h-7 w-7" />
              ) : (
                <HiOutlineMenu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/100 backdrop-blur-md shadow-lg border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => handleMobileNavClick("home")}
              className="block w-full text-center text-gray-700 hover:text-pink-400 transition-colors py-2 text-lg"
            >
              Home
            </button>
            <button
              onClick={() => handleMobileNavClick("about")}
              className="block w-full text-center text-gray-700 hover:text-pink-400 transition-colors py-2 text-lg"
            >
              About
            </button>
            <button
              onClick={() => handleMobileNavClick("services")}
              className="block w-full text-center text-gray-700 hover:text-pink-400 transition-colors py-2 text-lg"
            >
              Services
            </button>
            <button
              onClick={() => handleMobileNavClick("testimonials")}
              className="block w-full text-center text-gray-700 hover:text-pink-400 transition-colors py-2 text-lg"
            >
              Testimonials
            </button>
            <button
              onClick={handleMobileModalOpen}
              className="block w-full btn-primary text-white px-6 py-3 rounded-full font-medium text-center mt-4"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
