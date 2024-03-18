import React from "react";
import NavBar from "../components/Navbar";
const Cart = () => {
  return (
    <>
      <NavBar />
      <div className="bg-[#181C24]">
        <div className="text-white  text-[4rem] my-20">
          <div className="flex mx-20 text-[5rem]">
            <p className=" font-medium">Game</p>
            <p className=" font-medium text-[#0066FF]">Cart</p>
          </div>
          <div className=" text-white text-[2rem] mt-10 pb-20">
            <p className="mx-20 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              ea!
            </p>
          </div>
          <div name="cart-container" className="bg-[#0C0F1B] pt-2">
            <div className="w-screen h-[30vh] lg:h-[25rem] bg-[#181C24] mt-10 flex flex-col lg:flex-row space-between lg:justify-end py-[4.5rem] lg:items-center pl-20 pb-20 rounded-[4rem]">
              <div className="w-[25rem] h-[20rem] lg:h-[15rem] rounded-3xl bg-gray-400 "></div>
              <div className="w-[25rem] lg:w-full h-[20rem] lg:flex lg:space-between lg:gap-[30rem] items-center lg:pl-[20rem]">
                <p className="text-white text-[2.5rem] mt-8">Game Name</p>
                <p className="text-white text-[2.5rem] mt-8">Xxxx$</p>
                <div className="bg-red-600 w-[3rem] h-[3rem] mt-8"></div>
              </div>
            </div>
          </div>

          <div className="w-screen h-[15vh] bg-[#181C24] lg:pl-[5rem] pt-[3rem] flex flex-col lg:flex-row space-between gap-[3rem] items-center">
            <p className="text-[#05FF00] text-[3rem] lg:text-[2.5rem] mt-8">
              Card Total : Xxxx$
            </p>
            <p className="hidden lg:block text-[#5F6165]">
              -------------------------------------------
            </p>
            <buton className=" px-[10rem] lg:px-0 py-[2rem] lg:py-[1.5rem] w-[40rem] h-[10rem] lg:w-[30rem] lg:h-[8rem]  bg-transparent text-center border-[#0066FF] border-[0.6rem] rounded-full">
              <p className="text-[3.5rem] lg:text-[2.5rem]">Checkout</p>
            </buton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
