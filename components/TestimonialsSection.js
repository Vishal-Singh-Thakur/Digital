import React from "react";
import { motion } from "framer-motion";

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya S.",
      role: "Wellness Brand",
      text: "Digitals by Dee took our social media from 0 to 10k in just 2 months! Deeksha knows her stuff.",
    },
    {
      name: "Rohan Mehta",
      role: "University Faculty",
      text: "We saw sales growth within weeks of their ad campaigns. Strategic, creative and fast.",
    },
    {
      name: "Anshu K.",
      role: "Health and Fitness",
      text: "Finally, a team that gets it! Creative content and results-driven ads equals magic.",
    },
    {
      name: "Ravi Gupta",
      role: "Jewellery brand",
      text: "Before Dee’s team stepped in, our Meta ads weren’t delivering. Within the first month, we started seeing consistent website traffic and quality leads. The targeting and creatives were spot on!",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/testimonial.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="px-6 md:px-8 lg:px-12 xl:px-24 4k:px-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">
            Don't Just Take Our Word For It
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 4k:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-brown-400/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <p className="font-bold text-xl text-[#0885A6]">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-200 italic text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
