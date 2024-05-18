import FluidSimulation from "./components/FluidSimulation";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" min-h-screen bg-gray-400">
      {/* FluidSimulation as background */}
      <div className="absolute inset-0">
        <FluidSimulation />
      </div>

      {/* {/* Connt */}
      <div className="relative z-10 ">
        
      <Navbar/>
      <Home/>
      </div> 
    </div>
  );
}

export default App;
