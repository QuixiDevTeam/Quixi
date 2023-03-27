const express = require('express')
const checkAuth = require('../middleware/authentication')
const route = express.Router();

const groupController = require("../controllers/groupController");

route.post('/', checkAuth, groupController.createGroup)
route.get('/', checkAuth, groupController.find)
route.get('/:user',  groupController.findGroupByUserID)
route.patch('/:id', checkAuth, groupController.updateGroupById)
route.delete('/:id', checkAuth, groupController.deleteByGroupId)

module.exports = route;