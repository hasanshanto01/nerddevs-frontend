class SessionFunction {
  setAccessToken(token: string) {
    localStorage.setItem("access_token", token);
  }
  getAccessToken() {
    return localStorage.getItem("access_token");
  }

  removeToken() {
    localStorage.removeItem("access_token");
  }
}

export const { setAccessToken, getAccessToken, removeToken } =
  new SessionFunction();
