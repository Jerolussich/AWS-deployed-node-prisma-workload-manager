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

export const deleteHoursworked = async (req: Request, res: Response) => {
    
    const data = await prisma.hoursWorked.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.json("Hoursworked Deleted")
}

export const updateHoursworked = async (req: Request, res: Response) => {

    const hoursworked = await prisma.hoursWorked.findUnique({
        where: { id: Number(req.params.id) },
    });

    const attributeList = Object.keys(hoursworked || {});

    const data: any = {};

    Object.keys(req.body).forEach((element: string) => {
        if (attributeList.includes(element)) {
            data[element] = req.body[element];
        }
    });

    const updatedHoursworked = await prisma.hoursWorked.update({
        where: { id: Number(req.params.id) },
        data,
    });

    res.json(updatedHoursworked);
};

export const createHoursworked = async (req: Request, res: Response) => {
    
    const hoursWorked = await prisma.hoursWorked.findFirst();
    const attributeList = Object.keys(hoursWorked || {});

    const data: any = {};

    Object.keys(req.body).forEach((element: string) => {
        if (attributeList.includes(element)) {
            data[element] = req.body[element];
        }
    });

    const createHoursworked = await prisma.hoursWorked.create({
        data,
    });

    res.json(createHoursworked);
};
