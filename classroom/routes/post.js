const express = require("express");
const router = express.Router();

// index - POST 
router.get("/", (req,res)=>{
    res.send("Get for Post");
});

// show - users
router.get("/:id", (req,res)=>{
    res.send("Get for post id");
});

// POST - users
router.post("/", (req,res)=>{
    res.send("POST for posts");
});

// delete - users
router.delete("/:id", (req,res)=>{
    res.send("Delete for post id");
});

module.exports = router;