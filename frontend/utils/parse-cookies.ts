import cookie from "cookie";

export function parseCookies(req: Request) {
  // @ts-ignore
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}
