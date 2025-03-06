// @CMD npx vite-node lib/prisma/findManyRelationOrder.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 関連テーブルのフィールドで並び替え
  const users = await prisma.user.findMany({
    orderBy: {
      Profile: {
        id: "asc",
      },
    },
    include: {
      Profile: true,
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
