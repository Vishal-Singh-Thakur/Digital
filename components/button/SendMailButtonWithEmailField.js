import React from "react";
import Ripples from "react-ripples";

function SendMailButtonWithEmailField({ loading }) {
  return (
    <div className="w-full">
      <div className="mt-2">
        <Ripples className="w-full">
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 active:scale-95 ${
              loading
                ? "bg-[#0885A6] text-white opacity-70 cursor-not-allowed"
                : "bg-[#0885A6] hover:bg-[#800000] text-white"
            }`}
          >
            {loading ? (
              <>
                <span className="loader inline-block mr-2"></span>
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>
        </Ripples>
      </div>
    </div>
  );
}

export default SendMailButtonWithEmailField;

