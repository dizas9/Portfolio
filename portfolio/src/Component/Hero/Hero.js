import "./hero.css";
function Hero({checked}) {
  return (
    <>
      <section
        className="section"
        id={!checked ? "heroSection" : "heroSectionlite"}
      >
        <div className="image">
          <img
            src={process.env.PUBLIC_URL + "/Image&Icon/profile.jpg"}
            alt="icon"
          />
        </div>
        <div className={!checked ? "welcome-note" : "welcome-notelite"}>
          <p className="fullname">
            <span className="regular">I'm</span> Sazidul Islam ,{" "}
            <span className="position">Front End Developer</span>
          </p>
          <p className="description">
            I like building beautiful and accessible websites. <br></br> I'm
            based in Dhaka, Bangladesh.
          </p>
        </div>
      </section>
    </>
  );
}
export default Hero;
