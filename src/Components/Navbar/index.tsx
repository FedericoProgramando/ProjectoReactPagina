import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <header>
      <a href="#">
        <img className="logo" src="/img/logo.png" alt="" />
      </a>
      <div className="header_nav">
      <nav className={active}>
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
        <a href="#">Help</a>
      </nav>
      </div>
      <div onClick={navToggle} className={icon} data-toggle="collapse" data-target="#menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
      </div>
      <button className="sign_in" id="sign_in">
        Sign In
      </button>
      <button className="sign_up" id="sign_up-nav">
        Sign Up
      </button>
    </header>
  );
}

export default Navbar;