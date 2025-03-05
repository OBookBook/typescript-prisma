# typescript-prisma

```shell
# Supabase を初期化
npx supabase@latest init
# ローカルデータベースを開始
npx supabase@latest start --debug
# ローカルデータベースを停止
npx supabase@latest stop
# ローカルデータベースをリセット
npx supabase@latest db reset
```

## migration

```shell
# スキーマファイルをデータベースに反映
npx prisma migrate dev --name init
```

## seed

```shell
npx vite-node prisma/seed.ts
or
npx prisma db
```

## prisma studio

```shell
npx prisma studio
```

# DB init

```shell
 npx supabase start &&
  npx supabase db reset &&
  npx prisma migrate dev --name init
```

# create

```shell
# 1件のユーザーを作成
npx vite-node lib/prisma/createSingleUser.ts

```
