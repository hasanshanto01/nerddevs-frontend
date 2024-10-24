import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.scss";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Registration from "./pages/Auth/Registration/Registration";
import Login from "./pages/Auth/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* prtected routes */}
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          {/* prtected routes */}

          {/* auth routes */}
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          {/* auth routes */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
