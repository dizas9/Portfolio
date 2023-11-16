// import { useRef } from "react";
import { useState } from "react";
import "./App.css";
import { Navigation } from "./Units/Navigation";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import SkillSection from "./Component/Skill/Skill";
import AboutSection from "./Component/About/AboutSection";
import ToggleButton from "./Units/Toggle Button/button";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <body className={!isChecked ? "container" : "containerLite"}>
        <div>
          <Header checked={isChecked}>
            <ToggleButton checked={isChecked} onChange={handleCheckboxChange} />
          </Header>
          <Hero />
          <SkillSection
            key={Navigation[0]}
            title={Navigation[0].name}
            id={Navigation[0].id}
          />
          <AboutSection
            key={Navigation[1]}
            title={Navigation[1].name}
            id={Navigation[1].id}
          />
        </div>
      </body>
    </>
  );
}

export default App;

// import "./Header.css";
// function Header() {}
// export default Header;

//===================//

//   <section className="section" id={id}>
//     <p className="section-title">[ ...{title} ]</p>
//   </section>;
