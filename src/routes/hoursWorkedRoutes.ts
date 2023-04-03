const { getHoursWorked, getHourWorkedID } = require('../controllers/hoursworked');

const express = require('express')
const Router = express.Router()


Router.get('/', getHoursWorked);

Router.get('/:id', getHourWorkedID);

export {Router}
