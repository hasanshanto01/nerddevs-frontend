export interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ApiErroresponse {
  title: string;
  message: string;
}
