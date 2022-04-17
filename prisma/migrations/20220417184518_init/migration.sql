/*
  Warnings:

  - Added the required column `endTime` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `setId` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "setId" INTEGER NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "user" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "question" INTEGER NOT NULL,
    "variant" INTEGER NOT NULL,
    "session" INTEGER NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);
