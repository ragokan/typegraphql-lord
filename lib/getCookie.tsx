import cookie from "cookie";

export function getCookie(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document?.cookie);
}
