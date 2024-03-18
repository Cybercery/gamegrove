import React, { useEffect } from "react";
import NavBar from "../components/Navbar.js";
import CallUs from "../images/CallUs.svg";
import Mail from "../images/Mail.svg";
import Footer from "../components/Footer";

const Support = () => {
	useEffect(() => {
		const widgetScriptSrc = "https://tally.so/widgets/embed.js";

		const load = () => {
			if (typeof Tally !== "undefined") {
				Tally.loadEmbeds();
			} else {
				document
					.querySelectorAll("iframe[data-tally-src]:not([src])")
					.forEach((iframeEl) => {
						iframeEl.src = iframeEl.dataset.tallySrc;
					});
			}
		};

		if (typeof Tally !== "undefined") {
			load();
		} else {
			if (document.querySelector(`script[src="${widgetScriptSrc}"]`) === null) {
				const script = document.createElement("script");
				script.src = widgetScriptSrc;
				script.onload = load;
				script.onerror = load;
				document.body.appendChild(script);
			}
		}
	}, []);

	return (
		<div className=" bg-[#191919] w-full min-h-screen">
			<NavBar />
			<div className="">
				<iframe
					data-tally-src="https://tally.so/embed/mBkgpY?dynamicHeight=1"
					loading="lazy"
					width="100%"
					height="216"
					frameBorder={0}
					marginHeight={0}
					marginWidth={0}
					title="Newsletter subscribers"
				></iframe>
				{/* Remove the script tag from here */}
			</div>
			<Footer />
		</div>
	);
};

export default Support;
