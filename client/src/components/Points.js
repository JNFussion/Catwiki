/* eslint-disable arrow-body-style */
import React from "react";

// eslint-disable-next-line react/prop-types
function Points({ points }) {
  return (
    <div className="max-w-[466px] flex gap-2 justify-evenly">
      {Array.from(new Array(5)).map((val, index) => {
        return (
          <div
            className={`md:w-14 w-10 h-3 rounded-lg ${
              points > index ? "bg-point-filled" : "bg-point-empty"
            }`}
          />
        );
      })}
    </div>
  );
}

export default Points;
