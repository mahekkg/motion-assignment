import FluidSimulation from "./components/FluidSimulation";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Review from "./components/Review";

function App() {
  return (
    <div className=" h-vh bg-gray-400 overflow-auto">
      {/* FluidSimulation as background */}
      <div className="absolute inset-0">
        <FluidSimulation />
      </div>

      {/* {/* Connt */}
      <div className="relative z-10 ">
        <Navbar />
        <Home />
        <Review />
      </div>
    </div>
  );
}

export default App;
