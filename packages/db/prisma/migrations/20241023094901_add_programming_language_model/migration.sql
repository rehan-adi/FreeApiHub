-- CreateTable
CREATE TABLE "ProgrammingLanguage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "foundationYear" INTEGER NOT NULL,
    "popularity" INTEGER NOT NULL,
    "marketDemand" INTEGER NOT NULL,
    "industryUse" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "learningDifficulty" INTEGER NOT NULL,

    CONSTRAINT "ProgrammingLanguage_pkey" PRIMARY KEY ("id")
);
