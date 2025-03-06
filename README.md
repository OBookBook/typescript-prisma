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
# 型を指定して1件のユーザーを作成
npx vite-node lib/prisma/createSingleUserType.ts
# 複数行のデータを追加
npx vite-node lib/prisma/createMany.ts
# 複数行のデータを追加 型を指定
npx vite-node lib/prisma/createManyType.ts
# 関連テーブルへの書き込み
npx vite-node lib/prisma/createRelation.ts
# 関連テーブルへの書き込み 複数
npx vite-node lib/prisma/createRelationType.ts
# 返却値の操作（include）
npx vite-node lib/prisma/createReturnValue.ts
#返却値の操作（select）
npx vite-node lib/prisma/createReturnValueSelect.ts
```

# get

```shell
# 全件 取得
npx vite-node lib/prisma/findMany.ts
# 一意のユーザを取得
npx vite-node lib/prisma/findUnique.ts
# id を昇順で並べ替えて最初のレコードを取得
npx vite-node lib/prisma/findFirst.ts
# where
npx vite-node lib/prisma/findManyWhere.ts
# 関連テーブルのフィールドで絞り込み
npx vite-node lib/prisma/findManyWhereRelation.ts
# 演算子を使用した複数条件の絞り込み
npx vite-node lib/prisma/findManyWhereOperators.ts
# 取得するレコード数を制限
npx vite-node lib/prisma/findManyLimit.ts
```
