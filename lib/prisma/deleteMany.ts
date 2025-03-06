// @CMD npx vite-node lib/prisma/deleteMany.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // レコードを複数件削除
  const post = await prisma.post.deleteMany({
    where: {
      title: {
        contains: "Next.js",
      },
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
