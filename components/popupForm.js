// "use client";

// import { useEffect, useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import { useRouter } from "next/navigation";
// import SendMailButtonWithEmailField from "./button/SendMailButtonWithEmailField";
// import Script from "next/script";
// import Head from "next/head";
// export default function PopupForm() {
//   const [isOpen, setIsOpen] = useState(true);
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const [msg, setMsg] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     phoneNo: Yup.string()
//       .required("Phone No. is required")
//       .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
//     companyName: Yup.string().required("Company Name is required"),
//     message: Yup.string().required("Message is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + window.innerHeight;
//       const pageHeight = document.documentElement.scrollHeight;

//       if (scrollPosition >= pageHeight / 2 && !hasScrolled) {
//         setIsOpen(true);
//         setHasScrolled(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [hasScrolled]);

//   const onSubmit = async (data) => {
//     setLoading(true);
//     try {
//       const res = await fetch("/api/popup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
//       const result = await res.json();

//       if (result.error) {
//         setMsg("Something went wrong");
//       } else {
//         setMsg("Mail sent successfully");
//         router.push("/thank-you");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setMsg("Failed to send mail");
//     } finally {
//       setLoading(false);
//       reset();
//     }
//   };

//   if (!isOpen) return null;

//   return (


//       <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 pt-32">
//         <div className="bg-white p-4 rounded-lg shadow-lg w-96 relative">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-2 right-2 text-[#242C6D] hover:text-[#242C6D]"
//           >
//             <IoMdClose size={20} />
//           </button>
//           <p className="text-red-600">
//               * Before filling this form, please note: This is not for
//               individual job applicants this is for businesses. *
//             </p>
//           <h2 className="text-lg font-semibold mb-3 text-center text-[#242C6D]">
//             Get In Touch With Us
//           </h2>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="grid grid-cols-2 gap-4">
//             <div className="mb-2">
//               <label className="block text-sm font-medium">Name</label>
//               <input
//                 type="text"
//                 {...register("name")}
//                 className="w-full border border-gray-300 p-1 rounded"
//                 placeholder="Enter your Name"
//               />
//               <p className="text-red-500 text-sm">{errors.name?.message}</p>
//             </div>
//             <div className="mb-2">
//               <label className="block text-sm font-medium">Email</label>
//               <input
//                 type="email"
//                 {...register("email")}
//                 className="w-full border border-gray-300 p-1 rounded"
//                 placeholder="Enter your Email"
//               />
//               <p className="text-red-500 text-sm">{errors.email?.message}</p>
//             </div>
//             </div>
//              <div className="grid grid-cols-2 gap-4">
//             <div className="mb-2">
//               <label className="block text-sm font-medium">Phone No.</label>
//               <input
//                 type="tel"
//                 {...register("phoneNo")}
//                 className="w-full border border-gray-300 p-1 rounded"
//                 placeholder="Enter your Phone number"
//               />
//               <p className="text-red-500 text-sm">{errors.phoneNo?.message}</p>
//             </div>
//             <div className="mb-2">
//               <label className="block text-sm font-medium">Organisation Name</label>
//               <input
//                 type="text"
//                 {...register("companyName")}
//                 className="w-full border border-gray-300 p-1 rounded"
//                 placeholder="Enter your Organisation name"
//               />
//               <p className="text-red-500 text-sm">{errors.companyName?.message}</p>
//             </div>
//             </div>
//             <div className="mb-2">
//               <label className="block text-sm font-medium">Message</label>
//               <textarea
//                 {...register("message")}
//                 className="w-full border border-gray-300 p-1 rounded"
//                 placeholder="Enter your Message"
//                 rows="3"
//               ></textarea>
//               <p className="text-red-500 text-sm">{errors.message?.message}</p>
//             </div>
//             <div className="mt-4 flex justify-center">
//               <SendMailButtonWithEmailField loading={loading} setLoading={setLoading} />
//             </div>
//           </form>
//         </div>
//       </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import SendMailButtonWithEmailField from "./button/SendMailButtonWithEmailField";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(true); // Initially true - popup opens immediately
  const [hasScrolled, setHasScrolled] = useState(false);
  const [popupTriggered, setPopupTriggered] = useState(false);
  const [initialPopupClosed, setInitialPopupClosed] = useState(false);
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNo: Yup.string()
      .required("Phone No. is required")
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    companyName: Yup.string().required("Company Name is required"),
    message: Yup.string().required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Scroll-triggered popup logic (only after initial popup is closed)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // Check if user has scrolled 50% and popup hasn't been triggered yet
      // Only trigger if initial popup was closed
      if (scrollPosition >= pageHeight / 2 && !popupTriggered && initialPopupClosed) {
        setIsOpen(true);
        setPopupTriggered(true);
        setHasScrolled(true);
      }
    };

    // Only add event listener if popup hasn't been triggered and initial popup was closed
    if (!popupTriggered && initialPopupClosed) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [popupTriggered, initialPopupClosed]);

  const onSubmit = async (data) => {
    setLoading(true);
    setMsg(null); // Clear previous messages
    
    try {
      const res = await fetch("/api/popup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const result = await res.json();

      if (result.error) {
        setMsg("Something went wrong");
      } else {
        setMsg("Mail sent successfully");
        
      // Proper conversion call
      // if (typeof window !== "undefined" && window.gtag) {
      //   window.gtag("event", "conversion", {
      //     send_to: "AW-806737296/LkhECKL4y6saEJCr14AD",
      //   });
      //   console.log("Conversion fired in onSubmit");
      // }
        reset();
        setTimeout(() => {
          router.push("/thank-you");
        }, 1000);
      }
    } catch (error) {
      console.error("Error:", error);
      setMsg("Failed to send mail");
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => {
    setIsOpen(false);
    setMsg(null); // Clear messages when closing
    
    // If this is the first time closing, mark initial popup as closed
    if (!initialPopupClosed) {
      setInitialPopupClosed(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white p-6 pt-12 rounded-lg shadow-lg w-full max-w-md relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-[#242C6D] transition-colors"
          aria-label="Close popup"
        >
          <IoMdClose size={24} className="border bottom-5" />
        </button>

        {/* Warning Message */}
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600 text-sm font-medium">
            * Before filling this form, please note: This is not for
            individual job applicants this is for businesses. *
          </p>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4 text-center text-[#242C6D]">
          Get In Touch With Us
        </h2>

        {/* Success/Error Message */}
        {msg && (
          <div className={`mb-4 p-3 rounded-md ${
            msg.includes("successfully") 
              ? "bg-green-50 border border-green-200 text-green-600" 
              : "bg-red-50 border border-red-200 text-red-600"
          }`}>
            <p className="text-sm font-medium">{msg}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("name")}
                className={`w-full border text-sm ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#242C6D] focus:border-transparent`}
                placeholder="Enter your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email")}
                className={`w-full border text-sm ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#242C6D] focus:border-transparent`}
                placeholder="Enter your Email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Phone and Company Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone No. <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                {...register("phoneNo")}
                className={`w-full border text-xs ${
                  errors.phoneNo ? "border-red-500" : "border-gray-300"
                } p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#242C6D] focus:border-transparent`}
                placeholder="Phone number"
              />
              {errors.phoneNo && (
                <p className="text-red-500 text-xs mt-1">{errors.phoneNo.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Organisation Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("companyName")}
                className={`w-full border text-xs ${
                  errors.companyName ? "border-red-500" : "border-gray-300"
                } p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#242C6D] focus:border-transparent`}
                placeholder="Organisation name"
              />
              {errors.companyName && (
                <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("message")}
              rows={4}
              className={`w-full border text-sm ${
                errors.message ? "border-red-500" : "border-gray-300"
              } p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#242C6D] focus:border-transparent resize-none`}
              placeholder="Enter your Message"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <SendMailButtonWithEmailField 
              loading={loading} 
              setLoading={setLoading}
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
