const express = require("express");
const mongoose = require("mongoose");
const app = express();


mongoose.connect("mongodb+srv://anshpethe110:%40mangoanshpethe159@cluster0.702twr0.mongodb.net/paytm-apps?retryWrites=true&w=majority")

.then(()=> console.log("Connected to MongoDB"))
.catch((err)=> console.log("Failed to connect: "+err));


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    firstName:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    
    password:{
        type: String,
        required: true,
        minLength: 6
    },
})

const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    balance: {
        type: Number,
        required: true
    }
})

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model("User",userSchema);
module.exports = {
    User,
    Account,
} 

