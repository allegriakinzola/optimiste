const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('AKl@loi243', 10)
  
  const admin = await prisma.user.upsert({
    where: { email: 'allegriakinzoladev@gmail.com' },
    update: {},
    create: {
      email: 'allegriakinzoladev@gmail.com',
      name: 'Admin Principal',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log({ admin })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
