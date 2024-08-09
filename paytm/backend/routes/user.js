const express = require('express');
const zod = require('zod')
const router = express.Router();
const JWT_SECRET = require('../config')
const jwt = require('jsonwebtoken')
const {User, Account} = require('../db')
const {authMiddleware} = require('../middelware');

const signupBody = zod.object({
    username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})


router.post('/signup',async (req, res)=>{
    const body = req.body;
    const {success} = signupBody.safeParse(req.body);
    if(!success){
        return res.json({
            message:"Username already taken / Incorrect inputs"
        })
    }
    const existingUser = await User.findOne({
        username: req.body.username
    })
    if (existingUser){
        return res.json({
            message: "Username already taken"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    const userId = user._id;
    await Account.create({
        userId,
        balance: 1+Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        massage: "User Creation Success",
        token:token
    })
})

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})


router.post('/signin',async (req, res)=>{
   const {success} = signinBody.safeParse(req.body)
   if(!success){
    return res.status(411).json({
        message: "Email already taken / Invalid Inputs"
    })
   }
   const user = await User.findOne({
    username:req.body.username,
    password: req.body.password
   });

   if(user){
    const token =  jwt.sign({
        userId:user._id
    },JWT_SECRET)
    res.json({
        massage: "User signin Success",
    })
    return;
   }

   res.status(401).json({
    massage:"Error while logging in"
   })
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/",authMiddleware, async(req, res)=>{
    const {success} = updateBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            massage: "error while updating information"
        })
    }
    await User.updateOne(req.body,{
        id: req.userId
    })
    res.json({
        massage: "updated succesfully"
    })
})
router.get('/bulk',async(req, res)=>{
    const filter = req.query.filter || "";
    const users = await User.find({
        $or:[{
            firstName:{
                "$regex":filter
            }
        },{
            lastName:{
                "$regex":filter
            }
        }]
    })
    res.json({
        user:users.map(user=>({
            username: user.username,
            firsName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})
module.exports = router;