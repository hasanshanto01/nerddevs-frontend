import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegistrationData } from "../../../interfaces/AuthInterface";
import { registrationRequest } from "../../../apiRequests/AuthApiRequests";

function Registration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegistrationData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    mobile: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // on change fucntion
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "mobile") {
      const mobileNumberPattern = /^[0-9]{10,15}$/;

      if (!mobileNumberPattern.test(value)) {
        setErrors({
          ...errors,
          mobile: "Mobile number must be between 10 and 15 digits",
        });
      } else {
        setErrors({
          ...errors,
          mobile: "",
        });
      }
    }

    if (name === "password") {
      if (value?.length < 6) {
        setErrors({
          ...errors,
          password: "Password must be at least 6 characters",
        });
      } else {
        setErrors({
          ...errors,
          password: "",
        });
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  // on submit fucntion
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const submitRes = await registrationRequest(formData);

    if (submitRes) {
      navigate("/login");
    }

    setIsLoading(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen px-5 md:px-10 py-5 flex justify-center items-center">
      <div className="w-full md:w-3/5 lg:w-[35%] p-5 bg-common-white rounded-md space-y-5 shadow-lg">
        <h2 className="text-center text-2xl font-semibold">Registration</h2>

        <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
          {/* first name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="labelName">
              First Name<span className="text-primary-red">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              required
              className="inputField"
              value={formData?.firstName}
              onChange={handleOnChange}
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
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              required
              className="inputField"
              value={formData?.lastName}
              onChange={handleOnChange}
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
              value={formData?.email}
              onChange={handleOnChange}
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
              value={formData?.mobile}
              onChange={handleOnChange}
            />
            {errors?.mobile && (
              <p className="text-primary-red">
                <small>{errors?.mobile}</small>
              </p>
            )}
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
              value={formData?.password}
              onChange={handleOnChange}
            />
            {errors?.password && (
              <p className="text-primary-red">
                <small>{errors?.password}</small>
              </p>
            )}
          </div>
          {/* password */}

          <div>
            <button disabled={isLoading} className="primaryBtn w-full">
              {isLoading ? "Wait..." : "Registration"}
            </button>
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
