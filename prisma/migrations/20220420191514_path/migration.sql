/*
  Warnings:

  - You are about to drop the column `path` on the `Complex` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[path]` on the table `Session` will be added. If there are existing duplicate values, this will fail.
  - The required column `path` was added to the `Session` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "Complex_path_key";

-- AlterTable
ALTER TABLE "Complex" DROP COLUMN "path";

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "path" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Session_path_key" ON "Session"("path");
