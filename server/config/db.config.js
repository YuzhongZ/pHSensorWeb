const mongoose = require("mongoose")

const {DBHOST, DBPORT, DBNAME} = require('./config')

mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)
