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
