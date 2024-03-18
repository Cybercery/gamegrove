import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import BgVideo from "../images/Bg_video.mp4";
import Img3 from "../images/carousal_images/img3.jpg";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLogin = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				navigate("/home");
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
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
					<form action="" name="myForm" className="flex flex-col gap-[1.5rem]">
						<div className="text-[2.5rem]">
							<h1 className="text-center text-white pb-2  ">Login</h1>
						</div>
						<div>
							<input
								type="email-address"
								name="email"
								id="email"
								placeholder="   Email address"
								onChange={(e) => setEmail(e.target.value)}
								className=" bg-transparent border-[0.1rem] border-[#757576] rounded-full h-[3rem] w-full placeholder:pl-[1.5rem] placeholder:text-[#E5E4E4]"
							></input>
						</div>
						<div>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
								required
								className=" bg-transparent border-[0.1rem] border-[#757576] rounded-full h-[3rem] w-full placeholder:pl-[1.5rem] placeholder:text-[#E5E4E4]"
							></input>
						</div>
						<div className="flex flex-row justify-between">
							<div>
								<input type="checkbox" name="" id="chkbox"></input>
								<label for="chkbox" className=" text-sm font-light">
									&#160; Remember me
								</label>
							</div>
							<a
								href="https://fonts.google.com/specimen/Poppins"
								className=" text-sm font-light"
							>
								<label for="">Forgot password?</label>
							</a>
						</div>
						<div className="flex flex-col gap-[1rem]">
							<button
								onClick={onLogin}
								className="bg-white text-black font-normal rounded-full h-[3rem] w-full"
							>
								Login
							</button>
							<div className="flex flex-row justify-between text-sm font-light pt-3">
								<label for="Register">Don't have an account? </label>
								<NavLink to="/signup">Sign up</NavLink>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
