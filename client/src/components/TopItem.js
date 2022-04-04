import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function TopItem({ breedName, index }) {
  const [breed, setBreed] = useState();

  useEffect(() => {
    if (breedName) {
      fetch(`/breed/${breedName}`).then((response) => {
        response.json().then((data) => setBreed(data));
      });
    }
    return () => {};
  }, []);

  if (breed) {
    return (
      <article className="my-14 flex flex-wrap gap-12">
        <section>
          <div className="relative w-44 h-44 overflow-hidden rounded-3xl">
            <Link to={`/breed/${breed.name}`}>
              <img
                src={breed.image}
                alt={breed.name}
                className="h-full w-full object-cover object-center"
              />
            </Link>
          </div>
        </section>
        <section>
          <h2 className="my-5 md:text-4xl text-lg font-semibold">
            <Link to={`/breed/${breed.name}`}>
              {index}. {breedName}
            </Link>
          </h2>
          <p>{breed.description}</p>
        </section>
      </article>
    );
  }

  return (
    <article className="w-56 h-56 grid place-content-center border border-gray-400 rounded-3xl">
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </article>
  );
}

export default TopItem;
