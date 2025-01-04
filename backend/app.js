const express = require('express');
const app = express()
const port = 5000;
const mongoose = require("mongoose");
const { mongoUrl } = require("../../part/backend/keys");
const cors = require("cors");

app.use(cors())
require('../../part/backend/models/model')
require('../../part/backend/models/post')
app.use(express.json())
app.use(require("../../part/backend/routes/auth"))
app.use(require("../../part/backend/routes/createPost"))
app.use(require("../../part/backend/routes/user"))
mongoose.connect(mongoUrl);

mongoose.connection.on("connected", () => {
    console.log("successfully connected to mongo")
})

mongoose.connection.on("error", () => {
    console.log("not connected to mongodb")
})


app.listen(port, () => {
    console.log("server is running on port" + " " + port)

})