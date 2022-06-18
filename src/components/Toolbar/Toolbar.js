import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import "./Toolbar.css";

const Toolbar = () => {
    return (
        <header className="Toolbar">
            <Logo />
            <nav>
              <NavigationItems />
            </nav>
        </header>
    )
};

export default Toolbar;