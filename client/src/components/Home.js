import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdSearch, MdArrowRightAlt } from "react-icons/md";
import Logo from "../assets/images/CatwikiLogoWhite.svg";
import Catimg from "../assets/images/image 1.png";
import Catimg2 from "../assets/images/image 2.png";
import Catimg3 from "../assets/images/image 3.png";
import BreedTile from "./BreedTile";

function Home() {
  const [names, setNames] = useState([]);
  const [searchedBreedsNames, setSearchedBreedsNames] = useState([]);
  const [term, setTerm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/breeds/top", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ term }),
    }).then((response) =>
      response.json().then((data) => {
        if (data.url) {
          navigate(`${data.url}`);
        }
        if (data.error) {
          setError(data.error);
        }
      })
    );
  }

  useEffect(() => {
    fetch("/breeds/names").then((response) => {
      response.json().then((data) => setNames(data));
    });
    fetch("/breeds/top").then((response) => {
      response.json().then((data) => setSearchedBreedsNames(data));
    });
    return () => {};
  }, []);

  return (
    <article className="max-w-[1440px] xl:mx-auto mx-4">
      <section className="h-[600px] py-16 px-8  xl:py-32 xl:px-20 rounded-t-xl bg-hero-sm md:bg-hero-md lg:bg-hero-lg bg-cover">
        <header className="max-w-sm">
          <h1>
            <img src={Logo} alt="logo" className="xl:h-[88px] h-[44px]" />
          </h1>
          <p className="xl:text-2xl text-white">
            Get to know more about your cat breed
          </p>
        </header>
        <form onSubmit={handleSubmit} className="my-10 max-w-sm">
          <div className="py-6 px-7 flex items-center rounded-full  bg-white ">
            <input
              type="search"
              name="term"
              id="term"
              list="breeds-names"
              required
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="w-full flex-1 py-1 border-b border-solid text-lg  focus:border-b-slate-900 focus:outline-none"
            />
            <datalist id="breeds-names">
              {names.map((name) => (
                <option key={name} value={name} />
              ))}
            </datalist>
            <button type="submit">
              <MdSearch className="text-2xl m-1" />
            </button>
          </div>
          <p className="px-10 py-2 text-red-600">{error}</p>
        </form>
      </section>
      <section className="xl:px-28 xl:py-20 px-14 py-10 rounded-b-xl bg-hero">
        <header>
          <div>
            <h2 className="xl:text-xl text-xs has-square">
              Most Searched Breeds
            </h2>
          </div>
          <p className="xl:text-5xl text-lg text-center my-11 font-bold">
            66+ Breeds For you to discover
          </p>
        </header>
        <div>
          <div className="flex justify-end my-14">
            <Link
              to="/breeds/top"
              className="ml-auto flex gap-2 items-center opacity-60 hover:opacity-100"
            >
              <span>See More</span>
              <span>
                <MdArrowRightAlt />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap justify-evenly">
            {searchedBreedsNames.map((breed) => (
              // eslint-disable-next-line no-underscore-dangle
              <BreedTile breedName={breed._id} />
            ))}
          </div>
        </div>
      </section>
      <section className="md:flex gap-11 xl:p-24 py-16">
        <header className="flex-1">
          <h2 className="relative font-bold text-5xl has-square has-square-top">
            Why should you have a cat?
          </h2>
          <p className="text-lg my-11">
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </p>
          <a
            href="https://animalkind.org/blog/top-5-reasons-cat/"
            target="_blank"
            className="flex items-center gap-2 opacity-60 hover:opacity-100"
            rel="noreferrer"
          >
            <span>READ MORE</span>
            <span>
              <MdArrowRightAlt />
            </span>
          </a>
        </header>
        <div className="flex-1 grid grid-rows-3 grid-cols-4 gap-7">
          <img src={Catimg2} alt="cat" className="col-span-2 row-span-1" />
          <img src={Catimg} alt="cat" className="col-start-2 row-span-2" />
          <img
            src={Catimg3}
            alt="cat"
            className="col-span-2 col-start-3 row-start-1 row-span-3"
          />
        </div>
      </section>
    </article>
  );
}
export default Home;
