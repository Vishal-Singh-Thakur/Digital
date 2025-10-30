// import Link from 'next/link'
// import React, { useState } from 'react'
// import Ripples from 'react-ripples'

// function SendMailButtonWithEmailField({ loading, setLoading }) {
//   return (
//     <div>
//       <div className={`xs-mt-1 sm-mt-1`}>
//         {
//           loading ? <Ripples>
//             <button type="submit" className={`w-96 btn-primary bg-[#0885A6] text-white py-4 rounded-2xl font-semibold text-lg`} disabled>
//               <div className={`loader`}></div>Sending...</button>
//           </Ripples> : <Ripples>
//             <button type="submit" className={`w-96 bg-[#0885A6] hover:bg-[#800000] text-white py-4 rounded-2xl font-semibold text-lg`}>Let's Do This!</button>
//           </Ripples>
//         }
//       </div>
//     </div>
//   )
// }

// export default SendMailButtonWithEmailField;




import React from "react";
import Ripples from "react-ripples";

function SendMailButtonWithEmailField({ loading, setLoading }) {
  return (
    <div className="w-full">
      <div className="mt-2">
        {loading ? (
          <Ripples className="w-full">
            <button
              type="submit"
              className="w-full bg-[#0885A6] text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all disabled:opacity-70"
              disabled
            >
              <div className="loader inline-block"></div>
              Sending...
            </button>
          </Ripples>
        ) : (
          <Ripples className="w-full">
            <button
              type="submit"
              className="w-full bg-[#0885A6] hover:bg-[#800000] text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 active:scale-95"
            >
              Let's Do This!
            </button>
          </Ripples>
        )}
      </div>
    </div>
  );
}

export default SendMailButtonWithEmailField;
