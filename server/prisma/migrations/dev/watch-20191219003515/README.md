# Migration `watch-20191219003515`

This migration has been generated by Medet Tleukabiluly ✎ at 12/19/2019, 12:35:15 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "lift"."File" (
  "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00'  ,
  "description" TEXT    ,
  "id" TEXT NOT NULL   ,
  "mimetype" TEXT NOT NULL DEFAULT ''  ,
  "path" TEXT NOT NULL DEFAULT ''  ,
  "size" INTEGER NOT NULL DEFAULT 0  ,
  "user" TEXT    REFERENCES "User"(id) ON DELETE SET NULL,
  PRIMARY KEY ("id")
);

CREATE TABLE "lift"."User" (
  "city" TEXT    ,
  "country" TEXT    ,
  "deviceId" TEXT    ,
  "gender" TEXT    ,
  "id" TEXT NOT NULL   ,
  "looking" TEXT    ,
  "name" TEXT NOT NULL DEFAULT ''  ,
  "password" TEXT NOT NULL DEFAULT ''  ,
  "phone" TEXT NOT NULL DEFAULT ''  ,
  "status" TEXT    ,
  "visible" BOOLEAN NOT NULL DEFAULT false  ,
  PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "lift"."User.phone" ON "User"("phone")
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration watch-20191119022545..watch-20191219003515
--- datamodel.dml
+++ datamodel.dml
@@ -3,30 +3,26 @@
 }
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url      = "file:dev.db"
 }
-model Form {
-  id              String @default(cuid()) @id
-  createdAt       DateTime @default(now())
-  updatedAt       DateTime @updatedAt
-  title           String
-  image           File?
-  redirect        String?
-  description     String?
-  owner           User? @relation(name: "UserForms")
-  submissions     Submission[] @relation(name: "FormSubmissions")
+enum Status {
+  FRIENDS_WITH_BENEFITS
+  DTF
+  OPEN_RELATIONSHIP
+  COMPLICATED
+  CHAT
 }
-model Submission {
-  id              String @default(cuid()) @id
-  createdAt       DateTime @default(now())
-  json            String
-  parts           Part[]
-  file            File?
-  form            Form? @relation(name: "FormSubmissions")
+enum Gender {
+  MALE
+  FEMALE
+  LESBIAN
+  GUY
+  BISEXUAL
+  TRANSGENDER
 }
 model File {
   id              String @default(cuid()) @id
@@ -36,19 +32,18 @@
   mimetype        String
   description     String?
 }
-model Part {
-  id              String @default(cuid()) @id
-  key             String
-  value           String
-}
-
 model User {
   id              String @default(cuid()) @id
   phone           String @unique
+  name            String
   password        String
-  name            String?
-  forms           Form[] @relation(name: "UserForms")
-  device          String?
-  email           String?
+  deviceId        String?
+  country         String?
+  city            String?
+  images          File[]
+  gender          Gender?
+  looking         Gender?
+  status          Status?
+  visible         Boolean @default(false)
 }
```

## Photon Usage

You can use a specific Photon built for this migration (watch-20191219003515)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/watch-20191219003515'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
