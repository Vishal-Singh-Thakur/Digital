import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, TextAlignEnd } from "lucide-react";
import Image from "next/image";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to section smoothly
  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //     setIsMenuOpen(false);
  //   }
  // };

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    setIsMenuOpen(false);
    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  }
};

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full bg-[#0885A6] backdrop-blur-sm z-50 shadow-lg"
      >
        <div className="px-4 md:px-8 lg:px-12 xl:px-24 4k:px-28">
          <div className="flex justify-between items-center h-20 relative z-[100]">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Image
                src="/1.png"
                alt="Digitals by Dee Logo"
                width={180}
                height={60}
                className="h-16 w-auto object-contain rounded-lg"
                priority
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {["HOME", "ABOUT US", "SERVICES", "TESTIMONIALS"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", "-"))
                  }
                  className="text-white hover:text-[#800000] transition font-medium tracking-wide"
                >
                  {item}
                </button>
              ))}

              <a
                href="tel:+918383946401"
                className="flex items-center gap-2 bg-white text-[#0885A6] hover:text-[#800000] px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium tracking-wide">
                  +91 8383946401
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden text-white hover:text-[#800000] transition z-[110]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={32} strokeWidth={2.5} />
              ) : (
                <TextAlignEnd size={32} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-visible bg-blue-50 absolute top-full left-0 right-0 z-[105] shadow-2xl"
              style={{ pointerEvents: "auto" }}
            >
              <div className="px-4 py-6 space-y-1">
                {["HOME", "ABOUT US", "SERVICES", "TESTIMONIALS"].map(
                  (item, index) => (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      onClick={() =>
                        scrollToSection(item.toLowerCase().replace(" ", "-"))
                      }
                      className="w-full text-center text-[#0885A6] hover:text-[#800000] hover:bg-white transition py-4 text-xl font-bold tracking-wide rounded-lg cursor-pointer relative z-[106]"
                      style={{ pointerEvents: "auto" }}
                    >
                      {item}
                    </motion.button>
                  )
                )}
                <a
                  href="tel:+918383946401"
                  className="flex items-center justify-center gap-2 bg-white text-[#0885A6] hover:text-[#800000] px-4 py-4 rounded-lg shadow-md hover:bg-gray-100 transition mt-4 relative z-[106] cursor-pointer"
                  style={{ pointerEvents: "auto" }}
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium tracking-wide text-lg">
                    +91 8383946401
                  </span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

export default Navigation;




// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Phone, Menu, X, TextAlignEnd } from "lucide-react";
// import Image from "next/image";

// function Navigation() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Scroll to section smoothly
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <div className="bg-white text-gray-900">
//       {/* Navigation */}
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         className="fixed w-full bg-[#0885A6] backdrop-blur-sm z-50 shadow-lg"
//       >
//         <div className="px-4 md:px-8 lg:px-12 xl:px-24 4k:px-28">
//           <div className="flex justify-between items-center h-20 relative z-[100]">
//             {/* Logo */}
//             <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
//               <Image
//                 src="/1.png"
//                 alt="Digitals by Dee Logo"
//                 width={180}
//                 height={60}
//                 className="h-16 w-auto object-contain rounded-lg"
//                 priority
//               />
//             </motion.div>

//             {/* Desktop Menu */}
//             <div className="hidden lg:flex items-center space-x-8">
//               {["HOME", "ABOUT US", "SERVICES", "TESTIMONIALS"].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() =>
//                     scrollToSection(item.toLowerCase().replace(" ", "-"))
//                   }
//                   className="text-white hover:text-[#800000] transition font-medium tracking-wide"
//                 >
//                   {item}
//                 </button>
//               ))}

//               <a
//                 href="tel:+918383946401"
//                 className="flex items-center gap-2 bg-white text-[#0885A6] hover:text-[#800000] px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
//               >
//                 <Phone className="w-5 h-5" />
//                 <span className="font-medium tracking-wide">
//                   +91 8383946401
//                 </span>
//               </a>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               aria-expanded={isMenuOpen}
//               aria-label="Toggle navigation menu"
//               className="lg:hidden text-white hover:text-[#800000] transition"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? (
//                 <X size={32} strokeWidth={2.5} />
//               ) : (
//                 <TextAlignEnd size={32} />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="lg:hidden overflow-visible bg-blue-50 relative z-[100]"
//             >
//               <div className="px-4 py-6 space-y-1">
//                 {["HOME", "ABOUT US", "SERVICES", "TESTIMONIALS"].map(
//                   (item, index) => (
//                     <motion.button
//                       key={item}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.1 + index * 0.05 }}
//                       onClick={() =>
//                         scrollToSection(item.toLowerCase().replace(" ", "-"))
//                       }
//                       className="w-full text-center text-[#0885A6] hover:text-[#800000] hover:bg-white transition py-4 text-xl font-bold tracking-wide rounded-lg"
//                     >
//                       {item}
//                     </motion.button>
//                   )
//                 )}
//                 <a
//                   href="tel:+918383946401"
//                   className="flex items-center justify-center gap-2 bg-white text-[#0885A6] hover:text-[#800000] px-4 py-4 rounded-lg shadow-md hover:bg-gray-100 transition mt-4"
//                 >
//                   <Phone className="w-5 h-5" />
//                   <span className="font-medium tracking-wide text-lg">
//                     +91 8383946401
//                   </span>
//                 </a>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>
//     </div>
//   );
// }

// export default Navigation;

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Phone, TextAlignEnd, X } from "lucide-react";
// import Image from "next/image";

