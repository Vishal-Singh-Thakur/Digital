import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineVolumeUp,
  HiOutlineClipboardList,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
} from "react-icons/hi";
import Image from "next/image";

function AboutSection() {
  const stats = [
    {
      title: "2M+",
      description: "Social Reach",
    },
    {
      title: "49K+",
      description: "Reel Views",
    },
    {
      title: "30%",
      description: "Lead Increase",
    },
  ];

  const expertise = [
    { icon: "🎯", text: "Google Certified" },
    { icon: "💼", text: "Ex-LS Digital" },
    { icon: "📊", text: "Performance Marketing" },
    { icon: "🎨", text: "Creative Content" },
    { icon: "📈", text: "Growth Strategy" },
  ];

  const process = [
    {
      icon: <HiOutlineVolumeUp />,
      title: "Listen",
      desc: "Understand your brand, audience and goals",
    },
    {
      icon: <HiOutlineClipboardList />,
      title: "Plan",
      desc: "Strategize campaigns that actually work",
    },
    {
      icon: <HiOutlineLightningBolt />,
      title: "Execute",
      desc: "Post, optimize, repeat. Every click counts",
    },
    {
      icon: <HiOutlineChartBar />,
      title: "Grow",
      desc: "Analyze results and scale what's working",
    },
  ];

  return (
    <section id="about-us" className="py-24 px-6 md:px-8 lg:px-12 xl:px-28 bg-white">
      <div>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Your Digital Growth Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Small brands, big results. No excuses, just growth.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Data-Driven Strategies,{" "}
              <span className="text-[#0885A6]">Human Touch</span>
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Digitals by Dee, we blend data-driven strategies with a human
              touch. From social media magic to performance marketing, we create
              experiences that deliver real results.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Because your growth is our favorite story to tell.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <Image
                src="/about.png"
                alt="Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Campaigns Executed
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#0885A6] to-[#066a85] p-10 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300"
              >
                <h4 className="text-6xl font-bold text-white mb-3">
                  {stat.title}
                </h4>
                <p className="text-xl text-blue-50">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          // className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Process
            </h3>
            <p className="text-xl text-gray-600">
              Simple, smart and scalable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-[#0885A6] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-[#0885A6] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl text-white">{item.icon}</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Meet Deeksha
            </h3>
            <p className="text-xl text-gray-600">Your Brand's Growth Partner</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hi, I'm Deeksha, the heart behind Digitals by Dee. I am trained
                in Google and have worked with LS Digital managing top brands. I
                have hands-on experience in scaling campaigns and creating
                social buzz that actually matters.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Digitals by Dee we mix strategy, creativity and a little bit
                of magic to make your brand not just seen but remembered.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {expertise.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-gray-800 text-sm">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0885A6] to-[#066a85] rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl transform hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/Deeksha-Formal-Image.png"
                    alt="Deeksha - Founder of Digitals by Dee"
                    width={500}
                    height={600}
                    className="rounded-2xl object-cover w-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

export default AboutSection;

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Menu,
//   X,
//   ArrowRight,
//   Briefcase,
//   Target,
//   BookOpen,
//   Globe,
//   ChevronDown,
// } from "lucide-react";
// import Image from "next/image";

// function AboutSection() {
//   const engagementModels = [
//     {
//       // icon: <Briefcase className="w-10 h-10" />,
//       title: "2M+",
//       description: "Social Reach",
//     },
//     {
//       // icon: <Target className="w-10 h-10" />,
//       title: "49K+",
//       description: "Reel Views",
//     },

//     {
//       // icon: <BookOpen className="w-10 h-10" />,
//       title: "30%",
//       description: "Lead Increase",
//     },
//   ];
//   return (
//     <section id="about-us" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
//             Your <span className="text-[#0885A6]">Digital</span> Growth Partner
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Small brands, big results. No excuses, just growth.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 items-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             {/* <Image
//               src="/about.png"
//               alt="Team"
//               className=" bg-blue-50"
//             /> */}
//             <Image
//               src="/about.png"
//               alt="Team"
//               width={400}
//               height={300}
//               className="bg-blue-50 rounded-xl object-cover"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             {/* <h3 className="text-3xl font-bold mb-6 text-yellow-600">
//               Our Mission
//             </h3> */}
//             <p className="text-lg text-gray-700 mb-6">
//               At Digitals by Dee, we blend data-driven strategies with a human
//               touch. From social media magic to performance marketing, we create
//               experiences that deliver real results.
//             </p>
//             <p className="text-lg text-gray-700">
//               Because your growth is our favorite story to tell.
//             </p>
//           </motion.div>
//         </div>

//         {/* Engagement Models */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-12"
//         >
//           <h3 className="text-4xl md:text-5xl font-bold text-center mb-12">
//             Campaigns <span className="text-[#0885A6]">Executed</span>
//           </h3>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {engagementModels.map((model, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition relative"
//             >
//               {/* <div className="absolute -top-6 left-8 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg">
//                 {model.icon}
//               </div> */}
//               <div>
//                 <h4 className="text-6xl font-bold text-center text-[#0885A6] mb-4">
//                   {model.title}
//                 </h4>
//                 <p className="text-xl text-center text-gray-700">
//                   {model.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Models */}
//         <div className="mb-20 bg-gradient-to-b from-white to-gray-50">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">
//               🤫 Our Secret Sauce - Shh It Works
//             </h3>
//             <p className="text-[#0885A6] italic text-lg">
//               Simple, smart and scalable.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <HiOutlineVolumeUp />,
//                 title: "We Listen",
//                 desc: "Understand your brand, audience and goals",
//               },
//               {
//                 icon: <HiOutlineClipboardList />,
//                 title: "We Plan",
//                 desc: "Strategize campaigns that actually work",
//               },
//               {
//                 icon: <HiOutlineLightningBolt />,
//                 title: "We Execute",
//                 desc: "Post, optimize, repeat. Every click counts",
//               },
//               {
//                 icon: <HiOutlineChartBar />,
//                 title: "We Grow",
//                 desc: "Analyze results and scale what is working",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
//               >
//                 <div className="bg-[#0885A6]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover:bg-[#0885A6] transition-colors duration-300">
//                   <span className="text-3xl text-[#0885A6] hover:text-white transition-colors duration-300">
//                     {item.icon}
//                   </span>
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-900 mb-2">
//                   {item.title}
//                 </h4>
//                 <p className="text-sm md:text-md text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//                 {/* Meet the Founder */}
//          <div className="bg-white">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl md:text-5xl font-bold mb-4">
//                🌟 Meet Deeksha, Your Brand’s New BFF
//             </h3>
//            </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//              <div className="space-y-6">
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Hi, I'm Deeksha, the heart behind Digitals by Dee. I am trained
//                 in Google and have worked with LS Digital managing top brands. I
//                 have hands-on experience in scaling campaigns and creating
//                 social buzz that actually matters.
//                </p>
//                <p className="text-lg text-gray-700 leading-relaxed">
//                 At Digitals by Dee we mix strategy, creativity and a little bit
//                 of magic to make your brand not just seen but remembered.
//                </p>
//                <p className="text-lg text-gray-700 leading-relaxed font-medium">
//                 I believe in mixing creativity with data—because that's where
//                  the magic (and growth 🚀) truly happens.
//                </p>
//             </div>

//              <div className="relative">
//               <div className="bg-gradient-to-br from-blue-100 to-[#800000]/20 rounded-3xl p-8 hover:translate-y-[-5px] transition-transform duration-300">
//                  <div className="text-center">
//                   <div className="mb-4 flex justify-center">
//                     <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
//                       <Image
//                         src="/Deeksha-Formal-Image.png"
//                         alt="Deeksha - Founder of Digitals by Dee"
//                         width={96}
//                         height={96}
//                         className="object-cover"
//                         priority
//                       />
//                     </div>
//                   </div>
//                   <h4 className="text-2xl font-bold text-[#800000] mb-4">
//                     Deeksha's Expertise
//                   </h4>
//                   <div className="space-y-4">
//                     {expertise.map((item, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center justify-center space-x-2 bg-white/70 px-4 py-2 rounded-full"
//                       >
//                         <span className="text-xl">{item.icon}</span>
//                         <span className="font-medium text-sm">{item.text}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;

// "use client";

// import Image from "next/image";
// import {
//   HiOutlineChartBar,
//   HiOutlineChartPie,
//   HiOutlineChartSquareBar,
//   HiOutlineClipboardList,
//   HiOutlineFlag,
//   HiOutlineHeart,
//   HiOutlineLightningBolt,
//   HiOutlineOfficeBuilding,
//   HiOutlinePresentationChartBar,
//   HiOutlineVolumeUp,
// } from "react-icons/hi";

// export default function AboutSection() {
//   const features = [
//     {
//       icon: <HiOutlineChartPie />,
//       text: "Creative",
//       bgColor: "bg-[#0885A6]/10 text-[#800000]",
//     },
//     {
//       icon: <HiOutlineChartBar />,
//       text: "Results-Driven",
//       bgColor: "bg-[#0885A6] text-white",
//     },
//     {
//       icon: <HiOutlineHeart />,
//       text: "Personal Touch",
//       bgColor: "bg-[#0885A6]/10 text-[#800000]",
//     },
//   ];

//   const expertise = [
//     {
//       icon: <HiOutlineFlag className="text-[#0885A6]" />,
//       text: "Google Ads Certified",
//     },
//     {
//       icon: <HiOutlineOfficeBuilding className="text-[#0885A6]" />,
//       text: "Ex-LS Digital",
//     },
//     {
//       icon: <HiOutlineChartSquareBar className="text-[#0885A6]" />,
//       text: "Performance Marketing",
//     },
//     {
//       icon: <HiOutlinePresentationChartBar className="text-[#0885A6]" />,
//       text: "Creative Strategy",
//     },
//   ];

//   return (
//     <section id="about" className="py-20 px-6 md:px-8 lg:px-10 xl:px-12 4k:px-14 bg-white">
//       <div className="">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Your Digital Growth Partner
//           </h2>
//           <p className="text-md text-[#0885A6] italic">
//             Small brands, big results. No excuses, just growth.
//           </p>
//         </div>

//         {/* Features & Intro */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
//           <div className="space-y-6">
//             <p className="text-lg text-gray-700 leading-relaxed">
//               At Digitals by Dee, we blend data-driven strategies with a human
//               touch. From social media magic to performance marketing, we create
//               experiences that deliver real results.
//             </p>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               Because your growth is our favorite story to tell. 💖
//             </p>

//             <div className="flex flex-wrap gap-4 mt-8">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className={`flex items-center space-x-2 ${feature.bgColor} px-4 py-2 rounded-full font-medium`}
//                 >
//                   <span className="text-2xl">{feature.icon}</span>
//                   <span>{feature.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="relative">
//             <div className="hover:translate-y-[-5px] transition-transform duration-300">
//               <div className="text-center">
//                 <div className="bg-gradient-to-br from-blue-100 to-red-100 rounded-3xl p-4 text-center">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                     <div className="mb-8">
//                       <h3 className="text-6xl font-bold text-red-900">70+</h3>
//                       <p className="text-xl text-gray-700">
//                         Campaigns Executed
//                       </p>
//                     </div>
//                     <div className="mb-8">
//                       <h3 className="text-6xl font-bold text-[#0885A6]">2M+</h3>
//                       <p className="text-xl text-gray-700">Social Reach</p>
//                     </div>
//                     <div>
//                       <h3 className="text-6xl font-bold text-[#0885A6]">
//                         49K+
//                       </h3>
//                       <p className="text-xl text-gray-700">Reel Views</p>
//                     </div>
//                     <div>
//                       <h3 className="text-6xl font-bold text-red-900">30%</h3>
//                       <p className="text-xl text-gray-700">Lead Increase</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mb-20 bg-gradient-to-b from-white to-gray-50">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900">
//               🤫 Our Secret Sauce - Shh It Works
//             </h3>
//             <p className="text-[#0885A6] italic text-lg">
//               Simple, smart and scalable.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <HiOutlineVolumeUp />,
//                 title: "We Listen",
//                 desc: "Understand your brand, audience and goals",
//               },
//               {
//                 icon: <HiOutlineClipboardList />,
//                 title: "We Plan",
//                 desc: "Strategize campaigns that actually work",
//               },
//               {
//                 icon: <HiOutlineLightningBolt />,
//                 title: "We Execute",
//                 desc: "Post, optimize, repeat. Every click counts",
//               },
//               {
//                 icon: <HiOutlineChartBar />,
//                 title: "We Grow",
//                 desc: "Analyze results and scale what is working",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 bg-white rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
//               >
//                 <div className="bg-[#0885A6]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 hover:bg-[#0885A6] transition-colors duration-300">
//                   <span className="text-3xl text-[#0885A6] hover:text-white transition-colors duration-300">
//                     {item.icon}
//                   </span>
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-900 mb-2">
//                   {item.title}
//                 </h4>
//                 <p className="text-sm md:text-md text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Meet the Founder */}
//         <div className="bg-white">
//           <div className="text-center mb-12">
//             <h3 className="text-3xl md:text-5xl font-bold mb-4">
//               🌟 Meet Deeksha, Your Brand’s New BFF
//             </h3>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Hi, I'm Deeksha, the heart behind Digitals by Dee. I am trained
//                 in Google and have worked with LS Digital managing top brands. I
//                 have hands-on experience in scaling campaigns and creating
//                 social buzz that actually matters.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 At Digitals by Dee we mix strategy, creativity and a little bit
//                 of magic to make your brand not just seen but remembered.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed font-medium">
//                 I believe in mixing creativity with data—because that's where
//                 the magic (and growth 🚀) truly happens.
//               </p>
//             </div>

//             <div className="relative">
//               <div className="bg-gradient-to-br from-blue-100 to-[#800000]/20 rounded-3xl p-8 hover:translate-y-[-5px] transition-transform duration-300">
//                 <div className="text-center">
//                   <div className="mb-4 flex justify-center">
//                     <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
//                       <Image
//                         src="/Deeksha-Formal-Image.png"
//                         alt="Deeksha - Founder of Digitals by Dee"
//                         width={96}
//                         height={96}
//                         className="object-cover"
//                         priority
//                       />
//                     </div>
//                   </div>
//                   <h4 className="text-2xl font-bold text-[#800000] mb-4">
//                     Deeksha's Expertise
//                   </h4>
//                   <div className="space-y-4">
//                     {expertise.map((item, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center justify-center space-x-2 bg-white/70 px-4 py-2 rounded-full"
//                       >
//                         <span className="text-xl">{item.icon}</span>
//                         <span className="font-medium text-sm">{item.text}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
