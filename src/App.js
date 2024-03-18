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
import Support from "./pages/support";
import Catalogue from "./pages/catalogue";
import Genres from "./pages/genres";
import Gamepg from "./pages/game";
import Cart from "./pages/cart";
import Login from "./pages/login";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalogue/:slug" element={<Catalogue />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/support" element={<Support />} />
        <Route path="/game/:slug" element={<Gamepg />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </Router>
  );
}

export default App;
