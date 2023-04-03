const { getStudents, getStudentID } = require('../controllers/student');

const express = require('express')
const Router = express.Router()


Router.get('/', getStudents);

Router.get('/:id', getStudentID);

export {Router}
