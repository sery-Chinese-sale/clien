const express = require("express");
const mongoose = require("mongoose");
const productRout = require("./router/product");
const app = express();
mongoose.connect("mongodb://localhost:27017/sale")
    .then(succ => console.log("mongo db connected "))
    .catch(err =>
        console.log(err)
    )

app.use(express.json())
app.use("/product", productRout)
app.listen(4500, () => { console.log("waiting") })