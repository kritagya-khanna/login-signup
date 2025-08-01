import { Request, Response } from "express";
const express = require('express');
const router = express.Router();



router.get('/login', (req:Request, res:Response) => {
    res.json({message: "login"});
});

module.exports = router;