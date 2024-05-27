import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname.startsWith("/dashboard")) {
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}
}
