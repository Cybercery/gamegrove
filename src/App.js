// import "./index.css";
// import Navbar from "./components/Navbar";
// function App() {
//   return (
//     <div className="flex bg-[#181C24] h-screen w-screen gap-16 ">
//       <Navbar />
//     </div>
//   );
// }

// export default App;
// Filename - App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Genre from "./pages/genre";
import Support from "./pages/support";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
