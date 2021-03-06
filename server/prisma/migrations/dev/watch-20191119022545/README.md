# Migration `watch-20191119022545`

This migration has been generated by Medet Tleukabiluly ✎ at 11/19/2019, 2:25:45 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "lift"."Form" (
  "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00'  ,
  "description" TEXT    ,
  "id" TEXT NOT NULL   ,
  "image" TEXT    REFERENCES "File"(id) ON DELETE SET NULL,
  "owner" TEXT    REFERENCES "User"(id) ON DELETE SET NULL,
  "redirect" TEXT    ,
  "title" TEXT NOT NULL DEFAULT ''  ,
  "updatedAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00'  ,
  PRIMARY KEY ("id")
);

CREATE TABLE "lift"."Submission" (
  "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00'  ,
  "file" TEXT    REFERENCES "File"(id) ON DELETE SET NULL,
  "form" TEXT    REFERENCES "Form"(id) ON DELETE SET NULL,
  "id" TEXT NOT NULL   ,
  "json" TEXT NOT NULL DEFAULT ''  ,
  PRIMARY KEY ("id")
);

CREATE TABLE "lift"."File" (
  "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00'  ,
  "description" TEXT    ,
  "id" TEXT NOT NULL   ,
  "mimetype" TEXT NOT NULL DEFAULT ''  ,
  "path" TEXT NOT NULL DEFAULT ''  ,
  "size" INTEGER NOT NULL DEFAULT 0  ,
  PRIMARY KEY ("id")
);

CREATE TABLE "lift"."Part" (
  "id" TEXT NOT NULL   ,
  "key" TEXT NOT NULL DEFAULT ''  ,
  "submission" TEXT    REFERENCES "Submission"(id) ON DELETE SET NULL,
  "value" TEXT NOT NULL DEFAULT ''  ,
  PRIMARY KEY ("id")
);

CREATE TABLE "lift"."User" (
  "device" TEXT    ,
  "email" TEXT    ,
  "id" TEXT NOT NULL   ,
  "name" TEXT    ,
  "password" TEXT NOT NULL DEFAULT ''  ,
  "phone" TEXT NOT NULL DEFAULT ''  ,
  PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "lift"."User.phone" ON "User"("phone")
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration ..watch-20191119022545
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,54 @@
+generator photon {
+  provider = "photonjs"
+}
+
+datasource db {
+  provider = "sqlite"
+  url      = "file:dev.db"
+}
+
+model Form {
+  id              String @default(cuid()) @id
+  createdAt       DateTime @default(now())
+  updatedAt       DateTime @updatedAt
+  title           String
+  image           File?
+  redirect        String?
+  description     String?
+  owner           User? @relation(name: "UserForms")
+  submissions     Submission[] @relation(name: "FormSubmissions")
+}
+
+model Submission {
+  id              String @default(cuid()) @id
+  createdAt       DateTime @default(now())
+  json            String
+  parts           Part[]
+  file            File?
+  form            Form? @relation(name: "FormSubmissions")
+}
+
+model File {
+  id              String @default(cuid()) @id
+  createdAt       DateTime @default(now())
+  path            String
+  size            Int
+  mimetype        String
+  description     String?
+}
+
+model Part {
+  id              String @default(cuid()) @id
+  key             String
+  value           String
+}
+
+model User {
+  id              String @default(cuid()) @id
+  phone           String @unique
+  password        String
+  name            String?
+  forms           Form[] @relation(name: "UserForms")
+  device          String?
+  email           String?
+}
```

## Photon Usage

You can use a specific Photon built for this migration (watch-20191119022545)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/watch-20191119022545'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```
