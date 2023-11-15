import { SkillButton } from "../../Units/SkillButton";
import "./skill.css";
function SkillSection({ title, id }) {
  return (
    <section className="section" id={id}>
      <p className="section-title">"[ ...{title} ]"</p>
      <p id="text">Technology I've used so far...</p>
      <div className="skill">
        {SkillButton.map((item) => {
          return (
            <button className="skill-item" style={item.background}>
              <img src={item.icon} alt="img" />
              <p >{item.skillName}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
export default SkillSection;
