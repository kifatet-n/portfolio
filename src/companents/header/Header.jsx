import React from "react";

function Header() {
  return (
    <header className="header bg-slate-900 flex px-[120px] py-[80px] justify-between">
      <div className="header-left ">
        <a href="#" className="text-white">Portfolio</a>
      </div>
      <div className="header-right flex  gap-12 ">
        <a href="#" className="text-white">About</a>
        <a href="#" className="text-white">Experience</a>
        <a href="#" className="text-white">Projects</a>
        <a href="#" className="text-white">Contact</a>
      </div>
      <div className="hamburger flex xl flex-none">
        <img src="./src/assets/nav/menuIcon.png" alt=""/>
      </div>
    </header>
  );
}

export default Header;
