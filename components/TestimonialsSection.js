"use client";

import { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      emoji: "💕",
      text: "Digitals by Dee took our social media from 0 to 10k in just 2 months! Deeksha knows her stuff.",
      name: "Priya S.",
      company: "Wellness Brand",
      initial: "P",
    },
    {
      id: 2,
      emoji: "🌟",
      text: "We saw sales growth within weeks of their ad campaigns. Strategic, creative and fast.",
      name: "Rahul M.",
      company: "E-commerce Brand",
      initial: "R",
    },
    {
      id: 3,
      emoji: "✨",
      text: "Finally, a team that gets it! Creative content and results-driven ads equals magic.",
      name: "Anshu K.",
      company: "Health and Fitness",
      initial: "A",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 handwriting">
            Don’t Just Take Our Word For It
          </h2>
          <p className="text-md text-black italic">
            Our clients grow. That is our favorite story.
          </p>
        </div>

        <div className="relative">
          <div className="testimonial-carousel">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={index === currentTestimonial}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`testimonial-dot w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? "bg-pink-400" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
