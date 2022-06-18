import Backdrop from "../Backdrop/Backdrop";
import loaderIcon from "../../../assets/img/loader.png";
import "./Loader.css";

const Loader = ({loading}) => {
  return loading ? <>
    <Backdrop show={true} />
    <img 
      src={loaderIcon} 
      className="Loader" 
      alt="loader" 
    />
  </> : null
}

export default Loader;