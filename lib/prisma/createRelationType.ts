// @CMD npx vite-node lib/prisma/createRelationType.ts
import { Prisma, PrismaClient, Role } from "@prisma/client";
import * as argon2 from "argon2";

const prisma = new PrismaClient();

// 関連テーブルへの書き込み 型を指定してデータを作成
async function createRelationType() {
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
        createMany: {
          data: [
            {
              title: "Learn Prisma Client",
            },
            {
              title: "Practice TypeScript",
            },
          ],
        },
      },
    },
  });

  console.dir(createUser, { depth: null });
}

createRelationType()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
