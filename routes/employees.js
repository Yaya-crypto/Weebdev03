const express = require('express');
const router = express.Router();

const {Task, Employee} = require('../database/models');

const ash = require('express-async-handler');

router.get('/', ash(async(req, res) => {
    let employee = await Employee.findAll();
    res.status(200).json(employee);
  }));

module.exports = router;