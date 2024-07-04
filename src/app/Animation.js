import React from "react";

export default function Animation() {
  return (
    <div className="opacity-25">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className={`absolute animation-${index}`}></div>
      ))}
    </div>
  );
}
