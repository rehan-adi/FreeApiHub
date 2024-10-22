-- CreateTable
CREATE TABLE "Quote" (
    "id" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "likes" INTEGER NOT NULL,
    "dislikes" INTEGER NOT NULL,
    "category" TEXT,

    CONSTRAINT "Quote_pkey" PRIMARY KEY ("id")
);
