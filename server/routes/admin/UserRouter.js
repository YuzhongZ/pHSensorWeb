const express = require('express');
let UserRouter = express.Router();

const UserController = require('../../controllers/admin/UserController');

UserRouter.post("/adminapi/user/login", UserController.login)
UserRouter.post("/adminapi/user/register", UserController.register)

module.exports = UserRouter

