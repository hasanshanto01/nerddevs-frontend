import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <h2>MainLayout</h2>
      <Outlet />
    </div>
  );
}

export default MainLayout;
