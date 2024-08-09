const express = require('express');
const { authMiddleware } = require('../middelware');
const { Account } = require('../db')
const { defualt:momgoose, default: mongoose } = require('mongoose');

const router = express.Router();

router.get('/balance', authMiddleware, async(req, res)=>{
    const account = await Account.findOne({
        userId: req.userId
    })
    res.json({
        balance: account.balance
    })
});

router.post('/transfer',authMiddleware, async(req, res)=>{
    const session = await mongoose.startSession();
    session.startTransaction();

    const{amount, to} = req.body;

    const account = await Account.findOne({userId: req.userId}).session(session);

    if(!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status().json({
            massage: "Insufficient Balance"
        })
    }

    const toAccount = await Account.findOne({userId:to}).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            massage: "Invalid Account"
        })
    }

    await Account.updateOne({userID: req.userID},{$inc:{balance: -amount}}).session(session);
    await Account.updateOne({userID: to},{$inc:{balance: amount}}).session(session);


    await session.commitTransaction();
    res.status(200).json({
        massage: "Transfer Success"
    });
});
module.exports = router;