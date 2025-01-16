const express = require("express")
const mongoose = require("mongoose");
const user = require("../models/userSchema")
const router = express.Router()

router.get("/", async(req, res)=>{
    try{
        const userData = await user.find({})
        res.status(200).json(userData)

    }catch(error){
        res.status(500).json({error:error.message})

    }

})

router.post("/", async(req, res)=>{
    try{
        const {name} = req.body;
        const saveUser = await user.create({
            name: name
        })
        res.status(201).json(saveUser)

    }catch(error){
        res.status(500).json({error:error.message})

    }

})

router.get("/:id", async(req, res)=>{
    try{
        const {id} = req.params
        const singleUser = await user.findById({_id:id})
        res.status(200).json(singleUser)

    }catch(error){
        res.status(500).json({error:error.message})

    }

})

router.patch("/:id", async(req, res)=>{
    try{
        const {id} = req.params
        const {name} = req.body;
        const updateUser = await user.findByIdAndUpdate(id, req.body, {
            new: true
        })
        res.status(201).json(updateUser)

    }catch(error){
        res.status(500).json({error:error.message})

    }

})

router.delete("/:id", async(req, res)=>{
    try{
        const {id} = req.params
        const deleteUser = await user.findByIdAndDelete({_id:id})
        res.status(200).json(deleteUser)

    }catch(error){
        res.status(500).json({error:error.message})

    }

})


module.exports = router
