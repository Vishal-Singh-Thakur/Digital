// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import SendMailButtonWithEmailField from "../components/button/SendMailButtonWithEmailField";

// export default function Footer() {
//   const [msg, setMsg] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().required("Email is required"),
//     phoneNo: Yup.string()
//       .required("Phone No. is required")
//       .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
//     companyName: Yup.string().required("Company Name is required"),
//   });

//   const formOptions = { resolver: yupResolver(validationSchema) };
//   const { register, handleSubmit, reset, formState } = useForm(formOptions);
//   const { errors } = formState;

//   const onSubmit = async (data) => {
//     setLoading(true);
//     const json = {
//       name: data?.name,
//       email: data?.email,
//       phoneNo: data?.phoneNo,
//       companyName: data?.companyName,
//       message: data?.message,
//     };

//     console.log("data ====== ", data);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(json),
//       });

//       console.log("res", res);

//       const result = await res.json();

//       console.log("result", result);

//       if (result.error) {
//         setMsg("Something went wrong");
//         return;
//       }

//       setMsg("Mail sent successfully");
//       window.location.href = "/thank-you";
//     } catch (error) {
//       console.error("Error:", error);
//       setMsg("Failed to send mail");
//     } finally {
//       setLoading(false);
//       reset();
//     }
//   };

//   return (
//     <div>
//       {/* <Head>
//         <script
//           async
//           src="https://www.googletagmanager.com/gtag/js?id=AW-806737296"
//         ></script>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'AW-806737296');
//             `,
//           }}
//         />
//       </Head> */}
//       <div className="p-4 tablet:p-12 laptop:p-[85px] my-12 laptopL: flex flex-col justify-between rounded-lg gap-8">
//         <div className="grid grid-cols-1 laptop:grid-cols-1 xl:grid-cols-2 gap-5 px-6">
//           <div className="px-4 md:px-10 lg:px-32 py-10 bg-opacity-10">
//             <h2
//               className="text-white font-bold text-3xl md:text-4xl text-center"
//               style={{ textShadow: "0 0 30px rgba(255, 255, 255, 0.4)" }}
//             >
//               Ready To Make Your Brand Unforgettable ?
//             </h2>

//             <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
//               <div className="text-sm">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   {...register("name")}
//                   className="p-2 border border-[#172554] rounded w-full"
//                 />
//                 <div className="text-red-500">{errors.name?.message}</div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="text-sm">
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     {...register("email")}
//                     className="p-2 border border-[#172554] rounded w-full"
//                   />
//                   <div className="text-red-500">{errors.email?.message}</div>
//                 </div>
//                 <div className="text-sm">
//                   <input
//                     type="tel"
//                     name="phoneNo"
//                     placeholder="Phone No."
//                     maxLength="10"
//                     {...register("phoneNo")}
//                     className="p-2 border border-[#172554] rounded w-full"
//                   />
//                   <div className="text-red-500">{errors.phoneNo?.message}</div>
//                 </div>
//               </div>
//               <div className="text-sm">
//                 <input
//                   type="text"
//                   name="companyName"
//                   placeholder="Company Name"
//                   {...register("companyName")}
//                   className="p-2 border border-[#172554] rounded w-full"
//                 />
//                 <div className="text-red-500">
//                   {errors.companyName?.message}
//                 </div>
//               </div>
//               <div className="text-sm">
//                 <textarea
//                   name="message"
//                   placeholder="Message"
//                   {...register("message")}
//                   className="p-2 border border-[#172554] rounded w-full"
//                   rows="4"
//                 />
//                 <div className="text-red-500">{errors.message?.message}</div>
//               </div>
//               <div className="mt-4 flex justify-center">
//                 <SendMailButtonWithEmailField
//                   loading={loading}
//                   setLoading={setLoading}
//                 />
//               </div>
//             </form>
//           </div>
//           <div className="laptop:ml-2 xl:ml-10">
//             <div className="text-lg md:text-2xl mb-4">
//               <span className="text-white sm:text-lg md:text-base lg:text-base">
//                 <div>
//                   <span
//                     className="font-extrabold "
//                     style={{
//                       textShadow: "0 0 30px rgba(255, 255, 255, 0.40)",
//                     }}
//                   >
//                     Address
//                   </span>
//                   <p>xyz</p>
//                   <br />
//                   {/* <iframe
//                     title="Google Maps Location"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.369273633921!2d77.1991304!3d28.5384262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce36b3edb3e55%3A0x8b848e25ec4cbb9b!2sHeadsup%20Corporation%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000"
//                     width="100%"
//                     height="300"
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   ></iframe> */}
//                   <br />
//                   <a href="tel:8383946401" className="font-bold">
//                     8383946401
//                   </a>{" "}
//                   |
//                   <a
//                     href="mailto:digitalsbydeeksha@gmail.com"
//                     className="text-blue-400 hover:underline"
//                   >
//                     {" "}
//                     digitalsbydeeksha@gmail.com
//                   </a>
//                 </div>
//               </span>
//             </div>
//             <span
//               className="text-lg md:text-xl text-white font-extrabold"
//               style={{ textShadow: "0 0 30px rgba(255, 255, 255, 0.40)" }}
//             >
//               Follow us
//             </span>

