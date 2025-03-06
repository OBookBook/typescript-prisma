// @CMD npx vite-node lib/prisma/updateOrCreate.ts
import { PrismaClient } from "@prisma/client";
import * as argon2 from "argon2";

const prisma = new PrismaClient();

async function main() {
  // 更新 or 作成 (Upsert)
  const user = await prisma.user.upsert({
    where: {
      email: "alice@example.com",
    },
    update: {
      name: "Alice Jackson",
      role: "ADMIN",
    },
    create: {
      email: "alice@example.com",
      name: "Alice Jackson",
      role: "ADMIN",
      password: await argon2.hash("alicepass"),
    },
    include: {
      Profile: true,
    },
  });

  console.dir(user, { depth: null });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
