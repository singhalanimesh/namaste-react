import React from "react";

const Shimmer = () => {
  const words = [
    "Loading",
    "Loading",
    "Loading",
    "Loading",
    "Loading",
    "Loading",
    "Loading",
    "Loading",
    "Loading",
  ];

  return (
    <div className="pt-36 h-screen shimmer-container flex flex-wrap  bg-[#ffffee]">
      {words.map((display, index) => (
        <div
          key={index}
          className="shimmer-card m-4 p-4 w-[250px] h-[400px] rounded-lg bg-[#f0f0f0]"
        >
          {display}
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
