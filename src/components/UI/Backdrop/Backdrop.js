import "./Backdrop.css";

const Backdrop = ({ show, click }) => {
  return show ? <div
    onClick={click}
    className="Backdrop"
  /> : null;
};

export default Backdrop;