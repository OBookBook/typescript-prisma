// @CMD npx vite-node lib/prisma/findFirst.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// id を昇順で並べ替えて最初のレコードを取得
async function main() {
  const users = await prisma.user.findFirst({
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
