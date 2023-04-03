const { getTeacher, getTeacherID } = require('../controllers/teacher');

const express = require('express')
const Router = express.Router()


Router.get('/', getTeacher);

Router.get('/:id', getTeacherID);

export {Router}
