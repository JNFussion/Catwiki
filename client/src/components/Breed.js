import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Points from "./Points";

function Breed() {
  const [breed, setBreed] = useState();
  const [images, setImages] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/breed/${id}`).then((response) => {
      response.json().then((data) => setBreed(data));
    });
    return () => {};
  }, []);
  useEffect(() => {
    if (breed) {
      fetch(`/breed/${breed.id}/images`).then((response) => {
        response.json().then((data) => setImages(data));
      });
    }
    return () => {};
  }, [breed]);

  if (breed) {
    return (
      <article className="max-w-[1440px] mx-auto">
        <section className="flex flex-wrap justify-between md:px-36 px-4">
          <div className="relative md:w-96 md:h-96 w-64 h-64 mx-auto overflow-hidden rounded-3xl">
            <img
              src={breed.image}
              alt={breed.name}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <section className="max-w-[600px]">
            <header>
              <h1 className="font-semibold text-4xl my-4 xl:my-0">
                {breed.name}
              </h1>
              <p className="md:text-lg my-8">{breed.description}</p>
            </header>
            <ul className="grid gap-8">
              <li className="flex flex-wrap">
                <span className="text-black font-bold mr-2">Temperament:</span>
                <span>{breed.temperament}</span>
              </li>
              <li>
                <span className="text-black font-bold mr-2">Origin:</span>
                <span>{breed.origin}</span>
              </li>
              <li>
                <span className="text-black font-bold mr-2">Life span:</span>
                <span>{breed.life_span} years</span>
              </li>
              <li className="flex flex-wrap gap-2 items-center justify-between">
                <span className=" text-black font-bold">Adaptability:</span>
                <Points points={breed.adaptability} />
              </li>
              <li className="flex flex-wrap gap-2 items-center justify-between">
                <span className="text-black font-bold">Affection level:</span>
                <Points points={breed.affection_level} />
              </li>
              <li className="flex flex-wrap gap-2 items-center justify-between">
                <span className="text-black font-bold">Child Friendly:</span>
                <Points points={breed.child_friendly} />
              </li>
              <li className="flex flex-wrap gap-2 items-center justify-between">
                <span className="text-black font-bold">Grooming:</span>
                <Points points={breed.grooming} />
              </li>
              <li className="flex flex-wrap gap-2 items-center justify-between">
                <span className="text-black font-bold">Intelligence:</span>
                <Points points={breed.intelligence} />
              </li>
              <li className="flex flex-wrap gap-2 items-center justify-between">
                <span className=" text-black font-bold">Health issues:</span>
                <Points points={breed.health_issues} />
              </li>
              <li className="flex flex-wrap gap-2 items-center justify-between">
                <span className="text-black font-bold">Social needs:</span>
                <Points points={breed.social_needs} />
              </li>
              <li className="flex flex-wrap gap-2 items-center justify-between">
                <span className="text-black font-bold">Stranger friendly:</span>
                <Points points={breed.stranger_friendly} />
              </li>
            </ul>
          </section>
        </section>
        <section className="my-20 mx-10">
          <h2 className="md:text-4xl text-2xl font-semibold">Other photos</h2>
          <div className="grid grid-cols-auto gap-11 my-10 justify-center">
            {images ? (
              images.map((url) => (
                <div className="relative w-64 h-64 overflow-hidden rounded-3xl">
                  <img
                    src={url}
                    alt={breed.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))
            ) : (
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
            )}
          </div>
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

export default Breed;
