import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Just pass through — auth check handled in admin layout
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
