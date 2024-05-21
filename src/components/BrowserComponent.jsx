import browser from "../assets/motionarteffect-img8.png";

const BrowserComponent = () => {
  return (
    <>
      <div className="  bg-slate-900 rounded-2xl flex flex-col text-center justify-center align-middle text-white mx-4 lg:mx-48 mt-16 mb-10">
        <h2 className="mt-5 font-medium pt-5">
          Supported by All Popular Browsers
        </h2>
        <p className="font-thin">
          Rest assured, Motion Art is designed to be compatible with all major
          web browsers.
        </p>
        <img
          src={browser}
          className="w-[25rem]  mx-[36%] my-5 pb-5"
          alt="broswerlist"
        />
      </div>
    </>
  );
};

export default BrowserComponent;
