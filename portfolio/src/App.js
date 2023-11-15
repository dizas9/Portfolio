// import { useRef } from "react";
import "./App.css";
import { Navigation } from "./Units/Navigation";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import SkillSection from "./Component/Skill/Skill";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <SkillSection
          key={Navigation[0]}
          title={Navigation[0].name}
          id={Navigation[0].id}
        />
        ;
      </div>
    </>
  );
}

export default App;

// import "./Header.css";
// function Header() {}
// export default Header;
