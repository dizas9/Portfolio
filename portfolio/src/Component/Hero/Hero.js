import "./hero.css";
function Hero() {
  return (
    <>
      <section className="section" id="heroSection">
        <div className="image">
          <img
            src={process.env.PUBLIC_URL + "/Image&Icon/profile.jpg"}
            alt="icon"
          />
        </div>
        <div className="welcome-note">
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
