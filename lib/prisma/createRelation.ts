// @CMD npx vite-node lib/prisma/createRelation.ts
import { Prisma, PrismaClient, Role } from "@prisma/client";
import * as argon2 from "argon2";

const prisma = new PrismaClient();

// 関連テーブルへの書き込み
async function createRelation() {
  await prisma.post.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  const createUser = await prisma.user.create({
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
              create: [
                {
                  name: "Prisma",
                },
              ],
            },
          },
          {
            title: "Practice TypeScript",
            tags: {
              create: [
                {
                  name: "TypeScript",
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.dir(createUser, { depth: null });
}

createRelation()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
