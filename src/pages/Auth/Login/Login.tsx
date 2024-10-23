import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoginData } from "../../../interfaces/AuthInterface";
import { loginRequest } from "../../../apiRequests/AuthApiRequests";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("on change:", e.target.name, e.target.value);
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const submitRes = await loginRequest(formData);

    if (submitRes) {
      navigate(from, { replace: true });
    }

    setIsLoading(false);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen px-5 md:px-10 py-5 flex justify-center items-center">
      <div className="w-full md:w-3/5 lg:w-[35%] p-5 bg-common-white rounded-md space-y-5 shadow-lg">
        <h2 className="text-center text-2xl font-semibold">Login</h2>

        <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
          {/* email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="labelName">
              Email<span className="text-primary-red">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="inputField"
              value={formData?.email}
              onChange={handleOnChange}
            />
          </div>
          {/* email */}

          {/* password */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="labelName">
              Password<span className="text-primary-red">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="inputField"
              value={formData?.password}
              onChange={handleOnChange}
            />
          </div>
          {/* password */}

          <div>
            <button disabled={isLoading} className="primaryBtn w-full">
              {isLoading ? "Wait..." : "Login"}
            </button>
          </div>

          <p className="text-center font-medium">
            <small>
              New Here?{" "}
              <Link to="/registration" className="text-primary-green">
                Register
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
