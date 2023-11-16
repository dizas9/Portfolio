import React, { useState, useEffect } from "react";
import { Navigation } from "../../Units/Navigation";
import "./header.css";

function Header({ children, checked }) {
  const [mobileMode, setMobileMode] = useState(false);
  const [click, setClick] = useState(false);

  const handleToggle = () => {
    setMobileMode(!mobileMode);
  };
  const handleClick = () => {
    setClick(!click);
  };

  //exp
  const linkClick = () => {
    if (click === true && mobileMode === true) {
      setClick(!click);
      setMobileMode(!mobileMode);
    }
  };

  function buttonClick() {
    handleClick();
    handleToggle();
  }

  return (
    <>
      <div className={!checked ? "nav-container" : "nav-containerLite"}>
        <div>
          <a className={!checked ? "logo" : "logolite"}>{"< Sazid />"}</a>
        </div>
        {children}
        <div className="nav-item">
          <ul
            className={
              !mobileMode
                ? "nav-links"
                : !checked
                ? "nav-link-mobile"
                : "nav-link-mobilelite"
            }
          >
            {Navigation.map((item) => {
              return (
                <li key={item.key} onClick={linkClick}>
                  {/* exp */}
                  <a
                    className={!checked ? "link" : "linklite"}
                    href={item.href}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <button onClick={buttonClick} className="barger-menu">
            <img
              src={
                !checked
                  ? !click
                    ? process.env.PUBLIC_URL + "/Image&Icon/toggle.svg"
                    : process.env.PUBLIC_URL + "/Image&Icon/cross-toggle.svg"
                  : click
                  ? process.env.PUBLIC_URL + "/Image&Icon/cross-togglelite.svg"
                  : process.env.PUBLIC_URL + "/Image&Icon/togglelite.svg"
              }
              alt="icon"
            />
          </button>
        </div>
      </div>
    </>
  );
}
export default Header;
