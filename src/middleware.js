import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "portfolio_admin_jwt_secret_key_2026_super_secure_key_dishank";

function getSecretKey() {
  return new TextEncoder().encode(JWT_SECRET);
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const isLoginPage = pathname === "/login";
  const isDashboardPage = pathname.startsWith("/dashboard");
  const isDashboardApi = pathname.startsWith("/api/dashboard");

  if (!isLoginPage && !isDashboardPage && !isDashboardApi) {
    return NextResponse.next();
  }

  const tokenCookie = request.cookies.get("admin_session");
  const token = tokenCookie?.value;

  let isValid = false;

  if (token) {
    try {
      const { payload } = await jwtVerify(token, getSecretKey());
      if (payload && payload.role === "admin") {
        isValid = true;
      }
    } catch (err) {
      isValid = false;
    }
  }

  // If logged in and trying to visit /login, redirect to /dashboard
  if (isLoginPage && isValid) {
    const dashboardUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // If not logged in and trying to access protected /dashboard or /api/dashboard
  if (!isValid && (isDashboardPage || isDashboardApi)) {
    if (isDashboardApi) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard", "/dashboard/:path*", "/api/dashboard/:path*"],
};
