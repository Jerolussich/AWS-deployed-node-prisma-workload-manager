import { Request, Response } from 'express';

import  { Router as hoursWorkedRoutesRouter } from './src/routes/hoursWorkedRoutes';
import  { Router as studentRoutes } from './src/routes/studentRoutes';
import  { Router as teacherRoutes } from './src/routes/teacherRoutes';

const express = require('express')
const app = express()

app.get('/', async (req: Request, res: Response) => {
    res.send('Welcome')
})

app.use('/hoursworked', hoursWorkedRoutesRouter);

app.use('/student', studentRoutes);

app.use('/teacher', teacherRoutes);













app.listen(3000)
