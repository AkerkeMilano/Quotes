import { Outlet } from "react-router-dom";
import Toolbar from "../Toolbar/Toolbar";
import CategoriesNavigation from "../Navigation/CategoriesNavigation/CategoriesNavigation";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <Toolbar></Toolbar>
      <main className="Layout-Content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
