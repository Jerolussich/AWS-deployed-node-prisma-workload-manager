import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getStudents = async (req: Request, res: Response) => {
  const data = await prisma.student.findMany()
  res.json(data);
};

export const getStudentID = async (req: Request, res: Response) => {
    
    const data = await prisma.student.findUnique({
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(data)
}
