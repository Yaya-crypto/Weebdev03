const Sequelize = require('sequelize')
const db = require('../db');

const Task = db.define("instructor", {

    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
  
    priorityLevel: {
      type: Sequelize.NUMBER,
      allowNull: false
    },
  
    completionStatus: {
      type: Sequelize.BOOLEAN,
    },
  
  
  });

  module.exports = Task;