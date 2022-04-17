-- DropIndex
DROP INDEX "Question_text_key";

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "endTime" DROP NOT NULL,
ALTER COLUMN "startTime" DROP NOT NULL;
