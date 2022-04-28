-- AddForeignKey
ALTER TABLE "Complex" DROP CONSTRAINT "Complex_userId_fkey";

-- AddForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_complexId_fkey";

-- AddForeignKey
ALTER TABLE "Variant" DROP CONSTRAINT "Variant_questionId_fkey";

-- AddForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_complexPath_fkey";

-- AddForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_questionId_fkey";

-- AddForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_variantId_fkey";

-- AddForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_sessionId_fkey";