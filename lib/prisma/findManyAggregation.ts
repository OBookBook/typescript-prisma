// @CMD npx vite-node lib/prisma/findManyAggregation.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 集計
  const aggregation = await prisma.user.aggregate({
    _count: true,
  });

  console.dir(aggregation, { depth: null });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
