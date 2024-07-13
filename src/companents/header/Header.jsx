import React from "react";

function Header() {
  return (
    <header className="header flex px-[120px] py-[80px] justify-between">
      <div className="header-left">
        <a href="#">Portolio</a>
      </div>
      <div className="header-right flex gap-12 ">
        <a href="#">About</a>
        <a href="#">Experience</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
      <div className="Hamburger display-none  ">
        <img src="../src/assets/nav/menuIcon.png" alt=""/>
      </div>
    </header>
  );
}

export default Header;