// function Navigation() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // ✅ Scroll to section smoothly
//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setIsMenuOpen(false);
//     }
//   };

//   // ✅ Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
//   }, [isMenuOpen]);

//   return (
//     <div className="bg-white text-gray-900">
//       {/* Navigation */}
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         className="fixed w-full bg-[#0885A6] backdrop-blur-sm z-50 shadow-lg"
//       >
//         <div className="px-4 sm:px-6 lg:px-8 xl:px-24">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo */}
//             <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
//               <Image
//                 src="/1.png"
//                 alt="Digitals by Dee Logo"
//                 width={180}
//                 height={60}
//                 className="h-16 w-auto object-contain rounded-lg"
//                 priority
//               />
//             </motion.div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-8">
//               {["HOME", "ABOUT US", "SERVICES", "TESTIMONIALS"].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() =>
//                     scrollToSection(item.toLowerCase().replace(" ", "-"))
//                   }
//                   className="text-white hover:text-[#800000] transition font-medium tracking-wide"
//                 >
//                   {item}
//                 </button>
//               ))}

//               <a
//                 href="tel:+9183839464011"
//                 className="flex items-center gap-2 bg-white text-[#0885A6] hover:text-[#800000] px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
//               >
//                 <Phone className="w-5 h-5" />
//                 <span className="font-medium tracking-wide">
//                   +91 8383946401
//                 </span>
//               </a>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               aria-expanded={isMenuOpen}
//               aria-label="Toggle navigation menu"
//               className="md:hidden text-yellow-400"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={28} /> : <TextAlignEnd size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Overlay */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="md:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
//               onClick={() => setIsMenuOpen(false)}
//             />
//           )}
//         </AnimatePresence>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               transition={{ duration: 0.2 }}
//               className="md:hidden fixed inset-0 z-50 flex items-center justify-center p-4 mt-10"
//             >
//               <div className="w-full max-w-md">
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-4 px-2">
//                   <button
//                     onClick={() => setIsMenuOpen(false)}
//                     className="text-white hover:text-[#800000] transition"
//                   >
//                     <X size={36} strokeWidth={2.5} />
//                   </button>
//                 </div>

//                 {/* Menu Items */}
//                 <motion.div
//                   initial={{ y: 20, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   transition={{ delay: 0.1 }}
//                   className="bg-gradient-to-br from-[#0885A6] via-blue-[#0885A6] to-gray-[#0885A6] backdrop-blur-md rounded-3xl p-8 shadow-2xl mt-[400px]"
//                 >
//                   <div className="flex flex-col space-y-6">
//                     {["HOME", "ABOUT US", "SERVICES", "TESTIMONIALS"].map(
//                       (item, index) => (
//                         <motion.button
//                           key={item}
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: 0.1 + index * 0.05 }}
//                           onClick={() =>
//                             scrollToSection(
//                               item.toLowerCase().replace(" ", "-")
//                             )
//                           }
//                           className="text-center text-white hover:text-[#800000] transition py-3 text-2xl font-bold tracking-wide"
//                         >
//                           {item}
//                         </motion.button>
//                       )
//                     )}
//                     <a
//                       href="tel:+9183839464011"
//                       className="flex items-center gap-2 bg-white text-[#0885A6] hover:text-[#800000] px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition"
//                     >
//                       <Phone className="w-5 h-5" />
//                       <span className="font-medium tracking-wide">
//                         +91 8383946401
//                       </span>
//                     </a>
//                   </div>
//                 </motion.div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>
//     </div>
//   );
// }

