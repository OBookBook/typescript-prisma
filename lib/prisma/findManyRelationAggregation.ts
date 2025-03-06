// @CMD npx vite-node lib/prisma/findManyRelationAggregation.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 関連テーブルのフィールドで集計された値で並び替え
  const users = await prisma.user.findMany({
    orderBy: {
      posts: {
        _count: "desc",
      },
    },
    include: {
      posts: true,
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
