import { SkillButton } from "../../Units/SkillButton";
import "./skill.css";
function SkillSection({ title, id1, id2, checked }) {
  return (
    <section className="section" id={!checked ? id1 : id2}>
      <p className={!checked ? "section-title" : "section-titlelite"}>
        [ ...{title} ]
      </p>
      <p id={!checked ? "text" : "textlite"}>Technology I've used so far...</p>
      <div className="skill">
        {SkillButton.map((item) => {
          return (
            <button className="skill-item" style={item.background}>
              <img src={item.icon} alt="img" />
              <p>{item.skillName}</p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
export default SkillSection;
