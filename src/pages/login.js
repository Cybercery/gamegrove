import React from "react";
import NavBar from "../components/Navbar.js";

const Login = () => {
	return (
		<div name="container" class="w-screen h-screen flex justify-center">
			<video
				autoplay
				muted
				src="Bg_video.mp4"
				id="bg_video"
				class="hidden lg:block"
			></video>
			<img
				src="bg_image.jpg"
				alt="Not work sad"
				class="lg:hidden sm:block bg-contain bg-top bg-no-repeat"
				id="bg_image"
			/>
			<div
				class="hidden md:hidden lg:block bg-transparent w-1/4 p-[2.5rem] border-[0.1rem] rounded-xl my-auto"
				style="backdrop-filter: blur(20px)"
			>
				<form action="" name="myForm" class="flex flex-col gap-[1.5rem]">
					<div class="text-[2.5rem]">
						<h1 class="text-center font-bold">Login</h1>
					</div>
					<div>
						<input
							type="text"
							name="input-box"
							id="email"
							placeholder="Username"
							class="bg-transparent border-[0.1rem] rounded-full h-[3rem] w-full placeholder:text-[#E5E4E4]"
							style="padding-left: 1.5rem"
						/>
					</div>
					<div>
						<input
							type="password"
							name="input-box"
							id="password"
							placeholder="Password"
							class="bg-transparent border-[0.1rem] rounded-full h-[3rem] w-full placeholder:text-[#E5E4E4]"
							style="padding-left: 1.5rem"
						/>
					</div>
					<div class="flex flex-row justify-between">
						<div>
							<input type="checkbox" id="chkbox" />
							<label for="chkbox" class="text-sm font-light">
								Remember me
							</label>
						</div>
						<a
							href="https://fonts.google.com/specimen/Poppins"
							class="text-sm font-semibold"
						>
							<label for="">Forgot password?</label>
						</a>
					</div>
					<div class="flex flex-col gap-[1rem]">
						<button
							onclick="validateForm(event)"
							class="bg-white text-black font-normal rounded-full h-[3rem] w-full"
							style="z-index: 1"
						>
							<h3 style="font-weight: 500">Login</h3>
						</button>
						<div class="flex flex-row justify-center text-sm font-light">
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

			<div
				class="md:hidden lg:hidden bg-transparent p-[2.5rem] border-[0.1rem] rounded-xl my-auto"
				style="backdrop-filter: blur(20px)"
			>
				<form action="" name="myForm" class="flex flex-col gap-[1.5rem]">
					<div class="text-[2.5rem]">
						<h4 class="text-center font-bold">Login</h4>
					</div>
					<div>
						<input
							type="text"
							name="input-box"
							id="email"
							placeholder="Username"
							class="bg-transparent border-[0.1rem] rounded-full h-[3rem] w-full placeholder:text-[#E5E4E4] placeholder:text-[0.9rem]"
							style="padding-left: 1.5rem"
						/>
					</div>
					<div>
						<input
							type="password"
							name="input-box"
							id="password"
							placeholder="Password"
							class="bg-transparent border-[0.1rem] rounded-full h-[3rem] w-full placeholder:text-[#E5E4E4] placeholder:text-[0.9rem]"
							style="padding-left: 1.5rem"
						/>
					</div>
					<div class="flex justify-center">
						<div class="flex flex-col justify-between gap-3">
							<div>
								<input type="checkbox" id="chkbox" />
								<label for="chkbox" class="text-sm font-light">
									Remember me
								</label>
							</div>
							<a
								href="https://fonts.google.com/specimen/Poppins"
								class="text-sm font-semibold"
							>
								<label for="">Forgot password?</label>
							</a>
						</div>
					</div>
					<div class="flex flex-col gap-[1rem]">
						<button
							onclick="validateForm(event)"
							class="bg-white text-black font-normal rounded-full h-[3rem] w-full"
							style="z-index: 1"
						>
							<h3 style="font-weight: 600" class="text-[1.1rem]">
								Login
							</h3>
						</button>
						<div class="flex flex-row justify-center text-sm font-light">
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
		</div>
	);
};

export default Login;
