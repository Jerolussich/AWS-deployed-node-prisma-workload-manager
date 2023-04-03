import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()


export const getHoursWorked = async (req: Request, res: Response) => {

    const data  =  await prisma.hoursWorked.findMany()
    res.json(data);
};

export const getHourWorkedID = async (req: Request, res: Response) => {

    const data  =  await prisma.hoursWorked.findUnique({
        where: {
            id: Number(req.params.id)
        }})

    res.json(data);
};
