"use client";

import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      icon: "📱",
      title: "Social Media Marketing",
      description:
        "Posts that pop, captions that click and content your audience will actually love.",
    },
    {
      icon: "🚀",
      title: "Paid Advertising",
      description:
        "Meta, Google, you name it. Campaigns that bring clicks and results.",
    },
    {
      icon: "💡",
      title: "Brand Strategy and Launch Support",
      description: "Launch smart, grow faster and make an impact.",
    },
    {
      icon: "📈",
      title: "SEO and Website Support",
      description: "Rank, shine and convert. We make Google notice you.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 handwriting">
            What We Do And Do Really Well
          </h2>
          <p className="text-md text-center text-black italic">
            No cookie-cutter stuff. Everything is tailored to your brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
