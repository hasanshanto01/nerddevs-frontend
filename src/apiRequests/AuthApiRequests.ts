// registration api

import axios, { AxiosError } from "axios";
import { baserURL } from "../helper/config";
import { ApiResponse, RegistrationData } from "../interfaces/AuthInterface";
import Swal from "sweetalert2";

export const registrationRequest = async (info: RegistrationData) => {
  try {
    let url = `${baserURL}/user/register`;

    let res = await axios.post(url, info);
    console.log("Registration res:", res);

    if (res.status === 201) {
      Swal.fire({
        title: res?.data?.title || "Registration",
        text: res?.data?.message || "User registration",
        html: `Not getting the account activation email? Just click the provided link: <a href="${res?.data?.token}" target="_blank" style="color:#2296ea;">Activate Account</a>`,
        icon: "success",
      });

      return true;
    }
  } catch (err) {
    const axiosError = err as AxiosError<ApiResponse>;
    console.log("Registration Error:", err);

    Swal.fire({
      title: `${axiosError?.response?.data?.title}` || "Error",
      text: `${axiosError?.response?.data?.message}` || "Something went wrong",
      icon: "error",
    });

    return false;
  }
};
