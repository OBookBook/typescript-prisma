// @CMD npx vite-node lib/prisma/updateIncrement.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 数値を更新
  const user = await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      likes: {
        increment: 1,
      },
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
