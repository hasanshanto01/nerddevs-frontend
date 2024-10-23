import { useNavigate } from "react-router-dom";
import { removeToken } from "../../helper/sessionHelper";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/login");
  };

  return (
    <div className="min-h-screen px-5 md:px-10 py-5">
      <div className="space-y-5">
        <h2 className="text-center text-3xl font-bold">Welcome</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          corporis doloribus delectus consequatur, qui, accusantium perspiciatis
          cupiditate repudiandae, consectetur eius placeat perferendis saepe
          sit? Recusandae eaque vel laudantium voluptas tenetur voluptatum,
          consectetur illum sapiente deserunt consequatur ut culpa, vero dicta
          aperiam. Eligendi delectus ab quis deleniti culpa eius modi non.
        </p>
        <button className="primaryBtn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
