const { getHoursWorked, getHourWorkedID, deleteHoursworked, updateHoursworked } = require('../controllers/hoursworked');

const express = require('express')
const Router = express.Router()


Router.get('/', getHoursWorked);

Router.get('/:id', getHourWorkedID);

Router.delete('/:id', deleteHoursworked);

Router.put('/:id', updateHoursworked);


export {Router}
