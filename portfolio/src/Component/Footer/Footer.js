import "./footer.css";

function Footer({checked}) {
  return (
    <>
      <p id={!checked ? "foot-text" : "foot-text-lite"}>
        developed with
        <span>
          <img
            src={
              !checked
                ? process.env.PUBLIC_URL + "/Image&Icon/canvas.png"
                : process.env.PUBLIC_URL + "/Image&Icon/canvasLite.png"
            }
            alt="icon"
            className="footer-icon"
          />
        </span>
        <span className={!checked ? "author" : "authorlite"}>
          by Sazid (dizas9)
        </span>
        <span className={!checked ? "copywrite-icon" : "copywrite-iconlite"}>
          ©
        </span>
        <span>v1.0.0</span>
      </p>
    </>
  );
}
export default Footer;
