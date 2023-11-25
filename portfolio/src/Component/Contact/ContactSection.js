import { ContactList } from "../../Units/Contactlist";
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
        {ContactList.map((item) => {
          return (
            <div
              key={item.key}
              className={
                !checked ? "contact-description" : "contact-descriptionlite"
              }
            >
              <img
                src={!checked ? item.srcDark : item.srcLite}
                alt="icon"
                className="contact-link-icon"
              />
              <p>{item.name} :</p>
              {item.name === "Gmail" ? (
                <button
                  className={!checked ? "contact-link" : "contact-linklite"}
                >
                  drop me a message
                </button>
              ) : (
                <a
                  href={item.href}
                  className={!checked ? "contact-link" : "contact-linklite"}
                >
                  {item.linkText}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default ContactSection;
