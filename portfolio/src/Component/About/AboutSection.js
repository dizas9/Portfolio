import "./aboutSection.css";
function AboutSection({ title, id1, id2, checked }) {
  return (
    <section className="section" id={!checked ? id1 : id2}>
      <p className={!checked ? "section-title" : "section-titlelite"}>
        [ ...{title} ]
      </p>
      <p className={!checked ? "about-description" : "about-descriptionlite"}>
        {" "}
        In 2023, I graduated with a degree in Information and Communication
        Engineering. My journey into web development began in my second year,
        and it quickly evolved into a passion. Proficient in various
        technologies, I prefer to specialize in JavaScript and leverage the
        power of React for frontend development. While working on academic
        projects, I discovered the beauty of turning concepts into reality, and
        this experience turned my interest into a deep-rooted passion.
      </p>
      <details id={!checked ? "text" : "textlite"}>
        <summary>Currently I'm Learning...</summary>
        <ul className="bullet-list">
          <li>JavaScript, TypeScript and React... Yeah, this never ends.</li>
          <li>
            Testing, as it's clear to me the importance it has in building solid
            applications.
          </li>
          <li>
            Applicaton of AI in Web Programming: as IT graduate, I love
            understanding why things add up, so I figured some programming
            theory wouldn't hurt.
          </li>
          <li>
            Web accessibility: this is becoming an essential area for me. There
            is so much power and information on the Internet right now, we
            simply cannot forget to make everything we build accessible for
            everyone.
          </li>
        </ul>
      </details>
      <details id={!checked ? "text" : "textlite"}>
        <summary>My guiding principles involve...</summary>
        <ul className="bullet-list">
          <li>
            Divide and conquer: break the problem into smaller ones, have clear
            the input you're receiving and the output you want to serve.
          </li>
          <li>
            Investigate: I want to understand how things work "under the hood",
            and I don't reuse pieces of code I don't understand.
          </li>
          <li>
            Improve: as I progress with learning and I get more and more exposed
            to other people's code, I try to improve my own code, and leave it
            cleaner.
          </li>
          <li>
            Teach to learn: I enjoy helping others to understand concepts I have
            already clear. It puts my learning at 10x speed.
          </li>
          <li>
            Make it accessible and usable: it's our responsibility to create
            universally usable applications and to make our corner of the
            Internet just a little bit more awesome (quoting the great Kevin
            Powell)!
          </li>
        </ul>
      </details>
    </section>
  );
}
export default AboutSection;
