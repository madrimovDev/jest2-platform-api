/*
  Warnings:

  - You are about to drop the column `question` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `session` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `variant` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `Session` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[path]` on the table `Complex` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `questionId` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionId` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `variantId` to the `Answer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `path` to the `Complex` table without a default value. This is not possible if the table is not empty.
  - Made the column `startTime` on table `Session` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Session_path_key";

-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "question",
DROP COLUMN "session",
DROP COLUMN "variant",
ADD COLUMN     "questionId" INTEGER NOT NULL,
ADD COLUMN     "sessionId" INTEGER NOT NULL,
ADD COLUMN     "variantId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Complex" ADD COLUMN     "path" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "path",
ALTER COLUMN "startTime" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Complex_path_key" ON "Complex"("path");

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_variantId_fkey" FOREIGN KEY ("variantId") REFERENCES "Variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
