// @CMD npx vite-node lib/prisma/delete.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // レコードを1件削除
  const post = await prisma.post.delete({
    where: {
      id: 1,
    },
  });

  console.dir(post, { depth: null });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
