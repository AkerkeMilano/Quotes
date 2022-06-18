import "./CategoriesNavigation.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { categories } from "../../../categories";

const CategoriesNavigation = () => {
  return (
    <ul className="CategoriesNavigation">
      <NavigationItem to="/">All</NavigationItem>
      {categories.map((category) => (
        <NavigationItem key={category.id} to={category.id}>
          {category.title}
        </NavigationItem>
      ))}
    </ul>
  );
};

export default CategoriesNavigation;
