// @CMD npx vite-node lib/prisma/deleteManyAll.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 全てのレコードを削除
  const tags = await prisma.tag.deleteMany();
  const posts = await prisma.post.deleteMany();
  const profile = await prisma.profile.deleteMany();
  const user = await prisma.user.deleteMany();

  console.dir(tags, { depth: null });
  console.dir(posts, { depth: null });
  console.dir(profile, { depth: null });
  console.dir(user, { depth: null });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
