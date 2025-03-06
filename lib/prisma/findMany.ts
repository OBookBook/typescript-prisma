// @CMD npx vite-node lib/prisma/findMany.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Userテーブルから全てのユーザーを取得
  const users = await prisma.user.findMany();

  console.dir(users, { depth: null });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
