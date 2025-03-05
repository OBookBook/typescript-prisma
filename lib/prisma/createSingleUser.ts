// @CMD npx vite-node lib/prisma/createSingleUser.ts
import { Prisma, PrismaClient, Role } from "@prisma/client";
import * as argon2 from "argon2";

const prisma = new PrismaClient();

async function createSingleUser() {
  //テーブルデータの初期化
  await prisma.post.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  // ユーザーを1件作成
  const createUser = await prisma.user.create({
    data: {
      email: "alice@test.com",
      name: "Alice",
      password: await argon2.hash("password"),
      role: Role.USER,
    },
  });

  console.dir(createUser, { depth: null });
}

createSingleUser()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