// export default Navigation;

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { HiOutlineMenu } from "react-icons/hi";
// import { IoMdClose } from "react-icons/io";

// export default function Navigation({ onOpenModal, scrollToSection }) {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 80); // scroll detection
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   const handleMobileNavClick = (sectionId) => {
//     scrollToSection(sectionId);
//     setIsMobileMenuOpen(false);
//   };

//   const handleMobileModalOpen = () => {
//     onOpenModal();
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
//         isScrolled
//           ? "bg-white/100 backdrop-blur-md shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="px-5 md:px-7 lg:px-9 xl:px-10 4k:px-14">
//         <div className="flex justify-between items-center py-3">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <div className="relative">
//               <Image
//                 src="/1.png"
//                 alt="Digitals by Dee Logo"
//                 width={180}
//                 height={60}
//                 className="h-16 w-auto object-contain"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             <button
//               onClick={() => scrollToSection("home")}
//               className="text-gray-800 hover:text-[#800000] transition-colors font-medium"
//             >
//               Home
//             </button>
//             <button
//               onClick={() => scrollToSection("about")}
//               className="text-gray-800 hover:text-[#800000] transition-colors font-medium"
//             >
//               About
//             </button>
//             <button
//               onClick={() => scrollToSection("services")}
//               className="text-gray-800 hover:text-[#800000] transition-colors font-medium"
//             >
//               Services
//             </button>
//             <button
//               onClick={() => scrollToSection("testimonials")}
//               className="text-gray-800 hover:text-[#800000] transition-colors font-medium"
//             >
//               Testimonials
//             </button>
//             <button
//               onClick={onOpenModal}
//               className="bg-white border-2 border-[#800000] hover:border-2 hover:border-[#800000] px-6 py-2 rounded-full font-medium hover:bg-[#800000] hover:text-white transition-all shadow-md hover:shadow-lg"
//             >
//               Let's Talk
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               className="text-gray-800 hover:text-yellow-500 focus:outline-none transition-colors"
//               aria-label="Toggle mobile menu"
//             >
//               {isMobileMenuOpen ? (
//                 <IoMdClose className="h-7 w-7" />
//               ) : (
//                 <HiOutlineMenu className="h-8 w-8" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 right-0 bg-white/100 backdrop-blur-md shadow-lg border-t border-gray-100">
//           <div className="px-4 py-6 space-y-4 bg-blue-50">
//             <button
//               onClick={() => handleMobileNavClick("home")}
//               className="block w-full text-center text-gray-800 hover:text-[#800000] transition-colors py-2 text-lg font-medium"
//             >
//               Home
//             </button>
//             <button
//               onClick={() => handleMobileNavClick("about")}
//               className="block w-full text-center text-gray-800 hover:text-[#800000] transition-colors py-2 text-lg font-medium"
//             >
//               About
//             </button>
//             <button
//               onClick={() => handleMobileNavClick("services")}
//               className="block w-full text-center text-gray-800 hover:text-[#800000] transition-colors py-2 text-lg font-medium"
//             >
//               Services
//             </button>
//             <button
//               onClick={() => handleMobileNavClick("testimonials")}
//               className="block w-full text-center text-gray-800 hover:text-[#800000] transition-colors py-2 text-lg font-medium"
//             >
//               Testimonials
//             </button>
//             <button
//               onClick={handleMobileModalOpen}
//               className="block w-full bg-gradient-to-r from-[#0885A6] to-white text-white px-6 py-3 rounded-full font-medium text-center mt-4 hover:bg-[#0885A6] hover:text-[#800000] transition-all shadow-md"
//             >
//               Let's Talk
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
