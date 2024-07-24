const express = require("express");
const app = express();
const mongoose = require ("mongoose");


const forbeSchema = new mongoose.Schema({
ranking: {
    type : Number,
    required :true,
    unique : true
},
name: {
    type : String,
    required: true,
    trim: true
},

dob: {
    type : Date,
    required: true,
    trim: true
},
country: {
    type : String,
    required: true,
    trim: true
},
net_worth:  {
    type : String,
    required: true,
    trim: true
},

source:  {
    type : String,
    required: true,
    trim: true
}

})

////++++++++++++++++++++++++++++++creating collection++++++++++++++++++++++///

const RichRanking = new mongoose.model("RichRanking",forbeSchema)

module.exports =RichRanking