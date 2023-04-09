import express  from 'express';
import { json } from 'body-parser';
import  { Router as hoursWorkedRoutesRouter } from './src/routes/hoursWorkedRoutes';
import  { Router as studentRoutes } from './src/routes/studentRoutes';
import  { Router as teacherRoutes } from './src/routes/teacherRoutes';

const app = express()

app.use(json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', async (req, res) => {
    res.send('Welcome')
})

app.use('/hoursworked', hoursWorkedRoutesRouter);

app.use('/student', studentRoutes);

app.use('/teacher', teacherRoutes);

app.listen(process.env.PORT, () => {
  console.log('Server is listening on port 3000');
});
