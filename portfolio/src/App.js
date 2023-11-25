// import { useRef } from "react";
import { useState } from "react";
import "./App.css";
import { Navigation } from "./Units/Navigation";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import SkillSection from "./Component/Skill/Skill";
import AboutSection from "./Component/About/AboutSection";
import ToggleButton from "./Units/Toggle Button/button";
import ContactSection from "./Component/Contact/ContactSection";
import Footer from "./Component/Footer/Footer";

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
          <Hero checked={isChecked} />
          <SkillSection
            checked={isChecked}
            key={Navigation[0]}
            title={Navigation[0].name}
            id1={Navigation[0].idDark}
            id2={Navigation[0].idLite}
          />
          <AboutSection
            checked={isChecked}
            key={Navigation[1]}
            title={Navigation[1].name}
            id1={Navigation[1].idDark}
            id2={Navigation[1].idLite}
          />
          <ContactSection
            checked={isChecked}
            key={Navigation[3]}
            title={Navigation[3].name}
            id1={Navigation[3].idDark}
            id2={Navigation[3].idLite}
          />
          <Footer checked={isChecked} />
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
