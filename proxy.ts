import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const authToken = request.cookies.get('auth-token')?.value;
  const userRole = request.cookies.get('user-role')?.value; // 'user', 'admin', etc.
  
  const { pathname } = request.nextUrl;
  
  // Check if user is accessing profile pages
  if (pathname.startsWith('/profile')) {
    if (!authToken) {
      return NextResponse.redirect(new URL('/user-signin', request.url));
    }
  }
  
  // Check if user is accessing admin dashboard
  if (pathname.startsWith('/dashboard')) {
    if (!authToken) {
      return NextResponse.redirect(new URL('/admin-signin', request.url));
    }
    
    if (userRole !== 'admin') {
      // User is logged in but not an admin
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*', '/dashboard/:path*'],
};