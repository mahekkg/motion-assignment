import React from "react";
import sectionImage from "../assets/motionarteffect-img10.png"; // Update the path if different
import pageImage from "../assets/motionarteffect-img11.png"; // Update the path if different

const UsageSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-6 mt-5 overflow-x-hidden">
      <h1 className="text-2xl md:text-4xl mb-10 text-center">
        Apply On Any Section Or Enable For Whole Page
      </h1>
      <div className="w-full flex justify-center">
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full px-4">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 w-full md:w-1/2 p-6 rounded-lg shadow-lg flex flex-col mt-8 md:mb-0">
            <h2 className="text-lg md:text-xl mb-4">Apply On Section</h2>
            <p className="text-sm md:text-base mb-4">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.
            </p>
            <img
              src={sectionImage}
              alt="Apply On Section"
              className="rounded"
            />
          </div>
          <div className="bg-gradient-to-b from-gray-900 to-slate-800 w-full md:w-1/2 p-6 rounded-lg shadow-lg flex mb-8 flex-col">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              Apply On Page
            </h2>
            <p className="text-sm md:text-base mb-4">
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.
            </p>
            <img src={pageImage} alt="Apply On Page" className="rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageSection;
