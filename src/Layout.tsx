import { Outlet } from "react-router-dom";
import TopNavigationBar from "./components/top-navigation-bar";

const Layout = () => {
  return (
    <>
      <TopNavigationBar />
      <Outlet />
    </>
  );
};
export default Layout;
