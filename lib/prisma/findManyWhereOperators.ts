// @CMD npx vite-node lib/prisma/findManyWhereOperators.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ロジカル演算子を使用して複数条件で絞り込む
async function main() {
  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          name: {
            startsWith: "B",
          },
        },
        {
          AND: {
            Profile: {
              bio: {
                contains: "Prisma",
              },
            },
            role: {
              equals: "USER",
            },
            posts: {
              some: {
                title: {
                  contains: "I",
                },
              },
            },
          },
        },
      ],
    },
    include: {
      posts: true,
      Profile: true,
    },
    orderBy: {
      id: "desc",
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
