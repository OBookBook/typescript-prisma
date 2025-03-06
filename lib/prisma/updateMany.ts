// @CMD npx vite-node lib/prisma/updateMany.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // レコードを複数件更新
  const user = await prisma.user.updateMany({
    where: {
      email: {
        contains: "example.com",
      },
    },
    data: {
      role: "ADMIN",
    },
  });

  console.dir(user, { depth: null });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
