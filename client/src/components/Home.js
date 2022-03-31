import React from "react";
import { Link } from "react-router-dom";
import { MdSearch, MdArrowRightAlt } from "react-icons/md";
import Logo from "../assets/images/CatwikiLogoWhite.svg";
import Catimg from "../assets/images/image 1.png";
import Catimg2 from "../assets/images/image 2.png";
import Catimg3 from "../assets/images/image 3.png";

function Home() {
  return (
    <article className="max-w-[1440px] mx-auto">
      <section className="h-[600px] py-32 px-20 rounded-t-xl bg-hero-sm md:bg-hero-md lg:bg-hero-lg bg-cover">
        <header className="max-w-sm">
          <h1>
            <img src={Logo} alt="logo" className="h-[88px]" />
          </h1>
          <p className="text-2xl text-white">
            Get to know more about your cat breed
          </p>
        </header>
        <form action="" className="my-10 max-w-sm">
          <div className="py-6 px-7 flex items-center rounded-full  bg-white ">
            <input
              type="search"
              name="term"
              id="term"
              className="flex-1 py-1 border-b border-solid text-lg  focus:border-b-slate-900 focus:outline-none"
            />
            <button type="submit">
              <MdSearch className="text-2xl m-1" />
            </button>
          </div>
        </form>
      </section>
      <section className="px-28 py-20 rounded-b-xl bg-hero">
        <header>
          <div>
            <h2 className="text-xl has-square">Most Searched Breeds</h2>
          </div>
          <p className="text-5xl my-11 font-bold">
            66+ Breeds For you to discover
          </p>
        </header>
        <div>
          <div className="flex justify-end">
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
          <div>CATS</div>
        </div>
      </section>
      <section className="flex gap-11 p-24">
        <header className="flex-1">
          <h2 className="relative font-bold text-5xl has-square has-square-top">
            Why should you have a cat?
          </h2>
          <p className="text-lg my-11">
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </p>
          <Link
            to="https://example.com"
            className="flex items-center gap-2 opacity-60 hover:opacity-100"
          >
            <span>READ MORE</span>
            <span>
              <MdArrowRightAlt />
            </span>
          </Link>
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
