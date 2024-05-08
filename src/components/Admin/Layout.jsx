import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex felx-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1">
        <div>
          <Header />
        </div>
        <div className="p-4">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
