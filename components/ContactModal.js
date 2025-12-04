"use client";

import { useState } from "react";
import SendMailButtonWithEmailField from "./button/SendMailButtonWithEmailField";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    companyName: "",
    message: "",
  });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.error) {
        setMsg("Something went wrong. Please try again.");
      } else {
        setMsg(
          `Thank you ${formData.name}! 🌟 Your message has been received. We'll get back to you soon.`
        );
        setFormData({
          name: "",
          email: "",
          phoneNo: "",
          companyName: "",
          message: "",
        });

        // Close modal after 3 seconds
        setTimeout(() => {
          onClose();
          setMsg("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-4 sm:px-6 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-md w-full mx-auto my-auto relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-[#0885A6] bg-blue-50 rounded-full text-2xl sm:text-3xl transition-colors leading-none w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-md sm:text-2xl font-bold gradient-text mb-2 handwriting px-8">
            Let's Grow Together!
          </h3>
        </div>




        {/* Success/Error Message */}
        {msg && (
          <div
            className={`mb-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center text-sm sm:text-base ${msg.includes("Something went wrong")
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
              }`}
          >
            {msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-[#ADD8E6] rounded-xl sm:rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#ADD8E6] transition-all disabled:opacity-50"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-[#ADD8E6] rounded-xl sm:rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#ADD8E6] transition-all disabled:opacity-50"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phoneNo"
              placeholder="Phone"
              value={formData.phoneNo}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-[#ADD8E6] rounded-xl sm:rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#ADD8E6] transition-all disabled:opacity-50"
            />
          </div>

          <div>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-[#ADD8E6] rounded-xl sm:rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#ADD8E6] transition-all disabled:opacity-50"
            />
          </div>

          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base border border-[#ADD8E6] rounded-xl sm:rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#ADD8E6] transition-all resize-none disabled:opacity-50"
            />
          </div>

          {/* Using your existing button component */}
          <SendMailButtonWithEmailField
            loading={loading}
            setLoading={setLoading}
          />
        </form>
      </div>
    </div>
  );
}
