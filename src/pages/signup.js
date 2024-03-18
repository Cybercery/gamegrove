import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Img3 from "../images/carousal_images/img3.jpg";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // Set the input box border color to red
        document.getElementById("emailInput").style.borderColor = "red";
        document.getElementById("passwordInput").style.borderColor = "red";
        // Show the error message in a popup box
        alert(errorMessage);
      });
  };

  return (
    <>
      <img
        id="image"
        className="absolute z-0 w-screen h-screen object-cover"
        src={Img3}
      ></img>

      <div
        name="container"
        className="w-screen h-screen bg-slate-600 flex justify-center content-center relative text-white "
      >
        <div className="bg-transparent backdrop-blur-lg w-full lg:w-1/4 p-[2.5rem] border-[0.1rem] rounded-xl my-auto font-mainFont">
          <form action="" name="myForm" className="flex flex-col gap-[2rem]">
            <div className="text-[2.5rem]">
              <h1 className="text-center text-white pb-2  ">Sign Up</h1>
            </div>
            <div>
              <input
                type="email"
                label="Email address"
                id="emailInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
                className=" bg-transparent border-[0.1rem] border-[#757576] rounded-full h-[3rem] w-full placeholder:pl-[1.5rem] placeholder:text-[#E5E4E4]"
              ></input>
            </div>
            <div>
              <input
                type="password"
                id="passwordInput"
                label="Create password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className=" bg-transparent border-[0.1rem] border-[#757576] rounded-full h-[3rem] w-full placeholder:pl-[1.5rem] placeholder:text-[#E5E4E4]"
              ></input>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <button
                type="submit"
                onClick={onSubmit}
                className="bg-white text-black font-normal rounded-full h-[3rem] w-full"
              >
                Sign Up
              </button>
              <div className="flex flex-row justify-between text-sm font-light pt-3">
                Already have an account? <NavLink to="/">Sign in</NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
