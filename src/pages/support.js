import React, { useEffect } from "react";
import NavBar from "../components/Navbar.js";

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
    <div>
      <NavBar />
      <div>
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
      </div>
    </div>
  );
};

export default Support;
