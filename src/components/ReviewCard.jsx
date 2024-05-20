import React from "react";
import img1 from "../assets/motionarteffect-img2.png";
import stars from "../assets/motionarteffect-img4.png";

const ReviewCard = ({score,img}) => {
  return (
    <div className=" text-white rounded-lg p-4 shadow-lg w-64">
      <div className="flex items-center mb-4">
        <div className="w-18 h-18 bg-slate-800 rounded-full flex items-center justify-center">
          <img src={img} alt="" />
        </div>
        <div className="ml-4">
          <div className="flex items-center">
            <img src={stars} alt="icons" />
          </div>
          <div className="mt-1 text-gray-400 text-sm">{score}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
