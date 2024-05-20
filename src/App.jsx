import BrowserComponent from "./components/BrowserComponent";
import FluidSimulation from "./components/FluidSimulation";
import Home from "./components/Home";
import MagicWandSection from "./components/MagicWandSection";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import UsageSection from "./components/Usage";

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
        <MagicWandSection />
        <UsageSection />
        <BrowserComponent />
      </div>
    </div>
  );
}

export default App;
