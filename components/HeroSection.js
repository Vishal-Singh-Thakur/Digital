import { ArrowRight, ChevronDown } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 sm:pt-20 md:pt-24 lg:pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[url('/home1.png')] bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundAttachment: "fixed" }}
      ></div>

      <div className="max-w-6xl 4k:max-w-[90rem] mx-auto px-6 sm:px-6 md:px-8 lg:px-8 xl:px-10 4k:px-12 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-white font-semibold leading-tight px-2 sm:px-4"
          >
            We Don't Just Market. We Make Brands Shine.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 px-4 sm:px-6 leading-relaxed"
          >
            From social media scroll-stoppers to paid ad campaigns that actually
            convert we have your brand covered end-to-end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6"
          >
            <button
              onClick={() => scrollToSection("contact-us")}
              className="bg-[#0885A6] hover:bg-[#800000] text-white px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 lg:px-12 lg:py-5 xl:px-14 xl:py-6 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
            </button>

            <div
              className="flex flex-col items-center gap-1 sm:gap-2 text-white hover:text-[#0885A6] cursor-pointer transition-colors duration-300"
              onClick={() => scrollToSection("about-us")}
            >
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium">
                Scroll
              </span>
              <ChevronDown className="animate-bounce w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;



// Second code

// import { ArrowRight, ChevronDown } from "lucide-react";
// import React from "react";
// import { motion } from "framer-motion";

// function HeroSection() {
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-[url('/home1.png')] bg-cover bg-center opacity-20"></div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
//         <div className="text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-2xl md:text-3xl xl:text-5xl mb-6 text-white font-semibold"
//           >
//             We Don’t Just Market. We Make Brands Shine.
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12"
//           >
//             From social media scroll-stoppers to paid ad campaigns that actually
//             convert we have your brand covered end-to-end.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="flex flex-col items-center gap-4"
//           >
//             <button
//               onClick={() => scrollToSection("contact-us")}
//               className="bg-[#0885A6] hover:bg-[#800000] text-white px-10 py-4 rounded-lg text-lg font-bold flex items-center gap-2 transition"
//             >
//               Get Started <ArrowRight />
//             </button>
//             <div
//               className="flex flex-col items-center gap-2 text-white hover:text-[#0885A6] cursor-pointer"
//               onClick={() => scrollToSection("about-us")}
//             >
//               <span className="text-sm font-medium">Scroll</span>
//               <ChevronDown className="animate-bounce" />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;
