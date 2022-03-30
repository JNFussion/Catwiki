import React from "react";
import Logo from "../assets/images/CatwikiLogo.svg";

function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto px-24 py-9 flex justify-between rounded-t-xl  bg-black">
      <div>
        <img src={Logo} alt="Logo" className="h-8" />
      </div>
      <div className="text-white">
        © create by <a href="https://github.com/JNFussion">JNFussion</a> -
        devchallenges.io 2021
      </div>
    </footer>
  );
}

export default Footer;
