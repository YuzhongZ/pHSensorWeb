const express = require('express');
let PhDataRouter = express.Router();

const PhDataController = require('../../controllers/web/PhDataController');

// add new ph data record
PhDataRouter.post("/webapi/ph", PhDataController.uploadNewPhData)

// delete
PhDataRouter.delete("/webapi/ph/:id", PhDataController.deletePhData)

// update
PhDataRouter.patch("/webapi/ph/:id", PhDataController.updatePhData)

// get all data
PhDataRouter.get("/webapi/ph/all", PhDataController.getAllData)

// get user's data
PhDataRouter.get("/webapi/ph/:username", PhDataController.getUserAllData)

module.exports = PhDataRouter

