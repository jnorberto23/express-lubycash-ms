-- CreateEnum
CREATE TYPE "Status" AS ENUM ('accepted', 'denied');

-- CreateEnum
CREATE TYPE "Active" AS ENUM ('true', 'false');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cpf_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "current_balance" DOUBLE PRECISION NOT NULL,
    "average_salary" DOUBLE PRECISION NOT NULL,
    "status" "Status" NOT NULL DEFAULT E'denied',
    "token" TEXT,
    "token_created_at" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "active" "Active" NOT NULL DEFAULT E'true',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_number_key" ON "User"("cpf_number");
