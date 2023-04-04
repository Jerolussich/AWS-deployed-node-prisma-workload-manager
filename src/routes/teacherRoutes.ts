const { getTeacher, getTeacherID, deleteTeacher, updateTeacher, createTeacher } = require('../controllers/teacher');

const express = require('express')
const Router = express.Router()


Router.get('/', getTeacher);

Router.get('/:id', getTeacherID);

Router.delete('/:id', deleteTeacher)

Router.put('/:id', updateTeacher)

Router.post('/', createTeacher)


export {Router}
