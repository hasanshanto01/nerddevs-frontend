import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getAccessToken } from "../helper/sessionHelper";

function MainLayout() {
  const location = useLocation();
  const accessToken = getAccessToken();

  if (!accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MainLayout;
