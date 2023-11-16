import "./button.css";
function ToggleButton({Checked , onChange}) {

  return (
    <>
      <input
        type="checkbox"
        id="switch"
        checked={Checked}
        onChange={onChange}
      />
      <label for="switch" className="switch"></label>
    </>
  );
}
export default ToggleButton;
