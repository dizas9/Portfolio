import { SkillButton } from "../../Units/SkillButton";
import "./contactSection.css";
function ContactSection({ title, id1, id2, checked }) {
  return (
    <section className="section" id={!checked ? id1 : id2}>
      <p className={!checked ? "section-title" : "section-titlelite"}>
        [ ...{title} ]
      </p>
      <p id={!checked ? "text" : "textlite"}>
        Feel free to reach out through any of the following channels :-
      </p>
      <div className="contact-list">
    
      </div>
    </section>
  );
}
export default ContactSection;