//             <div className="flex flex-row">
//               {/* Add Social Media Icon Automated In Blogs */}
//               <div className="relative flex cursor-pointer items-center">
//                 <div className="relative flex w-8 cursor-pointer items-center sm:w-10">
//                   <a
//                     href="https://www.linkedin.com/company/headsupcorporation/mycompany/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full flex items-center py-4 text-slate-600 focus:outline-none flex-wrap rounded px-1 font-normal dark:hover:bg-[#172554] hover:scale-150 transition-transform duration-300"
//                     role="menuitem"
//                   >
//                     {/* LinkedIn Icon */}
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="30"
//                       height="30"
//                       viewBox="0 0 48 48"
//                     >
//                       <path
//                         fill="#0078d4"
//                         d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
//                       ></path>
//                       <path
//                         fill="#fff"
//                         d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19c3.578,0,6.261,2.906,6.261,7.774L36,36z"
//                       ></path>
//                     </svg>
//                   </a>
//                 </div>
//                 <div
//                   aria-orientation="vertical"
//                   role="separator"
//                   className="mx-2 my-auto h-5 w-px bg-slate-200 dark:bg-slate-700"
//                 ></div>
//                 <a
//                   href="https://www.instagram.com/headsup_corporation/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full flex items-center py-3 text-slate-600 focus:outline-none flex-wrap rounded px-2 font-normal dark:hover:bg-[#172554] transition-transform duration-400 ease-in-out group"
//                   role="menuitem"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="23"
//                     height="23"
//                     viewBox="0 0 102 102"
//                     id="instagram"
//                     className="group-hover:scale-150 transition-transform duration-300 ease-in-out"
//                   >
//                     <defs>
//                       <radialGradient
//                         id="a"
//                         cx="6.601"
//                         cy="99.766"
//                         r="129.502"
//                         gradientUnits="userSpaceOnUse"
//                       >
//                         <stop offset=".09" stopColor="#fa8f21"></stop>
//                         <stop offset=".78" stopColor="#d82d7e"></stop>
//                       </radialGradient>
//                       <radialGradient
//                         id="b"
//                         cx="70.652"
//                         cy="96.49"
//                         r="113.963"
//                         gradientUnits="userSpaceOnUse"
//                       >
//                         <stop
//                           offset=".64"
//                           stopColor="#8c3aaa"
//                           stopOpacity="0"
//                         ></stop>
//                         <stop offset="1" stopColor="#8c3aaa"></stop>
//                       </radialGradient>
//                     </defs>
//                     <path
//                       fill="url(#a)"
//                       d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.31a19.179,19.179,0,0,1,4.654-7.155A19.18,19.18,0,0,1,14.311,2.5,34.341,34.341,0,0,1,25.865.361C32.423.058,34.389,0,51,0s18.578.058,25.14.361A34.523,34.523,0,0,1,87.694,2.5a19.167,19.167,0,0,1,7.155,4.654,19.168,19.168,0,0,1,4.653,7.155,34.341,34.341,0,0,1,2.136,11.552C101.939,32.423,102,34.389,102,51s-.061,18.578-.364,25.141A34.53,34.53,0,0,1,99.5,87.694a19.167,19.167,0,0,1-4.653,7.155,19.327,19.327,0,0,1-7.155,4.653,34.341,34.341,0,0,1-11.552,2.139C69.577,101.939,67.611,102,51,102S32.423,101.939,25.865,101.639Z"
//                     ></path>
//                     <path
//                       fill="url(#b)"
//                       d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.31a19.179,19.179,0,0,1,4.654-7.155A19.18,19.18,0,0,1,14.311,2.5,34.341,34.341,0,0,1,25.865.361C32.423.058,34.389,0,51,0s18.578.058,25.14.361A34.523,34.523,0,0,1,87.694,2.5a19.167,19.167,0,0,1,7.155,4.654,19.168,19.168,0,0,1,4.653,7.155,34.341,34.341,0,0,1,2.136,11.552C101.939,32.423,102,34.389,102,51s-.061,18.578-.364,25.141A34.53,34.53,0,0,1,99.5,87.694a19.167,19.167,0,0,1-4.653,7.155,19.327,19.327,0,0,1-7.155,4.653,34.341,34.341,0,0,1-11.552,2.139C69.577,101.939,67.611,102,51,102S32.423,101.939,25.865,101.639Z"
//                     ></path>
//                     <path
//                       fill="#fff"
//                       d="M51,24.756A26.244,26.244,0,1,0,77.244,51,26.244,26.244,0,0,0,51,24.756ZM51,68.8A17.8,17.8,0,1,1,68.8,51,17.8,17.8,0,0,1,51,68.8Zm16.827-40.1a6.123,6.123,0,1,0,6.123,6.123A6.123,6.123,0,0,0,67.827,28.7Z"
//                     ></path>
//                   </svg>
//                 </a>

