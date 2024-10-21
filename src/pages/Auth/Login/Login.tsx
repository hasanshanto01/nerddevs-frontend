import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen px-5 md:px-10 py-5 flex justify-center items-center">
      <div className="w-full md:w-3/5 lg:w-[35%] p-5 bg-common-white rounded-md space-y-5 shadow-lg">
        <h2 className="text-center text-2xl font-semibold">Login</h2>

        <form className="flex flex-col gap-2">
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
            />
          </div>
          {/* password */}

          <div>
            <button className="primaryBtn w-full">Login</button>
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
