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

export const deleteStudent =async (req: Request, res: Response) => {
    
    const data = await prisma.student.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.json("Students Deleted")
}

export const updateStudent = async (req: Request, res: Response) => {

    const student = await prisma.student.findUnique({
        where: { id: Number(req.params.id) },
    });

    const attributeList = Object.keys(student || {});

    const data: any = {};

    Object.keys(req.body).forEach((element: string) => {
        if (attributeList.includes(element)) {
            data[element] = req.body[element];
        }
    });

    const updatedStudent = await prisma.student.update({
        where: { id: Number(req.params.id) },
        data,
    });

    res.json(updatedStudent);
};
