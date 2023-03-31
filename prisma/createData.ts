import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    const student = await prisma.student.create({ data: {firstName: "Jaime", lastName: "lussich",birthDate: "2006-01-01T00:00:00.000Z", country: "Peru", city: "Montevideo", address: "Zonaamerica 123", tutorId: "" }})
    const teacher = await prisma.teacher.create({ data: {firstName: "John", lastName: "Doe", email: "johndoe@example.com", birthDate:"1990-01-01T00:00:00.000Z", country: "USA", city: "New York", address: "123 Main St", joinedCompany:"2021-01-01T00:00:00.000Z"} })
    const hoursWorked = await prisma.hoursWorked.create({ data: {teacherId: 1, studentId: 1}})
}

main()
.catch(e => {
    console.error(e.message)
}).finally(async () => {
    await prisma.$disconnect
})
