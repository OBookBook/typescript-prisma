// @CMD npx vite-node lib/prisma/createReturnValueSelect.ts
import { PrismaClient, Role } from "@prisma/client";
import * as argon2 from "argon2";

const prisma = new PrismaClient();

// 返却値の操作（select）
async function createReturnValueSelect() {
  await prisma.post.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  // 型を指定してデータを作成
  const createUsers = await prisma.user.create({
    data: {
      email: "chris@example.io",
      name: "Chris",
      password: await argon2.hash("password"),
      role: Role.USER,
      posts: {
        create: [
          {
            title: "Learn Prisma Client",
            tags: {
              create: {
                name: "Prisma",
              },
            },
          },
          {
            title: "Practice TypeScript",
            tags: {
              create: {
                name: "TypeScript",
              },
            },
          },
        ],
      },
    },
    select: {
      id: true,
      email: true,
      name: true,
      password: true,
      role: true,
      posts: {
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          likes: true,
          published: true,
          authorId: true,
          tags: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  console.dir(createUsers, { depth: null });
}

createReturnValueSelect()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
