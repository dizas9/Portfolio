import { useState } from "react";
import "./header.css";
function Header() {
  const [mobileMode, setMobileMode] = useState(false);
  const [click, setClick] = useState(false);
  const Navigation = [
    {
      name: "Skill",
      href: "#skillSection",
    },
    {
      name: "Project",
      href: "#projectSection",
    },
    {
      name: "about",
      href: "#aboutSection",
    },
    {
      name: "Contact",
      href: "#contactSection",
    },
  ];
  const handleToggle = () => {
    setMobileMode(!mobileMode);
  };
  const handleClick = () => {
    setClick(!click);
  };

  function buttonClick() {
    handleClick();
    handleToggle();
  }
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <a>{"< Sazid />"}</a>
        </div>

        <div className="nav-item">
          <ul className={!mobileMode ? "nav-links" : "nav-link-mobile"}>
            {Navigation.map((item) => {
              return (
                <li key={item.key}>
                  <a href={item.href}>{item.name}</a>
                </li>
              );
            })}
          </ul>
          <button onClick={buttonClick}>
            <img
              src={
                !click
                  ? process.env.PUBLIC_URL + "/Image&Icon/toggol.svg"
                  : process.env.PUBLIC_URL + "/Image&Icon/cross-toggle.svg"
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
