-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "genre" TEXT NOT NULL,
    "pages" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
