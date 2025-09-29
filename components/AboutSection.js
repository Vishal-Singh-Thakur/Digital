"use client";

import Image from "next/image";

export default function AboutSection() {
  const features = [
    { icon: "🎨", text: "Creative", bgColor: "bg-pink-100" },
    { icon: "📈", text: "Results-Driven", bgColor: "bg-yellow-100" },
    { icon: "💝", text: "Personal Touch", bgColor: "bg-pink-100" },
  ];

  const expertise = [
    { icon: "🎯", text: "Google Ads Certified" },
    { icon: "🏢", text: "Ex-LS Digital" },
    { icon: "📊", text: "Performance Marketing" },
    { icon: "🎨", text: "Creative Strategy" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 handwriting">
            Your Digital Growth Partner
          </h2>
          <p className="text-md text-black italic">
            Small brands, big results. No excuses, just growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Digitals by Dee, we blend data-driven strategies with a human
              touch. From social media magic to performance marketing, we create
              experiences that don't just look good—but deliver real results.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Because your growth is our favorite story to tell. 💖
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 ${feature.bgColor} px-4 py-2 rounded-full`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-200 to-yellow-200 rounded-3xl p-8 hover-lift">
              <div className="text-center">
                <div className="text-6xl mb-4">👩‍💻</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Meet Dee
                </h3>
                <h4 className="text-2xl font-bold text-gray-800 mb-4 handwriting">
                  Proof in the Numbers
                </h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-pink-500">70+</div>
                    <div className="text-xs text-gray-600">
                      Campaigns Executed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-500">2M+</div>
                    <div className="text-xs text-gray-600">Social Reach</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-pink-500">49K+</div>
                    <div className="text-xs text-gray-600">Reel Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-500">30%</div>
                    <div className="text-xs text-gray-600">Lead Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-yellow-50 rounded-3xl p-8 md:p-12 shadow-lg mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4 handwriting">
              🤫 Our Secret Sauce - Shh It Works
            </h3>
            <p className="text-black italic">Simple, smart and scalable.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">👂</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                We Listen
              </h4>
              <p className="text-sm text-gray-600">
                Understand your brand, audience and goals
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">We Plan</h4>
              <p className="text-sm text-gray-600">
                Strategize campaigns that actually work
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                We Execute
              </h4>
              <p className="text-sm text-gray-600">
                Post, optimize, repeat. Every click counts
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl">📈</span>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">We Grow</h4>
              <p className="text-sm text-gray-600">
                Analyze results and scale what is working
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Founder Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4 handwriting">
              🌟 Meet Deeksha Your Brand’s New BFF.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hi, I'm Deeksha, the heart behind Digitals by Dee. I am trained
                in Google and have worked with LS Digital managing top brands. I
                have hands-on experience in scaling campaigns and creating
                social buzz that actually matters. From building a brand’s
                social media from scratch to driving sales with
                precision-targeted ads I have seen it all and done it all.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Digitals by Dee we mix strategy, creativity and a little bit
                of magic to make your brand not just seen but remembered.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                I believe in mixing creativity with data—because that's where
                the magic (and growth 🚀) truly happens.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-200 to-pink-200 rounded-3xl p-8 hover-lift">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src="/Deeksha-Formal-Image.png"
                        alt="Deeksha - Founder of Digitals by Dee"
                        width={96}
                        height={96}
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    Deeksha's Expertise
                  </h4>
                  <div className="space-y-4">
                    {expertise.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center space-x-2 bg-white/70 px-4 py-2 rounded-full"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
