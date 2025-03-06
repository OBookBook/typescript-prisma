// @CMD npx vite-node lib/prisma/createReturnValue.ts
import { Prisma, PrismaClient, Role } from "@prisma/client";
import * as argon2 from "argon2";

const prisma = new PrismaClient();

async function createReturnValue() {
  //テーブルデータの初期化
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
    include: {
      posts: {
        include: {
          tags: true,
        },
      },
    },
  });

  console.dir(createUsers, { depth: null });
}

createReturnValue()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());

//**
//  {
//      id: 13,
//      email: 'chris@example.io',
//      name: 'Chris',
//      password: '$argon2id$v=19$m=65536,t=3,p=4$Ku993zjlhq+/BtPTikNVuw$rxQZrUZrS714Gu5rtd0+9nsdj0U/uEWERGejyZDAWhk',
//      role: 'USER',
//      ここにpostsが入っている
//      posts: [
//        {
//          id: 9,
//          createdAt: 2025-03-06T11:27:35.549Z,
//          updatedAt: 2025-03-06T11:27:35.549Z,
//          title: 'Learn Prisma Client',
//          likes: 0,
//          published: false,
//          authorId: 13,
//          tags: [ { id: 5, name: 'Prisma' } ]
//        },
//        {
//          id: 10,
//          createdAt: 2025-03-06T11:27:35.549Z,
//          updatedAt: 2025-03-06T11:27:35.549Z,
//          title: 'Practice TypeScript',
//          likes: 0,
//          published: false,
//          authorId: 13,
//          tags: [ { id: 6, name: 'TypeScript' } ]
//        }
//      ]
//    }
//  */
