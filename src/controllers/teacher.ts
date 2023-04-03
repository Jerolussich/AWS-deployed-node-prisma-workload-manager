import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTeacher = async (req: Request, res: Response) => {

    const data  =  await prisma.teacher.findMany()
    res.json(data);
};

export const getTeacherID = async (req: Request, res: Response) => {
    
    const data  = await prisma.teacher.findUnique({
        where: {
            id: Number(req.params.id)
        }
    })
    res.json(data);
};
