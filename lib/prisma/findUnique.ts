// @CMD npx vite-node lib/prisma/findUnique.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Userテーブルから一意のユーザを検索
  const user = await prisma.user.findUnique({
    where: {
      email: "alice@example.com",
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
