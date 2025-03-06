// @CMD npx vite-node lib/prisma/findManyFieldSelect.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // フィールドの絞り込み
  const users = await prisma.user.findMany({
    select: {
      email: true,
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
