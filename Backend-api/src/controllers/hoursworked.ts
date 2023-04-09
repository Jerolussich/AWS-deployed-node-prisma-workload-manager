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

    const data: any = {
        teacherId: req.body.teacherId,
        studentId: req.body.studentId,
        hoursJanuary: req.body.hoursJanuary || null,
        hoursFebruary: req.body.hoursFebruary || null,
        hoursMarch: req.body.hoursMarch || null,
        hoursApril: req.body.hoursApril || null,
        hoursMay: req.body.hoursMay || null,
        hoursJune: req.body.hoursJune || null,
        hoursJuly: req.body.hoursJuly || null,
        hoursAugust: req.body.hoursAugust || null,
        hoursSeptember: req.body.hoursSeptember || null,
        hoursOctober: req.body.hoursOctober || null,
        hoursNovember: req.body.hoursNovember || null,
        hoursDecember: req.body.hoursDecember || null,
    };

    const createdHoursworked = await prisma.hoursWorked.create({
        data,
    });

    res.json(createdHoursworked);
};
