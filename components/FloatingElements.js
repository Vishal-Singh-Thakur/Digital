'use client'

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="floating-shape absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-30"></div>
      <div className="floating-shape absolute top-40 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-40"></div>
      <div className="floating-shape absolute bottom-40 left-1/4 w-12 h-12 bg-pink-300 rounded-full opacity-25"></div>
      <div className="floating-shape absolute bottom-20 right-1/3 w-24 h-24 bg-yellow-100 rounded-full opacity-35"></div>
    </div>
  )
}