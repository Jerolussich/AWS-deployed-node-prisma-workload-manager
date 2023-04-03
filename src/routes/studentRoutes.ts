const { getStudents, getStudentID, deleteStudent, updateStudent } = require('../controllers/student');

const express = require('express')
const Router = express.Router()


Router.get('/', getStudents);

Router.get('/:id', getStudentID);

Router.delete('/:id', deleteStudent);

Router.put('/:id', updateStudent);

export {Router}
