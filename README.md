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
# 並び替え
npx vite-node lib/prisma/findManyOrder.ts
# 関連テーブルのフィールドで並び替え
npx vite-node lib/prisma/findManyRelationOrder.ts
# 関連テーブルのフィールドで集計された値で並び替え
npx vite-node lib/prisma/findManyRelationAggregation.ts
# フィールドの絞り込み
npx vite-node lib/prisma/findManyFieldSelect.ts
# 関連テーブルのレコードを取得
npx vite-node lib/prisma/findManyRelationSelect.ts
# 集計
npx vite-node lib/prisma/findManyAggregation.ts
```

# update

```shell
# レコードを1件更新
npx vite-node lib/prisma/update.ts
# レコードを複数件更新
npx vite-node lib/prisma/updateMany.ts
# 更新 or 作成 (Upsert)
npx vite-node lib/prisma/updateOrCreate.ts
# 数値をincrementで更新
npx vite-node lib/prisma/updateIncrement.ts
```

# delete

```shell
# レコードを1件削除
npx vite-node lib/prisma/delete.ts
# レコードを複数件削除
npx vite-node lib/prisma/deleteMany.ts
# 全てのレコードを削除
npx vite-node lib/prisma/deleteManyAll.ts
```

# transaction

```shell
# トランザクション、シーケンシャル（sequential）に実行
npx vite-node lib/prisma/transaction.ts
```