//                 <div
//                   aria-orientation="vertical"
//                   role="separator"
//                   className="mx-2 my-auto h-5 w-px bg-[#172554] dark:bg-[#172554]"
//                 ></div>
//                 <a
//                   href="https://www.youtube.com/channel/UCJqirV3DzyrYolNBLXFx3Fg"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full flex items-center py-3 text-[#FF0000] focus:outline-none flex-wrap rounded px-2 font-normal hover:scale-125 transition-all duration-200 dark:hover:bg-[#172554]"
//                   role="menuitem"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     width="48px"
//                     height="48px"
//                   >
//                     <path
//                       fill="#FF0000"
//                       d="M21.8,8.001c-0.21-0.827-0.822-1.474-1.601-1.691C18.625,6,12,6,12,6s-6.625,0-8.199,0.309
//                         c-0.779,0.217-1.391,0.864-1.601,1.691C2,9.586,2,12,2,12s0,2.414,0.2,3.999c0.21,0.827,0.822,1.474,1.601,1.691
//                         C5.375,18,12,18,12,18s6.625,0,8.199-0.309c0.779-0.217,1.391-0.864,1.601-1.691C22,14.414,22,12,22,12S22,9.586,21.8,8.001z
//                         M9.991,14.555v-5.11L15.15,12L9.991,14.555z"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="text-white text-center px-6 md:px-8 lg:px-20 p-2">
//         ©Copyright 2025 by DigitalsByDee. All Rights Reserved.
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";

