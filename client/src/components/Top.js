/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import TopItem from "./TopItem";

function Top() {
  const [top, setTop] = useState([]);

  useEffect(() => {
    fetch("/breeds/top").then((response) => {
      response.json().then((data) => setTop(data));
    });

    return () => {};
  }, []);

  return (
    <article className="max-w-[1440px] mx-auto md:px-24 px-12">
      <h2 className="md:text-4xl text-2xl font-bold">
        Top 10 most searched breeds
      </h2>
      <div className="my-14">
        {top.map((breed, index) => (
          <TopItem breedName={breed._id} index={index + 1} />
        ))}
      </div>
    </article>
  );
}

export default Top;
