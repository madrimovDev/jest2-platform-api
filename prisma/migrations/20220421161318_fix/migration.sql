/*
  Warnings:

  - You are about to drop the column `complexId` on the `Session` table. All the data in the column will be lost.
  - Added the required column `complexPath` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_complexId_fkey";

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "complexId",
ADD COLUMN     "complexPath" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_complexPath_fkey" FOREIGN KEY ("complexPath") REFERENCES "Complex"("path") ON DELETE RESTRICT ON UPDATE CASCADE;
