import { Link } from "react-router-dom";
import logo from "../../assets/img/quotes-logo.jpg";
import "./Logo.css";

const Logo = () => {
    return (
        <Link to="/" className="Logo">
            <img src={logo} alt="Quotes logo"/>
        </Link>
    )
};

export default Logo;