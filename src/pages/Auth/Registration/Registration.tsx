import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

interface RegistrationData {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  password: string;
}

function Registration() {
  const [formData, setFormData] = useState<RegistrationData>({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    mobile: "",
    password: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("on change:", e.target.name, e.target.value);
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

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formData:", formData);
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
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
              required
              className="inputField"
              value={formData?.first_name}
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
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
              required
              className="inputField"
              value={formData?.last_name}
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
