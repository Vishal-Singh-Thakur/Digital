import React, { useState, useEffect } from "react";
import { FaCheckSquare } from "react-icons/fa";
import ReactConfetti from "react-confetti";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";

function Thankyou() {
  const Router = useRouter();
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    handleResize();
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => {
      Router.push("/");
    }, 5000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [Router]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-400 sm:min-w-sm lg:min-w-lg xl:min-w-xl">
        <ReactConfetti
          width={size.width}
          height={size.height}
          tweenDuration={1000}
        />
        <div className="py-48">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaCheckSquare
              color="#FCA5A5"
              className="h-16 w-16 mt-20 md:mt-20 lg:mt-16 xl:mt-2"
            />
          </div>
          <div className="font-bold text-center gradient-text py-4 text-lg md:text-lg lg:text-xl xl:text-3xl">
            Thank you for the request, we'll get back to you soon.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
