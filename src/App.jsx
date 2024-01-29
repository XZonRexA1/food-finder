import LeftSidebar from "./components/LeftSidebar";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <div className="w-full mx-auto px-4 sm:px-6 bg-gray-100">
        <Navbar />
      </div>
      <LeftSidebar />
    </>
  );
}

export default App;
