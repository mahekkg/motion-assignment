import FluidSimulation from "./components/FluidSimulation";

function App() {
  return (
    <div className=" min-h-screen bg-gray-400">
      {/* FluidSimulation as background */}
      <div className="absolute inset-0">
        <FluidSimulation />
      </div>

      {/* Content
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-4xl font-bold mb-8">Welcome to My Website</h1>
        <p className="text-lg">This is some content...</p>

        {/* Other components 
        <div className="bg-white p-4 rounded-lg shadow-lg mt-8 text-gray-800">
          {/* Your other components go here 
          <p>Other components can be placed here.</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
