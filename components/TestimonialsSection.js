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
      name: "Anshu K.",
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

// "use client";

// import { useState, useEffect } from "react";
// import TestimonialCard from "./TestimonialCard";

// export default function TestimonialsSection() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       emoji: "💕",
//       text: "Digitals by Dee took our social media from 0 to 10k in just 2 months! Deeksha knows her stuff.",
//       name: "Priya S.",
//       company: "Wellness Brand",
//       initial: "P",
//     },
//     {
//       id: 2,
//       emoji: "🌟",
//       text: "We saw sales growth within weeks of their ad campaigns. Strategic, creative and fast.",
//       name: "Rahul M.",
//       company: "E-commerce Brand",
//       initial: "R",
//     },
//     {
//       id: 3,
//       emoji: "✨",
//       text: "Finally, a team that gets it! Creative content and results-driven ads equals magic.",
//       name: "Anshu K.",
//       company: "Health and Fitness",
//       initial: "A",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []); // Removed testimonials.length dependency

//   return (
//     <section id="testimonials" className="py-20 px-5 md:px-8">
//       <div className="">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
//             Don't Just Take Our Word For It
//           </h2>
//           <p className="text-md text-[#0885A6] italic">
//             Our clients grow. That is our favorite story.
//           </p>
//         </div>

//         <div className="relative">
//           <div className="testimonial-carousel">
//             {testimonials.map((testimonial, index) => (
//               <TestimonialCard
//                 key={testimonial.id}
//                 testimonial={testimonial}
//                 isActive={index === currentTestimonial}
//               />
//             ))}
//           </div>

//           <div className="flex justify-center mt-8 space-x-2">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentTestimonial(index)}
//                 className={`testimonial-dot w-3 h-3 rounded-full transition-all ${
//                   index === currentTestimonial ? "bg-[#0885A6]" : "bg-gray-300"
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
