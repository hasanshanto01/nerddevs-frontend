import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="min-h-screen px-5 md:px-10 py-5 flex justify-center items-center">
      <div className="w-full md:w-3/5 lg:w-[35%] p-5 bg-common-white rounded-md space-y-5 shadow-lg">
        <h2 className="text-center text-2xl font-semibold">Registration</h2>

        <form className="flex flex-col gap-2">
          {/* first name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="labelName">
              First Name<span className="text-primary-red">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
              required
              className="inputField"
            />
          </div>
          {/* first name */}

          {/* last name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="labelName">
              Last Name<span className="text-primary-red">*</span>
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
              required
              className="inputField"
            />
          </div>
          {/* first name */}

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

          {/* mobile */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="labelName">
              Mobile<span className="text-primary-red">*</span>
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter your mobile"
              required
              className="inputField"
            />
          </div>
          {/* mobile */}

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
            <button className="primaryBtn w-full">Registration</button>
          </div>

          <p className="text-center font-medium">
            <small>
              Already have an account?{" "}
              <Link to="/login" className="text-primary-green">
                Login
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;
