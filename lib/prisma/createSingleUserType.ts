// @CMD npx vite-node lib/prisma/createSingleUserType.ts
import { Prisma, PrismaClient, Role } from "@prisma/client";
import * as argon2 from "argon2";

const prisma = new PrismaClient();

async function createSingleUserType() {
  //テーブルデータの初期化
  await prisma.post.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  // 型を指定してデータを作成
  const user: Prisma.UserCreateInput = {
    email: "bob@example.com",
    name: "Bob",
    password: await argon2.hash("bobpass123"),
    role: Role.USER,
  };
  const createUser = await prisma.user.create({ data: user });

  console.dir(createUser, { depth: null });
}

createSingleUserType()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
