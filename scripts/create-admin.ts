import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = 'allegriakinzoladev@gmail.com';
  const password = 'AKl@loi243';
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const admin = await prisma.user.upsert({
      where: { email },
      update: {
        password: hashedPassword,
      },
      create: {
        email,
        password: hashedPassword,
        name: 'Admin Principal',
        role: 'ADMIN',
      },
    });

    console.log('Admin créé avec succès:', admin);
  } catch (error) {
    console.error('Erreur lors de la création de l\'admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
