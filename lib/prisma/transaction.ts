import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  {
    // # 全てのレコードの削除をトランザクションで実行
    console.log("# 全てのレコードの削除をトランザクションで実行");

    const deleteTag = prisma.tag.deleteMany();
    const deletePost = prisma.post.deleteMany();
    const deleteProfile = prisma.profile.deleteMany();
    const deleteUser = prisma.user.deleteMany();

    // シーケンシャル（sequential）に実行
    const transaction = await prisma.$transaction([
      deleteTag,
      deletePost,
      deleteProfile,
      deleteUser,
    ]);

    console.dir(transaction, { depth: null });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