export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-10 h-10 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div> */}
              {/* <span className="text-2xl font-bold">Digitals by Dee 🌸</span> */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Image
                    src="/1.png" // Add your logo image to public folder as logo.png
                    alt="Digitals by Dee Logo"
                    width={300}
                    height={100}
                    className="h-24 w-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">Your growth, our passion.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-400 hover:text-pink-400 transition-colors block"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-400 hover:text-pink-400 transition-colors block"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-400 hover:text-pink-400 transition-colors block"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-400 hover:text-pink-400 transition-colors block"
              >
                Testimonials
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <a
                href="mailto:digitalsbydeeksha@gmail.com"
                className="text-blue-400 hover:underline block"
              >
                📩 digitalsbydeeksha@gmail.com
              </a>

              <a
                href="tel:+918383946401"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                📞 +91-8383946401
              </a>
              <div className="mt-4">
                <p className="text-md mt-2">Follow us</p>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.instagram.com/digitalsbydeee?igsh=Mm1menFpc2xsZGlo&utm_source=qr"
                    className="text-2xl hover:text-pink-400 transition-colors"
                    title="Instagram"
                    aria-label="Instagram"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      viewBox="0 0 102 102"
                      id="instagram"
                      className="group-hover:scale-150 transition-transform duration-300 ease-in-out"
                    >
                      <defs>
                        <radialGradient
                          id="a"
                          cx="6.601"
                          cy="99.766"
                          r="129.502"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".09" stopColor="#fa8f21"></stop>
                          <stop offset=".78" stopColor="#d82d7e"></stop>
                        </radialGradient>
                        <radialGradient
                          id="b"
                          cx="70.652"
                          cy="96.49"
                          r="113.963"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset=".64"
                            stopColor="#8c3aaa"
                            stopOpacity="0"
                          ></stop>
                          <stop offset="1" stopColor="#8c3aaa"></stop>
                        </radialGradient>
                      </defs>
                      <path
                        fill="url(#a)"
                        d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.31a19.179,19.179,0,0,1,4.654-7.155A19.18,19.18,0,0,1,14.311,2.5,34.341,34.341,0,0,1,25.865.361C32.423.058,34.389,0,51,0s18.578.058,25.14.361A34.523,34.523,0,0,1,87.694,2.5a19.167,19.167,0,0,1,7.155,4.654,19.168,19.168,0,0,1,4.653,7.155,34.341,34.341,0,0,1,2.136,11.552C101.939,32.423,102,34.389,102,51s-.061,18.578-.364,25.141A34.53,34.53,0,0,1,99.5,87.694a19.167,19.167,0,0,1-4.653,7.155,19.327,19.327,0,0,1-7.155,4.653,34.341,34.341,0,0,1-11.552,2.139C69.577,101.939,67.611,102,51,102S32.423,101.939,25.865,101.639Z"
                      ></path>
                      <path
                        fill="url(#b)"
                        d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.31a19.179,19.179,0,0,1,4.654-7.155A19.18,19.18,0,0,1,14.311,2.5,34.341,34.341,0,0,1,25.865.361C32.423.058,34.389,0,51,0s18.578.058,25.14.361A34.523,34.523,0,0,1,87.694,2.5a19.167,19.167,0,0,1,7.155,4.654,19.168,19.168,0,0,1,4.653,7.155,34.341,34.341,0,0,1,2.136,11.552C101.939,32.423,102,34.389,102,51s-.061,18.578-.364,25.141A34.53,34.53,0,0,1,99.5,87.694a19.167,19.167,0,0,1-4.653,7.155,19.327,19.327,0,0,1-7.155,4.653,34.341,34.341,0,0,1-11.552,2.139C69.577,101.939,67.611,102,51,102S32.423,101.939,25.865,101.639Z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M51,24.756A26.244,26.244,0,1,0,77.244,51,26.244,26.244,0,0,0,51,24.756ZM51,68.8A17.8,17.8,0,1,1,68.8,51,17.8,17.8,0,0,1,51,68.8Zm16.827-40.1a6.123,6.123,0,1,0,6.123,6.123A6.123,6.123,0,0,0,67.827,28.7Z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/digitals-by-dee/"
                    className="text-2xl hover:text-pink-400 transition-colors"
                    title="LinkedIn"
                    aria-label="LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0078d4"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19c3.578,0,6.261,2.906,6.261,7.774L36,36z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@digitalsbydee?si=NfEGcu68FqA1l4Ht"
                    className="text-2xl hover:text-pink-400 transition-colors"
                    title="youtube"
                    aria-label="youtube"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="48px"
                      height="48px"
                    >
                      <path
                        fill="#FF0000"
                        d="M21.8,8.001c-0.21-0.827-0.822-1.474-1.601-1.691C18.625,6,12,6,12,6s-6.625,0-8.199,0.309
                        c-0.779,0.217-1.391,0.864-1.601,1.691C2,9.586,2,12,2,12s0,2.414,0.2,3.999c0.21,0.827,0.822,1.474,1.601,1.691
                        C5.375,18,12,18,12,18s6.625,0,8.199-0.309c0.779-0.217,1.391-0.864,1.601-1.691C22,14.414,22,12,22,12S22,9.586,21.8,8.001z
                        M9.991,14.555v-5.11L15.15,12L9.991,14.555z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 text-center text-gray-400">
          <p>
            &copy; 2025 Digitals by Dee. Made with 💕 for amazing businesses
            like yours!
          </p>
        </div>
      </div>
    </footer>
  );
}
