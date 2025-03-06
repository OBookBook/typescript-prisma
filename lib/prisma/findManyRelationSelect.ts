// @CMD npx vite-node lib/prisma/findManyRelationSelect.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 関連テーブルのレコードを取得
  const users = await prisma.user.findFirst({
    include: {
      posts: true,
      Profile: {
        select: {
          bio: true,
        },
      },
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
