// @CMD npx vite-node lib/prisma/findManyWhereRelation.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 関連テーブルのフィールドで絞り込み
async function main() {
  const users = await prisma.user.findMany({
    where: {
      Profile: {
        bio: {
          contains: "Prisma",
        },
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
