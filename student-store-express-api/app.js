const express = require("express");
const morgan = require("morgan");
const Store = require("./routes/store")
const cors = require("cors")

const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(cors())

app.get('/store', Store);
app.get('/store/:productId', Store);
app.use("/", Store)





module.exports = app;