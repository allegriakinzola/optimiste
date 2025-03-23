import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Vérifier si l'utilisateur accède à une route admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Ne pas protéger la page de login
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }

    const token = request.cookies.get('auth_token');

    // Si pas de token, rediriger vers la page de login
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // TODO: Vérifier la validité du token
    // Pour l'instant, on laisse passer si le token existe
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
};
