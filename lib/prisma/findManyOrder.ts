// @CMD npx vite-node lib/prisma/findManyOrder.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 並び替え
  const users = await prisma.user.findMany({
    orderBy: {
      id: "desc",
    },
  });

  console.dir(users, { depth: null });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
