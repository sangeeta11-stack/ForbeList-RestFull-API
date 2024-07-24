const express = require ("express");
const app = express();
const port = process.env.PORT || 4444;
require ("../src/dataBase/connection")
const RichRanking = require ("../src/model/forbes");
const router = require("./routers/router");
app.use(express.json())

app.use(router)

app.listen(port, ()=>{
    console.log(`Connection connect in Port No. ${port}`);
})