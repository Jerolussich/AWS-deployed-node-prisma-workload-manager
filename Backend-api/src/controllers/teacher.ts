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

export const deleteTeacher = async (req: Request, res: Response) => {

    const data = await prisma.teacher.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.json("Teacher Deleted")
};

export const updateTeacher = async (req: Request, res: Response) => {

    const teacher = await prisma.teacher.findUnique({
        where: { id: Number(req.params.id) },
    });

    const attributeList = Object.keys(teacher || {});

    const data: any = {};

    Object.keys(req.body).forEach((element: string) => {
        if (attributeList.includes(element)) {
            data[element] = req.body[element];
        }
    });

    const updatedTeacher = await prisma.teacher.update({
        where: { id: Number(req.params.id) },
        data,
    });

    res.json(updatedTeacher);
};

export const createTeacher = async (req: Request, res: Response) => {
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthDate: new Date(req.body.birthDate),
        country: req.body.country,
        city: req.body.city,
        address: req.body.address,
        joinedCompany: new Date(req.body.joinedCompany),
        leftCompany: req.body.leftCompany ? new Date(req.body.leftCompany) : null,
    };

    const createdTeacher = await prisma.teacher.create({
        data,
    });

    res.json(createdTeacher);
};
