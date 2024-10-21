/*
  Warnings:

  - The values [MALE,FEMALE,OTHER,PREFER_NOT_TO_SAY] on the enum `Gender` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `dob` on the `RandomUser` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Gender_new" AS ENUM ('male', 'female', 'other', 'prefer_not_to_say');
ALTER TABLE "RandomUser" ALTER COLUMN "gender" TYPE "Gender_new" USING ("gender"::text::"Gender_new");
ALTER TYPE "Gender" RENAME TO "Gender_old";
ALTER TYPE "Gender_new" RENAME TO "Gender";
DROP TYPE "Gender_old";
COMMIT;

-- AlterTable
ALTER TABLE "RandomUser" DROP COLUMN "dob",
ALTER COLUMN "streetName" DROP NOT NULL,
ALTER COLUMN "nationality" DROP NOT NULL;
