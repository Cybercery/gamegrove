import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Img1 from "../images/Delete.svg";

const Cart = ({ cartItems, setCartItems }) => {
  const removeItem = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  var total = cartItems.length;

  var totalCost = total * 2999;

  const checkout = () => {
    alert("Checkout Successful");
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <NavBar />
      <div name="MainContainer">
        <div
          name="FirstContainer"
          className=" w-screen h-1/4 bg-[#181C24] p-10 pb-0"
        >
          <div className="lg:p-7">
            <div className="flex text-4xl font-mainFont pb-3 lg:text-6xl lg:justify-center">
              <p className=" text-white font-regular">Game</p>
              <p className=" font-regular text-[#0066FF]">Cart</p>
            </div>
            <div className=" text-white font-mainFont font-light text-[1rem] mt-1 pb-10 lg:text-xl">
              <p className="lg:text-center">
                Your gaming treasures await checkout. Adventure begins here!
              </p>
            </div>
          </div>
        </div>
        <div
          name="cart-container"
          className=" w-screen h-auto bg-[#0C0F1B] flex flex-col items-center"
        >
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div
                  name="Outer-box"
                  className=" h-[10rem] w-[23rem] bg-[#181C24] rounded-[1.5rem] my-5 flex items-center space-between gap-8 lg:w-[70rem]"
                >
                  <div
                    name="Inner-Image-box"
                    className=" w-[11rem] h-[8rem] bg-[#2C2E33] rounded-2xl ml-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full rounded-2xl bg-[#2C2E33]"
                    />
                  </div>
                  <div
                    name="Text-container"
                    className="flex flex-col font-mainFont font-light text-white lg:flex lg:flex-row lg:space-between lg:gap-[13rem] gap-[0.8rem] lg:text-2xl lg:pl-[3rem]"
                  >
                    <p className="w-[10rem] flex items-center">{item.name}</p>
                    <p className="text-[#05FF00] flex items-center">2999</p>
                    <p
                      className="flex items-center"
                      onClick={() => removeItem(index)}
                    >
                      <img src={Img1} alt="remove" className="w-[1.2rem]" />
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div
          name="Bottom-Div"
          className="bg-[#181C24] font-mainFont text-white h-[12rem] flex flex-col justify-cente space-between gap-5 pt-10 align-middle"
        >
          <p className="text-center text-xl">Cart Total: {totalCost}</p>
          <button
            className="border-[#0066FF] w-[12rem] h-[3.5rem] border-2 text-xl rounded-full py-2 px-3 self-center"
            onClick={checkout}
          >
            Checkout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
