// @CMD npx vite-node lib/prisma/createManyType.ts
import { Prisma, PrismaClient, Role } from "@prisma/client";
import * as argon2 from "argon2";

const prisma = new PrismaClient();

async function createManyType() {
  //テーブルデータの初期化
  await prisma.post.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  // 型を指定してデータを作成
  const users: Prisma.UserCreateInput[] = [
    {
      email: "chris@example.io",
      name: "Chris",
      password: await argon2.hash("chrispass123"),
      role: Role.USER,
    },
    {
      email: "andrew@example.io",
      name: "Andrew",
      password: await argon2.hash("andrewpass123"),
      role: Role.ADMIN,
    },
  ];
  const createUsers = await prisma.user.createMany({ data: users });

  console.dir(createUsers, { depth: null });
}

createManyType()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
