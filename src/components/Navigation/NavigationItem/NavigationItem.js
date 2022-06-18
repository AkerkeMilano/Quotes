import { NavLink } from "react-router-dom";
import "./NavigationItem.css";

const NavigationItem = ({children, to, end}) => {
  return (
    <li className="NavigationItem">
      <NavLink to={to} end={end}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
