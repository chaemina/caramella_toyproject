import { NextResponse } from "next/server";

export function middleware(request) {
  // msw 로 발급 받은 쿠키 값 여부 확인 (dev 에서만 동작)
  const token = request.cookies.get("refreshToken")?.value;
  const { pathname } = request.nextUrl;
  if (pathname === "/login") {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/combine/works"],
};
