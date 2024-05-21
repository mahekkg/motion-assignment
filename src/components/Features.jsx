import React from "react";
import thumbsup from "../assets/motionarteffect-img6.png";
import moon from "../assets/motionarteffect-img7.png";
import lightening from "../assets/motionarteffect-img9.png";
const features = [
  {
    img: thumbsup,
    title: "Light Weight",
    description: "Motion Art for Elementor is designed to be lightweight.",
  },
  {
    img: moon,
    title: "100% Responsive",
    description: "Create a consistent visual experience across all devices.",
  },
  {
    img: lightening,
    title: "User Friendly Interface",
    description:
      "Ensure a smooth experience for both applicants and administrators.",
  },
];

const Features = () => {
  return (
    <div className=" text-white w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold">
            An All-Round Plugin With Powerful Features
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Whether you’re a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <img src={feature.img} alt="img" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
