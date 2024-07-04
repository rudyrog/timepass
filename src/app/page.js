import React from "react";
import Animation from "./Animation";
import News from "./News";

export default function page() {
  return (
    <div>
      <div className="relative container min-h-[60vh] mx-auto text-center p-5 flex items-center flex-col justify-center">
        <div className="text-7xl font-extrabold text-white">AajKal News</div>
        <div className="text-5xl font-extrabold w-2/3 text-indigo-400">
          Get the <span className="text-red-400">latest</span> news on your{" "}
          <span className="text-red-400">favourite topics </span> to{" "}
          <span className="text-orange-300">fast!</span>
        </div>
        <Animation />
      </div>
      <div className="container w-3/4 mx-auto">
        <News />
      </div>
    </div>
  );
}
