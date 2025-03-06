// @CMD npx vite-node lib/prisma/findManyLemit.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// id の昇順で並べ替えて最初の 1 件のレコードを取得します。
async function main() {
  const users = await prisma.user.findMany({
    take: 1,
    orderBy: {
      id: "asc",
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
