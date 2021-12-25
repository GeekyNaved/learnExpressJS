const express = require("express")
const router = express.Router()

const data = require('../demo.json')

router.get("/", (req, res) => {
    // res.send('homepage')
    res.json(data)
})

router.get("/new", (req, res) => {
    res.send('new users')
})

router.post("/", (req, res) => {
    res.send("create user")
})

router.get("/:id", (req, res) => {
    res.send(`Get user with Id ${req.params.id}`)
})
module.exports = router