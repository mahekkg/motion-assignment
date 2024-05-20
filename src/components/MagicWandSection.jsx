import React from "react";
import magicwand from "../assets/motionarteffect-img5.png";

const MagicWandSection = () => {
  return (
    <section className="text-white py-16 px-8 md:px-16 lg:px-32 flex flex-col lg:flex-row gap-10 lg:gap-26  mt-5">
      <div className="lg:w-5/6 ">
        <h1 className="text-4xl md:text-5xl my-6 leading-8">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h1>
        <p className="max-w-2xl mb-8 leading-8">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <a
          href="https://envato.com"
          className="bg-gradient-to-r from-[#eb4034] via-[#eb4034] via-10% to-[#5E11FF] to-100% text-white py-3 px-6 rounded-2xl text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform"
        >
          Purchase From Envato →
        </a>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-1/6 flex justify-center lg:justify-end">
        <img src={magicwand} alt="Magic Wand" className="w-30 h-30 lg:w-auto" />
      </div>
    </section>
  );
};

export default MagicWandSection;
