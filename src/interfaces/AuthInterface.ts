export interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
}

export interface RegistrationResponse {
  message: string;
}

export interface ApiResponse {
  title: string;
  message: string;
}
