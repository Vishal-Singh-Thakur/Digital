'use client'

export default function TestimonialCard({ testimonial, isActive }) {
  return (
    <div 
      className={`testimonial-card bg-white rounded-3xl p-8 shadow-lg text-center transition-opacity duration-500 ${
        isActive ? 'block opacity-100' : 'hidden opacity-0'
      }`}
    >
      <div className="text-4xl mb-4">{testimonial.emoji}</div>
      <p className="text-lg text-gray-700 mb-6 italic">
        {testimonial.text}
      </p>
      <div className="flex items-center justify-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full flex items-center justify-center">
          <span className="text-white font-bold">{testimonial.initial}</span>
        </div>
        <div>
          <div className="font-semibold text-gray-800">{testimonial.name}</div>
          <div className="text-gray-600 text-sm">{testimonial.company}</div>
        </div>
      </div>
    </div>
  )
}
