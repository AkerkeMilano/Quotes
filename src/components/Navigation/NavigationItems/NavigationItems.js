import NavigationItem from "../NavigationItem/NavigationItem";
import "./NavigationItems.css";

const NavigationItems = () => {
  return (
    <ul className="NavigationItems">
        <NavigationItem to="/" end>Quotes</NavigationItem>
        <NavigationItem to="/add-quote">Submit new quote</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
