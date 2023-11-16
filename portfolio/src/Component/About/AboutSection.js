import "./aboutSection.css";
function AboutSection({ title, id }) {
  return (
    <section className="section" id={id}>
      <p className="section-title">[ ...{title} ]</p>
    </section>
  );
}
export default AboutSection;


