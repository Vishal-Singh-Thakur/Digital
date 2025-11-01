import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Share2, FileText, MousePointerClick, Globe, Users, Camera, Video } from "lucide-react";
import Image from "next/image";
import ContactModal from "./ContactModal";

function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      title: "SEO Optimization",
      description:
        "Boost your website's visibility and rank higher on search engines with our expert SEO strategies.",
      image: "/seo1.png",
      icon: <Search className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      highlights: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Link Building",
      ],
    },
    {
      title: "Social Media Marketing",
      description:
        "Engage your audience and build brand awareness across all major social media platforms.",
      image: "/social.jpg",
      icon: <Share2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      highlights: [
        "Content Strategy",
        "Community Management",
        "Social Ads",
        "Analytics",
      ],
    },
    {
      title: "Content Marketing",
      description:
        "Create compelling content that resonates with your audience and drives conversions.",
      image: "/content.png",
      icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      highlights: [
        "Blog Writing",
        "Video Content",
        "Infographics",
        "Email Campaigns",
      ],
    },
    {
      title: "PPC Advertising",
      description:
        "Maximize ROI with targeted pay-per-click campaigns that deliver measurable results.",
      image: "/hero.jpg",
      icon: (
        <MousePointerClick className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      ),
      highlights: [
        "Google Ads",
        "Facebook Ads",
        "Campaign Optimization",
        "ROI Tracking",
      ],
    },
    {
      title: "Website Design & Development",
      description:
        "Build high-performing, visually stunning websites that convert visitors into loyal customers.",
      image: "/website.jpg",
      icon: (
        <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      ),
      highlights: [
        "UI/UX Design",
        "E-commerce Setup",
        "Landing Page Optimization",
        "Website Maintenance",
      ],
    },
    {
      title: "Influencer & Celebrity Tie-ups",
      description:
        "Amplify your brand voice with authentic collaborations that drive engagement and trust.",
      image: "/ppc.png",
      icon: (
        <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      ),
      highlights: [
        "Influencer Discovery & Curation",
        "Campaign Strategy",
        "Talent Management",
        "ROI Measurement",
      ],
    },
    {
      title: "Product Photography & Styling",
      description:
        "Showcase your products with visuals that sell — creative, crisp, and on-brand every time.",
      image: "/photo.jpg",
      icon: (
        <Camera className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      ),
      highlights: [
        "Concept & Styling",
        "Studio/Product Shoots",
        "Creative Direction",
        "Image Editing & Retouching",
      ],
    },
    {
      title: "Brand Films & Campaign Shoots",
      description:
        "Tell your brand story through cinematic visuals that captivate and convert.",
      image: "/brand.jpg",
      icon: (
        <Video className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      ),
      highlights: [
        "Concept & Script Development",
        "Shoot Production",
        "Post-Production & Editing",
        "Ad Campaign Integration",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="px-6 md:px-8 lg:px-12 xl:px-28 4k:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-5 md:mb-6 text-gray-900">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-gray-600 max-w-3xl 2xl:max-w-5xl mx-auto px-4">
            Comprehensive digital marketing solutions tailored to your business
            needs
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-28">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 xl:gap-16 2xl:gap-20 items-center`}
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-gradient-to-br from-[#0885A6] to-[#066a85] p-3 sm:p-3.5 md:p-4 xl:p-5 rounded-xl sm:rounded-2xl text-white shadow-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2 sm:pt-4">
                    {service.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 sm:py-3 xl:py-4 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 hover:border-[#0885A6] hover:shadow-md transition-all duration-300"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0885A6] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-800 font-medium text-xs sm:text-sm md:text-base 2xl:text-lg">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2 sm:pt-4">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#0885A6] text-white px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 xl:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg 2xl:text-xl font-semibold hover:bg-[#066a85] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                <div className="relative group">
                  {/* Decorative Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0885A6] to-[#066a85] rounded-2xl sm:rounded-3xl transform rotate-2 sm:rotate-3 group-hover:rotate-4 sm:group-hover:rotate-6 transition-transform duration-500"></div>

                  {/* Image Container */}
                  <div className="relative bg-white rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 shadow-xl sm:shadow-2xl transform group-hover:-translate-y-1 sm:group-hover:-translate-y-2 transition-all duration-500">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-xl sm:rounded-2xl w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 bg-gradient-to-br from-[#0885A6] to-[#066a85] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 2xl:p-20 text-center text-white shadow-2xl"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 px-2">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6 sm:mb-8 md:mb-10 text-blue-50 max-w-4xl mx-auto px-4">
            Let's create a customized strategy that drives real results for your
            business
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-[#0885A6] px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-4 lg:py-5 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

export default ServicesSection;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Search, Share2, FileText, MousePointerClick } from "lucide-react";
// import Image from "next/image";
// import ContactModal from "./ContactModal";

// function ServicesSection() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const services = [
//     {
//       title: "SEO Optimization",
//       description:
//         "Boost your website's visibility and rank higher on search engines with our expert SEO strategies.",
//       image: "/seo1.png",
//       icon: <Search className="w-8 h-8" />,
//       highlights: [
//         "Keyword Research",
//         "On-Page SEO",
//         "Technical SEO",
//         "Link Building",
//       ],
//     },
//     {
//       title: "Social Media Marketing",
//       description:
//         "Engage your audience and build brand awareness across all major social media platforms.",
//       image: "/social.png",
//       icon: <Share2 className="w-8 h-8" />,
//       highlights: [
//         "Content Strategy",
//         "Community Management",
//         "Social Ads",
//         "Analytics",
//       ],
//     },
//     {
//       title: "Content Marketing",
//       description:
//         "Create compelling content that resonates with your audience and drives conversions.",
//       image: "/content.png",
//       icon: <FileText className="w-8 h-8" />,
//       highlights: [
//         "Blog Writing",
//         "Video Content",
//         "Infographics",
//         "Email Campaigns",
//       ],
//     },
//     {
//       title: "PPC Advertising",
//       description:
//         "Maximize ROI with targeted pay-per-click campaigns that deliver measurable results.",
//       image: "/ppc.png",
//       icon: <MousePointerClick className="w-8 h-8" />,
//       highlights: [
//         "Google Ads",
//         "Facebook Ads",
//         "Campaign Optimization",
//         "ROI Tracking",
//       ],
//     },
//   ];

//   return (
//     <section
//       id="services"
//       className="py-24 bg-gradient-to-b from-white to-gray-50"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
//             Our Services
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive digital marketing solutions tailored to your business
//             needs
//           </p>
//         </motion.div>

//         <div className="space-y-24">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               viewport={{ once: true }}
//               className={`grid lg:grid-cols-2 gap-12 items-center ${
//                 index % 2 === 1 ? "" : ""
//               }`}
//             >
//               {/* Content Side */}
//               <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
//                 <div className="space-y-6">
//                   {/* Icon & Title */}
//                   <div className="flex items-center gap-4">
//                     <div className="bg-gradient-to-br from-[#0885A6] to-[#066a85] p-4 rounded-2xl text-white shadow-lg">
//                       {service.icon}
//                     </div>
//                     <h3 className="text-4xl font-bold text-gray-900">
//                       {service.title}
//                     </h3>
//                   </div>

//                   {/* Description */}
//                   <p className="text-lg text-gray-700 leading-relaxed">
//                     {service.description}
//                   </p>

//                   {/* Highlights */}
//                   <div className="grid grid-cols-2 gap-3 pt-4">
//                     {service.highlights.map((highlight, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100 hover:border-[#0885A6] hover:shadow-md transition-all duration-300"
//                       >
//                         <div className="w-2 h-2 bg-[#0885A6] rounded-full"></div>
//                         <span className="text-gray-800 font-medium text-sm">
//                           {highlight}
//                         </span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* CTA Button */}
//                   <div className="pt-4">
//                     <button
//                       onClick={() => setIsModalOpen(true)}
//                       className="bg-[#0885A6] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#066a85] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//                     >
//                       Learn More
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Image Side */}
//               <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
//                 <div className="relative group">
//                   {/* Decorative Background */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#0885A6] to-[#066a85] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>

//                   {/* Image Container */}
//                   <div className="relative bg-white rounded-3xl p-2 shadow-2xl transform group-hover:-translate-y-2 transition-all duration-500">
//                     <Image
//                       src={service.image}
//                       alt={service.title}
//                       width={600}
//                       height={400}
//                       className="rounded-2xl w-full h-96 object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-24 bg-gradient-to-br from-[#0885A6] to-[#066a85] rounded-3xl p-12 text-center text-white shadow-2xl"
//         >
//           <h3 className="text-3xl md:text-4xl font-bold mb-4">
//             Ready to Transform Your Digital Presence?
//           </h3>
//           <p className="text-xl mb-8 text-blue-50">
//             Let's create a customized strategy that drives real results for your
//             business
//           </p>
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="bg-white text-[#0885A6] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
//           >
//             Get Started Today
//           </button>
//         </motion.div>
//       </div>
//       {/* Contact Modal */}
//       <ContactModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </section>
//   );
// }

// export default ServicesSection;

// import React from "react";
// import { motion } from "framer-motion";

// function ServicesSection() {
//   const services = [
//     {
//       title: "SEO Optimization",
//       description:
//         "Boost your website's visibility and rank higher on search engines with our expert SEO strategies.",
//       image:
//         "/seo.png",
//     },
//     {
//       title: "Social Media Marketing",
//       description:
//         "Engage your audience and build brand awareness across all major social media platforms.",
//       image:
//         "/social.png",
//     },
//     {
//       title: "Content Marketing",
//       description:
//         "Create compelling content that resonates with your audience and drives conversions.",
//       image:
//         "/content.png",
//     },
//     {
//       title: "PPC Advertising",
//       description:
//         "Maximize ROI with targeted pay-per-click campaigns that deliver measurable results.",
//       image:
//         "/ppc.png",
//     },
//   ];

//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
//             Our <span className="text-[#0885A6]">Services</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Comprehensive digital marketing solutions tailored to your needs
//           </p>
//         </motion.div>

//         <div className="space-y-20">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className={`grid md:grid-cols-2 gap-12 items-center ${
//                 index % 2 === 1 ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               <div className={index % 2 === 1 ? "md:order-2" : ""}>
//                 <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
//                   <h3 className="text-3xl font-bold mb-6 text-[#0885A6]">
//                     {service.title}
//                   </h3>
//                   {/* <ul className="space-y-3 mb-6">
//                     {service.items.map((item, i) => (
//                       <li
//                         key={i}
//                         className="flex items-start gap-3 text-gray-700"
//                       >
//                         <span className="text-yellow-600 mt-1">•</span>
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul> */}
//                   <p className="text-gray-600 italic border-l-4 border-[#0885A6] pl-4">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//               <div className={index % 2 === 1 ? "md:order-1" : ""}>
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="rounded-2xl shadow-2xl w-full h-96 object-cover"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ServicesSection;

// import { BarChart, Target, TrendingUp, Users } from 'lucide-react';
// import React from 'react'

// function ServicesSection() {
//  const services = [
//     {
//       icon: <TrendingUp size={40} />,
//       title: "SEO Optimization",
//       description: "Boost your website's visibility and rank higher on search engines with our expert SEO strategies."
//     },
//     {
//       icon: <Target size={40} />,
//       title: "Social Media Marketing",
//       description: "Engage your audience and build brand awareness across all major social media platforms."
//     },
//     {
//       icon: <Users size={40} />,
//       title: "Content Marketing",
//       description: "Create compelling content that resonates with your audience and drives conversions."
//     },
//     {
//       icon: <BarChart size={40} />,
//       title: "PPC Advertising",
//       description: "Maximize ROI with targeted pay-per-click campaigns that deliver measurable results."
//     }
//   ];

//   return (
//     <section id="services" className="py-20 bg-gray-50">
//       <div className="px-7 md:px-9 lg:px-10 xl:px-12 4k:px-14">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
//           <p className="text-xl text-gray-600">Comprehensive digital marketing solutions tailored to your needs</p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
//               <div className="text-[#0885A6] mb-4">{service.icon}</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection
