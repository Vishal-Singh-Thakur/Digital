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