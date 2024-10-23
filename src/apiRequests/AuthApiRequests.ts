import axios, { AxiosError } from "axios";
import { baserURL } from "../helper/config";
import {
  ApiErroresponse,
  LoginData,
  RegistrationData,
} from "../interfaces/AuthInterface";
import Swal from "sweetalert2";
import { setAccessToken } from "../helper/sessionHelper";

// registration api
export const registrationRequest = async (info: RegistrationData) => {
  try {
    let url = `${baserURL}/user/register`;

    let res = await axios.post(url, info);
    // console.log("Registration res:", res);

    if (res.status === 201) {
      Swal.fire({
        title: res?.data?.title || "Registration",
        text: res?.data?.message || "User is registered",
        html: `Not getting the account activation email? Just click the provided link: <a href="${res?.data?.token}" target="_blank" style="color:#2296ea;">Activate Account</a>`,
        icon: "success",
      });

      return true;
    }
  } catch (err) {
    const axiosError = err as AxiosError<ApiErroresponse>;
    console.log("Registration Error:", err);

    Swal.fire({
      title: `${axiosError?.response?.data?.title}` || "Error",
      text: `${axiosError?.response?.data?.message}` || "Something went wrong",
      icon: "error",
    });

    return false;
  }
};

// login api
export const loginRequest = async (info: LoginData) => {
  try {
    let url = `${baserURL}/user/login`;

    let res = await axios.post(url, info);
    // console.log("Login res:", res);

    if (res.status === 200) {
      setAccessToken(res?.data?.token);

      Swal.fire({
        title: res?.data?.title || "Login",
        text: res?.data?.message || "User logged in",
        icon: "success",
      });

      return true;
    }
  } catch (err) {
    const axiosError = err as AxiosError<ApiErroresponse>;
    console.log("Login Error:", err);

    Swal.fire({
      title: `${axiosError?.response?.data?.title}` || "Error",
      text: `${axiosError?.response?.data?.message}` || "Something went wrong",
      icon: "error",
    });

    return false;
  }
};
