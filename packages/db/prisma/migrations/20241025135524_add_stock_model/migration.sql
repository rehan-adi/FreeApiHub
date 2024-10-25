-- CreateTable
CREATE TABLE "Stock" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "listingDate" TIMESTAMP(3) NOT NULL,
    "isin" TEXT NOT NULL,
    "marketCap" DOUBLE PRECISION NOT NULL,
    "currentPrice" DOUBLE PRECISION NOT NULL,
    "highLow" TEXT NOT NULL,
    "stockPE" DOUBLE PRECISION NOT NULL,
    "bookValue" DOUBLE PRECISION NOT NULL,
    "dividendYield" DOUBLE PRECISION NOT NULL,
    "roce" DOUBLE PRECISION NOT NULL,
    "roe" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stock_isin_key" ON "Stock"("isin");
