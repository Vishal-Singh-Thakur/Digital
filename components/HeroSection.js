"use client";

import FloatingElements from "./FloatingElements";

export default function HeroSection({ onOpenModal }) {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-pink-700 to-pink-900 overflow-hidden"
    >
      {/* Hero Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 floating-shape">
          <div className="text-6xl transform rotate-12">💻</div>
          <div className="absolute -top-2 -right-2 text-2xl">✨</div>
        </div>
        <div className="absolute top-32 right-20 floating-shape">
          <div className="text-5xl transform -rotate-12">📷</div>
          <div className="absolute -bottom-1 -left-1 text-xl">💕</div>
        </div>
        <div className="absolute bottom-40 left-20 floating-shape">
          <div className="text-4xl">☕</div>
          <div className="absolute -top-1 -right-1 text-lg">🌟</div>
        </div>
        <div className="absolute top-1/4 left-1/4 floating-shape text-3xl transform rotate-45">
          🎨
        </div>
        <div className="absolute top-1/3 right-1/3 floating-shape text-2xl transform -rotate-12">
          💖
        </div>
        <div className="absolute bottom-1/3 left-1/3 floating-shape text-3xl transform rotate-12">
          🚀
        </div>
        <div className="absolute bottom-1/4 right-1/4 floating-shape text-2xl transform -rotate-45">
          ⭐
        </div>
        <div className="absolute top-1/2 left-16 floating-shape">
          <div className="text-3xl transform rotate-6">📊</div>
          <div className="absolute -bottom-1 -right-1 text-lg">💫</div>
        </div>
        <div className="absolute bottom-20 right-16 floating-shape">
          <div className="text-4xl transform -rotate-6">📱</div>
          <div className="absolute -top-1 -left-1 text-lg">✨</div>
        </div>
        <div className="absolute top-16 left-1/2 floating-shape text-2xl transform rotate-12">
          🎯
        </div>
        <div className="absolute bottom-16 left-1/2 floating-shape text-3xl transform -rotate-12">
          💡
        </div>
        <div className="absolute top-2/3 right-10 floating-shape text-2xl transform rotate-45">
          🌈
        </div>
        <div className="absolute top-1/6 right-1/2 floating-shape text-2xl transform -rotate-30">
          🎪
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 handwriting text-white">
            ✨ We Don’t Just Market. We Make Brands Shine. ✨
          </h1>
        </div>

        <p className="text-xl md:text-xl text-pink-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          From social media scroll-stoppers to paid ad campaigns that actually
          convert we have your brand covered end-to-end.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <button
            onClick={onOpenModal}
            className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg pulse-glow"
          >
            👉 Let’s Grow Your Brand
          </button>
          {/* <button
            onClick={onOpenModal}
            className="btn-secondary text-white px-8 py-4 rounded-full font-semibold text-lg"
          >
            💌 Get a Free Consultation
          </button> */}
        </div>
        <p className="text-md text-black italic">
          No fluff. Just results.
        </p>
      </div>

      {/* Hero Illustration */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <div className="relative">
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            className="floating-shape"
          >
            <circle
              cx="150"
              cy="150"
              r="100"
              fill="url(#heroGradient)"
              opacity="0.3"
            />
            <circle cx="120" cy="120" r="30" fill="#F8BBD9" opacity="0.6" />
            <circle cx="180" cy="180" r="25" fill="#F4D03F" opacity="0.7" />
            <path
              d="M100 200 Q150 150 200 200"
              stroke="#F8BBD9"
              strokeWidth="3"
              fill="none"
            />
            <defs>
              <linearGradient
                id="heroGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" style={{ stopColor: "#F8BBD9" }} />
                <stop offset="100%" style={{ stopColor: "#F4D03F" }} />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute -top-4 -left-4 text-3xl floating-shape">
            🎨
          </div>
          <div className="absolute -bottom-4 -right-4 text-2xl floating-shape">
            📸
          </div>
          <div className="absolute top-1/2 -left-8 text-2xl floating-shape">
            💻
          </div>
          <div className="absolute top-1/4 -right-8 text-2xl floating-shape">
            ☕
          </div>
        </div>
      </div>
    </section>
  );
}
