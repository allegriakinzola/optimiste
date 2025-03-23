import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Rechercher l'utilisateur dans la base de données
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Vérifier si l'utilisateur existe et est un admin
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json(
        {
          success: false,
          message: 'Email ou mot de passe incorrect',
        },
        { status: 401 }
      );
    }

    // Vérifier le mot de passe
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email ou mot de passe incorrect',
        },
        { status: 401 }
      );
    }

    // Créer le token JWT
    const token = jwt.sign(
      { 
        userId: user.id,
        email: user.email,
        role: user.role 
      },
      process.env.JWT_SECRET || 'votre_secret_temporaire',
      { expiresIn: '7d' }
    );

    // Créer la réponse avec le cookie
    const response = NextResponse.json({
      success: true,
      message: 'Connexion réussie',
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });

    // Définir le cookie
    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 jours
    });

    return response;
  } catch (error) {
    console.error('Erreur de connexion:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Une erreur est survenue',
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
