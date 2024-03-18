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
import { useState, useEffect } from "react";
import Home from "./pages";
import About from "./pages/about";
import Support from "./pages/support";
import Catalogue from "./pages/catalogue";
import Genres from "./pages/genres";
import Gamepg from "./pages/game";
import Cart from "./pages/cart";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import TreandingPg from "./pages/trendingpg";
import GOTTpg from "./pages/gotypg";
import TopRatedPg from "./pages/Topratedpg";
import GrossingPg from "./pages/grossingpg";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage when the component mounts
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

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
        <Route
          path="/game/:slug"
          element={<Gamepg setCartItems={setCartItems} cartItems={cartItems} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/trending" element={<TreandingPg />} />
        <Route path="/toprated" element={<TopRatedPg />} />
        <Route path="/grossing" element={<GrossingPg />} />
        <Route path="/GOTY" element={<GOTTpg />} />
      </Routes>
    </Router>
  );
}

export default App;
