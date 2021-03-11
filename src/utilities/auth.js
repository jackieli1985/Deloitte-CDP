export function getToken() {
  return sessionStorage.getItem("jwtToken");
}

export function getUserInfo() {
  return sessionStorage.getItem("userInfo");
}
