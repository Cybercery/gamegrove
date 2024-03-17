import React, { useState } from "react";

<div name="container" className="w-screen h-screen flex justify-center">
  <video
    autoplay
    muted
    src="Bg_video.mp4"
    id="bg_video"
    className="hidden lg:block"
  ></video>
  <img
    src="bg_image.jpg"
    alt="Not work sad"
    className="lg:hidden sm:block bg-contain bg-top bg-no-repeat"
    id="bg_image"
  />
  <div
    className="hidden md:hidden lg:block bg-transparent w-1/4 p-[2.5rem] border-[0.1rem] rounded-xl my-auto"
    style="backdrop-filter: blur(20px)"
  >
    <form action="" name="myForm" className="flex flex-col gap-[1.5rem]">
      <div className="text-[2.5rem]">
        <h1 className="text-center font-bold">Login</h1>
      </div>
      <div>
        <input
          type="text"
          name="input-box"
          id="email"
          placeholder="Username"
          className="bg-transparent border-[0.1rem] rounded-full h-[3rem] w-full placeholder:text-[#E5E4E4]"
          style="padding-left: 1.5rem"
        />
      </div>
      <div>
        <input
          type="password"
          name="input-box"
          id="password"
          placeholder="Password"
          className="bg-transparent border-[0.1rem] rounded-full h-[3rem] w-full placeholder:text-[#E5E4E4]"
          style="padding-left: 1.5rem"
        />
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <input type="checkbox" id="chkbox" />
          <label for="chkbox" className="text-sm font-light">
            Remember me
          </label>
        </div>
        <a
          href="https://fonts.google.com/specimen/Poppins"
          className="text-sm font-semibold"
        >
          <label for="">Forgot password?</label>
        </a>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <button
          onclick="validateForm(event)"
          className="bg-white text-black font-normal rounded-full h-[3rem] w-full"
          style="z-index: 1"
        >
          <h3 style="font-weight: 500">Login</h3>
        </button>
        <div className="flex flex-row justify-center text-sm font-light">
          <label for="Register">
            Don't have an account?
            <a
              href="https://fonts.google.com/specimen/Poppins"
              style="font-weight: 500"
            >
              Register
            </a>
          </label>
        </div>
      </div>
    </form>
  </div>
  // Mobile view
  <div
    className="md:hidden lg:hidden bg-transparent p-[2.5rem] border-[0.1rem] rounded-xl my-auto"
    style="backdrop-filter: blur(20px)"
  >
    <form action="" name="myForm" className="flex flex-col gap-[1.5rem]">
      <div className="text-[2.5rem]">
        <h4 className="text-center font-bold">Login</h4>
      </div>
      <div>
        <input
          type="text"
          name="input-box"
          id="email"
          placeholder="Username"
          className="bg-transparent border-[0.1rem] rounded-full h-[3rem] w-full placeholder:text-[#E5E4E4] placeholder:text-[0.9rem]"
          style="padding-left: 1.5rem"
        />
      </div>
      <div>
        <input
          type="password"
          name="input-box"
          id="password"
          placeholder="Password"
          className="bg-transparent border-[0.1rem] rounded-full h-[3rem] w-full placeholder:text-[#E5E4E4] placeholder:text-[0.9rem]"
          style="padding-left: 1.5rem"
        />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-between gap-3">
          <div>
            <input type="checkbox" id="chkbox" />
            <label for="chkbox" className="text-sm font-light">
              Remember me
            </label>
          </div>
          <a
            href="https://fonts.google.com/specimen/Poppins"
            className="text-sm font-semibold"
          >
            <label for="">Forgot password?</label>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <button
          onclick="validateForm(event)"
          className="bg-white text-black font-normal rounded-full h-[3rem] w-full"
          style="z-index: 1"
        >
          <h3 style="font-weight: 600" className="text-[1.1rem]">
            Login
          </h3>
        </button>
        <div className="flex flex-row justify-center text-sm font-light">
          <label for="Register">
            Don't have an account?
            <a
              href="https://fonts.google.com/specimen/Poppins"
              style="font-weight: 500"
            >
              Register
            </a>
          </label>
        </div>
      </div>
    </form>
  </div>
</div>;
