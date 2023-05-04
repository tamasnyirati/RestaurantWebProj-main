const express = require("express");
const mongoose = require("mongoose");
const app = express()
mongoose.connect("mongodb+srv://tamasnyirati:<password>@tamasnyiratidbs.8dhrokh.mongodb.net/test", {
    useNewUrlParser: true, useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully connected");
    }
})

app.listen(3000, () => {
    console.log("on port 3000");
})