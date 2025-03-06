// @CMD npx vite-node lib/prisma/update.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // # レコードを1件更新
  const user = await prisma.user.update({
    where: {
      email: "bob@example.com",
    },
    data: {
      email: "bob_new_email@example.com",
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
