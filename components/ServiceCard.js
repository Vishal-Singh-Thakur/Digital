'use client'

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card bg-white rounded-3xl p-8 hover-lift shadow-lg">
      <div className="service-icon text-5xl mb-4 text-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center mb-4">
        {description}
      </p>
    </div>
  )
}