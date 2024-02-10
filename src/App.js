import "./index.css";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div >
      <div className="hidden lg:flex w-screen h-screen bg-[#181C24]">
        <Sidebar />
      </div>
      <div className="lg:hidden">

      </div>
    </div>
  );
}

export default App;
