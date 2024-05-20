import ReviewCard from "./ReviewCard";
import img1 from "../assets/motionarteffect-img1.png";
import img2 from "../assets/motionarteffect-img2.png";
import img3 from "../assets/motionarteffect-img3.png";

const Review = () => {
  return (
    <>
      <div className="flex justify-center  mt-[10rem]">
        <p className="text-gray-300 text-xl">
          Trusted by thousands of users around the world
        </p>
      </div>
      <div className="mt-10 px-10 flex justify-between ">
        <ReviewCard img={img1} score={"4.5 Score, 9 Reviews"} />
        <ReviewCard img={img2} score={"4.5 Score, 9 Reviews"} />
        <ReviewCard img={img3} score={"4.5 Score, 9 Reviews"} />
      </div>
    </>
  );
};

export default Review;
