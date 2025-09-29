// "use client";

// import { useState } from "react";

// export default function ContactModal({ isOpen, onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `Thank you ${formData.name}! 🌟 Your message has been received. We'll get back to you within 24 hours to discuss how we can help grow your business!`
//     );
//     setFormData({ name: "", email: "", phone: "", message: "" });
//     onClose();
//   };

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div
//       className="modal fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm"
//       onClick={handleBackdropClick}
//     >
//       <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl transition-colors"
//           aria-label="Close modal"
//         >
//           &times;
//         </button>

//         <div className="text-center mb-6">
//           <div className="text-4xl mb-4">💌</div>
//           <h3 className="text-2xl font-bold gradient-text mb-2 handwriting">
//             Let's Grow Together!
//           </h3>
//           <p className="text-gray-600">
//             Got an idea, a brand, or a dream project? We'd love to hear about
//             it. Fill out the form & let's create something amazing.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               required
//               value={formData.name}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
//             />
//           </div>

//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
//             />
//           </div>

//           <div>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
//             />
//           </div>

//           <div>
//             <textarea
//               name="message"
//               rows="4"
//               placeholder="Message"
//               value={formData.message}
//               onChange={handleInputChange}
//               className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all resize-none"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full btn-primary text-white py-4 rounded-2xl font-semibold text-lg"
//           >
//             🌟 Let’s Do This!
//           </button>

//           {/* <div className="mt-6 flex justify-center">
//             <SendMailButtonWithEmailField
//               loading={loading}
//               setLoading={setLoading}
//               disabled={loading}
//             />
//           </div> */}
//         </form>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import SendMailButtonWithEmailField from "./button/SendMailButtonWithEmailField";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.error) {
        setMsg("Something went wrong. Please try again.");
      } else {
        setMsg(
          `Thank you ${formData.name}! 🌟 Your message has been received. We'll get back to you within 24 hours to discuss how we can help grow your business!`
        );
        setFormData({ name: "", email: "", phone: "", message: "" });

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
      className="modal fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl transition-colors"
          aria-label="Close modal"
        >
          &times;
        </button>

        <div className="text-center mb-6">
          <div className="text-4xl mb-4">💌</div>
          <h3 className="text-2xl font-bold gradient-text mb-2 handwriting">
            Let's Grow Together!
          </h3>
          {/* <p className="text-gray-600">
            Got an idea, a brand, or a dream project? We'd love to hear about it.
            Fill out the form & let's create something amazing.
          </p> */}
        </div>

        {/* Success/Error Message */}
        {msg && (
          <div
            className={`mb-4 p-4 rounded-2xl text-center ${
              msg.includes("Something went wrong")
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all disabled:opacity-50"
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
              className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all disabled:opacity-50"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              disabled={loading}
              className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all disabled:opacity-50"
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
              className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all disabled:opacity-50"
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
              className="w-full px-4 py-3 border border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all resize-none disabled:opacity-50"
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
