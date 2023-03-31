-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "joinedCompany" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "leftCompany" TIMESTAMP(3),

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "tutorId" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HoursWorked" (
    "id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "hoursJanuary" TEXT,
    "hoursFebruary" TEXT,
    "hoursMarch" TEXT,
    "hoursApril" TEXT,
    "hoursMay" TEXT,
    "hoursJune" TEXT,
    "hoursJuly" TEXT,
    "hoursAugust" TEXT,
    "hoursSeptember" TEXT,
    "hoursOctober" TEXT,
    "hoursNovember" TEXT,
    "hoursDecember" TEXT,

    CONSTRAINT "HoursWorked_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");
